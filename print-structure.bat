@echo off
echo ===================================
echo Weather Project Directory Structure
echo ===================================
echo.
tree /F /A | findstr /V /C:"node_modules" | findstr /V /C:".git"
pause