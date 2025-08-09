Write-Host "=========================================="  -ForegroundColor Cyan
Write-Host "         ПРОВЕРКА НА ВЕРСИИТЕ"              -ForegroundColor Yellow
Write-Host "=========================================="  -ForegroundColor Cyan
Write-Host ""

# Node.js
Write-Host "[Node.js]" -ForegroundColor Green
try {
    $nodeVersion = node --version
    Write-Host "Версия: $nodeVersion" -ForegroundColor White
    $nodePath = (Get-Command node).Source
    Write-Host "Път: $nodePath" -ForegroundColor Gray
    
    # Проверка за множество инсталации
    $allNodePaths = where.exe node 2>$null
    if ($allNodePaths -is [array]) {
        Write-Host "⚠️  Намерени множество инсталации:" -ForegroundColor Yellow
        $allNodePaths | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
    }
} catch {
    Write-Host "❌ Node.js не е намерен" -ForegroundColor Red
}
Write-Host ""

# npm
Write-Host "[npm]" -ForegroundColor Green
try {
    $npmVersion = npm --version
    Write-Host "Версия: $npmVersion" -ForegroundColor White
} catch {
    Write-Host "❌ npm не е намерен" -ForegroundColor Red
}
Write-Host ""

# nvm
Write-Host "[nvm - Node Version Manager]" -ForegroundColor Green
try {
    $nvmVersion = nvm version 2>$null
    if ($nvmVersion) {
        Write-Host "Текуща Node версия през nvm: $nvmVersion" -ForegroundColor White
        Write-Host "Инсталирани версии:" -ForegroundColor Gray
        nvm list
    }
} catch {
    Write-Host "❌ nvm не е намерен в PATH" -ForegroundColor Red
    
    # Проверка в стандартни локации
    $nvmPaths = @(
        "C:\Program Files\nvm\nvm.exe",
        "$env:APPDATA\nvm\nvm.exe",
        "C:\Users\$env:USERNAME\scoop\apps\nvm\current\nvm.exe"
    )
    
    foreach ($path in $nvmPaths) {
        if (Test-Path $path) {
            Write-Host "✅ Намерен nvm в: $path" -ForegroundColor Yellow
            & $path version
            break
        }
    }
}
Write-Host ""

# .NET
Write-Host "[.NET SDK]" -ForegroundColor Green
try {
    $dotnetVersion = dotnet --version
    Write-Host "Версия: $dotnetVersion" -ForegroundColor White
    Write-Host "Инсталирани SDK версии:" -ForegroundColor Gray
    dotnet --list-sdks | Select-Object -First 5
} catch {
    Write-Host "❌ .NET SDK не е намерен" -ForegroundColor Red
}
Write-Host ""

# Angular CLI
Write-Host "[Angular CLI]" -ForegroundColor Green
try {
    $ngVersion = ng version 2>$null
    if ($ngVersion) {
        ng version
    }
} catch {
    Write-Host "❌ Angular CLI не е инсталиран глобално" -ForegroundColor Yellow
    if (Test-Path "node_modules\.bin\ng.cmd") {
        Write-Host "✅ Намерен локално в проекта" -ForegroundColor Green
        & node_modules\.bin\ng.cmd version 2>$null
    }
}
Write-Host ""

# Git
Write-Host "[Git]" -ForegroundColor Green
try {
    $gitVersion = git --version
    Write-Host "$gitVersion" -ForegroundColor White
} catch {
    Write-Host "❌ Git не е намерен" -ForegroundColor Red
}
Write-Host ""

# Системна информация
Write-Host "=========================================="  -ForegroundColor Cyan
Write-Host "        СИСТЕМНА ИНФОРМАЦИЯ"                -ForegroundColor Yellow
Write-Host "=========================================="  -ForegroundColor Cyan
Write-Host ""

Write-Host "Windows версия:" -ForegroundColor Green
[System.Environment]::OSVersion.VersionString

Write-Host ""
Write-Host "PowerShell версия:" -ForegroundColor Green
$PSVersionTable.PSVersion.ToString()

Write-Host ""
Write-Host "Архитектура:" -ForegroundColor Green
Write-Host "$env:PROCESSOR_ARCHITECTURE" -ForegroundColor White

Write-Host ""
Write-Host "Node/npm в PATH:" -ForegroundColor Green
$pathEntries = $env:PATH -split ';' | Where-Object { $_ -match 'node|npm|nvm' }
if ($pathEntries) {
    $pathEntries | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
} else {
    Write-Host "  Няма Node/npm/nvm пътища в PATH" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=========================================="  -ForegroundColor Cyan
Write-Host "           ПРЕПОРЪКИ"                       -ForegroundColor Yellow
Write-Host "=========================================="  -ForegroundColor Cyan

# Анализ и препоръки
$nodeVersionNumber = [version]($nodeVersion -replace 'v', '')
if ($nodeVersionNumber -lt [version]"18.0.0") {
    Write-Host ""
    Write-Host "⚠️  Node.js версията е стара ($nodeVersion)" -ForegroundColor Yellow
    Write-Host "   Angular 17 изисква Node.js 18.13 или по-нова" -ForegroundColor White
    Write-Host ""
    Write-Host "   Опции:" -ForegroundColor Cyan
    Write-Host "   1. Инсталирайте Node 18+ от https://nodejs.org/" -ForegroundColor White
    Write-Host "   2. Използвайте nvm за управление на версии" -ForegroundColor White
    Write-Host "   3. Използвайте simple-server.js (работи с Node 14)" -ForegroundColor White
}

Write-Host ""
pause
