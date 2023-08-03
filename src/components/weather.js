async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=55c87ea085b642b0900113721230208&q=${location}`
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}

// async function getForecast(location) {
//   try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/forecast.json?key=55c87ea085b642b0900113721230208&q=${location}`
//     );
//     const weatherData = await response.json();
//     console.log(weatherData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function precessCurrentWeather(data) {}

// function processForecast(data) {}

export default getWeather;
