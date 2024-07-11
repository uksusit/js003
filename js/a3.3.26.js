
// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.

// Change code below this line
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  const { today: { high: todayHigh, low: todayLow},
    tomorrow: { high: tomorrowHigh, low: tomorrowLow}
} = forecast;
  
    // Change code above this line
    console.log(todayLow, todayHigh, tomorrowLow, todayHigh);
    console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } });