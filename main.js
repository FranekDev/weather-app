/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/components/weather.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/components/UI.js");



const formatHourWeather = (weather, container) => {
  const element = container;

  const { time: forecastTime, hourTempC: temp, info } = weather;
  const formatedTime = forecastTime.split(' ')[1];

  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showHourlyForecast)(element, formatedTime, temp, info);
};

const showDaysForecast = (container, data) => {
  const { date, avgTempC, dayInfo } = data;
  const dayDate = date.split(' ')[0].split('-').reverse().join('.').slice(0, 5);

  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showDayWeather)(container, dayDate, avgTempC, dayInfo);
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
      const { hourDetails, dayData, processedDays } = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(
        defaultCity
      );

      dayForecast.textContent = '';
      processedDays.forEach((day) => showDaysForecast(dayForecast, day));

      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showCurrentWeather)(weatherContainer, dayData.tempC, 'Sunny');

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

      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.additionalWeatherInfo)(additionalData, feelslikeC, windKph, humidity);
      hourlyWeather.textContent = '';
      hourDetails.forEach((hour) => formatHourWeather(hour, hourlyWeather));
    } catch (error) {
      console.log(error);
    }
  });

  search.addEventListener('click', async () => {
    try {
      const { hourDetails, dayData, processedDays } = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(
        city.value
      );
      city.value = '';

      dayForecast.textContent = '';
      processedDays.forEach((day) => showDaysForecast(dayForecast, day));

      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showCurrentWeather)(weatherContainer, dayData.tempC, 'Sunny');

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
      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.additionalWeatherInfo)(additionalData, feelslikeC, windKph, humidity);

      hourlyWeather.textContent = '';
      hourDetails.forEach((hour) => formatHourWeather(hour, hourlyWeather));
    } catch (error) {
      console.log(error);
    }
  });

  mainData.appendChild(dayForecast);

  mainWeather.appendChild(mainData);
  mainWeather.appendChild(additionalData);

  weatherData.appendChild(mainWeather);
  weatherData.appendChild(hourlyWeather);

  main.appendChild(weatherData);

  document.body.appendChild(main);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showGithubLogo = () => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', '#515151');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  iconPath.setAttribute(
    'd',
    'M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const Footer = () => {
  const footer = document.createElement('footer');

  const footerInfo = document.createElement('div');

  const text = document.createElement('span');
  text.textContent = 'Created By FranekDev';

  const githubLink = document.createElement('a');
  githubLink.appendChild(showGithubLogo());
  githubLink.href = 'https://github.com/FranekDev/weather-app';
  githubLink.target = 'blank';

  footerInfo.appendChild(text);
  footerInfo.appendChild(githubLink);
  footer.appendChild(footerInfo);

  document.body.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const searchIconSvg = () => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', '#515151');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  iconPath.setAttribute(
    'd',
    'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const Header = () => {
  const header = document.createElement('header');

  const blankDiv = document.createElement('div');
  blankDiv.classList.add('ghost');
  header.appendChild(blankDiv);

  const cityData = document.createElement('div');
  cityData.classList.add('city-data');

  const cityName = document.createElement('span');
  cityName.classList.add('city-name');

  const date = document.createElement('span');
  date.classList.add('current-date');

  cityData.appendChild(cityName);
  cityData.appendChild(date);

  const forum = document.createElement('form');
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');

  const cityInput = document.createElement('input');
  cityInput.classList.add('city-input');
  cityInput.type = 'text';
  cityInput.placeholder = 'City';

  const searchIcon = document.createElement('svg');
  const searchButton = document.createElement('button');
  searchButton.classList.add('search-button');

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
  });

  searchIcon.appendChild(searchIconSvg());
  searchButton.appendChild(searchIcon);

  searchContainer.appendChild(cityInput);
  searchContainer.appendChild(searchButton);

  forum.appendChild(searchContainer);

  header.appendChild(cityData);
  header.appendChild(forum);

  document.body.appendChild(header);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   additionalWeatherInfo: () => (/* binding */ additionalWeatherInfo),
