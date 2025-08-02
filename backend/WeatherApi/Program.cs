//-----------------------------------------------------------------------------
// using директиви – казваме на компилатора кои “кутии с играчки” ще отворим.
//-----------------------------------------------------------------------------
using Microsoft.AspNetCore.Builder;      // 👉 Тук е класа WebApplication + extension-методите за минималните API.
using System.Collections.Generic;        // 👉 Нужен ни е Dictionary<T,T> и List<T> за нашите данни “в паметта”.

//-----------------------------------------------------------------------------
// 1) Създаваме “builder” – входна точка за конфигурация + Dependency Injection.
//    ⇨ Можеш да си го представиш като кутия, където добавяме услуги (services),
//      а после казваме “Build!” и получаваме готов уеб-сървър.
//-----------------------------------------------------------------------------
var builder = WebApplication.CreateBuilder(args);   // args = аргументи от командния ред

//-----------------------------------------------------------------------------
// 2) CORS (Cross-Origin Resource Sharing)
//    ✍️ ЗАЩО?  HTML файлът се сервира от http://localhost:3000,
//              а API-то слуша на http://localhost:5240 – браузърът ги счита
//              за РАЗЛИЧНИ origin-и и по подразбиране блокира повикването.
//    ↳ С този блок казваме: „Разрешавам на фронтенда (3000) да чете мои
//       отговори, какъвто и метод/заглавки да използва.”
//-----------------------------------------------------------------------------
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.WithOrigins("http://localhost:3000")     // ⚠️ Ограничаваме само до нужния origin.
              .AllowAnyMethod()                         // Позволяваме GET, POST, PUT, DELETE…
              .AllowAnyHeader());                       // …и всякакви custom заглавки.
});

//-----------------------------------------------------------------------------
// 3) Строим (build) WebApplication – на този етап DI-контейнерът е заключен
//    и можем да добавяме само middleware + endpoints.
//-----------------------------------------------------------------------------
var app = builder.Build();

//-----------------------------------------------------------------------------
// 4) Включваме CORS middleware – то чете политиката по-горе и, ако Origin-ът
//    е разрешен, добавя Access-Control-Allow-* заглавките към отговора.
//    🔑 Редът е важен: трябва да бъде ПРЕДИ MapGet, за да “хване” и тях.
//-----------------------------------------------------------------------------
app.UseCors();

//-----------------------------------------------------------------------------
// 5) Псевдо-база с данни – Dictionary<string, WeatherInfo>
//    • Ключът “bulgaria” или “uk” се търси без значение от главни/малки букви.
//    • WeatherInfo e наш клас-модел (виж WeatherInfo.cs).
//-----------------------------------------------------------------------------
var weatherData = new Dictionary<string, WeatherInfo>(StringComparer.OrdinalIgnoreCase)
{
    // ---------- Запис за България ------------------------------------------------
    ["bulgaria"] = new WeatherInfo
    {
        Location = "Sofia, Bulgaria", // Пълно име на мястото
        Temperature = "22°",             // Стрингове за простота
        Description = "Sunny",
        WindSpeed = "15 km/h",
        Humidity = "5%",
        Forecast = new List<ForecastItem> // 24-часова прогноза (през 3 часа)
        {
            new() { Time = "00:00", Temp = "15°" },
            new() { Time = "03:00", Temp = "12°" },
            new() { Time = "06:00", Temp = "14°" },
            new() { Time = "09:00", Temp = "20°" },
            new() { Time = "12:00", Temp = "26°" },
            new() { Time = "15:00", Temp = "27°" },
            new() { Time = "18:00", Temp = "23°" },
            new() { Time = "21:00", Temp = "19°" },
        }
    },

    // ---------- Запис за Обединеното кралство ------------------------------------
    ["uk"] = new WeatherInfo
    {
        Location = "London, UK",
        Temperature = "8°",
        Description = "Rainy",
        WindSpeed = "22 km/h",
        Humidity = "85%",
        Forecast = new()
        {
            new() { Time = "00:00", Temp = "6°"  },
            new() { Time = "03:00", Temp = "4°"  },
            new() { Time = "06:00", Temp = "5°"  },
            new() { Time = "09:00", Temp = "8°"  },
            new() { Time = "12:00", Temp = "11°" },
            new() { Time = "15:00", Temp = "11°" },
            new() { Time = "18:00", Temp = "8°"  },
            new() { Time = "21:00", Temp = "7°"  },
        }
    }
};

//-----------------------------------------------------------------------------
// 6) MapGet("/weather/{country}")
//    • Минимален синтаксис – ламбда вместо контролер.
//    • Results.Ok, Results.NotFound, Results.BadRequest генерират съответен
//      HTTP статус + JSON тяло (благодарение на implicit JSON serialization).
//-----------------------------------------------------------------------------
app.MapGet("/weather/{country}", (string country) =>
{
    // ▼ Проверка 1 – клиентът не е подал параметър (пример: /weather/ )
    if (string.IsNullOrWhiteSpace(country))
    {
        return Results.BadRequest(new
        {
            Message = "Country parameter is required" // ще се сериализира до { "message": "..."}
        });
    }

    // ▼ Проверка 2 – имаме ли данни за тази държава?
    return weatherData.TryGetValue(country, out var info)
        ? Results.Ok(info)                               // 200 OK + WeatherInfo JSON
        : Results.NotFound(new { Message = "Country not found" }); // 404, ако липсва
});

//-----------------------------------------------------------------------------
// 7) app.Run() – на този ред Kestrel започва да слуша.
//    Адресите се изписват в конзолата, напр.:
//    Now listening on: http://localhost:5240
//-----------------------------------------------------------------------------
app.Run();

/*------------------------------------------------------------------------------
  ✨ Кратка „карта“ как минава всяка заявка от браузъра:

  1. Фронт-ендът прави fetch("http://localhost:5240/weather/bulgaria")
  2. Браузърът вижда, че origin-ът е различен (3000 → 5240) ⇒
     изпраща „pre-flight“ OPTIONS и чака Access-Control-Allow-Origin.
  3. Middleware-ът app.UseCors() добавя заглавка
     Access-Control-Allow-Origin: http://localhost:3000
  4. Ламбдата MapGet връща 200 OK + JSON.
  5. Фронт-ендът попълва DOM елементите.

  Тази mini-архитектура = „Frontend (static) + Backend (minimal API)“.
------------------------------------------------------------------------------*/
