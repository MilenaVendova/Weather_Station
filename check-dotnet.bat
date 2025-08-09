@echo off
echo Checking .NET installations...
echo.
echo === .NET Version ===
dotnet --version 2>nul
if %errorlevel% neq 0 (
    echo .NET CLI not found in PATH
)
echo.
echo === .NET SDKs ===
dotnet --list-sdks 2>nul
if %errorlevel% neq 0 (
    echo No SDKs found
)
echo.
echo === .NET Runtimes ===
dotnet --list-runtimes 2>nul
if %errorlevel% neq 0 (
    echo No runtimes found
)
echo.
echo === PATH Check ===
echo %PATH% | findstr /i "dotnet"
if %errorlevel% neq 0 (
    echo .NET not found in PATH
)
echo.
echo === Check Program Files ===
if exist "C:\Program Files\dotnet\dotnet.exe" (
    echo Found .NET in Program Files
    "C:\Program Files\dotnet\dotnet.exe" --version
) else (
    echo .NET not found in default location
)
pause
