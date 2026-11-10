
@echo off
setlocal EnableExtensions
cd /d "%~dp0"

REM Build game Tiem Tra Mo Uoc
REM Che do: debug, install, release, aab

set "MODE=%~1"

if not defined MODE (
    echo.
    echo ==========================================
    echo       TIEM TRA MO UOC - BUILD APK
    echo ==========================================
    echo 1. APK debug (choi thu)
    echo 2. APK debug + cai qua USB
    echo 3. APK release (da ky)
    echo 4. AAB release (tai len Google Play)
    echo.

    choice /c 1234 /n /m "Chon [1-4]: "

    if errorlevel 4 (
        set "MODE=aab"
    ) else if errorlevel 3 (
        set "MODE=release"
    ) else if errorlevel 2 (
        set "MODE=install"
    ) else (
        set "MODE=debug"
    )
)

set "FLAGS="

if /i "%MODE%"=="install" set "FLAGS=-Install"
if /i "%MODE%"=="release" set "FLAGS=-Release"
if /i "%MODE%"=="aab" set "FLAGS=-Aab"

REM Khi chon AAB, yeu cau nhap version
if /i "%MODE%"=="aab" (
    echo.
    echo ==========================================
    echo        NHAP PHIEN BAN GOOGLE PLAY
    echo ==========================================

    :inputVersionCode
    set /p "VERSION_CODE=Nhap versionCode (VD: 4): "

    echo(%VERSION_CODE%| findstr /r "^[1-9][0-9]*$" >nul
    if errorlevel 1 (
        echo versionCode phai la so nguyen duong.
        goto inputVersionCode
    )

    :inputVersionName
    set /p "VERSION_NAME=Nhap versionName (VD: 1.1): "

    if not defined VERSION_NAME (
        echo versionName khong duoc de trong.
        goto inputVersionName
    )

    echo.
    echo versionCode = %VERSION_CODE%
    echo versionName = %VERSION_NAME%

    set "FLAGS=-Aab -VersionCode %VERSION_CODE% -VersionName %VERSION_NAME%"
)

echo.
echo ==> Bat dau build: %MODE%
echo.

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0apk\build-apk.ps1" %FLAGS% %2 %3 %4 %5 %6 %7 %8 %9

set "RC=%errorlevel%"

echo.
if not "%RC%"=="0" (
    echo BUILD THAT BAI - Kiem tra loi phia tren.
) else (
    echo BUILD HOAN TAT!
)

pause
exit /b %RC%
