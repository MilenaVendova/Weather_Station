// 🎯 Това е главният файл, който стартира цялото приложение!
import { bootstrapApplication } from '@angular/platform-browser'; // 📦 Взимаме "стартера" на Angular от кутията с инструменти
import { provideHttpClient } from '@angular/common/http'; // 🌐 Взимаме инструмента за "говорене" с интернет
import { AppComponent } from './app/app.component'; // 🏠 Взимаме нашия главен компонент (като главната къща)

// 🚀 Тук казваме на Angular: "Хайде, започни приложението!"
bootstrapApplication(AppComponent, { // Стартираме AppComponent (нашата главна програма)
  providers: [ // 📋 Списък с "помощници", които ще ни трябват
    provideHttpClient() // 🔌 Включваме възможността да правим заявки към сървъра
  ]
}).catch(err => console.error(err)); // 🚨 Ако нещо се счупи, покажи грешката в конзолата
