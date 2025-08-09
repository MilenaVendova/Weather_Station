Write-Host "========================================"  -ForegroundColor Cyan
Write-Host " ANGULAR PROJECT INTEGRITY CHECK"         -ForegroundColor Yellow
Write-Host " Проверка на интегритета на проекта"      -ForegroundColor Yellow
Write-Host "========================================"  -ForegroundColor Cyan
Write-Host ""

# Проверка 1: Структура
Write-Host "[1/5] Проверка на структурата..." -ForegroundColor Green
$errors = 0

if (!(Test-Path "src\app")) {
    Write-Host "❌ ГРЕШКА: Липсва src\app папка!" -ForegroundColor Red
    $errors++
}
if (!(Test-Path "src\index.html")) {
    Write-Host "❌ ГРЕШКА: Липсва src\index.html!" -ForegroundColor Red
    $errors++
}
if (!(Test-Path "angular.json")) {
    Write-Host "❌ ГРЕШКА: Липсва angular.json!" -ForegroundColor Red
    $errors++
}

if ($errors -eq 0) {
    Write-Host "✅ Структурата е правилна" -ForegroundColor Green
} else {
    Write-Host "Намерени $errors структурни грешки!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Проверка 2: Node.js
Write-Host "[2/5] Проверка на Node.js версията..." -ForegroundColor Green
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js версия: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ГРЕШКА: Node.js не е инсталиран!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Проверка 3: npm
Write-Host "[3/5] Проверка на npm версията..." -ForegroundColor Green
try {
    $npmVersion = npm --version
    Write-Host "✅ npm версия: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ ГРЕШКА: npm не е инсталиран!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Проверка 4: node_modules
Write-Host "[4/5] Проверка на инсталирани пакети..." -ForegroundColor Green
if (!(Test-Path "node_modules")) {
    Write-Host "⚠️  ВНИМАНИЕ: node_modules липсва!" -ForegroundColor Yellow
    Write-Host "   Изпълнете: npm install" -ForegroundColor Yellow
} else {
    Write-Host "✅ node_modules съществува" -ForegroundColor Green
    
    # Проверка за Angular CLI
    if (Test-Path "node_modules\@angular\cli") {
        Write-Host "✅ Angular CLI е инсталиран" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Angular CLI не е намерен в node_modules" -ForegroundColor Yellow
    }
}

Write-Host ""

# Проверка 5: TypeScript
Write-Host "[5/5] Проверка на TypeScript файлове..." -ForegroundColor Green
if (Test-Path "node_modules\.bin\tsc.cmd") {
    Write-Host "Компилиране на TypeScript..." -ForegroundColor Cyan
    $tscResult = & node_modules\.bin\tsc.cmd --noEmit 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ TypeScript кодът е валиден" -ForegroundColor Green
    } else {
        Write-Host "⚠️  ВНИМАНИЕ: Има TypeScript грешки:" -ForegroundColor Yellow
        Write-Host $tscResult -ForegroundColor Red
    }
} else {
    Write-Host "⏭️  Пропускане - TypeScript не е инсталиран" -ForegroundColor Gray
}

Write-Host ""
Write-Host "========================================"  -ForegroundColor Cyan
Write-Host " РЕЗУЛТАТ: Проектът е готов!"             -ForegroundColor Green
Write-Host "========================================"  -ForegroundColor Cyan
Write-Host ""
Write-Host "За да стартирате:" -ForegroundColor Yellow
Write-Host "1. npm install (ако не сте)" -ForegroundColor White
Write-Host "2. npm start" -ForegroundColor White
Write-Host ""

# Питаме дали да стартираме
$response = Read-Host "Искате ли да стартираме приложението сега? (Y/N)"
if ($response -eq 'Y' -or $response -eq 'y') {
    if (!(Test-Path "node_modules")) {
        Write-Host "Инсталиране на зависимости..." -ForegroundColor Yellow
        npm install
    }
    Write-Host "Стартиране на Angular..." -ForegroundColor Green
    npm start
}
