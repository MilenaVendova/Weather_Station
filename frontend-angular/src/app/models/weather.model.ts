// 🌟 Това е файлът с интерфейси - като шаблони за нашите данни
// Интерфейсите са като формички за сладки - казват каква форма трябва да имат данните

// ========== LEGACY INTERFACES (за съвместимост с текущия UI) ==========

// 🌡️ Интерфейс за един елемент от прогнозата (един час от деня)
export interface ForecastItem { // Правим "формичка" за един час от прогнозата
  time: string;   // ⏰ Часът като текст (например "12:00")
  temp: string;   // 🌡️ Температурата като текст (например "25°")
} // Край на формичката за прогноза

// 🌤️ Интерфейс за цялата информация за времето (legacy format)
export interface WeatherInfo { // Правим голяма "формичка" за всичко за времето
  location: string;      // 📍 Мястото (например "София, България")
  temperature: string;   // 🌡️ Сегашната температура (например "22°")
  description: string;   // 📝 Описание (например "Слънчево")
  windSpeed: string;     // 💨 Скорост на вятъра (например "15 km/h")
  humidity: string;      // 💧 Влажност (например "5%")
  forecast: ForecastItem[]; // 📊 Списък с прогнозите за деня (масив от ForecastItem)
} // Край на голямата формичка

// 🌍 Интерфейс за държава в падащото меню
export interface Country { // Формичка за една държава в менюто
  value: string;  // 🔑 Кодът на държавата (например "bulgaria")
  name: string;   // 🏷️ Името на държавата (например "България")
} // Край на формичката за държава

// ========== OPEN-METEO API INTERFACES ==========

// 🌐 Geocoding API - Търсене на градове
export interface OpenMeteoGeocodingResult {
  id: number;           // 🆔 Уникален ID на локацията
  name: string;         // 🏷️ Име на града
  latitude: number;     // 🌍 Географска ширина
  longitude: number;    // 🌍 Географска дължина
  elevation?: number;   // 🏔️ Височина над морското равнище (опционално)
  timezone?: string;    // 🕐 Часова зона (опционално)
  feature_code?: string; // 🏷️ Тип локация (опционално)
  country_code?: string; // 🏳️ Код на държавата (опционално)
  country?: string;     // 🏳️ Име на държавата (опционално)
  admin1?: string;      // 🏛️ Първо административно ниво (опционално)
  admin2?: string;      // 🏛️ Второ административно ниво (опционално)
  population?: number;  // 👥 Население (опционално)
}

// 🔍 Отговор от Geocoding API
export interface OpenMeteoGeocodingResponse {
  results?: OpenMeteoGeocodingResult[]; // 📋 Масив с резултати (може да е празен)
}

// ⏰ Часови данни от Open-Meteo Weather API
export interface OpenMeteoHourlyData {
  time: string[];                    // ⏰ Масив с времена (ISO 8601)
  temperature_2m: number[];          // 🌡️ Температура на 2м (°C)
  relative_humidity_2m: number[];    // 💧 Относителна влажност на 2м (%)
  apparent_temperature: number[];    // 🤔 Усещана температура (°C)
  precipitation: number[];           // 🌧️ Валежи (mm)
  weather_code: number[];            // 🌦️ Код на времето (WMO)
  cloud_cover: number[];             // ☁️ Облачност (%)
  wind_speed_10m: number[];          // 💨 Скорост на вятъра на 10м (km/h)
  wind_direction_10m: number[];      // 🧭 Посока на вятъра на 10м (°)
  wind_gusts_10m?: number[];         // 💨 Порив на вятъра на 10м (km/h) (опционално)
  surface_pressure?: number[];       // 📊 Налягане на повърхността (hPa) (опционално)
  visibility?: number[];             // 👁️ Видимост (m) (опционално)
}

