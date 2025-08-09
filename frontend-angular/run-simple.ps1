Write-Host "Starting Weather Station (Node.js v14 compatible)..." -ForegroundColor Green
Write-Host ""

# Start Backend
Write-Host "Starting Backend API..." -ForegroundColor Yellow
$backendPath = Join-Path (Split-Path $PSScriptRoot) "backend-node"
Set-Location $backendPath

# Install dependencies if needed
if (!(Test-Path "node_modules")) {
    Write-Host "Installing backend dependencies..."
    npm install
}

# Start backend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "node server.js" -WorkingDirectory $backendPath

Start-Sleep -Seconds 2

# Start Frontend
Write-Host "Starting Frontend..." -ForegroundColor Yellow
Set-Location $PSScriptRoot

# Start frontend in new window
Start-Process powershell -ArgumentList "-NoExit", "-Command", "node simple-server.js" -WorkingDirectory $PSScriptRoot

Start-Sleep -Seconds 2

Write-Host ""
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "Weather Station is running!" -ForegroundColor Green
Write-Host ""
Write-Host "Backend API: " -NoNewline
Write-Host "http://localhost:5240" -ForegroundColor Yellow
Write-Host "Frontend:    " -NoNewline
Write-Host "http://localhost:3000" -ForegroundColor Yellow
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Open in browser
Write-Host "Opening in browser..."
Start-Process "http://localhost:3000"

Write-Host ""
Write-Host "Press any key to exit (servers will keep running)..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
