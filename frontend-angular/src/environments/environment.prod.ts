// 🌍 Environment configuration for production
// Тук съхраняваме настройки за production режим

export const environment = {
  production: true, // 🚀 Това е production режим

  // 🌦️ Open-Meteo API настройки
  openMeteo: {
    // 🌐 Base URL за Open-Meteo Weather API
    weatherApiUrl: 'https://api.open-meteo.com/v1/forecast',

    // 🔍 Base URL за Open-Meteo Geocoding API
    geocodingApiUrl: 'https://geocoding-api.open-meteo.com/v1/search',

    // 🌡️ Единици за измерване
    temperatureUnit: 'celsius',

    // 💨 Единици за скорост на вятъра
    windSpeedUnit: 'kmh',

    // 🌧️ Единици за валежи
    precipitationUnit: 'mm',

    // 🕐 Формат на времето
    timeformat: 'iso8601',

    // 🌍 Часова зона
    timezone: 'auto',

    // 📅 Дни за прогноза
    forecastDays: 7,

    // ⏰ Часове за прогноза
    forecastHours: 24
  }
};
