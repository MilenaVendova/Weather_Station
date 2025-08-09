# Weather Project Directory Structure

```
C:\prj\weather\
│
├── 📁 backend\
│   └── 📁 WeatherApi\
│       ├── 📄 Program.cs
│       ├── 📄 WeatherInfo.cs
│       └── 📄 WeatherApi.csproj
│
├── 📁 frontend\
│   ├── 📄 index.html
│   ├── 📄 script.js
│   └── 📄 style.css
│
├── 📁 frontend-angular\
│   ├── 📁 src\
│   │   ├── 📁 app\
│   │   │   ├── 📁 models\
│   │   │   │   └── 📄 weather.model.ts
│   │   │   ├── 📁 services\
│   │   │   │   └── 📄 weather.service.ts
│   │   │   ├── 📄 app.component.ts
│   │   │   ├── 📄 app.component.html
│   │   │   └── 📄 app.component.css
│   │   ├── 📁 assets\
│   │   │   └── 📄 .gitkeep
│   │   ├── 📄 main.ts
│   │   ├── 📄 index.html
│   │   ├── 📄 styles.css
│   │   └── 📄 favicon.ico
│   ├── 📁 node_modules\ (скрито - много файлове)
│   ├── 📄 angular.json
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.app.json
│   ├── 📄 .gitignore
│   ├── 📄 README.md
│   ├── 📄 index-simple.html
│   ├── 📄 simple-server.js
│   ├── 📄 run-simple.bat
│   ├── 📄 run-simple.ps1
│   ├── 📄 check-integrity.bat
│   ├── 📄 check-integrity.ps1
│   ├── 📄 check-integrity.js
│   └── 📄 INTEGRITY-CHECK.md
│
├── 📁 backend-node\ (ако съществува)
│   ├── 📄 server.js
│   ├── 📄 package.json
│   └── 📁 node_modules\ (скрито)
│
├── 📄 README.md
├── 📄 README-QUICK-START.md
├── 📄 START-GUIDE.md
├── 📄 VERSION-CHECK-HELP.md
├── 📄 EXPLANATION-FOR-KIDS-BG.md
├── 📄 EXERCISES-FOR-KIDS-BG.md
├── 📄 check-versions.bat
├── 📄 check-versions.ps1
├── 📄 check-versions.js
├── 📄 smart-start.bat
├── 📄 smart-start.ps1
├── 📄 all-options.bat
├── 📄 quick-check.bat
├── 📄 real-check.bat
├── 📄 check-dotnet.bat
├── 📄 run-backend.ps1
├── 📄 print-structure.bat
├── 📄 print-tree.js
├── 📄 kids-programming-lesson.md
└── 📄 урок.pdf
```

## Описание на директориите:

### 🔧 /backend/WeatherApi/
.NET Core 8.0 Web API проект с минимален API

### 🌐 /frontend/
Оригиналната версия с vanilla JavaScript

### 🅰️ /frontend-angular/
Angular 17 версия на приложението
- **/src/app/** - Компоненти, сервиси и модели
- **/src/assets/** - Статични ресурси
- **Конфигурационни файлове** - angular.json, tsconfig.json, package.json

### 📦 /backend-node/ (опционално)
Node.js/Express backend алтернатива

### 📚 Корневи файлове
- **Документация** - README файлове и уроци
- **Скриптове** - Батч и PowerShell скриптове за проверка и стартиране
- **Конфигурация** - Git и други настройки

## Бързи команди:

```bash
# Виж структурата без node_modules
node print-tree.js

# Или използвай Windows tree команда
tree /F /A | findstr /V "node_modules"
```
