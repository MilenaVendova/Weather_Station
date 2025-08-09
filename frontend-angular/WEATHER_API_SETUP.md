# 🌦️ Open-Meteo Weather API Setup Instructions

## 📋 Overview
This Angular application now fetches real weather data from **Open-Meteo API** - a completely free, open-source weather service that requires **NO API KEY**!

## 🎉 Why Open-Meteo?

✅ **Completely FREE** - No API key required!
✅ **No registration** needed
✅ **Unlimited requests** - No rate limiting
✅ **High-quality data** from multiple weather models
✅ **Global coverage** - Weather data worldwide
✅ **Open source** project
✅ **Privacy-focused** - No tracking
✅ **Fast and reliable** - Excellent uptime

## ⚙️ Configuration (Already Done!)

The application is **ready to use** out of the box! No configuration needed.

The environment files are already configured:
```typescript
// frontend-angular/src/environments/environment.ts
export const environment = {
  production: false,
  openMeteo: {
    weatherApiUrl: 'https://api.open-meteo.com/v1/forecast',
    geocodingApiUrl: 'https://geocoding-api.open-meteo.com/v1/search',
    temperatureUnit: 'celsius',
    windSpeedUnit: 'kmh',
    // ... other settings
  }
};
```

## 🚀 Running the Application

1. **Start Angular Dev Server**:
   ```bash
   cd frontend-angular
   npm start
   ```

2. **Open Browser**: Navigate to `http://localhost:4200`

3. **Start using immediately** - No setup required! 🎉

## ✨ Features

### 🌍 Country Selection
- Choose from 8 predefined countries with precise coordinates:
  - Bulgaria 🇧🇬 → Sofia (42.70°N, 23.32°E)
  - United Kingdom 🇬🇧 → London (51.51°N, 0.13°W)
  - United States 🇺🇸 → New York (40.71°N, 74.01°W)
  - Germany 🇩🇪 → Berlin (52.52°N, 13.41°E)
  - France 🇫🇷 → Paris (48.86°N, 2.35°E)
  - Italy 🇮🇹 → Rome (41.90°N, 12.50°E)
  - Spain 🇪🇸 → Madrid (40.42°N, 3.70°W)
  - Greece 🇬🇷 → Athens (37.98°N, 23.73°E)

### 🔍 Advanced City Search
- Click "🔍 Search City" to switch to search mode
- Enter **any city worldwide** (e.g., "Tokyo", "Sydney", "Cairo", "Mumbai")
- **Intelligent geocoding** finds cities automatically
- **Real-time validation** with helpful error messages
- Press Enter or click Search button
- Switch back to country list with "📍 Select from List"

### 📊 Real Weather Data from Open-Meteo
- **Current Temperature**: Live data in Celsius from multiple weather models
- **Weather Description**: Current conditions using WMO weather codes
- **Wind Speed**: Real-time wind data in km/h
- **Humidity**: Actual relative humidity percentage
- **Location**: Precise city and country name from geocoding
- **Real Forecast**: 8-hour forecast with actual hourly data

## 🛠️ Technical Details

### API Endpoints Used
- **Weather Data**: `https://api.open-meteo.com/v1/forecast`
- **City Search**: `https://geocoding-api.open-meteo.com/v1/search`

### Weather API Parameters
- `latitude` & `longitude`: Precise coordinates
- `current`: Real-time weather variables
- `hourly`: Hourly forecast data
- `daily`: Daily forecast data
- `temperature_unit`: celsius
- `wind_speed_unit`: kmh
- `timezone`: auto (automatic detection)

### Geocoding API Parameters
- `name`: City name to search
- `count`: Number of results
- `language`: Result language
- `format`: json

### Weather Data Sources
Open-Meteo combines data from multiple sources:
- 🌍 **ECMWF** (European Centre for Medium-Range Weather Forecasts)
- 🇺🇸 **NOAA GFS** (Global Forecast System)
- 🇩🇪 **DWD ICON** (German Weather Service)
- 🇫🇷 **Météo-France ARPEGE**
- 🇨🇦 **Environment Canada GEM**

### Error Handling
- ❌ Invalid coordinates detection
- ❌ City not found handling
- ❌ Network error recovery
- ❌ Malformed response handling
- ❌ Geocoding service failures

### Mobile Responsive
- 📱 Optimized for mobile devices
- 📱 Touch-friendly buttons
- 📱 Responsive search interface

## 🔧 Troubleshooting

### "City Not Found"
- Try different spelling (e.g., "München" vs "Munich")
- Use English names when possible
- Try adding country name (e.g., "Paris, France")
- Check for typos in city name

### "No Weather Data"
- Check internet connection
- Verify coordinates are valid
- Try a different city
- Check browser console for detailed errors

### "Slow Loading"
- Open-Meteo servers might be busy
- Check your internet connection
- Try refreshing the page
- The service is usually very fast

## 🎯 Next Steps

To enhance this application further, you could:

1. **Extended Forecast**: Use Open-Meteo's 16-day forecast
2. **Weather Maps**: Add precipitation and temperature maps
3. **Geolocation**: Auto-detect user's location using browser API
4. **Favorites**: Save favorite cities in localStorage
5. **Weather Alerts**: Show severe weather warnings
6. **Charts**: Display temperature and precipitation trends
7. **Historical Data**: Show past weather data
8. **Multiple Units**: Toggle between Celsius/Fahrenheit, km/h vs mph
9. **Weather Radar**: Integrate precipitation radar
10. **Air Quality**: Add air quality index data
11. **UV Index**: Show UV radiation levels
12. **Sunrise/Sunset**: Display solar data

## 🌟 Advanced Features Available in Open-Meteo

Open-Meteo offers many advanced features you could integrate:

- 🌊 **Marine Weather**: Ocean wave height, direction, period
- 🌾 **Agricultural Data**: Soil temperature, moisture
- ❄️ **Snow Data**: Snow depth, snowfall
- 🌡️ **Climate Data**: Historical weather statistics
- 🌪️ **Extreme Weather**: Storm tracking, severe weather alerts
- 🛰️ **Satellite Data**: Cloud cover, radiation
- 🌬️ **Wind Data**: Wind gusts, direction at multiple altitudes

## 📚 Resources

- [Open-Meteo API Documentation](https://open-meteo.com/en/docs)
- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)
- [WMO Weather Codes](https://open-meteo.com/en/docs#weathervariables)
- [Angular HttpClient Guide](https://angular.io/guide/http)
- [Angular Environment Configuration](https://angular.io/guide/build#configuring-application-environments)
- [Open-Meteo GitHub Repository](https://github.com/open-meteo/open-meteo)
