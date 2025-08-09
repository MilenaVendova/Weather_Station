@echo off
echo ==========================================
echo   РЕАЛНА ПРОВЕРКА НА ВЕРСИИТЕ
echo ==========================================
echo.
echo Проверка в: %CD%
echo Дата/час: %DATE% %TIME%
echo.
echo ------------------------------------------
echo NODE.JS:
node --version
echo.
echo NPM:
npm --version
echo.
echo NVM:
nvm version 2>nul
if %errorlevel% neq 0 (
    echo NVM не е намерен в PATH
)
echo.
echo ANGULAR CLI (глобално):
ng version 2>nul
if %errorlevel% neq 0 (
    echo Angular CLI не е инсталиран глобално
)
echo.
echo .NET:
dotnet --version 2>nul
if %errorlevel% neq 0 (
    echo .NET SDK не е намерен
)
echo.
echo ------------------------------------------
echo МОЛЯ, КОПИРАЙТЕ РЕЗУЛТАТА И МИ ГО ПОКАЖЕТЕ!
echo ------------------------------------------
pause
