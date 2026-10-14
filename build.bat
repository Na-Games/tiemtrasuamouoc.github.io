@echo off
REM Gop ES modules trong js/ thanh js/bundle.js de mo truc tiep index.html (file://) van chay. Can Node.js.
cd /d "%~dp0"
npx --yes esbuild@0.25.0 js/main.js --bundle --format=iife --target=chrome70 --outfile=js/bundle.js
if errorlevel 1 (echo BUILD LOI & pause & exit /b 1)
echo Build xong: js/bundle.js
