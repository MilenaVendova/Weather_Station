using System.Collections.Generic; // Включваме System.Collections.Generic, за да можем да използваме List<T>

/* ---------- Клас за единичен елемент от прогнозата ---------- */
public class ForecastItem        // Дефинираме клас ForecastItem – представлява един часови прозорец
{                                // от прогнозата (примерно 03:00 с 12 °С)
    public string? Time { get; set; } // Свойство Time – часово време като текст, напр. "03:00"
    public string? Temp { get; set; } // Свойство Temp – температура като текст, напр. "12°"
}

/* ---------- Главният клас, който ще връщаме от API-то ---------- */
public class WeatherInfo         // Дефинираме клас WeatherInfo – съдържа цялата информация за дадена държава / град
{
    public string? Location { get; set; } // Име на мястото, напр. "Sofia, Bulgaria"
    public string? Temperature { get; set; } // Текуща температура, напр. "22°"
    public string? Description { get; set; } // Кратко описание, напр. "Sunny"
    public string? WindSpeed { get; set; } // Скорост на вятъра, напр. "15 km/h"
    public string? Humidity { get; set; } // Влажност, напр. "5%"

    // Прогнозата – списък от ForecastItem обекти
    public List<ForecastItem> Forecast { get; set; } = new();
}