/* harmony export */   showCurrentWeather: () => (/* binding */ showCurrentWeather),
/* harmony export */   showDayWeather: () => (/* binding */ showDayWeather),
/* harmony export */   showHourForecast: () => (/* binding */ showHourForecast),
/* harmony export */   showHourlyForecast: () => (/* binding */ showHourlyForecast),
/* harmony export */   threeDayWeather: () => (/* binding */ threeDayWeather)
/* harmony export */ });
const getWeatherIcon = (weather) => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  console.log('Weather Icon:', weather);

  iconSvg.setAttribute('fill', '#837970');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  iconPath.setAttribute(
    'd',
    'M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const getDegreesIcon = () => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', '#837970');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  iconPath.setAttribute(
    'd',
    'M4.5 10C2.567 10 1 8.433 1 6.5C1 4.567 2.567 3 4.5 3C6.433 3 8 4.567 8 6.5C8 8.433 6.433 10 4.5 10ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8ZM22 10H20C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10V15C12 17.2091 13.7909 19 16 19C18.2091 19 20 17.2091 20 15H22C22 18.3137 19.3137 21 16 21C12.6863 21 10 18.3137 10 15V10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const getWindIcon = () => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', '#837970');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  iconPath.setAttribute(
    'd',
    'M10.5 17H4V15H10.5C12.433 15 14 16.567 14 18.5C14 20.433 12.433 22 10.5 22C8.99957 22 7.71966 21.0559 7.22196 19.7293L9.09513 19.0268C9.30843 19.5954 9.85696 20 10.5 20C11.3284 20 12 19.3284 12 18.5C12 17.6716 11.3284 17 10.5 17ZM5 11H18.5C20.433 11 22 12.567 22 14.5C22 16.433 20.433 18 18.5 18C16.9996 18 15.7197 17.0559 15.222 15.7293L17.0951 15.0268C17.3084 15.5954 17.857 16 18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H13.5C14.3284 7 15 6.32843 15 5.5C15 4.67157 14.3284 4 13.5 4C12.857 4 12.3084 4.40463 12.0951 4.97317L10.222 4.27073C10.7197 2.94414 11.9996 2 13.5 2C15.433 2 17 3.567 17 5.5C17 7.433 15.433 9 13.5 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const getHumidityIcon = () => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', '#837970');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  iconPath.setAttribute(
    'd',
    'M7.05025 8.04673L12 3.09698L16.9497 8.04673C19.6834 10.7804 19.6834 15.2126 16.9497 17.9462C14.2161 20.6799 9.78392 20.6799 7.05025 17.9462C4.31658 15.2126 4.31658 10.7804 7.05025 8.04673ZM18.364 6.63252L12 0.268555L5.63604 6.63252C2.12132 10.1472 2.12132 15.8457 5.63604 19.3604C9.15076 22.8752 14.8492 22.8752 18.364 19.3604C21.8787 15.8457 21.8787 10.1472 18.364 6.63252ZM16.2427 10.1714L14.8285 8.75718L7.7574 15.8282L9.17161 17.2425L16.2427 10.1714ZM8.11095 11.232C8.69674 11.8178 9.64648 11.8178 10.2323 11.232C10.8181 10.6463 10.8181 9.69652 10.2323 9.11073C9.64648 8.52494 8.69674 8.52494 8.11095 9.11073C7.52516 9.69652 7.52516 10.6463 8.11095 11.232ZM15.8891 16.8889C15.3033 17.4747 14.3536 17.4747 13.7678 16.8889C13.182 16.3031 13.182 15.3534 13.7678 14.7676C14.3536 14.1818 15.3033 14.1818 15.8891 14.7676C16.4749 15.3534 16.4749 16.3031 15.8891 16.8889Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const getUserIcon = () => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', '#837970');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  iconPath.setAttribute(
    'd',
    'M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'
  );
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const showCurrentWeather = (weatherContainer, temp, condition) => {
  const element = weatherContainer;
  element.textContent = '';

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('weather-container__icon');
  weatherIcon.appendChild(getWeatherIcon(condition));

  const tempInfo = document.createElement('div');
  tempInfo.classList.add('weather-container__temp');

  const tempText = document.createElement('span');
  tempText.textContent = temp;

  const degreeIcon = document.createElement('div');
  degreeIcon.classList.add('weatether-container__degree');
  degreeIcon.appendChild(getDegreesIcon());

  tempInfo.appendChild(tempText);
  tempInfo.appendChild(degreeIcon);

  weatherContainer.appendChild(weatherIcon);
  weatherContainer.appendChild(tempInfo);
};

const showDayWeather = (container, dateText, temp, condition) => {
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('day-container');

  const date = document.createElement('span');
  date.classList.add('day-container__date');
  date.textContent = dateText;

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('day-container__icon');
  weatherIcon.appendChild(getWeatherIcon(condition));

  const tempInfo = document.createElement('div');
  tempInfo.classList.add('day-container__temp');

  const tempText = document.createElement('span');
  tempText.textContent = temp;

  const degreeIcon = document.createElement('div');
  degreeIcon.classList.add('day-container__degree');
  degreeIcon.appendChild(getDegreesIcon());

  tempInfo.appendChild(tempText);
  tempInfo.appendChild(degreeIcon);

  weatherContainer.appendChild(date);
  weatherContainer.appendChild(weatherIcon);
  weatherContainer.appendChild(tempInfo);

  container.appendChild(weatherContainer);
};

const showHourForecast = () => {};

const threeDayWeather = (container) => {
  showDayWeather(container);
  showDayWeather(container);
  showDayWeather(container);
};

const additionalWeatherInfo = (
  container,
  feels,
  wind,
  humidityValue
) => {
  const additionalInfo = document.createElement('div');
  additionalInfo.classList.add('additional-info');

  const feelsLikeTemp = document.createElement('div');
  feelsLikeTemp.classList.add('feels-like');

  const temp = document.createElement('div');
  temp.classList.add('feels-like__temp');

  const tempText = document.createElement('span');
  tempText.classList.add('feels-like__text');

  tempText.textContent = feels;
  feelsLikeTemp.appendChild(getUserIcon());
  temp.appendChild(tempText);
  temp.appendChild(getDegreesIcon());
  feelsLikeTemp.appendChild(temp);

  const windSpeed = document.createElement('div');
  windSpeed.classList.add('wind-speed');

  const windText = document.createElement('span');
  windText.classList.add('wind-speed__text');

  windText.textContent = `${wind} km/h`;
  windSpeed.appendChild(getWindIcon());
  windSpeed.appendChild(windText);

  const humidity = document.createElement('div');
  humidity.classList.add('humidity');

  const humidityText = document.createElement('span');
  humidity.classList.add('humidity__text');

  humidityText.textContent = `${humidityValue}%`;
  humidity.appendChild(getHumidityIcon());
  humidity.appendChild(humidityText);

  additionalInfo.appendChild(feelsLikeTemp);
  additionalInfo.appendChild(windSpeed);
  additionalInfo.appendChild(humidity);

  container.appendChild(additionalInfo);
};

const showHourlyForecast = (
  container,
  timeText,
  tempText,
  weatherType
) => {
  // console.log('Weather type:', weatherType);
  const hourInfo = document.createElement('div');

  const time = document.createElement('span');
  time.classList.add('hour-info__time');
  time.textContent = timeText;

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('hour-info__icon');
  weatherIcon.append(getWeatherIcon(weatherType));

  const temp = document.createElement('div');
  temp.classList.add('hour-info__temp');

  const tempValue = document.createElement('span');
  tempValue.textContent = tempText;

  temp.appendChild(tempValue);
  temp.appendChild(getDegreesIcon());

  hourInfo.appendChild(time);
  hourInfo.appendChild(weatherIcon);
  hourInfo.appendChild(temp);

  container.appendChild(hourInfo);
};


