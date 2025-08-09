@echo off
echo Starting Weather Station...
echo.
echo This will work with your Node.js v14
echo.

echo Step 1: Starting Backend API...
cd /d "%~dp0..\backend-node"
echo Installing backend dependencies...
call npm install
start "Weather API" cmd /k "node server.js"

timeout /t 3 /nobreak > nul

echo.
echo Step 2: Starting Frontend...
cd /d "%~dp0"
start "Weather Frontend" cmd /k "node simple-server.js"

timeout /t 2 /nobreak > nul

echo.
echo ========================================
echo Weather Station is now running!
echo.
echo Backend API: http://localhost:5240
echo Frontend:    http://localhost:3000
echo.
echo Press any key to open in browser...
pause > nul

start http://localhost:3000

echo.
echo To stop the servers, close the command windows.
pause
