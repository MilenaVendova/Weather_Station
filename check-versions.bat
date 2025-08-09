@echo off
echo ==========================================
echo   ПРОВЕРКА НА ВЕРСИИТЕ
echo ==========================================
echo.

echo [Node.js]
node --version 2>nul
if %errorlevel% neq 0 (
    echo Node.js не е намерен в PATH
) else (
    echo Път: 
    where node
)
echo.

echo [npm]
npm --version 2>nul
if %errorlevel% neq 0 (
    echo npm не е намерен
)
echo.

echo [nvm]
nvm version 2>nul
if %errorlevel% neq 0 (
    echo nvm не е намерен в PATH
    echo Проверка в стандартни локации...
    if exist "C:\Program Files\nvm\nvm.exe" (
        echo Намерен в: C:\Program Files\nvm\
        "C:\Program Files\nvm\nvm.exe" version
    )
    if exist "%APPDATA%\nvm\nvm.exe" (
        echo Намерен в: %APPDATA%\nvm\
        "%APPDATA%\nvm\nvm.exe" version
    )
)
echo.

echo [.NET SDK]
dotnet --version 2>nul
if %errorlevel% neq 0 (
    echo .NET SDK не е намерен
)
echo.

echo [Angular CLI]
ng version 2>nul
if %errorlevel% neq 0 (
    echo Angular CLI не е инсталиран глобално
    echo Проверка в проекта...
    if exist "node_modules\.bin\ng.cmd" (
        echo Намерен локално в проекта
        call node_modules\.bin\ng.cmd version
    )
)
echo.

echo [Git]
git --version 2>nul
if %errorlevel% neq 0 (
    echo Git не е намерен
)
echo.

echo ==========================================
echo   СИСТЕМНА ИНФОРМАЦИЯ
echo ==========================================
echo.
echo Windows версия:
ver
echo.
echo PATH променлива (Node пътища):
echo %PATH% | findstr /i "node"
echo.

pause
