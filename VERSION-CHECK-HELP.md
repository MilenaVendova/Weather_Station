# 🔍 Инструкции за проверка на версиите

## Бърза проверка (изберете един начин):

### 1. Windows CMD:
```cmd
cd C:\prj\weather
check-versions.bat
```

### 2. PowerShell (с детайлен анализ):
```powershell
cd C:\prj\weather
.\check-versions.ps1
```

### 3. Node.js (кросплатформен):
```bash
cd C:\prj\weather
node check-versions.js
```

### 4. Ръчна проверка:
```bash
node --version    # Трябва v18.13+
npm --version     # Трябва v8.19+
nvm version       # Ако имате nvm
dotnet --version  # За backend
```

## 🚨 Вашият проблем:

Имате Node.js **v14.17.3**, но Angular 17 изисква **v18.13+**

## 💡 Решения:

### Решение 1: Актуализирайте Node.js
1. Отидете на https://nodejs.org/
2. Свалете LTS версията (20.x)
3. Инсталирайте
4. Рестартирайте терминала

### Решение 2: Използвайте nvm (ако е инсталиран)
```bash
nvm install 18.20.4
nvm use 18.20.4
```

### Решение 3: Използвайте простата версия (РАБОТИ СЕГА!)
```bash
cd C:\prj\weather\frontend-angular
node simple-server.js

# В друг терминал
cd C:\prj\weather\backend-node
npm install && npm start
```

### Решение 4: Използвайте Docker (ако имате)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

## 📊 Таблица със съвместимост:

| Angular | Минимум Node.js | Препоръчан Node.js |
|---------|-----------------|-------------------|
| 17      | 18.13          | 18.x LTS          |
| 16      | 16.14          | 18.x              |
| 15      | 14.20          | 16.x              |
| 14      | 14.15          | 16.x              |

## ✅ След актуализация:

1. Проверете версията:
   ```bash
   node --version
   # Трябва да покаже v18.x.x или по-нова
   ```

2. Стартирайте Angular:
   ```bash
   cd C:\prj\weather\frontend-angular
   npm start
   ```

## 🆘 Ако нищо не работи:

Използвайте готовия batch файл:
```cmd
C:\prj\weather\frontend-angular\run-simple.bat
```

Това ще стартира версията, която работи с Node.js 14!
