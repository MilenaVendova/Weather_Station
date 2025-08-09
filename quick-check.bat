@echo off
echo === БЪРЗА ПРОВЕРКА НА ВЕРСИИТЕ ===
echo.
echo Node.js: 
node --version 2>nul || echo Не е намерен
echo.
echo npm: 
npm --version 2>nul || echo Не е намерен
echo.
echo Текуща папка: %CD%
echo.
echo За детайлна информация използвайте:
echo   - check-versions.bat
echo   - check-versions.ps1
echo   - node check-versions.js
echo.
pause
