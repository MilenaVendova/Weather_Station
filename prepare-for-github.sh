#!/bin/bash
# prepare-for-github.sh - Подготвя проекта за GitHub

echo "🧹 Почистване на ненужни файлове..."

# Изтриване на временни и тестови файлове
rm -f check-*.bat
rm -f check-*.ps1
rm -f run-*.bat
rm -f run-*.ps1
rm -f smart-start.*
rm -f all-options.bat
rm -f quick-check.bat
rm -f real-check.bat
rm -f print-*.bat
rm -f print-*.js
rm -f test-*.bat
rm -f temp-*.js

# Преименуване на README файла
if [ -f "README-GITHUB.md" ]; then
    mv README-GITHUB.md README.md
    echo "✅ README файлът е готов"
fi

echo "🔍 Проверка на .gitignore..."
if [ ! -f ".gitignore" ]; then
    echo "❌ Липсва .gitignore файл!"
else
    echo "✅ .gitignore съществува"
fi

echo ""
echo "📋 Следващи стъпки:"
echo "1. git init (ако не сте инициализирали)"
echo "2. git add ."
echo "3. git status (проверете файловете)"
echo "4. git commit -m 'Initial commit'"
echo "5. git remote add origin YOUR_GITHUB_URL"
echo "6. git push -u origin main"

echo ""
echo "✨ Проектът е готов за GitHub!"
