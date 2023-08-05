import getWeather from './weather';
import {
  showCurrentWeather,
  threeDayWeather,
  additionalWeatherInfo,
  showHourlyForecast
} from './UI';

const App = () => {
  const main = document.createElement('main');
  const city = document.querySelector('.city-input');
  const search = document.querySelector('.search-button');

  search.addEventListener('click', () => {
    console.log(city.value);
    getWeather(city.value);
  });

  const weatherData = document.createElement('div');
  weatherData.classList.add('weather-data');
  const dayForecast = document.createElement('div');
  dayForecast.classList.add('day-forecast');

  const mainWeather = document.createElement('div');
  mainWeather.classList.add('main-weather');

  const mainData = document.createElement('div');
  mainData.classList.add('main-data');

  const additionalData = document.createElement('div');
  additionalData.classList.add('additional-data');

  const hourlyWeather = document.createElement('div');
  hourlyWeather.classList.add('hourly-weather');

  showCurrentWeather(mainData, '25', 'Sunny');
  threeDayWeather(dayForecast);
  additionalWeatherInfo(additionalData);
  showHourlyForecast(hourlyWeather);

  for (let i = 0; i < 14; i++) {
    showHourlyForecast(hourlyWeather);
  }

  mainData.appendChild(dayForecast);

  mainWeather.appendChild(mainData);
  mainWeather.appendChild(additionalData);

  weatherData.appendChild(mainWeather);
  weatherData.appendChild(hourlyWeather);

  main.appendChild(weatherData);

  document.body.appendChild(main);
};

export default App;
