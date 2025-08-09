# ✅ GitHub Upload Checklist

## 🗂️ Файлове за качване:

### ✅ Backend (.NET)
- [ ] `/backend/WeatherApi/Program.cs`
- [ ] `/backend/WeatherApi/WeatherInfo.cs`
- [ ] `/backend/WeatherApi/WeatherApi.csproj`

### ✅ Backend (Node.js) - опционално
- [ ] `/backend-node/server.js`
- [ ] `/backend-node/package.json`

### ✅ Frontend (Original)
- [ ] `/frontend/index.html`
- [ ] `/frontend/script.js`
- [ ] `/frontend/style.css`

### ✅ Frontend (Angular)
- [ ] `/frontend-angular/src/**` (всички файлове)
- [ ] `/frontend-angular/angular.json`
- [ ] `/frontend-angular/package.json`
- [ ] `/frontend-angular/tsconfig.json`
- [ ] `/frontend-angular/.gitignore`

### ✅ Документация
- [ ] `/README.md`
- [ ] `/EXPLANATION-FOR-KIDS-BG.md`
- [ ] `/.gitignore`

## 🚫 НЕ качвайте:
- ❌ `node_modules/`
- ❌ `.angular/`
- ❌ `dist/`
- ❌ `bin/` и `obj/`
- ❌ `*.log` файлове
- ❌ Временни скриптове (`check-*.bat`, `run-*.bat`)

## 🔧 Бързи команди:

```powershell
# 1. Почисти проекта
.\prepare-for-github.ps1

# 2. Инициализирай Git
git init

# 3. Добави файловете
git add .

# 4. Провери статуса
git status

# 5. Commit
git commit -m "Weather Station - Angular & .NET/Node.js"

# 6. Добави remote
git remote add origin YOUR_GITHUB_URL

# 7. Push
git push -u origin main
```
