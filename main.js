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



const App = () => {
  const main = document.createElement('main');
  const city = document.querySelector('.city-input');
  const search = document.querySelector('.search-button');

  search.addEventListener('click', () => {
    console.log(city.value);
    (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(city.value);
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

  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showCurrentWeather)(mainData, '25', 'Sunny');
  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.threeDayWeather)(dayForecast);
  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.additionalWeatherInfo)(additionalData);
  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showHourlyForecast)(hourlyWeather);

  for (let i = 0; i < 14; i++) {
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showHourlyForecast)(hourlyWeather);
  }

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
  blankDiv.style.width = '229px';
  header.appendChild(blankDiv);

  const cityData = document.createElement('div');
  cityData.classList.add('city-data');

  const cityName = document.createElement('span');
  cityName.classList.add('city-name');
  cityName.textContent = 'Gaj Wielki';

  const date = document.createElement('span');
  date.classList.add('current-date');
  date.textContent = '03.08.2023';

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
  console.log(weather);

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

const showCurrentWeather = (container, temp, condition) => {
  console.log(condition);
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('weather-container');

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('weather-container__icon');
  weatherIcon.appendChild(getWeatherIcon('test'));

  const tempInfo = document.createElement('div');
  tempInfo.classList.add('weather-container__temp');

  const tempText = document.createElement('span');
  //   tempText.classList.add();
  tempText.textContent = temp;

  const degreeIcon = document.createElement('div');
  degreeIcon.classList.add('weatether-container__degree');
  degreeIcon.appendChild(getDegreesIcon());

  tempInfo.appendChild(tempText);
  tempInfo.appendChild(degreeIcon);

  weatherContainer.appendChild(weatherIcon);
  weatherContainer.appendChild(tempInfo);

  container.appendChild(weatherContainer);
};

