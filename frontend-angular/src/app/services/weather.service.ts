// 🔧 Това е сервисът - като помощник, който носи данни за времето
import { Injectable } from '@angular/core'; // 💉 Взимаме "инжекцията" - специална Angular магия
import { HttpClient, HttpParams } from '@angular/common/http'; // 📞 Взимаме "телефона" за говорене със сървъра
import { Observable, catchError, of, map, switchMap } from 'rxjs'; // 🎭 Взимаме специални инструменти за асинхронни операции
import {
  WeatherInfo,
  OpenMeteoWeatherResponse,
  OpenMeteoGeocodingResponse,
  OpenMeteoGeocodingResult,
  WMO_WEATHER_CODES
} from '../models/weather.model'; // 📋 Взимаме нашите "формички" за времето
import { environment } from '../../environments/environment'; // 🌍 Взимаме настройките

// 🏷️ Декоратор - казва на Angular, че това е сервис
@Injectable({ // Слагаме етикет "Аз съм сервис!"
  providedIn: 'root' // 🌳 Казваме: "Този сервис е достъпен навсякъде в приложението"
}) // Край на етикета

// 🌦️ Класът WeatherService - нашият помощник за времето
export class WeatherService { // Започваме да правим помощника

  // 🗺️ Речник с координати за различните "държави" (за съвместимост с текущия UI)
  private readonly cityCoordinates: { [key: string]: { lat: number, lon: number, name: string } } = {
    'bulgaria': { lat: 42.6977, lon: 23.3219, name: 'Sofia, Bulgaria' },      // 🇧🇬 София, България
    'uk': { lat: 51.5074, lon: -0.1278, name: 'London, United Kingdom' },     // 🇬🇧 Лондон, Великобритания
    
  };

  // 🔨 Конструктор - специална функция, която се изпълнява при създаване на сервиса
  constructor(private http: HttpClient) { } // Получаваме HttpClient като подарък от Angular

  /**
   * 🌍 Взима информация за времето за дадена държава от Open-Meteo API
   * @param country - кодът на държавата (напр. 'bulgaria', 'uk')
   * @returns Observable с информацията за времето (като обещание за данни)
   */
  getWeather(country: string): Observable<WeatherInfo | null> { // Функция, която взима времето
    // 🗺️ Намираме координатите за тази държава
    const cityData = this.cityCoordinates[country.toLowerCase()];

    if (!cityData) { // ❓ Ако няма такава държава в нашия речник...
      console.error(`Неизвестна държава: ${country}`); // 📢 Викаме в конзолата
      return of(null); // Връщаме празни ръце
    }

    // 📤 Правим заявка към Open-Meteo API с координатите
    return this.getWeatherByCoordinates(cityData.lat, cityData.lon, cityData.name);
  } // Край на функцията getWeather

