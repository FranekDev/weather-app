import getWeather from './weather';
import {
  showCurrentWeather,
  threeDayWeather,
  additionalWeatherInfo,
  showHourlyForecast
} from './UI';

const formatHourWeather = (weather, container) => {
  // console.log(weather);
  const element = container;
  // element.textContent = '';
  // console.log(weather.time.split(' ')[1], weather.hourTempC);
  const time = weather.time.split(' ')[1];
  const temp = weather.hourTempC;
  showHourlyForecast(element, time, temp);
};

const App = () => {
  const main = document.createElement('main');
  const city = document.querySelector('.city-input');
  const search = document.querySelector('.search-button');

  // Wykonuje szybciej niz pobierze dane z weather api
  // console.log('Hour', hours, 'Day', day.tempC);

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

  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const cityName = document.querySelector('.city-name');
  const currentDate = document.querySelector('.current-date');

  mainData.appendChild(weatherContainer);

  window.addEventListener('load', async () => {
    try {
      const defaultCity = 'Poznan';
      const { hourDetails, dayData } = await getWeather(defaultCity);

      showCurrentWeather(weatherContainer, dayData.tempC, 'Sunny');

      const {
        name,
        lastUpdated: time,
        feelslikeC,
        windKph,
        humidity
      } = dayData;

      cityName.textContent = name;

      const date = time.split(' ')[0].split('-').reverse().join('.');
      currentDate.textContent = date;

      additionalWeatherInfo(additionalData, feelslikeC, windKph, humidity);
      hourlyWeather.textContent = '';
      hourDetails.forEach((hour) => formatHourWeather(hour, hourlyWeather));
    } catch (error) {
      console.log(error);
    }
  });

  search.addEventListener('click', async () => {
    try {
      const { hourDetails, dayData } = await getWeather(city.value);
      city.value = '';

      showCurrentWeather(weatherContainer, dayData.tempC, 'Sunny');
      const {
        name,
        lastUpdated: time,
        feelslikeC,
        windKph,
        humidity
      } = dayData;

      cityName.textContent = name;

      const date = time.split(' ')[0].split('-').reverse().join('.');
      currentDate.textContent = date;

      additionalData.textContent = '';
      additionalWeatherInfo(additionalData, feelslikeC, windKph, humidity);

      console.log('Hour', hourDetails);
      hourlyWeather.textContent = '';
      hourDetails.forEach((hour) => formatHourWeather(hour, hourlyWeather));
    } catch (error) {
      console.log(error);
    }
  });

  // showCurrentWeather(weatherContainer, '25', 'Sunny');
  threeDayWeather(dayForecast);
  // additionalWeatherInfo(additionalData);
  // showHourlyForecast(hourlyWeather);

  // for (let i = 0; i < 24; i++) {
  // showHourlyForecast(hourlyWeather);
  // }

  mainData.appendChild(dayForecast);

  mainWeather.appendChild(mainData);
  mainWeather.appendChild(additionalData);

  weatherData.appendChild(mainWeather);
  weatherData.appendChild(hourlyWeather);

  main.appendChild(weatherData);

  document.body.appendChild(main);
};

export default App;
