const forecast = 
[{day: 'Понеділок', tepm: 5},
{day: 'Вівторок', tepm: 3},
{day: 'Середа', tepm: -2},
{day: 'Четверг', tepm: 1},
{day: 'Пятниця', tepm: 2},
{day: 'Субота', tepm: 3},
{day: 'Неділя', tepm: 4}]

// Перетворення температури з градусів Цельсія у градуси Фаренгейта
const toFahrenheit = (c) => c * 9 / 5 + 32 ;

for (const day of forecast){
    console.log(day.day, day.tepm);
    console.log(toFahrenheit(day.tepm));

    if (day.tepm < 0)
        console.log("Морозно");
}

