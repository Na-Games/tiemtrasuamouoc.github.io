@echo off
REM Dong goi game thanh APK Android (Capacitor). Lan dau tu cai Node.js 22+, JDK 21, Android SDK.
REM Dung:  build-apk.bat                  -> hien menu
REM        build-apk.bat debug|install|release|aab [tham so them cho apk\build-apk.ps1]
REM Vi du: build-apk.bat release -VersionCode 2 -VersionName 1.1
REM        build-apk.bat aab -VersionCode 2 -VersionName 1.1   (file .aab de len Google Play)
REM        build-apk.bat debug -Clean         (tao lai project Android tu dau)
REM Project APK nam o thu muc ..\tiemtra-apk (canh thu muc game).
setlocal
cd /d "%~dp0"
set "MODE=%~1"
if not "%MODE%"=="" goto run
echo.
echo   TIEM TRA MO UOC - BUILD APK
echo   1. APK debug (choi thu)
echo   2. APK debug + cai len dien thoai qua USB
echo   3. APK release (da ky, de cai truc tiep)
echo   4. AAB release (da ky, de TAI LEN GOOGLE PLAY)
echo.
choice /c 1234 /n /m "Chon [1-4]: "
set "MODE=debug"
if errorlevel 2 set "MODE=install"
if errorlevel 3 set "MODE=release"
if errorlevel 4 set "MODE=aab"
:run
set "FLAGS="
if /i "%MODE%"=="install" set "FLAGS=-Install"
if /i "%MODE%"=="release" set "FLAGS=-Release"
if /i "%MODE%"=="aab" set "FLAGS=-Aab"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0apk\build-apk.ps1" %FLAGS% %2 %3 %4 %5 %6 %7 %8 %9
set "RC=%errorlevel%"
echo.
if not "%RC%"=="0" echo BUILD APK LOI - xem thong bao mau do phia tren.
pause
exit /b %RC%
