// 🎨 Това е главният компонент - като режисьор на филм, който управлява всичко!
import { Component, OnInit } from '@angular/core'; // 📦 Взимаме Component и OnInit от Angular
import { CommonModule } from '@angular/common'; // 🔧 Взимаме основните инструменти (*ngFor, *ngIf...)
import { FormsModule } from '@angular/forms'; // 📝 Взимаме инструменти за форми (за dropdown менюто)
import { WeatherService } from './services/weather.service'; // 🌦️ Взимаме нашия помощник за времето
import { WeatherInfo, Country } from './models/weather.model'; // 📋 Взимаме нашите "формички" за данни

// 🏷️ Декоратор - казва на Angular как да направи компонента
@Component({ // Започваме да описваме компонента
  selector: 'app-root', // 🏷️ Името на компонента в HTML (като <app-root>)
  standalone: true, // 🦾 Казваме: "Този компонент може сам да се грижи за себе си"
  imports: [CommonModule, FormsModule], // 📚 Списък с "библиотеки", които ще използваме
  templateUrl: './app.component.html', // 🖼️ Къде е HTML шаблонът (като сценарий за филм)
  styleUrls: ['./app.component.css'] // 🎨 Къде са стиловете (като костюми за актьорите)
}) // Край на описанието

// 🏠 Главният клас на компонента
export class AppComponent implements OnInit { // Нашият компонент, който изпълнява OnInit договора
  // 🌍 Разширен списък с държави за dropdown менюто
  countries: Country[] = [ // Правим масив с държави
    { value: 'bulgaria', name: 'Bulgaria 🇧🇬' }, // 🇧🇬 България
    { value: 'uk', name: 'United Kingdom 🇬🇧' }, // 🇬🇧 Великобритания
    
  ]; // Край на списъка

  // 🎯 Избрана държава (започваме с България)
  selectedCountry = 'bulgaria'; // Запомняме коя държава е избрана


  // 🌤️ Данни за времето (в началото няма данни - null)
  weatherData: WeatherInfo | null = null; // Кутия за данните (в началото е празна)

  // ⏳ Флаг за зареждане (показва спинер докато чакаме)
  isLoading = false; // В началото не зареждаме нищо

  // ❌ Флаг за грешка (показва съобщение ако нещо се счупи)
  hasError = false; // В началото няма грешки

  // 📝 Съобщение за грешка
  errorMessage = '';

  // 🔨 Конструктор - получава помощника за времето
  constructor(private weatherService: WeatherService) {} // Angular ни дава weatherService

  // 🎬 ngOnInit - изпълнява се веднага след създаването на компонента
  ngOnInit(): void { // Специална функция, която се изпълнява в началото
    // 🚀 Зареждаме времето за България при стартиране
    this.loadWeather(); // Викаме функцията за зареждане
  } // Край на ngOnInit

  /**
   * 🔄 Зарежда информация за времето за избраната държава
   */
  loadWeather(): void { // Функция за зареждане на времето
    this.isLoading = true; // 🎬 Започваме да въртим спинера
    this.hasError = false; // 🧹 Изчистваме старите грешки
    this.errorMessage = ''; // 🧹 Изчистваме старото съобщение за грешка

    // 📞 Звъним на сървиса да донесе данни
    this.weatherService.getWeather(this.selectedCountry).subscribe({ // Абонираме се за отговор
      next: (data) => { // ✅ Когато получим данни...
        this.weatherData = data; // 📦 Слагаме данните в кутията
        this.isLoading = false; // 🛑 Спираме спинера
        if (!data) { // ❓ Ако няма данни...
          this.hasError = true; // 🚨 Вдигаме флага за грешка
          this.errorMessage = 'Не можахме да заредим данните за времето. Моля, проверете API ключа.';
        } // Край на проверката
      }, // Край на успешния случай
      error: (error) => { // ❌ Ако се случи грешка...
        console.error('Грешка:', error); // 📢 Викаме в конзолата
        this.hasError = true; // 🚨 Вдигаме флага за грешка
        this.isLoading = false; // 🛑 Спираме спинера
        this.errorMessage = 'Грешка при зареждане на данните за времето.';
      } // Край на грешката
    }); // Край на абонамента
  } // Край на loadWeather

  /**
   * 🔄 Извиква се при промяна на избраната държава
   */
  onCountryChange(): void { // Функция за смяна на държава

      this.loadWeather(); // 🔄 Зареждаме отново данните
    
  } // Край на onCountryChange

  /**
   * 🔍 Превключва между режим на избор от списък и режим на търсене
   */
  

  /**
   * 🔍 Търси времето за въведения град
   */
  

 }