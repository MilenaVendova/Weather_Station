Clear-Host
Write-Host "=========================================="  -ForegroundColor Cyan
Write-Host "   WEATHER STATION - УМЕН СТАРТ"           -ForegroundColor Yellow
Write-Host "=========================================="  -ForegroundColor Cyan
Write-Host ""

# Проверка на Node версията
try {
    $nodeVersion = node --version
    Write-Host "Намерен Node.js: $nodeVersion" -ForegroundColor Green
    
    # Извличане на major версията
    $majorVersion = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
    Write-Host "Major версия: $majorVersion" -ForegroundColor Gray
    Write-Host ""
    
    if ($majorVersion -ge 18) {
        Write-Host "✅ Node.js версията е подходяща за Angular!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Стартиране на Angular приложението..." -ForegroundColor Cyan
        
        Set-Location "$PSScriptRoot\frontend-angular"
        npm start
    }
    else {
        Write-Host "⚠️  Node.js версията е твърде стара за Angular 17!" -ForegroundColor Yellow
        Write-Host "   Необходима е версия 18 или по-нова." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "🚀 Стартиране на алтернативната версия..." -ForegroundColor Cyan
        Write-Host "   (Работи с вашата версия на Node.js)" -ForegroundColor Gray
        Write-Host ""
        
        Start-Sleep -Seconds 2
        
        # Стартиране на backend
        $backendPath = Join-Path $PSScriptRoot "backend-node"
        Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; npm install; node server.js" -WorkingDirectory $backendPath
        
        Start-Sleep -Seconds 2
        
        # Стартиране на simple frontend
        $frontendPath = Join-Path $PSScriptRoot "frontend-angular"
        Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$frontendPath'; node simple-server.js" -WorkingDirectory $frontendPath
        
        Start-Sleep -Seconds 3
        
        Write-Host ""
        Write-Host "=========================================="  -ForegroundColor Cyan
        Write-Host "✅ Weather Station стартира успешно!"       -ForegroundColor Green
        Write-Host ""
        Write-Host "Backend:  " -NoNewline
        Write-Host "http://localhost:5240" -ForegroundColor Yellow
        Write-Host "Frontend: " -NoNewline
        Write-Host "http://localhost:3000" -ForegroundColor Yellow
        Write-Host "=========================================="  -ForegroundColor Cyan
        Write-Host ""
        
        Write-Host "Отваряне в браузъра..." -ForegroundColor Gray
        Start-Process "http://localhost:3000"
    }
}
catch {
    Write-Host "❌ Node.js не е инсталиран!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Моля инсталирайте Node.js от:" -ForegroundColor Yellow
    Write-Host "https://nodejs.org/" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host ""
Write-Host "Натиснете Enter за изход..." -ForegroundColor Gray
Read-Host
