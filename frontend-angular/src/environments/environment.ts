// 🌍 Environment configuration for development
// Тук съхраняваме настройки, които се различават между development и production

export const environment = {
  production: false, // 🚧 Това е development режим

  // 🌦️ Open-Meteo API настройки
  openMeteo: {
    // 🌐 Base URL за Open-Meteo Weather API
    weatherApiUrl: 'https://api.open-meteo.com/v1/forecast',

    // 🔍 Base URL за Open-Meteo Geocoding API
    geocodingApiUrl: 'https://geocoding-api.open-meteo.com/v1/search',

    // 🌡️ Единици за измерване
    // temperature_unit: celsius (default), fahrenheit
    temperatureUnit: 'celsius',

    // 💨 Единици за скорост на вятъра
    // wind_speed_unit: kmh (default), ms, mph, kn
    windSpeedUnit: 'kmh',

    // 🌧️ Единици за валежи
    // precipitation_unit: mm (default), inch
    precipitationUnit: 'mm',

    // 🕐 Формат на времето
    // timeformat: iso8601 (default), unixtime
    timeformat: 'iso8601',

    // 🌍 Часова зона (auto = автоматично определяне)
    timezone: 'auto',

    // � Дни за прогноза (максимум 16)
    forecastDays: 7,

    // ⏰ Часове за прогноза (за по-детайлна прогноза)
    forecastHours: 24
  }
};

// 🎉 Предимства на Open-Meteo:
// ✅ Напълно безплатен - няма нужда от API ключ!
// ✅ Високо качество данни от множество метеорологични модели
// ✅ Глобално покритие
// ✅ Без ограничения за заявки
// ✅ Open source проект
// ✅ Поддържа множество езици и единици
// ✅ Включва geocoding API за търсене на градове
