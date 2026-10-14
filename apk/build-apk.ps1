# Dong goi Tiem Tra Mo Uoc thanh APK Android bang Capacitor (Windows).
# Chay qua build-apk.bat o thu muc goc game. Lan dau tu cai Node.js 22+, JDK 21, Android SDK.
# File nay chi dung ky tu ASCII de Windows PowerShell 5.1 doc dung.
[CmdletBinding()]
param(
  [string]$GameDir = '',         # mac dinh: thu muc cha cua apk\
  [string]$OutDir = '',          # mac dinh: <thu muc cha cua game>\tiemtra-apk
  [switch]$Release,              # build APK release da ky (tu tao khoa neu chua co)
  [switch]$Install,              # cai APK len dien thoai dang cam USB
  [switch]$Clean,                # xoa project Android cu va tao lai (giu khoa ky)
  [int]$VersionCode = 0,         # tang moi lan phat hanh ban moi, vd 2, 3...
  [string]$VersionName = '',     # vd 1.1
  [string]$ApkDir = '',          # noi nhan file APK; mac dinh OutDir
  [switch]$Portable,             # khong ghi ANDROID_HOME vao cau hinh nguoi dung
  [switch]$NoReveal              # khong mo Explorer sau khi build
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
# PowerShell 5.1 khong gan $PSScriptRoot trong khoi param(), nen tinh o day
$ScriptDir = if ($PSScriptRoot) { $PSScriptRoot } else { Split-Path -Parent $MyInvocation.MyCommand.Definition }

$AppId = 'com.tiemtramouoc.app'
$SdkPlatform = 'android-36'
$SdkBuildTools = '36.0.0'
$CmdlineToolsFallback = '16111833'
$Deps = [ordered]@{
  '@capacitor/android' = '8.5.3'; '@capacitor/app' = '8.1.2'; '@capacitor/core' = '8.5.3'; '@capacitor/haptics' = '8.0.2'
}
$DevDeps = [ordered]@{ '@capacitor/cli' = '8.5.3'; '@capacitor/assets' = '3.0.5' }

$Utf8 = New-Object System.Text.UTF8Encoding $false
function Read-Utf8([string]$Path) { [IO.File]::ReadAllText($Path, $Utf8) }
function Write-Utf8([string]$Path, [string]$Text) { [IO.File]::WriteAllText($Path, $Text, $Utf8) }
function Step([string]$Msg) { Write-Host ''; Write-Host "==> $Msg" -ForegroundColor Cyan }
function Info([string]$Msg) { Write-Host "    $Msg" }
function Warn([string]$Msg) { Write-Host "    $Msg" -ForegroundColor Yellow }

# Chay lenh ngoai, nem loi neu ma thoat khac 0. Out-Host de output khong lan vao gia tri tra ve cua ham.
function Exec([string]$Exe, [string[]]$ArgList) {
  & $Exe @ArgList | Out-Host
  if ($LASTEXITCODE -ne 0) { throw "Lenh loi (ma $LASTEXITCODE): $Exe $($ArgList -join ' ')" }
}

function Update-Path {
  $env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User')
}

function Install-WithWinget([string]$Id) {
  if (-not (Get-Command winget.exe -ErrorAction SilentlyContinue)) {
    throw "Khong tim thay winget de cai $Id. Hay cai thu cong roi chay lai."
  }
  Info "Dang cai $Id bang winget (co the hien hop thoai xin quyen Admin)..."
  & winget.exe install -e --id $Id --accept-package-agreements --accept-source-agreements | Out-Host
  # winget tra ma khac 0 ca khi goi da co san, nen kiem tra lai bang cach tim chuong trinh
  Update-Path
}

# Gradle/Android SDK tren Windows hay loi voi duong dan co dau tieng Viet
function Test-AsciiPath([string]$Path) { $Path -match '^[\x20-\x7E]+$' }
function Remove-BuildPath([string]$Path, [string]$Root) {
  $target = [IO.Path]::GetFullPath($Path).TrimEnd('\')
  $allowed = [IO.Path]::GetFullPath($Root).TrimEnd('\')
  if (-not $target.StartsWith($allowed + '\', [StringComparison]::OrdinalIgnoreCase)) { throw "Unsafe cleanup target: $target" }
  if (Test-Path -LiteralPath $target) { Remove-Item -LiteralPath $target -Recurse -Force }
}

function ConvertTo-JsonString([string]$S) {
  $sb = New-Object System.Text.StringBuilder
  foreach ($ch in $S.ToCharArray()) {
    $c = [int]$ch
    if ($ch -eq '"' -or $ch -eq '\') { [void]$sb.Append('\').Append($ch) }
    elseif ($c -lt 32 -or $c -gt 126) { [void]$sb.Append(('\u{0:x4}' -f $c)) }
    else { [void]$sb.Append($ch) }
  }
  '"' + $sb.ToString() + '"'
}

# ---------- Node.js ----------
function Get-NodeMajor {
  if (-not (Get-Command node.exe -ErrorAction SilentlyContinue)) { return 0 }
  $v = & node.exe -v
  if ($v -match '^v(\d+)') { return [int]$Matches[1] }
  0
}

function Initialize-Node {
  Step 'Kiem tra Node.js (can ban 22 tro len)'
  if ((Get-NodeMajor) -lt 22) {
    Install-WithWinget 'OpenJS.NodeJS.LTS'
    if (Test-Path "$env:ProgramFiles\nodejs\node.exe") { $env:Path = "$env:ProgramFiles\nodejs;$env:Path" }
  }
  $m = Get-NodeMajor
  if ($m -lt 22) { throw "Can Node.js 22 tro len (dang co: $m). Tai tai https://nodejs.org roi chay lai." }
  Info "Node.js $(& node.exe -v)"
}

# ---------- JDK ----------
function Get-JavaMajor([string]$Dir) {
  $exe = Join-Path $Dir 'bin\java.exe'
  if (-not (Test-Path $exe)) { return 0 }
  $old = $ErrorActionPreference; $ErrorActionPreference = 'Continue'
  $out = (& $exe -version 2>&1 | ForEach-Object { "$_" }) -join "`n"
  $ErrorActionPreference = $old
  if ($out -match 'version "(\d+)(\.(\d+))?') {
    $m = [int]$Matches[1]
    if ($m -eq 1 -and $Matches[3]) { $m = [int]$Matches[3] }
    return $m
  }
  0
}

function Find-Jdk {
  $cands = @()
  if ($env:JAVA_HOME) { $cands += $env:JAVA_HOME }
  $cands += "$env:ProgramFiles\Android\Android Studio\jbr"
  foreach ($pat in @("$env:ProgramFiles\Microsoft\jdk-*", "$env:ProgramFiles\Eclipse Adoptium\jdk-*",
                     "$env:ProgramFiles\Java\jdk-*", "$env:ProgramFiles\Zulu\zulu-*")) {
    $cands += @(Get-ChildItem $pat -Directory -ErrorAction SilentlyContinue | Sort-Object Name -Descending | ForEach-Object { $_.FullName })
  }
  # Capacitor 8 can JDK 21; Gradle 8.14 chay duoc toi JDK 24
  foreach ($d in $cands) { if ($d -and (Get-JavaMajor $d) -eq 21) { return $d } }
  foreach ($d in $cands) { if ($d) { $m = Get-JavaMajor $d; if ($m -ge 21 -and $m -le 24) { return $d } } }
  $null
}

function Initialize-Jdk {
  Step 'Kiem tra JDK 21'
  $jdk = Find-Jdk
  if (-not $jdk) {
    Install-WithWinget 'Microsoft.OpenJDK.21'
    $jdk = Find-Jdk
  }
  if (-not $jdk) { throw 'Khong tim thay JDK 21. Cai tai https://learn.microsoft.com/java/openjdk/download roi chay lai.' }
  $env:JAVA_HOME = $jdk
  $env:Path = "$jdk\bin;$env:Path"
  Info "JAVA_HOME = $jdk (Java $(Get-JavaMajor $jdk))"
}

# ---------- Android SDK ----------
function Initialize-AndroidSdk {
  Step 'Kiem tra Android SDK'
  $sdk = @($env:ANDROID_HOME, $env:ANDROID_SDK_ROOT, "$env:LOCALAPPDATA\Android\Sdk") | Where-Object { $_ } | Select-Object -First 1
  $ready = (Test-Path "$sdk\platforms\$SdkPlatform") -and (Test-Path "$sdk\platform-tools\adb.exe") -and (Test-Path "$sdk\build-tools\$SdkBuildTools")
  if (-not $ready -and -not (Test-AsciiPath $sdk)) {
    Warn "Duong dan SDK co ky tu dac biet ($sdk), dung C:\Android\Sdk"
    $sdk = 'C:\Android\Sdk'
    $ready = (Test-Path "$sdk\platforms\$SdkPlatform") -and (Test-Path "$sdk\platform-tools\adb.exe") -and (Test-Path "$sdk\build-tools\$SdkBuildTools")
  }
  if (-not $ready) {
    New-Item -ItemType Directory -Force $sdk | Out-Null
    $sm = Get-ChildItem "$sdk\cmdline-tools\*\bin\sdkmanager.bat" -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($sm) { $sm = $sm.FullName } else { $sm = Install-CmdlineTools $sdk }
    Info "Dang tai platform-tools, platforms;$SdkPlatform, build-tools;$SdkBuildTools (vai tram MB)..."
    $androidCli = Join-Path (Split-Path -Parent $sm) 'android.exe'
    if (Test-Path -LiteralPath $androidCli) {
      # New Android CLI uses slash-separated package names (sdkmanager.bat can split semicolons).
      Exec $androidCli @("--sdk=$sdk", '--no-metrics', 'sdk', 'install', 'platform-tools', "platforms/$SdkPlatform", "build-tools/$SdkBuildTools")
    } else {
      Info 'Chap nhan giay phep Android SDK...'
      $old = $ErrorActionPreference; $ErrorActionPreference = 'Continue'
      (@('y') * 60) | & $sm "--sdk_root=$sdk" --licenses | Out-Null
      $ErrorActionPreference = $old
      Exec $sm @("--sdk_root=$sdk", 'platform-tools', "platforms;$SdkPlatform", "build-tools;$SdkBuildTools")
    }
  }
  $env:ANDROID_HOME = $sdk
  $env:ANDROID_SDK_ROOT = $sdk
  if (-not $Portable -and [Environment]::GetEnvironmentVariable('ANDROID_HOME', 'User') -ne $sdk) {
    [Environment]::SetEnvironmentVariable('ANDROID_HOME', $sdk, 'User')
  }
  Info "ANDROID_HOME = $sdk"
  $sdk
}

function Install-CmdlineTools([string]$Sdk) {
  $ver = $CmdlineToolsFallback
  try {
    $xml = (Invoke-WebRequest 'https://dl.google.com/android/repository/repository2-3.xml' -UseBasicParsing).Content
    $m = [regex]::Match($xml, '<remotePackage path="cmdline-tools;latest">.*?commandlinetools-win-(\d+)_latest\.zip', 'Singleline')
    if ($m.Success) { $ver = $m.Groups[1].Value }
  } catch { Warn 'Khong doc duoc danh sach phien ban, dung ban mac dinh.' }
  $url = "https://dl.google.com/android/repository/commandlinetools-win-${ver}_latest.zip"
  $tmp = Join-Path $env:TEMP "tiemtra-cmdline-$ver"
  Remove-BuildPath $tmp $env:TEMP
  New-Item -ItemType Directory $tmp | Out-Null
  Info "Dang tai Android command-line tools ($url)..."
  Invoke-WebRequest $url -OutFile "$tmp\tools.zip" -UseBasicParsing
  Expand-Archive "$tmp\tools.zip" -DestinationPath $tmp -Force
  $dest = "$Sdk\cmdline-tools\latest"
  Remove-BuildPath $dest $Sdk
  New-Item -ItemType Directory -Force "$Sdk\cmdline-tools" | Out-Null
  $toolsSource = [IO.Path]::GetFullPath("$tmp\cmdline-tools")
  if (-not $toolsSource.StartsWith([IO.Path]::GetFullPath($tmp) + '\', [StringComparison]::OrdinalIgnoreCase)) { throw 'Unsafe tools source' }
  Move-Item -LiteralPath $toolsSource -Destination $dest
  Remove-BuildPath $tmp $env:TEMP
  "$dest\bin\sdkmanager.bat"
}

# ---------- Game -> www ----------
function Build-Bundle {
  Step 'Build js/bundle.js (esbuild)'
  Push-Location $GameDir
  try { Exec 'npx.cmd' @('--yes', 'esbuild@0.25.0', 'js/main.js', '--bundle', '--format=iife', '--target=chrome70', '--outfile=js/bundle.js') }
  finally { Pop-Location }
}

function Copy-Web {
  Step 'Copy game vao www/'
  $www = Join-Path $OutDir 'www'
  Remove-BuildPath $www $OutDir
  New-Item -ItemType Directory -Force "$www\js" | Out-Null
  foreach ($f in @('index.html', 'css', 'assets', 'manifest.json', 'icon.svg')) {
    $src = Join-Path $GameDir $f
    if (Test-Path $src) { Copy-Item $src $www -Recurse -Force }
    elseif ($f -eq 'index.html') { throw "Khong thay $src" }
  }
  Copy-Item "$GameDir\js\compat.js", "$GameDir\js\bundle.js", "$ScriptDir\apk-shell.js" "$www\js"
  $index = Join-Path $www 'index.html'
  $html = Read-Utf8 $index
  $tag = '<script src="js/bundle.js"></script>'
  if (-not $html.Contains($tag)) { throw "index.html khong co $tag" }
  Write-Utf8 $index $html.Replace($tag, $tag + "`n<script src=`"js/apk-shell.js`"></script>")
}

# ---------- Project Capacitor ----------
function Write-ProjectFiles {
  $pkgPath = Join-Path $OutDir 'package.json'
  if (-not (Test-Path $pkgPath)) {
    $d = ($Deps.Keys | ForEach-Object { "    `"$_`": `"$($Deps[$_])`"" }) -join ",`n"
    $dd = ($DevDeps.Keys | ForEach-Object { "    `"$_`": `"$($DevDeps[$_])`"" }) -join ",`n"
    Write-Utf8 $pkgPath @"
{
  "name": "tiemtra-apk",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
$d
  },
  "devDependencies": {
$dd
  }
}
"@
  }
  $manifest = Read-Utf8 (Join-Path $GameDir 'manifest.json') | ConvertFrom-Json
  $name = if ($manifest.name) { $manifest.name } else { 'Tiem Tra Mo Uoc' }
  Write-Utf8 (Join-Path $OutDir 'capacitor.config.json') @"
{
  "appId": "$AppId",
  "appName": $(ConvertTo-JsonString $name),
  "webDir": "www",
  "android": { "backgroundColor": "#FDF3E4" },
  "plugins": {
    "SystemBars": { "hidden": true, "style": "LIGHT", "initialViewportFitValueHint": "cover" }
  }
}
"@
  Write-Utf8 (Join-Path $OutDir '.gitignore') "node_modules/`nwww/`n*.jks`n*.keystore`nkeystore.properties`n"
}

function Edit-AndroidProject([string]$Sdk) {
  Step 'Cau hinh project Android'
  $main = Join-Path $OutDir 'android\app\src\main'

  $p = "$main\AndroidManifest.xml"; $t = Read-Utf8 $p
  if (-not $t.Contains('android.permission.VIBRATE')) {
    $t = $t.Replace('<uses-permission android:name="android.permission.INTERNET" />',
      "<uses-permission android:name=`"android.permission.INTERNET`" />`n    <uses-permission android:name=`"android.permission.VIBRATE`" />")
  }
  if (-not $t.Contains('android:screenOrientation')) {
    $t = $t.Replace('android:name=".MainActivity"', "android:name=`".MainActivity`"`n            android:screenOrientation=`"portrait`"")
  }
  Write-Utf8 $p $t

  # Phu vung tai tho
  $p = "$main\res\values\styles.xml"; $t = Read-Utf8 $p
  if (-not $t.Contains('windowLayoutInDisplayCutoutMode')) {
    $cut = "`n        <item name=`"android:windowLayoutInDisplayCutoutMode`">shortEdges</item>"
    foreach ($bg in @('<item name="android:background">@null</item>', '<item name="android:background">@drawable/splash</item>')) {
      $t = $t.Replace($bg, $bg + $cut)
    }
    Write-Utf8 $p $t
  }

  # Ky ban release bang keystore.properties
  $p = Join-Path $OutDir 'android\app\build.gradle'; $t = Read-Utf8 $p
  if (-not $t.Contains('keystorePropsFile')) {
    $signing = @"
    // Khoa ky release: tiemtra-apk/keystore.properties (storeFile, storePassword, keyAlias, keyPassword)
    def keystorePropsFile = rootProject.file('../keystore.properties')
    signingConfigs {
        if (keystorePropsFile.exists()) {
            def kp = new Properties()
            keystorePropsFile.withInputStream { kp.load(it) }
            release {
                storeFile rootProject.file('../' + kp['storeFile'])
                storePassword kp['storePassword']
                keyAlias kp['keyAlias']
                keyPassword kp['keyPassword']
            }
        }
    }
    buildTypes {
"@
    $t = ([regex]'(?m)^[ \t]*buildTypes \{\r?\n').Replace($t, $signing.Replace("`r`n", "`n") + "`n", 1)
    $t = ([regex]'minifyEnabled false').Replace($t, "if (keystorePropsFile.exists()) signingConfig signingConfigs.release`n            minifyEnabled false", 1)
  }
  if ($VersionCode -gt 0) { $t = $t -replace 'versionCode \d+', "versionCode $VersionCode" }
  if ($VersionName) { $t = $t -replace 'versionName "[^"]*"', "versionName `"$VersionName`"" }
  Write-Utf8 $p $t
  if ($t -match 'versionCode (\d+)') { Info "versionCode = $($Matches[1])" }

  # AGP tu choi duong dan co dau tieng Viet tren Windows neu khong bat dong nay
  $p = Join-Path $OutDir 'android\gradle.properties'; $t = Read-Utf8 $p
  if (-not $t.Contains('android.overridePathCheck')) { Write-Utf8 $p ($t.TrimEnd() + "`nandroid.overridePathCheck=true`n") }

  Write-Utf8 (Join-Path $OutDir 'android\local.properties') ("sdk.dir=" + ($Sdk -replace '\\', '/') + "`n")
}

function New-AppIcons {
  Step 'Tao icon va man hinh khoi dong'
  $assets = Join-Path $OutDir 'assets'
  New-Item -ItemType Directory -Force $assets | Out-Null
  Copy-Item "$ScriptDir\icons\*.png" $assets -Force
  Copy-Item "$assets\splash.png" "$assets\splash-dark.png" -Force
  Exec 'npx.cmd' @('capacitor-assets', 'generate', '--android',
    '--iconBackgroundColor', '#ffd9e2', '--iconBackgroundColorDark', '#ffd9e2',
    '--splashBackgroundColor', '#FDF3E4', '--splashBackgroundColorDark', '#FDF3E4')
}

function New-Keystore {
  Step 'Tao khoa ky ban release (chi lam 1 lan)'
  Warn 'Mat khau toi thieu 6 ky tu. SAO LUU file tiemtra.jks va mat khau: mat la khong cap nhat duoc APK!'
  while ($true) {
    $a = Read-Host 'Nhap mat khau khoa' -AsSecureString
    $b = Read-Host 'Nhap lai mat khau' -AsSecureString
    $pa = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($a))
    $pb = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($b))
    if ($pa -ne $pb) { Warn 'Hai mat khau khong khop.'; continue }
    if ($pa.Length -lt 6) { Warn 'Mat khau qua ngan.'; continue }
    break
  }
  $jks = Join-Path $OutDir 'tiemtra.jks'
  Exec "$env:JAVA_HOME\bin\keytool.exe" @('-genkeypair', '-keystore', $jks, '-alias', 'tiemtra', '-keyalg', 'RSA',
    '-keysize', '2048', '-validity', '10000', '-storepass', $pa, '-keypass', $pa, '-dname', 'CN=Tiem Tra Mo Uoc')
  $esc = $pa.Replace('\', '\\')
  Write-Utf8 (Join-Path $OutDir 'keystore.properties') "storeFile=tiemtra.jks`nstorePassword=$esc`nkeyAlias=tiemtra`nkeyPassword=$esc`n"
  Info "Da tao $jks"
}

function Install-Apk([string]$Sdk, [string]$Apk) {
  Step 'Cai APK len dien thoai'
  $adb = "$Sdk\platform-tools\adb.exe"
  $devices = @(& $adb devices | Where-Object { $_ -match "`tdevice$" })
  if (-not $devices.Count) {
    Warn 'Khong thay dien thoai. Bat Tuy chon nha phat trien > Go loi USB, cam cap, chon "Cho phep" tren dien thoai roi chay lai.'
    return
  }
  Exec $adb @('install', '-r', $Apk)
  Info 'Da cai xong.'
}

# ---------- Main ----------
try {
  if (-not $GameDir) { $GameDir = Split-Path -Parent $ScriptDir }
  $GameDir = [IO.Path]::GetFullPath($GameDir)
  if (-not (Test-Path (Join-Path $GameDir 'js\main.js'))) { throw "GameDir khong phai thu muc game: $GameDir" }
  if (-not $OutDir) {
    $OutDir = Join-Path (Split-Path -Parent $GameDir) 'tiemtra-apk'
    if (-not (Test-AsciiPath $OutDir)) {
      $OutDir = Join-Path $env:LOCALAPPDATA 'tiemtra-apk'
      if (-not (Test-AsciiPath $OutDir)) { $OutDir = 'C:\tiemtra-apk' }
      Warn "Duong dan game co dau tieng Viet/ky tu dac biet, Gradle de loi: dat project APK o $OutDir"
    }
  }
  if (-not $env:GRADLE_USER_HOME -and -not (Test-AsciiPath "$env:USERPROFILE\.gradle")) { $env:GRADLE_USER_HOME = 'C:\tiemtra-gradle' }
  $OutDir = [IO.Path]::GetFullPath($OutDir)
  Write-Host "Game:        $GameDir"
  Write-Host "Project APK: $OutDir"

  Initialize-Node
  Initialize-Jdk
  $sdk = Initialize-AndroidSdk

  if ($Clean -and (Test-Path $OutDir)) {
    Step 'Xoa project cu (giu khoa ky)'
    foreach ($d in @('android', 'www', 'node_modules', 'package.json', 'package-lock.json')) {
      $x = Join-Path $OutDir $d
      Remove-BuildPath $x $OutDir
    }
  }
  New-Item -ItemType Directory -Force $OutDir | Out-Null

  Build-Bundle
  Write-ProjectFiles
  Push-Location $OutDir
  try {
    if (-not (Test-Path 'node_modules\@capacitor\android')) {
      Step 'Cai Capacitor (npm install)'
      Exec 'npm.cmd' @('install', '--no-fund', '--no-audit')
    }
    Copy-Web
    $fresh = -not (Test-Path 'android')
    if ($fresh) { Step 'Tao project Android'; Exec 'npx.cmd' @('cap', 'add', 'android') }
    Edit-AndroidProject $sdk
    if ($fresh) { New-AppIcons }
    Step 'Dong bo game vao Android'
    Exec 'npx.cmd' @('cap', 'sync', 'android')
    if ($Release -and -not (Test-Path 'keystore.properties')) { New-Keystore }
  } finally { Pop-Location }

  $task = if ($Release) { 'assembleRelease' } else { 'assembleDebug' }
  $kind = if ($Release) { 'release' } else { 'debug' }
  Step "Build APK $kind (lan dau Gradle tai them ~200MB, vui long doi)"
  Push-Location (Join-Path $OutDir 'android')
  try { Exec '.\gradlew.bat' @($task) } finally { Pop-Location }

  $apk = Join-Path $OutDir "android\app\build\outputs\apk\$kind\app-$kind.apk"
  if (-not (Test-Path $apk)) { throw "Khong thay file APK: $apk" }
  $apkOutputDir = if ($ApkDir) { [IO.Path]::GetFullPath($ApkDir) } else { $OutDir }
  if (-not (Test-Path -LiteralPath $apkOutputDir)) { New-Item -ItemType Directory -Path $apkOutputDir | Out-Null }
  $dest = Join-Path $apkOutputDir "TiemTraMoUoc-$kind.apk"
  Copy-Item $apk $dest -Force
  if ($Install) { Install-Apk $sdk $dest }

  Write-Host ''
  Write-Host "XONG! APK: $dest" -ForegroundColor Green
  if ($Release) { Warn "Nho sao luu $OutDir\tiemtra.jks va keystore.properties." }
  if (-not $NoReveal) { Start-Process explorer.exe "/select,`"$dest`"" }
  exit 0
} catch {
  Write-Host ''
  Write-Host "LOI: $($_.Exception.Message)" -ForegroundColor Red
  exit 1
}
