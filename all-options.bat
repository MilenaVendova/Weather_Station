@echo off
cls
title Weather Station - Всички опции
echo ==========================================
echo    WEATHER STATION - ИЗБОР НА ОПЦИЯ
echo ==========================================
echo.
echo Изберете как да стартирате:
echo.
echo [1] Умен старт (автоматичен избор)
echo [2] Angular версия (изисква Node 18+)
echo [3] Проста версия (работи с Node 14+)
echo [4] Проверка на версиите
echo [5] Помощ и инструкции
echo [6] Изход
echo.
set /p choice="Въведете номер (1-6): "

if "%choice%"=="1" goto smart
if "%choice%"=="2" goto angular
if "%choice%"=="3" goto simple
if "%choice%"=="4" goto check
if "%choice%"=="5" goto help
if "%choice%"=="6" goto end

echo.
echo Невалиден избор! Моля опитайте отново.
pause
goto :eof

:smart
echo.
echo Стартиране на умен старт...
call smart-start.bat
goto end

:angular
echo.
echo Стартиране на Angular версия...
cd frontend-angular
call npm start
goto end

:simple
echo.
echo Стартиране на проста версия...
cd frontend-angular
call run-simple.bat
goto end

:check
echo.
echo Проверка на версиите...
call check-versions.bat
pause
goto :eof

:help
echo.
echo ==========================================
echo              ПОМОЩ
echo ==========================================
echo.
echo 1. УМЕН СТАРТ - Автоматично избира най-добрата опция
echo    според вашата версия на Node.js
echo.
echo 2. ANGULAR ВЕРСИЯ - Пълната Angular 17 версия
echo    Изисква: Node.js 18.13 или по-нова
echo.
echo 3. ПРОСТА ВЕРСИЯ - Алтернативна версия без Angular CLI
echo    Работи с: Node.js 14 или по-нова
echo.
echo 4. ПРОВЕРКА - Показва инсталираните версии
echo.
echo Текуща Node.js версия:
node --version 2>nul || echo Не е намерена
echo.
pause
goto :eof

:end
