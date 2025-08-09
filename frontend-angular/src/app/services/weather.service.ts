// 🔧 Това е сервисът - като помощник, който носи данни за времето
import { Injectable } from '@angular/core'; // 💉 Взимаме "инжекцията" - специална Angular магия
import { HttpClient } from '@angular/common/http'; // 📞 Взимаме "телефона" за говорене със сървъра
import { Observable, catchError, of } from 'rxjs'; // 🎭 Взимаме специални инструменти за асинхронни операции
import { WeatherInfo } from '../models/weather.model'; // 📋 Взимаме нашата "формичка" за времето

// 🏷️ Декоратор - казва на Angular, че това е сервис
@Injectable({ // Слагаме етикет "Аз съм сервис!"
  providedIn: 'root' // 🌳 Казваме: "Този сервис е достъпен навсякъде в приложението"
}) // Край на етикета

// 🌦️ Класът WeatherService - нашият помощник за времето
export class WeatherService { // Започваме да правим помощника
  // 🏠 URL адресът на backend API-то (като домашен адрес на сървъра)
  private apiUrl = 'http://localhost:5240/weather'; // Запомняме къде живее сървърът

  // 🔨 Конструктор - специална функция, която се изпълнява при създаване на сервиса
  constructor(private http: HttpClient) { } // Получаваме HttpClient като подарък от Angular

  /**
   * 🌍 Взима информация за времето за дадена държава
   * @param country - кодът на държавата (напр. 'bulgaria', 'uk')
   * @returns Observable с информацията за времето (като обещание за данни)
   */
  getWeather(country: string): Observable<WeatherInfo | null> { // Функция, която взима времето
    // 📤 Правим заявка към сървъра
    return this.http.get<WeatherInfo>(`${this.apiUrl}/${country}`) // Звъним на сървъра и питаме за времето
      .pipe( // 🚰 Използваме "тръба" за обработка на отговора
        catchError(error => { // 🪤 Ако хванем грешка...
          console.error('Грешка при зареждане на данните за времето:', error); // 📢 Викаме в конзолата
          // 🤷 Връщаме null при грешка (празни ръце)
          return of(null); // Казваме "съжалявам, нямам данни"
        }) // Край на хващането на грешки
      ); // Край на тръбата
  } // Край на функцията getWeather
} // Край на класа WeatherService
