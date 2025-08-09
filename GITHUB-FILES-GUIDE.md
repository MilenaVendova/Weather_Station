# 📋 Файлове за GitHub хранилището

## ✅ ВАЖНИ файлове (качете тези):

### 📁 /backend/WeatherApi/
- ✅ Program.cs
- ✅ WeatherInfo.cs  
- ✅ WeatherApi.csproj
- ✅ appsettings.json (ако има)

### 📁 /frontend/ (оригинална версия)
- ✅ index.html
- ✅ script.js
- ✅ style.css

### 📁 /frontend-angular/
- ✅ angular.json
- ✅ package.json
- ✅ tsconfig.json
- ✅ tsconfig.app.json
- ✅ README.md
- ✅ .gitignore

### 📁 /frontend-angular/src/
- ✅ main.ts
- ✅ index.html
- ✅ styles.css
- ✅ favicon.ico

### 📁 /frontend-angular/src/app/
- ✅ app.component.ts
- ✅ app.component.html
- ✅ app.component.css

### 📁 /frontend-angular/src/app/models/
- ✅ weather.model.ts

### 📁 /frontend-angular/src/app/services/
- ✅ weather.service.ts

### 📁 /frontend-angular/src/assets/
- ✅ .gitkeep

### 📁 /backend-node/ (ако съществува)
- ✅ server.js
- ✅ package.json

### 📁 Корнева директория
- ✅ README.md
- ✅ .gitignore
- ✅ EXPLANATION-FOR-KIDS-BG.md
- ✅ kids-programming-lesson.md

## ❌ НЕ качвайте тези (автоматично генерирани):

### Директории:
- ❌ node_modules/
- ❌ .angular/
- ❌ dist/
- ❌ bin/
- ❌ obj/
- ❌ .vs/
- ❌ .vscode/ (освен ако не искате да споделите настройки)

### Файлове:
- ❌ package-lock.json (опционално - някои предпочитат да го качват)
- ❌ *.log
- ❌ .DS_Store
- ❌ Thumbs.db
- ❌ *.tmp
- ❌ check-*.bat (тестови скриптове)
- ❌ run-*.bat (локални скриптове)
- ❌ smart-start.* (локални помощни скриптове)
- ❌ print-*.* (помощни скриптове)
- ❌ real-check.bat
- ❌ all-options.bat
- ❌ quick-check.bat

## 📝 Опционални файлове (по ваш избор):

- ⚡ simple-server.js (ако искате да включите простата версия)
- ⚡ index-simple.html (простата версия)
- ⚡ VERSION-CHECK-HELP.md
- ⚡ START-GUIDE.md
- ⚡ EXERCISES-FOR-KIDS-BG.md

## 🚀 Git команди за качване:

```bash
# 1. Инициализирайте git (ако не сте)
git init

# 2. Добавете всички файлове (gitignore ще филтрира ненужните)
git add .

# 3. Проверете кои файлове ще се качат
git status

# 4. Commit
git commit -m "Initial commit: Weather Station with Angular and .NET/Node.js backend"

# 5. Добавете remote (заменете URL с вашия)
git remote add origin https://github.com/YOUR_USERNAME/Weather_Station.git

# 6. Push
git push -u origin main
```

## 📁 Финална структура в GitHub:

```
Weather_Station/
├── backend/
│   └── WeatherApi/
│       ├── Program.cs
│       ├── WeatherInfo.cs
│       └── WeatherApi.csproj
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── frontend-angular/
│   ├── src/
│   │   ├── app/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   └── [компоненти]
│   │   └── [други src файлове]
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
├── backend-node/ (optional)
│   ├── server.js
│   └── package.json
├── README.md
├── .gitignore
└── [документация файлове]
```
