function processData(data) {
  // console.log('process', data);
  const { current, forecast } = data;
  console.log(current, forecast);

  const {
    temp_c: tempC,
    temp_f: tempF,
    wind_mph: windMph,
    wind_kph: windKph,
    feelslike_c: feelslikeC,
    feelslike_f: feelslikeF,
    last_updated: lastUpdated,
    humidity
  } = current;

  console.log('Current', {
    tempC,
    tempF,
    windKph,
    windMph,
    feelslikeC,
    feelslikeF,
    lastUpdated,
    humidity
  });

  const {
    hour: [...hourData]
  } = forecast.forecastday[0];

  const hourDetails = [];

  hourData.forEach((hour) => {
    const {
      time,
      temp_c: hourTempC,
      temp_f: hourTempF,
      condition: { text: info }
    } = hour;

    hourDetails.push({ time, hourTempC, hourTempF, info });
  });

  console.log('HourDetails', hourDetails);
  // const details = [...hourData, { temp_c: tempC, temp_f: tempF }];
  // console.log('Forecast', hourData);

  return data;
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=55c87ea085b642b0900113721230208&q=${location}`,
      { mode: 'cors' }
    );
    const weatherData = processData(await response.json());
    console.log('async', weatherData);
  } catch (error) {
    console.log(error);
  }
}

export default getWeather;
