function processData(data) {
  const { current, forecast, location } = data;

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

  // console.log('Current', {
  //   tempC,
  //   tempF,
  //   windKph,
  //   windMph,
  //   feelslikeC,
  //   feelslikeF,
  //   lastUpdated,
  //   humidity
  // });

  const { name } = location;

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

  console.log('HourDetails weather fn', hourDetails);

  const dayData = {
    tempC,
    tempF,
    feelslikeC,
    feelslikeF,
    windKph,
    windMph,
    lastUpdated,
    humidity,
    name
  };
  console.log('Day weather fn', dayData);

  return { hourDetails, dayData };
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=55c87ea085b642b0900113721230208&q=${location}`,
      { mode: 'cors' }
    );
    const { hourDetails, dayData } = processData(await response.json());
    return { hourDetails, dayData };
  } catch (error) {
    console.log(error);
  }
  return null;
}

export default getWeather;