  /**
   * 🌍 Взима информация за времето по координати от Open-Meteo API
   * @param latitude - географска ширина
   * @param longitude - географска дължина
   * @param locationName - име на локацията (опционално)
   * @returns Observable с информацията за времето
   */
  getWeatherByCoordinates(latitude: number, longitude: number, locationName?: string): Observable<WeatherInfo | null> {
    // 📋 Подготвяме параметрите за API заявката
    const params = new HttpParams()
      .set('latitude', latitude.toString()) // 🌍 Географска ширина
      .set('longitude', longitude.toString()) // 🌍 Географска дължина
      .set('current', 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m') // 🌤️ Текущи данни
      .set('hourly', 'temperature_2m,weather_code,wind_speed_10m') // ⏰ Часови данни за прогноза
      .set('daily', 'weather_code,temperature_2m_max,temperature_2m_min') // 📅 Дневни данни
      .set('temperature_unit', environment.openMeteo.temperatureUnit) // 🌡️ Единица за температура
      .set('wind_speed_unit', environment.openMeteo.windSpeedUnit) // 💨 Единица за вятър
      .set('precipitation_unit', environment.openMeteo.precipitationUnit) // 🌧️ Единица за валежи
      .set('timeformat', environment.openMeteo.timeformat) // 🕐 Формат на времето
      .set('timezone', environment.openMeteo.timezone) // 🌍 Часова зона
      .set('forecast_days', environment.openMeteo.forecastDays.toString()); // 📅 Дни за прогноза

    // 🌐 URL за Open-Meteo Weather API
    const apiUrl = environment.openMeteo.weatherApiUrl;

    // 📤 Правим заявка към Open-Meteo API
    return this.http.get<OpenMeteoWeatherResponse>(apiUrl, { params }) // Звъним на Open-Meteo
      .pipe( // 🚰 Използваме "тръба" за обработка на отговора
        map(response => this.transformOpenMeteoToWeatherInfo(response, locationName)), // 🔄 Превръщаме отговора в наш формат
        catchError(error => { // 🪤 Ако хванем грешка...
          console.error('Грешка при зареждане на данните за времето от Open-Meteo:', error); // 📢 Викаме в конзолата

          // 🔍 Показваме по-подробна информация за грешката
          if (error.status === 400) {
            console.error('❌ Невалидни параметри! Проверете координатите.');
          } else if (error.status === 404) {
            console.error('❌ Локацията не е намерена! Проверете координатите.');
          } else if (error.status >= 500) {
            console.error('❌ Проблем със сървъра на Open-Meteo. Опитайте отново по-късно.');
          }

          // 🤷 Връщаме null при грешка (празни ръце)
          return of(null); // Казваме "съжалявам, нямам данни"
        }) // Край на хващането на грешки
      ); // Край на тръбата
  } // Край на функцията getWeatherByCoordinates

  /**
   * 🔄 Превръща Open-Meteo отговор в наш WeatherInfo формат
   * @param response - отговорът от Open-Meteo API
   * @param locationName - име на локацията (опционално)
   * @returns WeatherInfo обект в нашия формат
   */
  private transformOpenMeteoToWeatherInfo(response: OpenMeteoWeatherResponse, locationName?: string): WeatherInfo {
    // 🌤️ Взимаме текущите данни
    const current = response.current;
    if (!current) {
      throw new Error('Няма текущи данни в отговора от Open-Meteo');
    }

    // 🌡️ Форматираме температурата
    const temperature = `${Math.round(current.temperature_2m)}°`;

    // 💨 Форматираме скоростта на вятъра (вече е в km/h от Open-Meteo)
    const windSpeed = `${Math.round(current.wind_speed_10m)} km/h`;

    // 💧 Форматираме влажността
    const humidity = `${current.relative_humidity_2m}%`;

    // 📍 Форматираме локацията
    const location = locationName || `${response.latitude.toFixed(2)}°, ${response.longitude.toFixed(2)}°`;

    // 📝 Превръщаме WMO кода в описание
    const description = this.getWeatherDescription(current.weather_code);

    // 📊 Създаваме прогноза от часовите данни
    const forecast = this.createForecastFromHourlyData(response);

    return {
      location,
      temperature,
      description,
      windSpeed,
      humidity,
      forecast
    };
  }

  /**
   * 🌦️ Превръща WMO weather code в човешко описание
   * @param code - WMO weather code
   * @returns описание на времето
   */
  private getWeatherDescription(code: number): string {
    return WMO_WEATHER_CODES[code] || `Weather code ${code}`;
  }

  /**
   * 📊 Създава прогноза от часовите данни на Open-Meteo
   * @param response - отговорът от Open-Meteo API
   * @returns масив с прогнозни елементи
   */
  private createForecastFromHourlyData(response: OpenMeteoWeatherResponse) {
    const hourly = response.hourly;
    if (!hourly || !hourly.time || !hourly.temperature_2m) {
      // Ако няма часови данни, създаваме празна прогноза
      return [];
    }

    // 📅 Взимаме следващите 8 часа (на всеки 3 часа)
    const forecastItems = [];

    for (let i = 0; i < 8 && i < hourly.time.length; i += 1) {
      const timeIndex = i * 3; // На всеки 3 часа
      if (timeIndex < hourly.time.length) {
        const time = new Date(hourly.time[timeIndex]);
        const temp = hourly.temperature_2m[timeIndex];

        forecastItems.push({
          time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
          temp: `${Math.round(temp)}°`
        });
      }
    }

    return forecastItems;
  }

  /**
   * 🔍 Търси времето по име на град използвайки Open-Meteo Geocoding API
   * @param cityName - името на града
   * @returns Observable с информацията за времето
   */
  getWeatherByCity(cityName: string): Observable<WeatherInfo | null> {
    if (!cityName.trim()) {
      console.error('❌ Празно име на град!');
      return of(null);
    }

    // 📋 Подготвяме параметрите за Geocoding API заявката
    const geocodingParams = new HttpParams()
      .set('name', cityName.trim()) // 🏙️ Името на града
      .set('count', '1') // 🔢 Искаме само първия резултат
      .set('language', 'en') // 🗣️ Език на резултатите
      .set('format', 'json'); // 📄 JSON формат

    // 🌐 URL за Open-Meteo Geocoding API
    const geocodingUrl = environment.openMeteo.geocodingApiUrl;

    // 📤 Първо търсим координатите на града
    return this.http.get<OpenMeteoGeocodingResponse>(geocodingUrl, { params: geocodingParams })
      .pipe(
        switchMap(geocodingResponse => {
          // 🔍 Проверяваме дали има резултати
          if (!geocodingResponse.results || geocodingResponse.results.length === 0) {
            console.error(`❌ Градът "${cityName}" не е намерен!`);
            return of(null);
          }

          // 📍 Взимаме първия резултат
          const location = geocodingResponse.results[0];
          const locationName = `${location.name}${location.country ? ', ' + location.country : ''}`;

          // 🌦️ Сега търсим времето за тези координати
          return this.getWeatherByCoordinates(location.latitude, location.longitude, locationName);
        }),
        catchError(error => {
          console.error('Грешка при търсене на град:', error);

          // 🔍 Показваме по-подробна информация за грешката
          if (error.status === 400) {
            console.error('❌ Невалидно име на град! Проверете правописа.');
          } else if (error.status >= 500) {
            console.error('❌ Проблем със сървъра на Open-Meteo Geocoding. Опитайте отново по-късно.');
          }

          return of(null);
        })
      );
  }
}