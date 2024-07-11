
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