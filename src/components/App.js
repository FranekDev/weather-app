import getWeather from './weather';
import {
  showCurrentWeather,
  additionalWeatherInfo,
  showHourlyForecast,
  showDayWeather
} from './UI';

const formatHourWeather = (weather, container) => {
  const element = container;

  const { time: forecastTime, hourTempC: temp, info, isHourDay } = weather;
  const formatedTime = forecastTime.split(' ')[1];

  showHourlyForecast(element, formatedTime, temp, info, isHourDay);
};

const showDaysForecast = (container, data) => {
  const { date, avgTempC, dayInfo, isSunUp } = data;
  const dayDate = date.split(' ')[0].split('-').reverse().join('.').slice(0, 5);

  showDayWeather(container, dayDate, avgTempC, dayInfo, isSunUp);
};

const App = () => {
  const main = document.createElement('main');
  const city = document.querySelector('.city-input');
  const search = document.querySelector('.search-button');

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

  const hoursForecast = document.createElement('div');
  hoursForecast.classList.add('hours-forecast');

  const hourlyWeather = document.createElement('div');
  hourlyWeather.classList.add('hourly-weather');

  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const cityName = document.querySelector('.city-name');
  const currentDate = document.querySelector('.current-date');

  mainData.appendChild(weatherContainer);

  const showWeather = (hours, day, days) => {
    days.forEach((singleDay) => showDaysForecast(dayForecast, singleDay));

    const { tempC, currentWeatherType, isDay } = day;

    showCurrentWeather(weatherContainer, tempC, currentWeatherType, isDay);

    const { name, lastUpdated: time, feelslikeC, windKph, humidity } = day;
    cityName.textContent = name;

    const date = time.split(' ')[0].split('-').reverse().join('.');
    currentDate.textContent = date;

    additionalWeatherInfo(additionalData, feelslikeC, windKph, humidity);

    hours.forEach((hour) => formatHourWeather(hour, hourlyWeather));
  };

  const fetchWeather = async (cityToFetch = 'Poznan') => {
    try {
      const { hourDetails, dayData, processedDays } = await getWeather(
        cityToFetch
      );

      city.value = '';
      dayForecast.textContent = '';
      additionalData.textContent = '';
      hourlyWeather.textContent = '';

      showWeather(hourDetails, dayData, processedDays);
    } catch (error) {
      console.log(error);
    }
  };

  window.addEventListener('load', () => fetchWeather());

  search.addEventListener('click', () => {
    const cityValue = city.value.trim().length > 0 ? city.value : 'Poznan';
    fetchWeather(cityValue);
  });

  mainData.appendChild(dayForecast);

  mainWeather.appendChild(mainData);
  mainWeather.appendChild(additionalData);

  weatherData.appendChild(mainWeather);
  hoursForecast.appendChild(hourlyWeather);
  weatherData.appendChild(hoursForecast);

  main.appendChild(weatherData);

  document.body.appendChild(main);
};

export default App;
