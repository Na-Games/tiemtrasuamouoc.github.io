param(
  [string[]]$Checks = @('ingredient-pets-ui', 'menu-contracts', 'menu-ui', 'tutorial-ui', 'counter-ui', 'guide-ui', 'doc-fixes-ui'),
  [string]$WindowSizeOverride = ''
)
$ErrorActionPreference = 'Stop'
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
if (!(Test-Path -LiteralPath $chrome)) { throw 'Chrome not found; update the chrome path in this script.' }
$tempRoot = [IO.Path]::GetFullPath($env:TEMP)
$runDir = Join-Path $tempRoot ('tiemtra-menu-tests-' + [guid]::NewGuid())
New-Item -ItemType Directory -Path $runDir | Out-Null
$utf = [Text.UTF8Encoding]::new($false)
$baseUri = ([Uri]($projectRoot + '\')).AbsoluteUri
$page = [IO.File]::ReadAllText((Join-Path $projectRoot 'index.html'))
$page = $page.Replace('<head>', '<head><base href="' + $baseUri + '">')
try {
  foreach ($test in $Checks) {
    $script = '<script>setTimeout(()=>{const s=document.createElement("script");s.src="tests/' + $test + '.js";document.body.appendChild(s);},300);</script>'
    $harness = Join-Path $runDir ($test + '.html')
    [IO.File]::WriteAllText($harness, $page.Replace('</body>', $script + '</body>'), $utf)
    $url = ([Uri]$harness).AbsoluteUri
    $profile = Join-Path $runDir ($test + '-profile')
    $stdout = Join-Path $runDir ($test + '-dom.txt')
    $stderr = Join-Path $runDir ($test + '-log.txt')
    $windowSize = if ($test -eq 'tutorial-ui') { '500,740' } else { '700,900' }
    if ($WindowSizeOverride) { $windowSize = $WindowSizeOverride }
    $arguments = "--headless=new --disable-gpu --no-sandbox --allow-file-access-from-files --enable-logging=stderr --user-data-dir=`"$profile`" --window-size=$windowSize --virtual-time-budget=12000 --dump-dom `"$url`""
    $process = Start-Process $chrome -ArgumentList $arguments -WindowStyle Hidden -Wait -PassThru -RedirectStandardOutput $stdout -RedirectStandardError $stderr
    if ($process.ExitCode -ne 0) { throw "Chrome failed for $test" }
    $html = [IO.File]::ReadAllText($stdout)
    $log = [IO.File]::ReadAllText($stderr)
    if ($log -match 'Uncaught|SyntaxError|ReferenceError|ERR_FILE_NOT_FOUND|\[loop\] (update|render|frame)') { throw "Runtime or asset error in $test. $log" }
    if ($test -eq 'ingredient-pets-ui') {
      $match = [regex]::Match($html, 'data-ingredient-pets-passed="(\d+)"')
      if (!$match.Success -or [int]$match.Groups[1].Value -lt 30) { $failure = [regex]::Match($html, 'data-ingredient-pets-error="([^"]+)"'); throw "Ingredient/pet checks failed: $($failure.Groups[1].Value)" }
      Write-Output "Ingredient/pet checks: $($match.Groups[1].Value) passed"
    } elseif ($test -eq 'menu-contracts') {
      $match = [regex]::Match($html, 'data-contract-results="([^"]+)"')
      if (!$match.Success) { throw 'Contract tests did not finish.' }
      $results = [Net.WebUtility]::HtmlDecode($match.Groups[1].Value) | ConvertFrom-Json
      $failed = @($results | Where-Object { !$_.ok })
      if ($failed.Count) { throw ($failed | ConvertTo-Json -Compress) }
      Write-Output "Contracts: $($results.Count)/$($results.Count) passed"
    } elseif ($test -eq 'doc-fixes-ui') {
      if ($html -notmatch 'data-doc-fixes-passed="20"') { $failure = [regex]::Match($html, 'data-doc-fixes-error="([^"]+)"'); throw "Document fixes failed: $($failure.Groups[1].Value)" }
      Write-Output 'Document fixes: 20/20 checks passed'
    } elseif ($test -eq 'guide-ui') {
      if ($html -notmatch 'data-guide-passed="11"') { $failure = [regex]::Match($html, 'data-guide-error="([^"]+)"'); throw "Guide checks failed: $($failure.Groups[1].Value)" }
      Write-Output 'Guide: 11/11 checks passed'
    } elseif ($test -eq 'counter-ui') {
      if ($html -notmatch 'data-counter-passed="11"') { $failure = [regex]::Match($html, 'data-counter-error="([^"]+)"'); throw "Counter checks failed: $($failure.Groups[1].Value)" }
      Write-Output 'Counter: 11/11 checks passed'
    } elseif ($test -eq 'tutorial-ui') {
      if ($html -notmatch 'data-tutorial-passed="10"') { throw "Tutorial checks failed: $html" }
      Write-Output 'Tutorial: 10/10 checks passed'
    } else {
      $match = [regex]::Match($html, 'data-ui-passed="([^"]+)"')
      if (!$match.Success) { throw 'Menu navigation did not finish.' }
      $tabs = [Net.WebUtility]::HtmlDecode($match.Groups[1].Value) | ConvertFrom-Json
      if ($tabs.Count -ne 16) { throw 'Not all 16 menus were rendered.' }
      Write-Output 'Navigation: 16/16 menus passed'
    }
  }
} finally {
  $resolvedRunDir = [IO.Path]::GetFullPath($runDir)
  if (!$resolvedRunDir.StartsWith($tempRoot + '\', [StringComparison]::OrdinalIgnoreCase) -or [IO.Path]::GetFileName($resolvedRunDir) -notlike 'tiemtra-menu-tests-*') { throw 'Unsafe cleanup target' }
  Remove-Item -LiteralPath $resolvedRunDir -Recurse -Force
}
