# 🚀 СТАРТИРАНЕ НА WEATHER STATION

## 🎯 НАЙ-ЛЕСЕН НАЧИН - Умен старт:

### Windows CMD:
```cmd
smart-start.bat
```

### PowerShell:
```powershell
.\smart-start.ps1
```

**Това автоматично:**
- ✅ Проверява версията на Node.js
- ✅ Избира правилния начин за стартиране
- ✅ Стартира backend и frontend
- ✅ Отваря браузъра

---

## 📊 Проверка на версиите:

### Бърза проверка:
```cmd
quick-check.bat
```

### Детайлна проверка:
```powershell
.\check-versions.ps1
```

---

## 🔧 Ръчно стартиране:

### Ако имате Node.js 18+:
```bash
# Terminal 1
cd backend/WeatherApi
dotnet run

# Terminal 2
cd frontend-angular
npm start
```

### Ако имате Node.js 14-17:
```bash
# Terminal 1
cd backend-node
npm install
npm start

# Terminal 2
cd frontend-angular
node simple-server.js
```

---

## 🆘 Проблеми и решения:

### "Node.js версията е твърде стара"
- **Решение 1**: Актуализирайте Node.js от https://nodejs.org/
- **Решение 2**: Използвайте `smart-start.bat` - ще избере алтернативна версия

### "nvm не е намерен"
- **Решение**: Използвайте директна инсталация на Node.js вместо nvm

### ".NET SDK не е намерен"
- **Решение**: Използвайте Node.js backend (backend-node папката)

---

## 📁 Структура:

```
weather/
├── smart-start.bat       # 🚀 Умен старт (препоръчван)
├── check-versions.bat    # 📊 Проверка на версии
├── backend/              # 🖥️ .NET backend
├── backend-node/         # 🟢 Node.js backend (алтернатива)
├── frontend/             # 📄 Оригинален HTML frontend
└── frontend-angular/     # 🅰️ Angular frontend
    ├── simple-server.js  # 🎯 Работи с Node 14+
    └── run-simple.bat    # 🏃 Бърз старт за simple версия
```

---

## ✅ Препоръчан подход:

1. **Изпълнете**: `smart-start.bat`
2. **Изчакайте** да се заредят серверите
3. **Браузърът** ще се отвори автоматично

Готово! 🎉