/***/ }),

/***/ "./src/components/weather.js":
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

  const { name } = location;

  const [...days] = forecast.forecastday;

  const processedDays = days.map((singleDay) => {
    const {
      date,
      day: {
        condition: { text: dayInfo },
        avgtemp_c: avgTempC,
        avgtemp_f: avgTempF
      }
    } = singleDay;
    return { date, dayInfo, avgTempC, avgTempF };
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

  // console.log('HourDetails weather fn', hourDetails);

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
  // console.log('Day weather fn', dayData);

  return { hourDetails, dayData, processedDays };
}

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=55c87ea085b642b0900113721230208&q=${location}&days=3`,
      { mode: 'cors' }
    );
    const { hourDetails, dayData, processedDays } = processData(
      await response.json()
    );
    return { hourDetails, dayData, processedDays };
  } catch (error) {
    console.log(error);
  }
  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");





(0,_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_App__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU1yQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw0Q0FBNEM7QUFDdEQ7QUFDQTtBQUNBLEVBQUUsdURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxFQUFFLG1EQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFzQyxRQUFRLG9EQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQXFCO0FBQzNCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFzQyxRQUFRLG9EQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFxQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN2SW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0N0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pSQTtBQUNBLFVBQVUsOEJBQThCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLFFBQVE7QUFDUjtBQUNBLFlBQVksc0NBQXNDO0FBQ2xEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNqRjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDZTtBQUNOO0FBQ007QUFDekM7QUFDQSw4REFBTTtBQUNOLDJEQUFHO0FBQ0gsOERBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3NzL21haW4uc2Nzcz9jYmI3Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHtcclxuICBzaG93Q3VycmVudFdlYXRoZXIsXHJcbiAgYWRkaXRpb25hbFdlYXRoZXJJbmZvLFxyXG4gIHNob3dIb3VybHlGb3JlY2FzdCxcclxuICBzaG93RGF5V2VhdGhlclxyXG59IGZyb20gJy4vVUknO1xyXG5cclxuY29uc3QgZm9ybWF0SG91cldlYXRoZXIgPSAod2VhdGhlciwgY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGNvbnRhaW5lcjtcclxuXHJcbiAgY29uc3QgeyB0aW1lOiBmb3JlY2FzdFRpbWUsIGhvdXJUZW1wQzogdGVtcCwgaW5mbyB9ID0gd2VhdGhlcjtcclxuICBjb25zdCBmb3JtYXRlZFRpbWUgPSBmb3JlY2FzdFRpbWUuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgc2hvd0hvdXJseUZvcmVjYXN0KGVsZW1lbnQsIGZvcm1hdGVkVGltZSwgdGVtcCwgaW5mbyk7XHJcbn07XHJcblxyXG5jb25zdCBzaG93RGF5c0ZvcmVjYXN0ID0gKGNvbnRhaW5lciwgZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0ZSwgYXZnVGVtcEMsIGRheUluZm8gfSA9IGRhdGE7XHJcbiAgY29uc3QgZGF5RGF0ZSA9IGRhdGUuc3BsaXQoJyAnKVswXS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcuJykuc2xpY2UoMCwgNSk7XHJcblxyXG4gIHNob3dEYXlXZWF0aGVyKGNvbnRhaW5lciwgZGF5RGF0ZSwgYXZnVGVtcEMsIGRheUluZm8pO1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LWlucHV0Jyk7XHJcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idXR0b24nKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVyRGF0YS5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWRhdGEnKTtcclxuICBjb25zdCBkYXlGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRheUZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2RheS1mb3JlY2FzdCcpO1xyXG5cclxuICBjb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW5XZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ21haW4td2VhdGhlcicpO1xyXG5cclxuICBjb25zdCBtYWluRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW5EYXRhLmNsYXNzTGlzdC5hZGQoJ21haW4tZGF0YScpO1xyXG5cclxuICBjb25zdCBhZGRpdGlvbmFsRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZGl0aW9uYWxEYXRhLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtZGF0YScpO1xyXG5cclxuICBjb25zdCBob3VybHlXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG91cmx5V2VhdGhlci5jbGFzc0xpc3QuYWRkKCdob3VybHktd2VhdGhlcicpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LWRhdGUnKTtcclxuXHJcbiAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGVmYXVsdENpdHkgPSAnUG96bmFuJztcclxuICAgICAgY29uc3QgeyBob3VyRGV0YWlscywgZGF5RGF0YSwgcHJvY2Vzc2VkRGF5cyB9ID0gYXdhaXQgZ2V0V2VhdGhlcihcclxuICAgICAgICBkZWZhdWx0Q2l0eVxyXG4gICAgICApO1xyXG5cclxuICAgICAgZGF5Rm9yZWNhc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgcHJvY2Vzc2VkRGF5cy5mb3JFYWNoKChkYXkpID0+IHNob3dEYXlzRm9yZWNhc3QoZGF5Rm9yZWNhc3QsIGRheSkpO1xyXG5cclxuICAgICAgc2hvd0N1cnJlbnRXZWF0aGVyKHdlYXRoZXJDb250YWluZXIsIGRheURhdGEudGVtcEMsICdTdW5ueScpO1xyXG5cclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHRpbWUsXHJcbiAgICAgICAgZmVlbHNsaWtlQyxcclxuICAgICAgICB3aW5kS3BoLFxyXG4gICAgICAgIGh1bWlkaXR5XHJcbiAgICAgIH0gPSBkYXlEYXRhO1xyXG5cclxuICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZSA9IHRpbWUuc3BsaXQoJyAnKVswXS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcuJyk7XHJcbiAgICAgIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcclxuXHJcbiAgICAgIGFkZGl0aW9uYWxXZWF0aGVySW5mbyhhZGRpdGlvbmFsRGF0YSwgZmVlbHNsaWtlQywgd2luZEtwaCwgaHVtaWRpdHkpO1xyXG4gICAgICBob3VybHlXZWF0aGVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGhvdXJEZXRhaWxzLmZvckVhY2goKGhvdXIpID0+IGZvcm1hdEhvdXJXZWF0aGVyKGhvdXIsIGhvdXJseVdlYXRoZXIpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBob3VyRGV0YWlscywgZGF5RGF0YSwgcHJvY2Vzc2VkRGF5cyB9ID0gYXdhaXQgZ2V0V2VhdGhlcihcclxuICAgICAgICBjaXR5LnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICAgIGNpdHkudmFsdWUgPSAnJztcclxuXHJcbiAgICAgIGRheUZvcmVjYXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIHByb2Nlc3NlZERheXMuZm9yRWFjaCgoZGF5KSA9PiBzaG93RGF5c0ZvcmVjYXN0KGRheUZvcmVjYXN0LCBkYXkpKTtcclxuXHJcbiAgICAgIHNob3dDdXJyZW50V2VhdGhlcih3ZWF0aGVyQ29udGFpbmVyLCBkYXlEYXRhLnRlbXBDLCAnU3VubnknKTtcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiB0aW1lLFxyXG4gICAgICAgIGZlZWxzbGlrZUMsXHJcbiAgICAgICAgd2luZEtwaCxcclxuICAgICAgICBodW1pZGl0eVxyXG4gICAgICB9ID0gZGF5RGF0YTtcclxuXHJcbiAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGUgPSB0aW1lLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLicpO1xyXG4gICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XHJcblxyXG4gICAgICBhZGRpdGlvbmFsRGF0YS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBhZGRpdGlvbmFsV2VhdGhlckluZm8oYWRkaXRpb25hbERhdGEsIGZlZWxzbGlrZUMsIHdpbmRLcGgsIGh1bWlkaXR5KTtcclxuXHJcbiAgICAgIGhvdXJseVdlYXRoZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgaG91ckRldGFpbHMuZm9yRWFjaCgoaG91cikgPT4gZm9ybWF0SG91cldlYXRoZXIoaG91ciwgaG91cmx5V2VhdGhlcikpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtYWluRGF0YS5hcHBlbmRDaGlsZChkYXlGb3JlY2FzdCk7XHJcblxyXG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKG1haW5EYXRhKTtcclxuICBtYWluV2VhdGhlci5hcHBlbmRDaGlsZChhZGRpdGlvbmFsRGF0YSk7XHJcblxyXG4gIHdlYXRoZXJEYXRhLmFwcGVuZENoaWxkKG1haW5XZWF0aGVyKTtcclxuICB3ZWF0aGVyRGF0YS5hcHBlbmRDaGlsZChob3VybHlXZWF0aGVyKTtcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImNvbnN0IHNob3dHaXRodWJMb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM1MTUxNTEnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEyLjAwMSAyQzYuNDc1OTggMiAyLjAwMDk4IDYuNDc1IDIuMDAwOTggMTJDMi4wMDA5OCAxNi40MjUgNC44NjM0OCAyMC4xNjI1IDguODM4NDggMjEuNDg3NUM5LjMzODQ4IDIxLjU3NSA5LjUyNTk4IDIxLjI3NSA5LjUyNTk4IDIxLjAxMjVDOS41MjU5OCAyMC43NzUgOS41MTM0OCAxOS45ODc1IDkuNTEzNDggMTkuMTVDNy4wMDA5OCAxOS42MTI1IDYuMzUwOTggMTguNTM3NSA2LjE1MDk4IDE3Ljk3NUM2LjAzODQ4IDE3LjY4NzUgNS41NTA5OCAxNi44IDUuMTI1OTggMTYuNTYyNUM0Ljc3NTk4IDE2LjM3NSA0LjI3NTk4IDE1LjkxMjUgNS4xMTM0OCAxNS45QzUuOTAwOTggMTUuODg3NSA2LjQ2MzQ4IDE2LjYyNSA2LjY1MDk4IDE2LjkyNUM3LjU1MDk4IDE4LjQzNzUgOC45ODg0OCAxOC4wMTI1IDkuNTYzNDggMTcuNzVDOS42NTA5OCAxNy4xIDkuOTEzNDggMTYuNjYyNSAxMC4yMDEgMTYuNDEyNUM3Ljk3NTk4IDE2LjE2MjUgNS42NTA5OCAxNS4zIDUuNjUwOTggMTEuNDc1QzUuNjUwOTggMTAuMzg3NSA2LjAzODQ4IDkuNDg3NSA2LjY3NTk4IDguNzg3NUM2LjU3NTk4IDguNTM3NSA2LjIyNTk4IDcuNTEyNSA2Ljc3NTk4IDYuMTM3NUM2Ljc3NTk4IDYuMTM3NSA3LjYxMzQ4IDUuODc1IDkuNTI1OTggNy4xNjI1QzEwLjMyNiA2LjkzNzUgMTEuMTc2IDYuODI1IDEyLjAyNiA2LjgyNUMxMi44NzYgNi44MjUgMTMuNzI2IDYuOTM3NSAxNC41MjYgNy4xNjI1QzE2LjQzODUgNS44NjI1IDE3LjI3NiA2LjEzNzUgMTcuMjc2IDYuMTM3NUMxNy44MjYgNy41MTI1IDE3LjQ3NiA4LjUzNzUgMTcuMzc2IDguNzg3NUMxOC4wMTM1IDkuNDg3NSAxOC40MDEgMTAuMzc1IDE4LjQwMSAxMS40NzVDMTguNDAxIDE1LjMxMjUgMTYuMDYzNSAxNi4xNjI1IDEzLjgzODUgMTYuNDEyNUMxNC4yMDEgMTYuNzI1IDE0LjUxMzUgMTcuMzI1IDE0LjUxMzUgMTguMjYyNUMxNC41MTM1IDE5LjYgMTQuNTAxIDIwLjY3NSAxNC41MDEgMjEuMDEyNUMxNC41MDEgMjEuMjc1IDE0LjY4ODUgMjEuNTg3NSAxNS4xODg1IDIxLjQ4NzVDMTkuMjU5IDIwLjExMzMgMjEuOTk5OSAxNi4yOTYzIDIyLjAwMSAxMkMyMi4wMDEgNi40NzUgMTcuNTI2IDIgMTIuMDAxIDJaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblxyXG4gIGNvbnN0IGZvb3RlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgQnkgRnJhbmVrRGV2JztcclxuXHJcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKHNob3dHaXRodWJMb2dvKCkpO1xyXG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJhbmVrRGV2L3dlYXRoZXItYXBwJztcclxuICBnaXRodWJMaW5rLnRhcmdldCA9ICdibGFuayc7XHJcblxyXG4gIGZvb3RlckluZm8uYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgZm9vdGVySW5mby5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVySW5mbyk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiY29uc3Qgc2VhcmNoSWNvblN2ZyA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNTE1MTUxJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xOC4wMzEgMTYuNjE2OEwyMi4zMTM3IDIwLjg5OTVMMjAuODk5NSAyMi4zMTM3TDE2LjYxNjggMTguMDMxQzE1LjA3NjkgMTkuMjYzIDEzLjEyNCAyMCAxMSAyMEM2LjAzMiAyMCAyIDE1Ljk2OCAyIDExQzIgNi4wMzIgNi4wMzIgMiAxMSAyQzE1Ljk2OCAyIDIwIDYuMDMyIDIwIDExQzIwIDEzLjEyNCAxOS4yNjMgMTUuMDc2OSAxOC4wMzEgMTYuNjE2OFpNMTYuMDI0NyAxNS44NzQ4QzE3LjI0NzUgMTQuNjE0NiAxOCAxMi44OTU2IDE4IDExQzE4IDcuMTMyNSAxNC44Njc1IDQgMTEgNEM3LjEzMjUgNCA0IDcuMTMyNSA0IDExQzQgMTQuODY3NSA3LjEzMjUgMTggMTEgMThDMTIuODk1NiAxOCAxNC42MTQ2IDE3LjI0NzUgMTUuODc0OCAxNi4wMjQ3TDE2LjAyNDcgMTUuODc0OFonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgY29uc3QgYmxhbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBibGFua0Rpdi5jbGFzc0xpc3QuYWRkKCdnaG9zdCcpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChibGFua0Rpdik7XHJcblxyXG4gIGNvbnN0IGNpdHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2l0eURhdGEuY2xhc3NMaXN0LmFkZCgnY2l0eS1kYXRhJyk7XHJcblxyXG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZScpO1xyXG5cclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1kYXRlJyk7XHJcblxyXG4gIGNpdHlEYXRhLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcclxuICBjaXR5RGF0YS5hcHBlbmRDaGlsZChkYXRlKTtcclxuXHJcbiAgY29uc3QgZm9ydW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2l0eS1pbnB1dCcpO1xyXG4gIGNpdHlJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGNpdHlJbnB1dC5wbGFjZWhvbGRlciA9ICdDaXR5JztcclxuXHJcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHNlYXJjaEljb24uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvblN2ZygpKTtcclxuICBzZWFyY2hCdXR0b24uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XHJcblxyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5SW5wdXQpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xyXG5cclxuICBmb3J1bS5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eURhdGEpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3J1bSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiY29uc3QgZ2V0V2VhdGhlckljb24gPSAod2VhdGhlcikgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcbiAgY29uc29sZS5sb2coJ1dlYXRoZXIgSWNvbjonLCB3ZWF0aGVyKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTIgMkMxNS44NjYgMiAxOSA1LjEzNDAxIDE5IDlDMTkgOS4xMTM1MSAxOC45OTczIDkuMjI2MzkgMTguOTkyIDkuMzM4NTdDMjEuMzI2NSAxMC4xNiAyMyAxMi4zODQ2IDIzIDE1QzIzIDE4LjMxMzcgMjAuMzEzNyAyMSAxNyAyMUg3QzMuNjg2MjkgMjEgMSAxOC4zMTM3IDEgMTVDMSAxMi4zODQ2IDIuNjczNDYgMTAuMTYgNS4wMDgwNCA5LjMzODU3QzUuMDAyNyA5LjIyNjM5IDUgOS4xMTM1MSA1IDlDNSA1LjEzNDAxIDguMTM0MDEgMiAxMiAyWk0xMiA0QzkuMjM4NTggNCA3IDYuMjM4NTggNyA5QzcgOS4wODE0NyA3LjAwMTkzIDkuMTYyNjMgNy4wMDU3OCA5LjI0MzQ0TDcuMDc2NjIgMTAuNzMwOUw1LjY3MTgzIDExLjIyNTJDNC4wODQ0IDExLjc4MzcgMyAxMy4yODg5IDMgMTVDMyAxNy4yMDkxIDQuNzkwODYgMTkgNyAxOUgxN0MxOS4yMDkxIDE5IDIxIDE3LjIwOTEgMjEgMTVDMjEgMTIuNzkgMTkuMjEgMTEgMTcgMTFDMTUuMjMzIDExIDEzLjczMzcgMTIuMTQ1NyAxMy4yMDQyIDEzLjczNDdMMTEuMzA2NCAxMy4xMDIxQzEyLjEwMDUgMTAuNzE4NSAxNC4zNSA5IDE3IDlDMTcgNi4yMzg1OCAxNC43NjE0IDQgMTIgNFonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IGdldERlZ3JlZXNJY29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTQuNSAxMEMyLjU2NyAxMCAxIDguNDMzIDEgNi41QzEgNC41NjcgMi41NjcgMyA0LjUgM0M2LjQzMyAzIDggNC41NjcgOCA2LjVDOCA4LjQzMyA2LjQzMyAxMCA0LjUgMTBaTTQuNSA4QzUuMzI4NDMgOCA2IDcuMzI4NDMgNiA2LjVDNiA1LjY3MTU3IDUuMzI4NDMgNSA0LjUgNUMzLjY3MTU3IDUgMyA1LjY3MTU3IDMgNi41QzMgNy4zMjg0MyAzLjY3MTU3IDggNC41IDhaTTIyIDEwSDIwQzIwIDcuNzkwODYgMTguMjA5MSA2IDE2IDZDMTMuNzkwOSA2IDEyIDcuNzkwODYgMTIgMTBWMTVDMTIgMTcuMjA5MSAxMy43OTA5IDE5IDE2IDE5QzE4LjIwOTEgMTkgMjAgMTcuMjA5MSAyMCAxNUgyMkMyMiAxOC4zMTM3IDE5LjMxMzcgMjEgMTYgMjFDMTIuNjg2MyAyMSAxMCAxOC4zMTM3IDEwIDE1VjEwQzEwIDYuNjg2MjkgMTIuNjg2MyA0IDE2IDRDMTkuMzEzNyA0IDIyIDYuNjg2MjkgMjIgMTBaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRXaW5kSWNvbiA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjODM3OTcwJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMC41IDE3SDRWMTVIMTAuNUMxMi40MzMgMTUgMTQgMTYuNTY3IDE0IDE4LjVDMTQgMjAuNDMzIDEyLjQzMyAyMiAxMC41IDIyQzguOTk5NTcgMjIgNy43MTk2NiAyMS4wNTU5IDcuMjIxOTYgMTkuNzI5M0w5LjA5NTEzIDE5LjAyNjhDOS4zMDg0MyAxOS41OTU0IDkuODU2OTYgMjAgMTAuNSAyMEMxMS4zMjg0IDIwIDEyIDE5LjMyODQgMTIgMTguNUMxMiAxNy42NzE2IDExLjMyODQgMTcgMTAuNSAxN1pNNSAxMUgxOC41QzIwLjQzMyAxMSAyMiAxMi41NjcgMjIgMTQuNUMyMiAxNi40MzMgMjAuNDMzIDE4IDE4LjUgMThDMTYuOTk5NiAxOCAxNS43MTk3IDE3LjA1NTkgMTUuMjIyIDE1LjcyOTNMMTcuMDk1MSAxNS4wMjY4QzE3LjMwODQgMTUuNTk1NCAxNy44NTcgMTYgMTguNSAxNkMxOS4zMjg0IDE2IDIwIDE1LjMyODQgMjAgMTQuNUMyMCAxMy42NzE2IDE5LjMyODQgMTMgMTguNSAxM0g1QzMuMzQzMTUgMTMgMiAxMS42NTY5IDIgMTBDMiA4LjM0MzE1IDMuMzQzMTUgNyA1IDdIMTMuNUMxNC4zMjg0IDcgMTUgNi4zMjg0MyAxNSA1LjVDMTUgNC42NzE1NyAxNC4zMjg0IDQgMTMuNSA0QzEyLjg1NyA0IDEyLjMwODQgNC40MDQ2MyAxMi4wOTUxIDQuOTczMTdMMTAuMjIyIDQuMjcwNzNDMTAuNzE5NyAyLjk0NDE0IDExLjk5OTYgMiAxMy41IDJDMTUuNDMzIDIgMTcgMy41NjcgMTcgNS41QzE3IDcuNDMzIDE1LjQzMyA5IDEzLjUgOUg1QzQuNDQ3NzIgOSA0IDkuNDQ3NzIgNCAxMEM0IDEwLjU1MjMgNC40NDc3MiAxMSA1IDExWidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0SHVtaWRpdHlJY29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTcuMDUwMjUgOC4wNDY3M0wxMiAzLjA5Njk4TDE2Ljk0OTcgOC4wNDY3M0MxOS42ODM0IDEwLjc4MDQgMTkuNjgzNCAxNS4yMTI2IDE2Ljk0OTcgMTcuOTQ2MkMxNC4yMTYxIDIwLjY3OTkgOS43ODM5MiAyMC42Nzk5IDcuMDUwMjUgMTcuOTQ2MkM0LjMxNjU4IDE1LjIxMjYgNC4zMTY1OCAxMC43ODA0IDcuMDUwMjUgOC4wNDY3M1pNMTguMzY0IDYuNjMyNTJMMTIgMC4yNjg1NTVMNS42MzYwNCA2LjYzMjUyQzIuMTIxMzIgMTAuMTQ3MiAyLjEyMTMyIDE1Ljg0NTcgNS42MzYwNCAxOS4zNjA0QzkuMTUwNzYgMjIuODc1MiAxNC44NDkyIDIyLjg3NTIgMTguMzY0IDE5LjM2MDRDMjEuODc4NyAxNS44NDU3IDIxLjg3ODcgMTAuMTQ3MiAxOC4zNjQgNi42MzI1MlpNMTYuMjQyNyAxMC4xNzE0TDE0LjgyODUgOC43NTcxOEw3Ljc1NzQgMTUuODI4Mkw5LjE3MTYxIDE3LjI0MjVMMTYuMjQyNyAxMC4xNzE0Wk04LjExMDk1IDExLjIzMkM4LjY5Njc0IDExLjgxNzggOS42NDY0OCAxMS44MTc4IDEwLjIzMjMgMTEuMjMyQzEwLjgxODEgMTAuNjQ2MyAxMC44MTgxIDkuNjk2NTIgMTAuMjMyMyA5LjExMDczQzkuNjQ2NDggOC41MjQ5NCA4LjY5Njc0IDguNTI0OTQgOC4xMTA5NSA5LjExMDczQzcuNTI1MTYgOS42OTY1MiA3LjUyNTE2IDEwLjY0NjMgOC4xMTA5NSAxMS4yMzJaTTE1Ljg4OTEgMTYuODg4OUMxNS4zMDMzIDE3LjQ3NDcgMTQuMzUzNiAxNy40NzQ3IDEzLjc2NzggMTYuODg4OUMxMy4xODIgMTYuMzAzMSAxMy4xODIgMTUuMzUzNCAxMy43Njc4IDE0Ljc2NzZDMTQuMzUzNiAxNC4xODE4IDE1LjMwMzMgMTQuMTgxOCAxNS44ODkxIDE0Ljc2NzZDMTYuNDc0OSAxNS4zNTM0IDE2LjQ3NDkgMTYuMzAzMSAxNS44ODkxIDE2Ljg4ODlaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VySWNvbiA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjODM3OTcwJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ000IDIyQzQgMTcuNTgxNyA3LjU4MTcyIDE0IDEyIDE0QzE2LjQxODMgMTQgMjAgMTcuNTgxNyAyMCAyMkgxOEMxOCAxOC42ODYzIDE1LjMxMzcgMTYgMTIgMTZDOC42ODYyOSAxNiA2IDE4LjY4NjMgNiAyMkg0Wk0xMiAxM0M4LjY4NSAxMyA2IDEwLjMxNSA2IDdDNiAzLjY4NSA4LjY4NSAxIDEyIDFDMTUuMzE1IDEgMTggMy42ODUgMTggN0MxOCAxMC4zMTUgMTUuMzE1IDEzIDEyIDEzWk0xMiAxMUMxNC4yMSAxMSAxNiA5LjIxIDE2IDdDMTYgNC43OSAxNC4yMSAzIDEyIDNDOS43OSAzIDggNC43OSA4IDdDOCA5LjIxIDkuNzkgMTEgMTIgMTFaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0N1cnJlbnRXZWF0aGVyID0gKHdlYXRoZXJDb250YWluZXIsIHRlbXAsIGNvbmRpdGlvbikgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSB3ZWF0aGVyQ29udGFpbmVyO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbnRhaW5lcl9faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGdldFdlYXRoZXJJY29uKGNvbmRpdGlvbikpO1xyXG5cclxuICBjb25zdCB0ZW1wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXBJbmZvLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29udGFpbmVyX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gdGVtcDtcclxuXHJcbiAgY29uc3QgZGVncmVlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlZ3JlZUljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGV0aGVyLWNvbnRhaW5lcl9fZGVncmVlJyk7XHJcbiAgZGVncmVlSWNvbi5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZUljb24pO1xyXG5cclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBJbmZvKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93RGF5V2VhdGhlciA9IChjb250YWluZXIsIGRhdGVUZXh0LCB0ZW1wLCBjb25kaXRpb24pID0+IHtcclxuICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX19kYXRlJyk7XHJcbiAgZGF0ZS50ZXh0Q29udGVudCA9IGRhdGVUZXh0O1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXJfX2ljb24nKTtcclxuICB3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZChnZXRXZWF0aGVySWNvbihjb25kaXRpb24pKTtcclxuXHJcbiAgY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wSW5mby5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gdGVtcDtcclxuXHJcbiAgY29uc3QgZGVncmVlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlZ3JlZUljb24uY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9fZGVncmVlJyk7XHJcbiAgZGVncmVlSWNvbi5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZUljb24pO1xyXG5cclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEluZm8pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0hvdXJGb3JlY2FzdCA9ICgpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRocmVlRGF5V2VhdGhlciA9IChjb250YWluZXIpID0+IHtcclxuICBzaG93RGF5V2VhdGhlcihjb250YWluZXIpO1xyXG4gIHNob3dEYXlXZWF0aGVyKGNvbnRhaW5lcik7XHJcbiAgc2hvd0RheVdlYXRoZXIoY29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRpdGlvbmFsV2VhdGhlckluZm8gPSAoXHJcbiAgY29udGFpbmVyLFxyXG4gIGZlZWxzLFxyXG4gIHdpbmQsXHJcbiAgaHVtaWRpdHlWYWx1ZVxyXG4pID0+IHtcclxuICBjb25zdCBhZGRpdGlvbmFsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGFkZGl0aW9uYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtaW5mbycpO1xyXG5cclxuICBjb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZmVlbHNMaWtlVGVtcC5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlJyk7XHJcblxyXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2VfX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdGVtcFRleHQuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZV9fdGV4dCcpO1xyXG5cclxuICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IGZlZWxzO1xyXG4gIGZlZWxzTGlrZVRlbXAuYXBwZW5kQ2hpbGQoZ2V0VXNlckljb24oKSk7XHJcbiAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgdGVtcC5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuICBmZWVsc0xpa2VUZW1wLmFwcGVuZENoaWxkKHRlbXApO1xyXG5cclxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3aW5kU3BlZWQuY2xhc3NMaXN0LmFkZCgnd2luZC1zcGVlZCcpO1xyXG5cclxuICBjb25zdCB3aW5kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB3aW5kVGV4dC5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkX190ZXh0Jyk7XHJcblxyXG4gIHdpbmRUZXh0LnRleHRDb250ZW50ID0gYCR7d2luZH0ga20vaGA7XHJcbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKGdldFdpbmRJY29uKCkpO1xyXG4gIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kVGV4dCk7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5X190ZXh0Jyk7XHJcblxyXG4gIGh1bWlkaXR5VGV4dC50ZXh0Q29udGVudCA9IGAke2h1bWlkaXR5VmFsdWV9JWA7XHJcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoZ2V0SHVtaWRpdHlJY29uKCkpO1xyXG4gIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5VGV4dCk7XHJcblxyXG4gIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRlbXApO1xyXG4gIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XHJcbiAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkaXRpb25hbEluZm8pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dIb3VybHlGb3JlY2FzdCA9IChcclxuICBjb250YWluZXIsXHJcbiAgdGltZVRleHQsXHJcbiAgdGVtcFRleHQsXHJcbiAgd2VhdGhlclR5cGVcclxuKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ1dlYXRoZXIgdHlwZTonLCB3ZWF0aGVyVHlwZSk7XHJcbiAgY29uc3QgaG91ckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0aW1lLmNsYXNzTGlzdC5hZGQoJ2hvdXItaW5mb19fdGltZScpO1xyXG4gIHRpbWUudGV4dENvbnRlbnQgPSB0aW1lVGV4dDtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCdob3VyLWluZm9fX2ljb24nKTtcclxuICB3ZWF0aGVySWNvbi5hcHBlbmQoZ2V0V2VhdGhlckljb24od2VhdGhlclR5cGUpKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnaG91ci1pbmZvX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wVmFsdWUudGV4dENvbnRlbnQgPSB0ZW1wVGV4dDtcclxuXHJcbiAgdGVtcC5hcHBlbmRDaGlsZCh0ZW1wVmFsdWUpO1xyXG4gIHRlbXAuYXBwZW5kQ2hpbGQoZ2V0RGVncmVlc0ljb24oKSk7XHJcblxyXG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRpbWUpO1xyXG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcclxuICBob3VySW5mby5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJJbmZvKTtcclxufTtcclxuIiwiZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSkge1xyXG4gIGNvbnN0IHsgY3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9uIH0gPSBkYXRhO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB0ZW1wX2M6IHRlbXBDLFxyXG4gICAgdGVtcF9mOiB0ZW1wRixcclxuICAgIHdpbmRfbXBoOiB3aW5kTXBoLFxyXG4gICAgd2luZF9rcGg6IHdpbmRLcGgsXHJcbiAgICBmZWVsc2xpa2VfYzogZmVlbHNsaWtlQyxcclxuICAgIGZlZWxzbGlrZV9mOiBmZWVsc2xpa2VGLFxyXG4gICAgbGFzdF91cGRhdGVkOiBsYXN0VXBkYXRlZCxcclxuICAgIGh1bWlkaXR5XHJcbiAgfSA9IGN1cnJlbnQ7XHJcblxyXG4gIGNvbnN0IHsgbmFtZSB9ID0gbG9jYXRpb247XHJcblxyXG4gIGNvbnN0IFsuLi5kYXlzXSA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xyXG5cclxuICBjb25zdCBwcm9jZXNzZWREYXlzID0gZGF5cy5tYXAoKHNpbmdsZURheSkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBkYXRlLFxyXG4gICAgICBkYXk6IHtcclxuICAgICAgICBjb25kaXRpb246IHsgdGV4dDogZGF5SW5mbyB9LFxyXG4gICAgICAgIGF2Z3RlbXBfYzogYXZnVGVtcEMsXHJcbiAgICAgICAgYXZndGVtcF9mOiBhdmdUZW1wRlxyXG4gICAgICB9XHJcbiAgICB9ID0gc2luZ2xlRGF5O1xyXG4gICAgcmV0dXJuIHsgZGF0ZSwgZGF5SW5mbywgYXZnVGVtcEMsIGF2Z1RlbXBGIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGhvdXI6IFsuLi5ob3VyRGF0YV1cclxuICB9ID0gZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF07XHJcblxyXG4gIGNvbnN0IGhvdXJEZXRhaWxzID0gW107XHJcblxyXG4gIGhvdXJEYXRhLmZvckVhY2goKGhvdXIpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGltZSxcclxuICAgICAgdGVtcF9jOiBob3VyVGVtcEMsXHJcbiAgICAgIHRlbXBfZjogaG91clRlbXBGLFxyXG4gICAgICBjb25kaXRpb246IHsgdGV4dDogaW5mbyB9XHJcbiAgICB9ID0gaG91cjtcclxuXHJcbiAgICBob3VyRGV0YWlscy5wdXNoKHsgdGltZSwgaG91clRlbXBDLCBob3VyVGVtcEYsIGluZm8gfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKCdIb3VyRGV0YWlscyB3ZWF0aGVyIGZuJywgaG91ckRldGFpbHMpO1xyXG5cclxuICBjb25zdCBkYXlEYXRhID0ge1xyXG4gICAgdGVtcEMsXHJcbiAgICB0ZW1wRixcclxuICAgIGZlZWxzbGlrZUMsXHJcbiAgICBmZWVsc2xpa2VGLFxyXG4gICAgd2luZEtwaCxcclxuICAgIHdpbmRNcGgsXHJcbiAgICBsYXN0VXBkYXRlZCxcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgbmFtZVxyXG4gIH07XHJcbiAgLy8gY29uc29sZS5sb2coJ0RheSB3ZWF0aGVyIGZuJywgZGF5RGF0YSk7XHJcblxyXG4gIHJldHVybiB7IGhvdXJEZXRhaWxzLCBkYXlEYXRhLCBwcm9jZXNzZWREYXlzIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTU1Yzg3ZWEwODViNjQyYjA5MDAxMTM3MjEyMzAyMDgmcT0ke2xvY2F0aW9ufSZkYXlzPTNgLFxyXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgeyBob3VyRGV0YWlscywgZGF5RGF0YSwgcHJvY2Vzc2VkRGF5cyB9ID0gcHJvY2Vzc0RhdGEoXHJcbiAgICAgIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IGhvdXJEZXRhaWxzLCBkYXlEYXRhLCBwcm9jZXNzZWREYXlzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbkhlYWRlcigpO1xyXG5BcHAoKTtcclxuRm9vdGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==