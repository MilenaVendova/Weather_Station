# Run Weather API with diagnostics
Write-Host "Checking .NET installation..." -ForegroundColor Yellow

# Try to find dotnet in common locations
$dotnetPaths = @(
    "$env:ProgramFiles\dotnet\dotnet.exe",
    "$env:ProgramFiles(x86)\dotnet\dotnet.exe",
    "$env:USERPROFILE\.dotnet\dotnet.exe"
)

$dotnetExe = "dotnet"
foreach ($path in $dotnetPaths) {
    if (Test-Path $path) {
        Write-Host "Found .NET at: $path" -ForegroundColor Green
        $dotnetExe = $path
        break
    }
}

# Check version
Write-Host "`nChecking .NET version..." -ForegroundColor Yellow
& $dotnetExe --version

# Try to run the project
Write-Host "`nAttempting to run WeatherApi..." -ForegroundColor Yellow
Set-Location $PSScriptRoot\backend\WeatherApi

try {
    & $dotnetExe run
} catch {
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host "`nTrying alternative approach..." -ForegroundColor Yellow
    & $dotnetExe build
    & $dotnetExe bin\Debug\net8.0\WeatherApi.dll
}