const showDayWeather = (container) => {
  const weatherContainer = document.createElement('div');
  weatherContainer.classList.add('day-container');

  const date = document.createElement('span');
  date.classList.add('day-container__date');
  date.textContent = '04.08';

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('day-container__icon');
  weatherIcon.appendChild(getWeatherIcon('test'));

  const tempInfo = document.createElement('div');
  tempInfo.classList.add('day-container__temp');

  const tempText = document.createElement('span');
  //   tempText.classList.add();
  tempText.textContent = '25';

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
// const showHourWeather = () => {};

const showHourForecast = () => {};

const threeDayWeather = (container) => {
  showDayWeather(container);
  showDayWeather(container);
  showDayWeather(container);
};

const additionalWeatherInfo = (container) => {
  const additionalInfo = document.createElement('div');
  additionalInfo.classList.add('additional-info');

  const feelsLikeTemp = document.createElement('div');
  feelsLikeTemp.classList.add('feels-like');

  const temp = document.createElement('div');
  temp.classList.add('feels-like__temp');

  const tempText = document.createElement('span');
  tempText.classList.add('feels-like__text');

  tempText.textContent = '25oC';
  feelsLikeTemp.appendChild(getUserIcon());
  feelsLikeTemp.appendChild(tempText);

  const windSpeed = document.createElement('div');
  windSpeed.classList.add('wind-speed');

  const windText = document.createElement('span');
  windText.classList.add('wind-speed__text');

  windText.textContent = '25 km/h';
  windSpeed.appendChild(getWindIcon());
  windSpeed.appendChild(windText);

  const humidity = document.createElement('div');
  humidity.classList.add('humidity');

  const humidityText = document.createElement('span');
  humidity.classList.add('humidity__text');

  humidityText.textContent = '25%';
  humidity.appendChild(getHumidityIcon());
  humidity.appendChild(humidityText);

  additionalInfo.appendChild(feelsLikeTemp);
  additionalInfo.appendChild(windSpeed);
  additionalInfo.appendChild(humidity);

  container.appendChild(additionalInfo);
};

const showHourlyForecast = (container) => {
  const hourInfo = document.createElement('div');

  const time = document.createElement('span');
  time.classList.add('hour-info__time');
  time.textContent = '12:20';

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('hour-info__icon');
  weatherIcon.append(getWeatherIcon());

  const temp = document.createElement('div');
  temp.classList.add('hour-info__temp');

  const tempValue = document.createElement('span');
  tempValue.textContent = '25';

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





// const helloWorld = document.createElement('h1');
// helloWorld.textContent = 'Hello World!';

// document.body.appendChild(helloWorld);

// helloWorld.addEventListener('click', () => {
//   console.log('Hello World!');
// });
(0,_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_App__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU1yQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWtCO0FBQ3BCLEVBQUUsb0RBQWU7QUFDakIsRUFBRSwwREFBcUI7QUFDdkIsRUFBRSx1REFBa0I7QUFDcEI7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixJQUFJLHVEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pEbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxUUE7QUFDQTtBQUNBLFVBQVUsb0JBQW9CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFDQUFxQyw4QkFBOEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNoRTFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDZTtBQUNOO0FBQ007QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiw4REFBTTtBQUNOLDJEQUFHO0FBQ0gsOERBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7XHJcbiAgc2hvd0N1cnJlbnRXZWF0aGVyLFxyXG4gIHRocmVlRGF5V2VhdGhlcixcclxuICBhZGRpdGlvbmFsV2VhdGhlckluZm8sXHJcbiAgc2hvd0hvdXJseUZvcmVjYXN0XHJcbn0gZnJvbSAnLi9VSSc7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktaW5wdXQnKTtcclxuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjaXR5LnZhbHVlKTtcclxuICAgIGdldFdlYXRoZXIoY2l0eS52YWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckRhdGEuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kYXRhJyk7XHJcbiAgY29uc3QgZGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXlGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdkYXktZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluV2VhdGhlci5jbGFzc0xpc3QuYWRkKCdtYWluLXdlYXRoZXInKTtcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluRGF0YS5jbGFzc0xpc3QuYWRkKCdtYWluLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgYWRkaXRpb25hbERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXdlYXRoZXInKTtcclxuXHJcbiAgc2hvd0N1cnJlbnRXZWF0aGVyKG1haW5EYXRhLCAnMjUnLCAnU3VubnknKTtcclxuICB0aHJlZURheVdlYXRoZXIoZGF5Rm9yZWNhc3QpO1xyXG4gIGFkZGl0aW9uYWxXZWF0aGVySW5mbyhhZGRpdGlvbmFsRGF0YSk7XHJcbiAgc2hvd0hvdXJseUZvcmVjYXN0KGhvdXJseVdlYXRoZXIpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDE0OyBpKyspIHtcclxuICAgIHNob3dIb3VybHlGb3JlY2FzdChob3VybHlXZWF0aGVyKTtcclxuICB9XHJcblxyXG4gIG1haW5EYXRhLmFwcGVuZENoaWxkKGRheUZvcmVjYXN0KTtcclxuXHJcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQobWFpbkRhdGEpO1xyXG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKGFkZGl0aW9uYWxEYXRhKTtcclxuXHJcbiAgd2VhdGhlckRhdGEuYXBwZW5kQ2hpbGQobWFpbldlYXRoZXIpO1xyXG4gIHdlYXRoZXJEYXRhLmFwcGVuZENoaWxkKGhvdXJseVdlYXRoZXIpO1xyXG5cclxuICBtYWluLmFwcGVuZENoaWxkKHdlYXRoZXJEYXRhKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiY29uc3Qgc2hvd0dpdGh1YkxvZ28gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzUxNTE1MScpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTIuMDAxIDJDNi40NzU5OCAyIDIuMDAwOTggNi40NzUgMi4wMDA5OCAxMkMyLjAwMDk4IDE2LjQyNSA0Ljg2MzQ4IDIwLjE2MjUgOC44Mzg0OCAyMS40ODc1QzkuMzM4NDggMjEuNTc1IDkuNTI1OTggMjEuMjc1IDkuNTI1OTggMjEuMDEyNUM5LjUyNTk4IDIwLjc3NSA5LjUxMzQ4IDE5Ljk4NzUgOS41MTM0OCAxOS4xNUM3LjAwMDk4IDE5LjYxMjUgNi4zNTA5OCAxOC41Mzc1IDYuMTUwOTggMTcuOTc1QzYuMDM4NDggMTcuNjg3NSA1LjU1MDk4IDE2LjggNS4xMjU5OCAxNi41NjI1QzQuNzc1OTggMTYuMzc1IDQuMjc1OTggMTUuOTEyNSA1LjExMzQ4IDE1LjlDNS45MDA5OCAxNS44ODc1IDYuNDYzNDggMTYuNjI1IDYuNjUwOTggMTYuOTI1QzcuNTUwOTggMTguNDM3NSA4Ljk4ODQ4IDE4LjAxMjUgOS41NjM0OCAxNy43NUM5LjY1MDk4IDE3LjEgOS45MTM0OCAxNi42NjI1IDEwLjIwMSAxNi40MTI1QzcuOTc1OTggMTYuMTYyNSA1LjY1MDk4IDE1LjMgNS42NTA5OCAxMS40NzVDNS42NTA5OCAxMC4zODc1IDYuMDM4NDggOS40ODc1IDYuNjc1OTggOC43ODc1QzYuNTc1OTggOC41Mzc1IDYuMjI1OTggNy41MTI1IDYuNzc1OTggNi4xMzc1QzYuNzc1OTggNi4xMzc1IDcuNjEzNDggNS44NzUgOS41MjU5OCA3LjE2MjVDMTAuMzI2IDYuOTM3NSAxMS4xNzYgNi44MjUgMTIuMDI2IDYuODI1QzEyLjg3NiA2LjgyNSAxMy43MjYgNi45Mzc1IDE0LjUyNiA3LjE2MjVDMTYuNDM4NSA1Ljg2MjUgMTcuMjc2IDYuMTM3NSAxNy4yNzYgNi4xMzc1QzE3LjgyNiA3LjUxMjUgMTcuNDc2IDguNTM3NSAxNy4zNzYgOC43ODc1QzE4LjAxMzUgOS40ODc1IDE4LjQwMSAxMC4zNzUgMTguNDAxIDExLjQ3NUMxOC40MDEgMTUuMzEyNSAxNi4wNjM1IDE2LjE2MjUgMTMuODM4NSAxNi40MTI1QzE0LjIwMSAxNi43MjUgMTQuNTEzNSAxNy4zMjUgMTQuNTEzNSAxOC4yNjI1QzE0LjUxMzUgMTkuNiAxNC41MDEgMjAuNjc1IDE0LjUwMSAyMS4wMTI1QzE0LjUwMSAyMS4yNzUgMTQuNjg4NSAyMS41ODc1IDE1LjE4ODUgMjEuNDg3NUMxOS4yNTkgMjAuMTEzMyAyMS45OTk5IDE2LjI5NjMgMjIuMDAxIDEyQzIyLjAwMSA2LjQ3NSAxNy41MjYgMiAxMi4wMDEgMlonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHJcbiAgY29uc3QgZm9vdGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRleHQudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBCeSBGcmFuZWtEZXYnO1xyXG5cclxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoc2hvd0dpdGh1YkxvZ28oKSk7XHJcbiAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9GcmFuZWtEZXYvd2VhdGhlci1hcHAnO1xyXG4gIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ2JsYW5rJztcclxuXHJcbiAgZm9vdGVySW5mby5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICBmb290ZXJJbmZvLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJJbmZvKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJjb25zdCBzZWFyY2hJY29uU3ZnID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM1MTUxNTEnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTE4LjAzMSAxNi42MTY4TDIyLjMxMzcgMjAuODk5NUwyMC44OTk1IDIyLjMxMzdMMTYuNjE2OCAxOC4wMzFDMTUuMDc2OSAxOS4yNjMgMTMuMTI0IDIwIDExIDIwQzYuMDMyIDIwIDIgMTUuOTY4IDIgMTFDMiA2LjAzMiA2LjAzMiAyIDExIDJDMTUuOTY4IDIgMjAgNi4wMzIgMjAgMTFDMjAgMTMuMTI0IDE5LjI2MyAxNS4wNzY5IDE4LjAzMSAxNi42MTY4Wk0xNi4wMjQ3IDE1Ljg3NDhDMTcuMjQ3NSAxNC42MTQ2IDE4IDEyLjg5NTYgMTggMTFDMTggNy4xMzI1IDE0Ljg2NzUgNCAxMSA0QzcuMTMyNSA0IDQgNy4xMzI1IDQgMTFDNCAxNC44Njc1IDcuMTMyNSAxOCAxMSAxOEMxMi44OTU2IDE4IDE0LjYxNDYgMTcuMjQ3NSAxNS44NzQ4IDE2LjAyNDdMMTYuMDI0NyAxNS44NzQ4WidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICBjb25zdCBibGFua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJsYW5rRGl2LnN0eWxlLndpZHRoID0gJzIyOXB4JztcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmxhbmtEaXYpO1xyXG5cclxuICBjb25zdCBjaXR5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNpdHlEYXRhLmNsYXNzTGlzdC5hZGQoJ2NpdHktZGF0YScpO1xyXG5cclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdjaXR5LW5hbWUnKTtcclxuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9ICdHYWogV2llbGtpJztcclxuXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtZGF0ZScpO1xyXG4gIGRhdGUudGV4dENvbnRlbnQgPSAnMDMuMDguMjAyMyc7XHJcblxyXG4gIGNpdHlEYXRhLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcclxuICBjaXR5RGF0YS5hcHBlbmRDaGlsZChkYXRlKTtcclxuXHJcbiAgY29uc3QgZm9ydW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2l0eS1pbnB1dCcpO1xyXG4gIGNpdHlJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGNpdHlJbnB1dC5wbGFjZWhvbGRlciA9ICdDaXR5JztcclxuXHJcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHNlYXJjaEljb24uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvblN2ZygpKTtcclxuICBzZWFyY2hCdXR0b24uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XHJcblxyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5SW5wdXQpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xyXG5cclxuICBmb3J1bS5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eURhdGEpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3J1bSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiY29uc3QgZ2V0V2VhdGhlckljb24gPSAod2VhdGhlcikgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlcik7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEyIDJDMTUuODY2IDIgMTkgNS4xMzQwMSAxOSA5QzE5IDkuMTEzNTEgMTguOTk3MyA5LjIyNjM5IDE4Ljk5MiA5LjMzODU3QzIxLjMyNjUgMTAuMTYgMjMgMTIuMzg0NiAyMyAxNUMyMyAxOC4zMTM3IDIwLjMxMzcgMjEgMTcgMjFIN0MzLjY4NjI5IDIxIDEgMTguMzEzNyAxIDE1QzEgMTIuMzg0NiAyLjY3MzQ2IDEwLjE2IDUuMDA4MDQgOS4zMzg1N0M1LjAwMjcgOS4yMjYzOSA1IDkuMTEzNTEgNSA5QzUgNS4xMzQwMSA4LjEzNDAxIDIgMTIgMlpNMTIgNEM5LjIzODU4IDQgNyA2LjIzODU4IDcgOUM3IDkuMDgxNDcgNy4wMDE5MyA5LjE2MjYzIDcuMDA1NzggOS4yNDM0NEw3LjA3NjYyIDEwLjczMDlMNS42NzE4MyAxMS4yMjUyQzQuMDg0NCAxMS43ODM3IDMgMTMuMjg4OSAzIDE1QzMgMTcuMjA5MSA0Ljc5MDg2IDE5IDcgMTlIMTdDMTkuMjA5MSAxOSAyMSAxNy4yMDkxIDIxIDE1QzIxIDEyLjc5IDE5LjIxIDExIDE3IDExQzE1LjIzMyAxMSAxMy43MzM3IDEyLjE0NTcgMTMuMjA0MiAxMy43MzQ3TDExLjMwNjQgMTMuMTAyMUMxMi4xMDA1IDEwLjcxODUgMTQuMzUgOSAxNyA5QzE3IDYuMjM4NTggMTQuNzYxNCA0IDEyIDRaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXREZWdyZWVzSWNvbiA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjODM3OTcwJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ000LjUgMTBDMi41NjcgMTAgMSA4LjQzMyAxIDYuNUMxIDQuNTY3IDIuNTY3IDMgNC41IDNDNi40MzMgMyA4IDQuNTY3IDggNi41QzggOC40MzMgNi40MzMgMTAgNC41IDEwWk00LjUgOEM1LjMyODQzIDggNiA3LjMyODQzIDYgNi41QzYgNS42NzE1NyA1LjMyODQzIDUgNC41IDVDMy42NzE1NyA1IDMgNS42NzE1NyAzIDYuNUMzIDcuMzI4NDMgMy42NzE1NyA4IDQuNSA4Wk0yMiAxMEgyMEMyMCA3Ljc5MDg2IDE4LjIwOTEgNiAxNiA2QzEzLjc5MDkgNiAxMiA3Ljc5MDg2IDEyIDEwVjE1QzEyIDE3LjIwOTEgMTMuNzkwOSAxOSAxNiAxOUMxOC4yMDkxIDE5IDIwIDE3LjIwOTEgMjAgMTVIMjJDMjIgMTguMzEzNyAxOS4zMTM3IDIxIDE2IDIxQzEyLjY4NjMgMjEgMTAgMTguMzEzNyAxMCAxNVYxMEMxMCA2LjY4NjI5IDEyLjY4NjMgNCAxNiA0QzE5LjMxMzcgNCAyMiA2LjY4NjI5IDIyIDEwWidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2luZEljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTAuNSAxN0g0VjE1SDEwLjVDMTIuNDMzIDE1IDE0IDE2LjU2NyAxNCAxOC41QzE0IDIwLjQzMyAxMi40MzMgMjIgMTAuNSAyMkM4Ljk5OTU3IDIyIDcuNzE5NjYgMjEuMDU1OSA3LjIyMTk2IDE5LjcyOTNMOS4wOTUxMyAxOS4wMjY4QzkuMzA4NDMgMTkuNTk1NCA5Ljg1Njk2IDIwIDEwLjUgMjBDMTEuMzI4NCAyMCAxMiAxOS4zMjg0IDEyIDE4LjVDMTIgMTcuNjcxNiAxMS4zMjg0IDE3IDEwLjUgMTdaTTUgMTFIMTguNUMyMC40MzMgMTEgMjIgMTIuNTY3IDIyIDE0LjVDMjIgMTYuNDMzIDIwLjQzMyAxOCAxOC41IDE4QzE2Ljk5OTYgMTggMTUuNzE5NyAxNy4wNTU5IDE1LjIyMiAxNS43MjkzTDE3LjA5NTEgMTUuMDI2OEMxNy4zMDg0IDE1LjU5NTQgMTcuODU3IDE2IDE4LjUgMTZDMTkuMzI4NCAxNiAyMCAxNS4zMjg0IDIwIDE0LjVDMjAgMTMuNjcxNiAxOS4zMjg0IDEzIDE4LjUgMTNINUMzLjM0MzE1IDEzIDIgMTEuNjU2OSAyIDEwQzIgOC4zNDMxNSAzLjM0MzE1IDcgNSA3SDEzLjVDMTQuMzI4NCA3IDE1IDYuMzI4NDMgMTUgNS41QzE1IDQuNjcxNTcgMTQuMzI4NCA0IDEzLjUgNEMxMi44NTcgNCAxMi4zMDg0IDQuNDA0NjMgMTIuMDk1MSA0Ljk3MzE3TDEwLjIyMiA0LjI3MDczQzEwLjcxOTcgMi45NDQxNCAxMS45OTk2IDIgMTMuNSAyQzE1LjQzMyAyIDE3IDMuNTY3IDE3IDUuNUMxNyA3LjQzMyAxNS40MzMgOSAxMy41IDlINUM0LjQ0NzcyIDkgNCA5LjQ0NzcyIDQgMTBDNCAxMC41NTIzIDQuNDQ3NzIgMTEgNSAxMVonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IGdldEh1bWlkaXR5SWNvbiA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjODM3OTcwJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ003LjA1MDI1IDguMDQ2NzNMMTIgMy4wOTY5OEwxNi45NDk3IDguMDQ2NzNDMTkuNjgzNCAxMC43ODA0IDE5LjY4MzQgMTUuMjEyNiAxNi45NDk3IDE3Ljk0NjJDMTQuMjE2MSAyMC42Nzk5IDkuNzgzOTIgMjAuNjc5OSA3LjA1MDI1IDE3Ljk0NjJDNC4zMTY1OCAxNS4yMTI2IDQuMzE2NTggMTAuNzgwNCA3LjA1MDI1IDguMDQ2NzNaTTE4LjM2NCA2LjYzMjUyTDEyIDAuMjY4NTU1TDUuNjM2MDQgNi42MzI1MkMyLjEyMTMyIDEwLjE0NzIgMi4xMjEzMiAxNS44NDU3IDUuNjM2MDQgMTkuMzYwNEM5LjE1MDc2IDIyLjg3NTIgMTQuODQ5MiAyMi44NzUyIDE4LjM2NCAxOS4zNjA0QzIxLjg3ODcgMTUuODQ1NyAyMS44Nzg3IDEwLjE0NzIgMTguMzY0IDYuNjMyNTJaTTE2LjI0MjcgMTAuMTcxNEwxNC44Mjg1IDguNzU3MThMNy43NTc0IDE1LjgyODJMOS4xNzE2MSAxNy4yNDI1TDE2LjI0MjcgMTAuMTcxNFpNOC4xMTA5NSAxMS4yMzJDOC42OTY3NCAxMS44MTc4IDkuNjQ2NDggMTEuODE3OCAxMC4yMzIzIDExLjIzMkMxMC44MTgxIDEwLjY0NjMgMTAuODE4MSA5LjY5NjUyIDEwLjIzMjMgOS4xMTA3M0M5LjY0NjQ4IDguNTI0OTQgOC42OTY3NCA4LjUyNDk0IDguMTEwOTUgOS4xMTA3M0M3LjUyNTE2IDkuNjk2NTIgNy41MjUxNiAxMC42NDYzIDguMTEwOTUgMTEuMjMyWk0xNS44ODkxIDE2Ljg4ODlDMTUuMzAzMyAxNy40NzQ3IDE0LjM1MzYgMTcuNDc0NyAxMy43Njc4IDE2Ljg4ODlDMTMuMTgyIDE2LjMwMzEgMTMuMTgyIDE1LjM1MzQgMTMuNzY3OCAxNC43Njc2QzE0LjM1MzYgMTQuMTgxOCAxNS4zMDMzIDE0LjE4MTggMTUuODg5MSAxNC43Njc2QzE2LjQ3NDkgMTUuMzUzNCAxNi40NzQ5IDE2LjMwMzEgMTUuODg5MSAxNi44ODg5WidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlckljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNNCAyMkM0IDE3LjU4MTcgNy41ODE3MiAxNCAxMiAxNEMxNi40MTgzIDE0IDIwIDE3LjU4MTcgMjAgMjJIMThDMTggMTguNjg2MyAxNS4zMTM3IDE2IDEyIDE2QzguNjg2MjkgMTYgNiAxOC42ODYzIDYgMjJINFpNMTIgMTNDOC42ODUgMTMgNiAxMC4zMTUgNiA3QzYgMy42ODUgOC42ODUgMSAxMiAxQzE1LjMxNSAxIDE4IDMuNjg1IDE4IDdDMTggMTAuMzE1IDE1LjMxNSAxMyAxMiAxM1pNMTIgMTFDMTQuMjEgMTEgMTYgOS4yMSAxNiA3QzE2IDQuNzkgMTQuMjEgMyAxMiAzQzkuNzkgMyA4IDQuNzkgOCA3QzggOS4yMSA5Ljc5IDExIDEyIDExWidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dDdXJyZW50V2VhdGhlciA9IChjb250YWluZXIsIHRlbXAsIGNvbmRpdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbmRpdGlvbik7XHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbnRhaW5lcl9faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGdldFdlYXRoZXJJY29uKCd0ZXN0JykpO1xyXG5cclxuICBjb25zdCB0ZW1wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXBJbmZvLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29udGFpbmVyX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIC8vICAgdGVtcFRleHQuY2xhc3NMaXN0LmFkZCgpO1xyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gdGVtcDtcclxuXHJcbiAgY29uc3QgZGVncmVlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlZ3JlZUljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGV0aGVyLWNvbnRhaW5lcl9fZGVncmVlJyk7XHJcbiAgZGVncmVlSWNvbi5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZUljb24pO1xyXG5cclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBJbmZvKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0RheVdlYXRoZXIgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9fZGF0ZScpO1xyXG4gIGRhdGUudGV4dENvbnRlbnQgPSAnMDQuMDgnO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXJfX2ljb24nKTtcclxuICB3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZChnZXRXZWF0aGVySWNvbigndGVzdCcpKTtcclxuXHJcbiAgY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wSW5mby5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIC8vICAgdGVtcFRleHQuY2xhc3NMaXN0LmFkZCgpO1xyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gJzI1JztcclxuXHJcbiAgY29uc3QgZGVncmVlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlZ3JlZUljb24uY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9fZGVncmVlJyk7XHJcbiAgZGVncmVlSWNvbi5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZUljb24pO1xyXG5cclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEluZm8pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcbn07XHJcbi8vIGNvbnN0IHNob3dIb3VyV2VhdGhlciA9ICgpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dIb3VyRm9yZWNhc3QgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCB0aHJlZURheVdlYXRoZXIgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgc2hvd0RheVdlYXRoZXIoY29udGFpbmVyKTtcclxuICBzaG93RGF5V2VhdGhlcihjb250YWluZXIpO1xyXG4gIHNob3dEYXlXZWF0aGVyKGNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFdlYXRoZXJJbmZvID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkaXRpb25hbEluZm8uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1pbmZvJyk7XHJcblxyXG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmZWVsc0xpa2VUZW1wLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2UnKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZV9fdGVtcCcpO1xyXG5cclxuICBjb25zdCB0ZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wVGV4dC5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlX190ZXh0Jyk7XHJcblxyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gJzI1b0MnO1xyXG4gIGZlZWxzTGlrZVRlbXAuYXBwZW5kQ2hpbGQoZ2V0VXNlckljb24oKSk7XHJcbiAgZmVlbHNMaWtlVGVtcC5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcblxyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkJyk7XHJcblxyXG4gIGNvbnN0IHdpbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHdpbmRUZXh0LmNsYXNzTGlzdC5hZGQoJ3dpbmQtc3BlZWRfX3RleHQnKTtcclxuXHJcbiAgd2luZFRleHQudGV4dENvbnRlbnQgPSAnMjUga20vaCc7XHJcbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKGdldFdpbmRJY29uKCkpO1xyXG4gIHdpbmRTcGVlZC5hcHBlbmRDaGlsZCh3aW5kVGV4dCk7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5X190ZXh0Jyk7XHJcblxyXG4gIGh1bWlkaXR5VGV4dC50ZXh0Q29udGVudCA9ICcyNSUnO1xyXG4gIGh1bWlkaXR5LmFwcGVuZENoaWxkKGdldEh1bWlkaXR5SWNvbigpKTtcclxuICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eVRleHQpO1xyXG5cclxuICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZW1wKTtcclxuICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xyXG4gIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZGl0aW9uYWxJbmZvKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93SG91cmx5Rm9yZWNhc3QgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgaG91ckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0aW1lLmNsYXNzTGlzdC5hZGQoJ2hvdXItaW5mb19fdGltZScpO1xyXG4gIHRpbWUudGV4dENvbnRlbnQgPSAnMTI6MjAnO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hvdXItaW5mb19faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZChnZXRXZWF0aGVySWNvbigpKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnaG91ci1pbmZvX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wVmFsdWUudGV4dENvbnRlbnQgPSAnMjUnO1xyXG5cclxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBWYWx1ZSk7XHJcbiAgdGVtcC5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQodGltZSk7XHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRlbXApO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91ckluZm8pO1xyXG59O1xyXG4iLCJmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ3Byb2Nlc3MnLCBkYXRhKTtcclxuICBjb25zdCB7IGN1cnJlbnQsIGZvcmVjYXN0IH0gPSBkYXRhO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnQsIGZvcmVjYXN0KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdGVtcF9jOiB0ZW1wQyxcclxuICAgIHRlbXBfZjogdGVtcEYsXHJcbiAgICB3aW5kX21waDogd2luZE1waCxcclxuICAgIHdpbmRfa3BoOiB3aW5kS3BoLFxyXG4gICAgZmVlbHNsaWtlX2M6IGZlZWxzbGlrZUMsXHJcbiAgICBmZWVsc2xpa2VfZjogZmVlbHNsaWtlRixcclxuICAgIGxhc3RfdXBkYXRlZDogbGFzdFVwZGF0ZWQsXHJcbiAgICBodW1pZGl0eVxyXG4gIH0gPSBjdXJyZW50O1xyXG5cclxuICBjb25zb2xlLmxvZygnQ3VycmVudCcsIHtcclxuICAgIHRlbXBDLFxyXG4gICAgdGVtcEYsXHJcbiAgICB3aW5kS3BoLFxyXG4gICAgd2luZE1waCxcclxuICAgIGZlZWxzbGlrZUMsXHJcbiAgICBmZWVsc2xpa2VGLFxyXG4gICAgbGFzdFVwZGF0ZWQsXHJcbiAgICBodW1pZGl0eVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBob3VyOiBbLi4uaG91ckRhdGFdXHJcbiAgfSA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdO1xyXG5cclxuICBjb25zdCBob3VyRGV0YWlscyA9IFtdO1xyXG5cclxuICBob3VyRGF0YS5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHRlbXBfYzogaG91clRlbXBDLFxyXG4gICAgICB0ZW1wX2Y6IGhvdXJUZW1wRixcclxuICAgICAgY29uZGl0aW9uOiB7IHRleHQ6IGluZm8gfVxyXG4gICAgfSA9IGhvdXI7XHJcblxyXG4gICAgaG91ckRldGFpbHMucHVzaCh7IHRpbWUsIGhvdXJUZW1wQywgaG91clRlbXBGLCBpbmZvIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnSG91ckRldGFpbHMnLCBob3VyRGV0YWlscyk7XHJcbiAgLy8gY29uc3QgZGV0YWlscyA9IFsuLi5ob3VyRGF0YSwgeyB0ZW1wX2M6IHRlbXBDLCB0ZW1wX2Y6IHRlbXBGIH1dO1xyXG4gIC8vIGNvbnNvbGUubG9nKCdGb3JlY2FzdCcsIGhvdXJEYXRhKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTU1Yzg3ZWEwODViNjQyYjA5MDAxMTM3MjEyMzAyMDgmcT0ke2xvY2F0aW9ufWAsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cclxuICAgICk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IHByb2Nlc3NEYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICBjb25zb2xlLmxvZygnYXN5bmMnLCB3ZWF0aGVyRGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbi8vIGNvbnN0IGhlbGxvV29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4vLyBoZWxsb1dvcmxkLnRleHRDb250ZW50ID0gJ0hlbGxvIFdvcmxkISc7XHJcblxyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlbGxvV29ybGQpO1xyXG5cclxuLy8gaGVsbG9Xb3JsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZygnSGVsbG8gV29ybGQhJyk7XHJcbi8vIH0pO1xyXG5IZWFkZXIoKTtcclxuQXBwKCk7XHJcbkZvb3RlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=