// 📅 Дневни данни от Open-Meteo Weather API
export interface OpenMeteoDailyData {
  time: string[];                    // 📅 Масив с дати (ISO 8601)
  weather_code: number[];            // 🌦️ Код на времето (WMO)
  temperature_2m_max: number[];      // 🔼 Максимална температура (°C)
  temperature_2m_min: number[];      // 🔽 Минимална температура (°C)
  sunrise: string[];                 // 🌅 Изгрев (ISO 8601)
  sunset: string[];                  // 🌇 Залез (ISO 8601)
  precipitation_sum: number[];       // 🌧️ Сума валежи (mm)
  wind_speed_10m_max: number[];      // 💨 Максимална скорост на вятъра (km/h)
  wind_direction_10m_dominant: number[]; // 🧭 Доминираща посока на вятъра (°)
}

// 🌤️ Текущи данни от Open-Meteo Weather API
export interface OpenMeteoCurrentData {
  time: string;                      // ⏰ Време (ISO 8601)
  interval: number;                  // ⏱️ Интервал в секунди
  temperature_2m: number;            // 🌡️ Температура на 2м (°C)
  relative_humidity_2m: number;      // 💧 Относителна влажност на 2м (%)
  apparent_temperature: number;      // 🤔 Усещана температура (°C)
  is_day: number;                    // ☀️ Дали е ден (1) или нощ (0)
  precipitation: number;             // 🌧️ Валежи (mm)
  weather_code: number;              // 🌦️ Код на времето (WMO)
  cloud_cover: number;               // ☁️ Облачност (%)
  wind_speed_10m: number;            // 💨 Скорост на вятъра на 10м (km/h)
  wind_direction_10m: number;        // 🧭 Посока на вятъра на 10м (°)
  wind_gusts_10m?: number;           // 💨 Порив на вятъра на 10м (km/h) (опционално)
  surface_pressure?: number;         // 📊 Налягане на повърхността (hPa) (опционално)
}

// 📊 Единици за измерване от Open-Meteo API
export interface OpenMeteoUnits {
  time: string;                      // ⏰ Единица за време
  temperature_2m: string;            // 🌡️ Единица за температура
  relative_humidity_2m: string;      // 💧 Единица за влажност
  apparent_temperature: string;      // 🤔 Единица за усещана температура
  precipitation: string;             // 🌧️ Единица за валежи
  weather_code: string;              // 🌦️ Единица за код на времето
  cloud_cover: string;               // ☁️ Единица за облачност
  wind_speed_10m: string;            // 💨 Единица за скорост на вятъра
  wind_direction_10m: string;        // 🧭 Единица за посока на вятъра
}

// 🌍 Пълен отговор от Open-Meteo Weather API
export interface OpenMeteoWeatherResponse {
  latitude: number;                  // 🌍 Географска ширина
  longitude: number;                 // 🌍 Географска дължина
  generationtime_ms: number;         // ⚡ Време за генериране (ms)
  utc_offset_seconds: number;        // 🕐 Отместване от UTC (секунди)
  timezone: string;                  // 🕐 Часова зона
  timezone_abbreviation: string;     // 🕐 Съкращение на часовата зона
  elevation: number;                 // 🏔️ Височина над морското равнище
  current?: OpenMeteoCurrentData;    // 🌤️ Текущи данни (опционално)
  current_units?: OpenMeteoUnits;    // 📊 Единици за текущи данни (опционално)
  hourly?: OpenMeteoHourlyData;      // ⏰ Часови данни (опционално)
  hourly_units?: OpenMeteoUnits;     // 📊 Единици за часови данни (опционално)
  daily?: OpenMeteoDailyData;        // 📅 Дневни данни (опционално)
  daily_units?: OpenMeteoUnits;      // 📊 Единици за дневни данни (опционално)
}

// 🌦️ WMO Weather Code Descriptions (за превод на кодовете)
export const WMO_WEATHER_CODES: { [key: number]: string } = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow fall',
  73: 'Moderate snow fall',
  75: 'Heavy snow fall',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
};
