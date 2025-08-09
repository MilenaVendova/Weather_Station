@echo off
cls
echo ==========================================
echo    WEATHER STATION - УМЕН СТАРТ
echo ==========================================
echo.

REM Проверка на Node версията
for /f "tokens=*" %%i in ('node --version 2^>nul') do set NODE_VERSION=%%i

if "%NODE_VERSION%"=="" (
    echo ❌ Node.js не е инсталиран!
    echo.
    echo Моля инсталирайте Node.js от:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Намерен Node.js: %NODE_VERSION%

REM Извличане на major версията
for /f "tokens=2 delims=v." %%a in ("%NODE_VERSION%") do set MAJOR_VERSION=%%a

echo Major версия: %MAJOR_VERSION%
echo.

if %MAJOR_VERSION% GEQ 18 (
    echo ✅ Node.js версията е подходяща за Angular!
    echo.
    echo Стартиране на Angular приложението...
    cd frontend-angular
    call npm start
) else (
    echo ⚠️  Node.js версията е твърде стара за Angular 17!
    echo    Необходима е версия 18 или по-нова.
    echo.
    echo 🚀 Стартиране на алтернативната версия...
    echo    (Работи с вашата версия на Node.js)
    echo.
    timeout /t 3 /nobreak > nul
    
    REM Стартиране на backend
    start "Weather Backend" cmd /k "cd /d %~dp0backend-node && npm install && node server.js"
    
    timeout /t 2 /nobreak > nul
    
    REM Стартиране на simple frontend
    start "Weather Frontend" cmd /k "cd /d %~dp0frontend-angular && node simple-server.js"
    
    timeout /t 3 /nobreak > nul
    
    echo.
    echo ==========================================
    echo ✅ Weather Station стартира успешно!
    echo.
    echo Backend:  http://localhost:5240
    echo Frontend: http://localhost:3000
    echo ==========================================
    echo.
    echo Отваряне в браузъра...
    start http://localhost:3000
)

pause
