import getWeather from './weather';
import {
  showCurrentWeather,
  threeDayWeather,
  additionalWeatherInfo,
  showHourlyForecast
} from './UI';

const formatHourWeather = (weather, container) => {
  const element = container;
  // element.textContent = '';
  console.log(weather.time.split(' ')[1], weather.hourTempC);
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

  mainData.appendChild(weatherContainer);

  search.addEventListener('click', async () => {
    try {
      // console.log(city.value);
      const { hourDetails, dayData } = await getWeather(city.value);
      // hours = hourDetails;
      // day = dayData;
      // console.log('app', hourDetails, dayData);
      // console.log('Day', dayData.tempC);
      showCurrentWeather(weatherContainer, dayData.tempC, 'Sunny');
      console.log('Hour', hourDetails);
      hourlyWeather.textContent = '';
      hourDetails.forEach((hour) => formatHourWeather(hour, hourlyWeather));
    } catch (error) {
      console.log(error);
    }
  });

  showCurrentWeather(weatherContainer, '25', 'Sunny');
  threeDayWeather(dayForecast);
  additionalWeatherInfo(additionalData);
  showHourlyForecast(hourlyWeather);

  for (let i = 0; i < 24; i++) {
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
