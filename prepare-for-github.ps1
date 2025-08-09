# prepare-for-github.ps1 - Подготвя проекта за GitHub

Write-Host "🧹 Почистване на ненужни файлове..." -ForegroundColor Cyan

# Изтриване на временни и тестови файлове
$filesToDelete = @(
    "check-*.bat",
    "check-*.ps1", 
    "run-*.bat",
    "run-*.ps1",
    "smart-start.*",
    "all-options.bat",
    "quick-check.bat",
    "real-check.bat",
    "print-*.bat",
    "print-*.js",
    "test-*.bat",
    "temp-*.js",
    "check-*.js",
    "*-HELP.md",
    "START-GUIDE.md"
)

foreach ($pattern in $filesToDelete) {
    Remove-Item $pattern -ErrorAction SilentlyContinue
}

Write-Host "✅ Временните файлове са изтрити" -ForegroundColor Green

# Преименуване на README файла
if (Test-Path "README-GITHUB.md") {
    Move-Item -Path "README-GITHUB.md" -Destination "README.md" -Force
    Write-Host "✅ README файлът е готов" -ForegroundColor Green
}

# Проверка на .gitignore
if (-not (Test-Path ".gitignore")) {
    Write-Host "❌ Липсва .gitignore файл!" -ForegroundColor Red
} else {
    Write-Host "✅ .gitignore съществува" -ForegroundColor Green
}

# Показване на структурата
Write-Host "`n📁 Файлове готови за GitHub:" -ForegroundColor Yellow
Get-ChildItem -Recurse -File | 
    Where-Object { 
        $_.FullName -notmatch "node_modules|\.angular|\.git|dist|bin|obj" -and
        $_.Extension -in ".ts", ".html", ".css", ".js", ".json", ".cs", ".csproj", ".md"
    } | 
    Select-Object -ExpandProperty FullName |
    ForEach-Object { $_.Replace("$PWD\", "") } |
    Sort-Object

Write-Host "`n📋 Следващи стъпки:" -ForegroundColor Cyan
Write-Host "1. git init (ако не сте инициализирали)" -ForegroundColor White
Write-Host "2. git add ." -ForegroundColor White
Write-Host "3. git status (проверете файловете)" -ForegroundColor White
Write-Host "4. git commit -m 'Initial commit: Weather Station with Angular'" -ForegroundColor White
Write-Host "5. git remote add origin https://github.com/YOUR_USERNAME/Weather_Station.git" -ForegroundColor White
Write-Host "6. git push -u origin main" -ForegroundColor White

Write-Host "`n✨ Проектът е готов за GitHub!" -ForegroundColor Green
