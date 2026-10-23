const forecast = 
[{day: 'Понеділок', tepm: 5, description: 'Хмарно'},
{day: 'Вівторок', tepm: 3, description: 'Хмарно'},
{day: 'Середа', tepm: -2, description: 'Ясно'},
{day: 'Четверг', tepm: 1, description: 'Ясно'},
{day: 'Пятниця', tepm: 2, description: 'Помірно'},
{day: 'Субота', tepm: 3, description: 'Помірно'},
{day: 'Неділя', tepm: 4, description: 'Ясно'}]

// Перетворення температури з градусів Цельсія у градуси Фаренгейта
const toFahrenheit = (c) => c * 9 / 5 + 32 ;

for (const day of forecast){
    console.log(day.day, day.tepm);
    console.log(toFahrenheit(day.tepm));

    if (day.tepm < 0)
        console.log("Морозно");
}

const card = document.querySelector('.weekend_day');
card.remove();
const current_weather = document.querySelector('#forecast');

for (const weather_day of forecast) {
    let article;
    article = document.createElement('article');
    let h3;
    h3 = document.createElement('h3');
    h3.textContent = weather_day.day;
    let p;
    p = document.createElement('p');
    p.textContent = weather_day.tepm + "°C; " + weather_day.description;
    article.append (h3, p);
    if (weather_day.tepm < 0)
    article.classList.add('cold');
    current_weather.append(article);
}


function showWeather(forecast) {
    for (const weather_day of forecast) {
        let article;
        article = document.createElement('article');
        article.dataset.temp = weather_day.tepm;
        let h3;
        h3 = document.createElement('h3');
        h3.textContent = weather_day.day;
        let p;
        p = document.createElement('p');
        p.textContent = weather_day.tepm + "°C; " + weather_day.description;
        article.append (h3, p);
        if (weather_day.tepm < 0)
        article.classList.add('cold');
        current_weather.append(article);
        }
    }

// Вітображення прогнозу погоди
showWeather(forecast)

const temp = document.querySelector('#avg-temp');
let minTempetature;
let sum = 0;
for (const weather_day of forecast) {
sum += weather_day.tepm;
}
const average = sum / forecast.length;
temp.textContent = "Середня температура: " + average.toFixed(2) + "°C";
