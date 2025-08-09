@echo off
echo ========================================
echo  ANGULAR PROJECT INTEGRITY CHECK
echo  Проверка на интегритета на проекта
echo ========================================
echo.

echo [1/5] Проверка на структурата...
if not exist "src\app" (
    echo ❌ ГРЕШКА: Липсва src\app папка!
    exit /b 1
)
if not exist "src\index.html" (
    echo ❌ ГРЕШКА: Липсва src\index.html!
    exit /b 1
)
if not exist "angular.json" (
    echo ❌ ГРЕШКА: Липсва angular.json!
    exit /b 1
)
echo ✅ Структурата е правилна

echo.
echo [2/5] Проверка на Node.js версията...
node --version
if %errorlevel% neq 0 (
    echo ❌ ГРЕШКА: Node.js не е инсталиран!
    exit /b 1
)
echo ✅ Node.js е инсталиран

echo.
echo [3/5] Проверка на npm версията...
npm --version
if %errorlevel% neq 0 (
    echo ❌ ГРЕШКА: npm не е инсталиран!
    exit /b 1
)
echo ✅ npm е инсталиран

echo.
echo [4/5] Проверка на инсталирани пакети...
if not exist "node_modules" (
    echo ⚠️ ВНИМАНИЕ: node_modules липсва!
    echo    Изпълнете: npm install
) else (
    echo ✅ node_modules съществува
)

echo.
echo [5/5] Проверка на TypeScript файлове...
if exist "node_modules\.bin\tsc.cmd" (
    echo Компилиране на TypeScript...
    call node_modules\.bin\tsc --noEmit
    if %errorlevel% equ 0 (
        echo ✅ TypeScript кодът е валиден
    ) else (
        echo ⚠️ ВНИМАНИЕ: Има TypeScript грешки
    )
) else (
    echo ⏭️ Пропускане - TypeScript не е инсталиран
)

echo.
echo ========================================
echo  РЕЗУЛТАТ: Проектът е готов!
echo ========================================
echo.
echo За да стартирате:
echo 1. npm install (ако не сте)
echo 2. npm start
echo.
pause
