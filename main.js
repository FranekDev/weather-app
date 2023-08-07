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
  // element.textContent = '';
  console.log(weather.time.split(' ')[1], weather.hourTempC);
  const time = weather.time.split(' ')[1];
  const temp = weather.hourTempC;
  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showHourlyForecast)(element, time, temp);
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
      const { hourDetails, dayData } = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(city.value);
      // hours = hourDetails;
      // day = dayData;
      // console.log('app', hourDetails, dayData);
      // console.log('Day', dayData.tempC);
      (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showCurrentWeather)(weatherContainer, dayData.tempC, 'Sunny');
      console.log('Hour', hourDetails);
      hourlyWeather.textContent = '';
      hourDetails.forEach((hour) => formatHourWeather(hour, hourlyWeather));
    } catch (error) {
      console.log(error);
    }
  });

  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showCurrentWeather)(weatherContainer, '25', 'Sunny');
  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.threeDayWeather)(dayForecast);
  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.additionalWeatherInfo)(additionalData);
  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showHourlyForecast)(hourlyWeather);

  for (let i = 0; i < 24; i++) {
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
const getWeatherIcon = (weather = 'te') => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  console.log('Weather Icon', weather);

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
  console.log(condition);
  const element = weatherContainer;
  // element.textContent = '';
  // const weatherContainer = document.createElement('div');
  // weatherContainer.classList.add('weather-container');
  element.textContent = '';

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

  // container.appendChild(weatherContainer);
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

  tempText.textContent = '25';
  feelsLikeTemp.appendChild(getUserIcon());
  temp.appendChild(tempText);
  temp.appendChild(getDegreesIcon());
  feelsLikeTemp.appendChild(temp);

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

const showHourlyForecast = (
  container,
  timeText = '12:34',
  tempText = '25'
) => {
  const hourInfo = document.createElement('div');

  const time = document.createElement('span');
  time.classList.add('hour-info__time');
  // time.textContent = '12:20';
  time.textContent = timeText;

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('hour-info__icon');
  weatherIcon.append(getWeatherIcon());

  const temp = document.createElement('div');
  temp.classList.add('hour-info__temp');

  const tempValue = document.createElement('span');
  // tempValue.textContent = '25';
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
  // console.log('process', data);
  const { current, forecast } = data;
  // console.log(current, forecast);

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
  // const details = [...hourData, { temp_c: tempC, temp_f: tempF }];
  // console.log('Forecast', hourData);

  const dayData = {
    tempC,
    tempF,
    feelslikeC,
    feelslikeF,
    windKph,
    windMph,
    lastUpdated,
    humidity
  };
  console.log('Day weather fn', dayData);

  return { hourDetails, dayData };
}

async function getWeather(location) {
  // try {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=55c87ea085b642b0900113721230208&q=${location}`,
    { mode: 'cors' }
  );
  // const weatherData = processData(await response.json());
  const { hourDetails, dayData } = processData(await response.json());
  // console.log('async', weatherData);
  console.log('async', hourDetails, dayData);
  return { hourDetails, dayData };
  // } catch (error) {
  // console.log(error);
  // }
  // return 'Error';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU1yQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBa0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCLFFBQVEsb0RBQVU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsdURBQWtCO0FBQ3BCLEVBQUUsb0RBQWU7QUFDakIsRUFBRSwwREFBcUI7QUFDdkIsRUFBRSx1REFBa0I7QUFDcEI7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixJQUFJLHVEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RGbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDclJBO0FBQ0E7QUFDQSxVQUFVLG9CQUFvQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLE1BQU07QUFDTjtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQsR0FBRztBQUNIO0FBQ0E7QUFDQSxxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixTQUFTO0FBQ2xHLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVSx1QkFBdUI7QUFDakM7QUFDQTtBQUNBLFdBQVc7QUFDWCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2hGMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNlO0FBQ047QUFDTTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDhEQUFNO0FBQ04sMkRBQUc7QUFDSCw4REFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi93ZWF0aGVyJztcclxuaW1wb3J0IHtcclxuICBzaG93Q3VycmVudFdlYXRoZXIsXHJcbiAgdGhyZWVEYXlXZWF0aGVyLFxyXG4gIGFkZGl0aW9uYWxXZWF0aGVySW5mbyxcclxuICBzaG93SG91cmx5Rm9yZWNhc3RcclxufSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IGZvcm1hdEhvdXJXZWF0aGVyID0gKHdlYXRoZXIsIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjb250YWluZXI7XHJcbiAgLy8gZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIGNvbnNvbGUubG9nKHdlYXRoZXIudGltZS5zcGxpdCgnICcpWzFdLCB3ZWF0aGVyLmhvdXJUZW1wQyk7XHJcbiAgY29uc3QgdGltZSA9IHdlYXRoZXIudGltZS5zcGxpdCgnICcpWzFdO1xyXG4gIGNvbnN0IHRlbXAgPSB3ZWF0aGVyLmhvdXJUZW1wQztcclxuICBzaG93SG91cmx5Rm9yZWNhc3QoZWxlbWVudCwgdGltZSwgdGVtcCk7XHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktaW5wdXQnKTtcclxuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICAvLyBXeWtvbnVqZSBzenliY2llaiBuaXogcG9iaWVyemUgZGFuZSB6IHdlYXRoZXIgYXBpXHJcbiAgLy8gY29uc29sZS5sb2coJ0hvdXInLCBob3VycywgJ0RheScsIGRheS50ZW1wQyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckRhdGEuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kYXRhJyk7XHJcbiAgY29uc3QgZGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXlGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdkYXktZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluV2VhdGhlci5jbGFzc0xpc3QuYWRkKCdtYWluLXdlYXRoZXInKTtcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluRGF0YS5jbGFzc0xpc3QuYWRkKCdtYWluLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgYWRkaXRpb25hbERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXdlYXRoZXInKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXInKTtcclxuXHJcbiAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcblxyXG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNpdHkudmFsdWUpO1xyXG4gICAgICBjb25zdCB7IGhvdXJEZXRhaWxzLCBkYXlEYXRhIH0gPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkudmFsdWUpO1xyXG4gICAgICAvLyBob3VycyA9IGhvdXJEZXRhaWxzO1xyXG4gICAgICAvLyBkYXkgPSBkYXlEYXRhO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnYXBwJywgaG91ckRldGFpbHMsIGRheURhdGEpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnRGF5JywgZGF5RGF0YS50ZW1wQyk7XHJcbiAgICAgIHNob3dDdXJyZW50V2VhdGhlcih3ZWF0aGVyQ29udGFpbmVyLCBkYXlEYXRhLnRlbXBDLCAnU3VubnknKTtcclxuICAgICAgY29uc29sZS5sb2coJ0hvdXInLCBob3VyRGV0YWlscyk7XHJcbiAgICAgIGhvdXJseVdlYXRoZXIudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgaG91ckRldGFpbHMuZm9yRWFjaCgoaG91cikgPT4gZm9ybWF0SG91cldlYXRoZXIoaG91ciwgaG91cmx5V2VhdGhlcikpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBzaG93Q3VycmVudFdlYXRoZXIod2VhdGhlckNvbnRhaW5lciwgJzI1JywgJ1N1bm55Jyk7XHJcbiAgdGhyZWVEYXlXZWF0aGVyKGRheUZvcmVjYXN0KTtcclxuICBhZGRpdGlvbmFsV2VhdGhlckluZm8oYWRkaXRpb25hbERhdGEpO1xyXG4gIHNob3dIb3VybHlGb3JlY2FzdChob3VybHlXZWF0aGVyKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICBzaG93SG91cmx5Rm9yZWNhc3QoaG91cmx5V2VhdGhlcik7XHJcbiAgfVxyXG5cclxuICBtYWluRGF0YS5hcHBlbmRDaGlsZChkYXlGb3JlY2FzdCk7XHJcblxyXG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKG1haW5EYXRhKTtcclxuICBtYWluV2VhdGhlci5hcHBlbmRDaGlsZChhZGRpdGlvbmFsRGF0YSk7XHJcblxyXG4gIHdlYXRoZXJEYXRhLmFwcGVuZENoaWxkKG1haW5XZWF0aGVyKTtcclxuICB3ZWF0aGVyRGF0YS5hcHBlbmRDaGlsZChob3VybHlXZWF0aGVyKTtcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImNvbnN0IHNob3dHaXRodWJMb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM1MTUxNTEnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEyLjAwMSAyQzYuNDc1OTggMiAyLjAwMDk4IDYuNDc1IDIuMDAwOTggMTJDMi4wMDA5OCAxNi40MjUgNC44NjM0OCAyMC4xNjI1IDguODM4NDggMjEuNDg3NUM5LjMzODQ4IDIxLjU3NSA5LjUyNTk4IDIxLjI3NSA5LjUyNTk4IDIxLjAxMjVDOS41MjU5OCAyMC43NzUgOS41MTM0OCAxOS45ODc1IDkuNTEzNDggMTkuMTVDNy4wMDA5OCAxOS42MTI1IDYuMzUwOTggMTguNTM3NSA2LjE1MDk4IDE3Ljk3NUM2LjAzODQ4IDE3LjY4NzUgNS41NTA5OCAxNi44IDUuMTI1OTggMTYuNTYyNUM0Ljc3NTk4IDE2LjM3NSA0LjI3NTk4IDE1LjkxMjUgNS4xMTM0OCAxNS45QzUuOTAwOTggMTUuODg3NSA2LjQ2MzQ4IDE2LjYyNSA2LjY1MDk4IDE2LjkyNUM3LjU1MDk4IDE4LjQzNzUgOC45ODg0OCAxOC4wMTI1IDkuNTYzNDggMTcuNzVDOS42NTA5OCAxNy4xIDkuOTEzNDggMTYuNjYyNSAxMC4yMDEgMTYuNDEyNUM3Ljk3NTk4IDE2LjE2MjUgNS42NTA5OCAxNS4zIDUuNjUwOTggMTEuNDc1QzUuNjUwOTggMTAuMzg3NSA2LjAzODQ4IDkuNDg3NSA2LjY3NTk4IDguNzg3NUM2LjU3NTk4IDguNTM3NSA2LjIyNTk4IDcuNTEyNSA2Ljc3NTk4IDYuMTM3NUM2Ljc3NTk4IDYuMTM3NSA3LjYxMzQ4IDUuODc1IDkuNTI1OTggNy4xNjI1QzEwLjMyNiA2LjkzNzUgMTEuMTc2IDYuODI1IDEyLjAyNiA2LjgyNUMxMi44NzYgNi44MjUgMTMuNzI2IDYuOTM3NSAxNC41MjYgNy4xNjI1QzE2LjQzODUgNS44NjI1IDE3LjI3NiA2LjEzNzUgMTcuMjc2IDYuMTM3NUMxNy44MjYgNy41MTI1IDE3LjQ3NiA4LjUzNzUgMTcuMzc2IDguNzg3NUMxOC4wMTM1IDkuNDg3NSAxOC40MDEgMTAuMzc1IDE4LjQwMSAxMS40NzVDMTguNDAxIDE1LjMxMjUgMTYuMDYzNSAxNi4xNjI1IDEzLjgzODUgMTYuNDEyNUMxNC4yMDEgMTYuNzI1IDE0LjUxMzUgMTcuMzI1IDE0LjUxMzUgMTguMjYyNUMxNC41MTM1IDE5LjYgMTQuNTAxIDIwLjY3NSAxNC41MDEgMjEuMDEyNUMxNC41MDEgMjEuMjc1IDE0LjY4ODUgMjEuNTg3NSAxNS4xODg1IDIxLjQ4NzVDMTkuMjU5IDIwLjExMzMgMjEuOTk5OSAxNi4yOTYzIDIyLjAwMSAxMkMyMi4wMDEgNi40NzUgMTcuNTI2IDIgMTIuMDAxIDJaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblxyXG4gIGNvbnN0IGZvb3RlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgQnkgRnJhbmVrRGV2JztcclxuXHJcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKHNob3dHaXRodWJMb2dvKCkpO1xyXG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJhbmVrRGV2L3dlYXRoZXItYXBwJztcclxuICBnaXRodWJMaW5rLnRhcmdldCA9ICdibGFuayc7XHJcblxyXG4gIGZvb3RlckluZm8uYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgZm9vdGVySW5mby5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVySW5mbyk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiY29uc3Qgc2VhcmNoSWNvblN2ZyA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNTE1MTUxJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xOC4wMzEgMTYuNjE2OEwyMi4zMTM3IDIwLjg5OTVMMjAuODk5NSAyMi4zMTM3TDE2LjYxNjggMTguMDMxQzE1LjA3NjkgMTkuMjYzIDEzLjEyNCAyMCAxMSAyMEM2LjAzMiAyMCAyIDE1Ljk2OCAyIDExQzIgNi4wMzIgNi4wMzIgMiAxMSAyQzE1Ljk2OCAyIDIwIDYuMDMyIDIwIDExQzIwIDEzLjEyNCAxOS4yNjMgMTUuMDc2OSAxOC4wMzEgMTYuNjE2OFpNMTYuMDI0NyAxNS44NzQ4QzE3LjI0NzUgMTQuNjE0NiAxOCAxMi44OTU2IDE4IDExQzE4IDcuMTMyNSAxNC44Njc1IDQgMTEgNEM3LjEzMjUgNCA0IDcuMTMyNSA0IDExQzQgMTQuODY3NSA3LjEzMjUgMTggMTEgMThDMTIuODk1NiAxOCAxNC42MTQ2IDE3LjI0NzUgMTUuODc0OCAxNi4wMjQ3TDE2LjAyNDcgMTUuODc0OFonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgY29uc3QgYmxhbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBibGFua0Rpdi5zdHlsZS53aWR0aCA9ICcyMjlweCc7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJsYW5rRGl2KTtcclxuXHJcbiAgY29uc3QgY2l0eURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaXR5RGF0YS5jbGFzc0xpc3QuYWRkKCdjaXR5LWRhdGEnKTtcclxuXHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnY2l0eS1uYW1lJyk7XHJcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSAnR2FqIFdpZWxraSc7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWRhdGUnKTtcclxuICBkYXRlLnRleHRDb250ZW50ID0gJzAzLjA4LjIwMjMnO1xyXG5cclxuICBjaXR5RGF0YS5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XHJcbiAgY2l0eURhdGEuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG4gIGNvbnN0IGZvcnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2l0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NpdHktaW5wdXQnKTtcclxuICBjaXR5SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBjaXR5SW5wdXQucGxhY2Vob2xkZXIgPSAnQ2l0eSc7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICBzZWFyY2hJY29uLmFwcGVuZENoaWxkKHNlYXJjaEljb25TdmcoKSk7XHJcbiAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xyXG5cclxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUlucHV0KTtcclxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcclxuXHJcbiAgZm9ydW0uYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNpdHlEYXRhKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZm9ydW0pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImNvbnN0IGdldFdlYXRoZXJJY29uID0gKHdlYXRoZXIgPSAndGUnKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZygnV2VhdGhlciBJY29uJywgd2VhdGhlcik7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEyIDJDMTUuODY2IDIgMTkgNS4xMzQwMSAxOSA5QzE5IDkuMTEzNTEgMTguOTk3MyA5LjIyNjM5IDE4Ljk5MiA5LjMzODU3QzIxLjMyNjUgMTAuMTYgMjMgMTIuMzg0NiAyMyAxNUMyMyAxOC4zMTM3IDIwLjMxMzcgMjEgMTcgMjFIN0MzLjY4NjI5IDIxIDEgMTguMzEzNyAxIDE1QzEgMTIuMzg0NiAyLjY3MzQ2IDEwLjE2IDUuMDA4MDQgOS4zMzg1N0M1LjAwMjcgOS4yMjYzOSA1IDkuMTEzNTEgNSA5QzUgNS4xMzQwMSA4LjEzNDAxIDIgMTIgMlpNMTIgNEM5LjIzODU4IDQgNyA2LjIzODU4IDcgOUM3IDkuMDgxNDcgNy4wMDE5MyA5LjE2MjYzIDcuMDA1NzggOS4yNDM0NEw3LjA3NjYyIDEwLjczMDlMNS42NzE4MyAxMS4yMjUyQzQuMDg0NCAxMS43ODM3IDMgMTMuMjg4OSAzIDE1QzMgMTcuMjA5MSA0Ljc5MDg2IDE5IDcgMTlIMTdDMTkuMjA5MSAxOSAyMSAxNy4yMDkxIDIxIDE1QzIxIDEyLjc5IDE5LjIxIDExIDE3IDExQzE1LjIzMyAxMSAxMy43MzM3IDEyLjE0NTcgMTMuMjA0MiAxMy43MzQ3TDExLjMwNjQgMTMuMTAyMUMxMi4xMDA1IDEwLjcxODUgMTQuMzUgOSAxNyA5QzE3IDYuMjM4NTggMTQuNzYxNCA0IDEyIDRaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXREZWdyZWVzSWNvbiA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjODM3OTcwJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ000LjUgMTBDMi41NjcgMTAgMSA4LjQzMyAxIDYuNUMxIDQuNTY3IDIuNTY3IDMgNC41IDNDNi40MzMgMyA4IDQuNTY3IDggNi41QzggOC40MzMgNi40MzMgMTAgNC41IDEwWk00LjUgOEM1LjMyODQzIDggNiA3LjMyODQzIDYgNi41QzYgNS42NzE1NyA1LjMyODQzIDUgNC41IDVDMy42NzE1NyA1IDMgNS42NzE1NyAzIDYuNUMzIDcuMzI4NDMgMy42NzE1NyA4IDQuNSA4Wk0yMiAxMEgyMEMyMCA3Ljc5MDg2IDE4LjIwOTEgNiAxNiA2QzEzLjc5MDkgNiAxMiA3Ljc5MDg2IDEyIDEwVjE1QzEyIDE3LjIwOTEgMTMuNzkwOSAxOSAxNiAxOUMxOC4yMDkxIDE5IDIwIDE3LjIwOTEgMjAgMTVIMjJDMjIgMTguMzEzNyAxOS4zMTM3IDIxIDE2IDIxQzEyLjY4NjMgMjEgMTAgMTguMzEzNyAxMCAxNVYxMEMxMCA2LjY4NjI5IDEyLjY4NjMgNCAxNiA0QzE5LjMxMzcgNCAyMiA2LjY4NjI5IDIyIDEwWidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0V2luZEljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTAuNSAxN0g0VjE1SDEwLjVDMTIuNDMzIDE1IDE0IDE2LjU2NyAxNCAxOC41QzE0IDIwLjQzMyAxMi40MzMgMjIgMTAuNSAyMkM4Ljk5OTU3IDIyIDcuNzE5NjYgMjEuMDU1OSA3LjIyMTk2IDE5LjcyOTNMOS4wOTUxMyAxOS4wMjY4QzkuMzA4NDMgMTkuNTk1NCA5Ljg1Njk2IDIwIDEwLjUgMjBDMTEuMzI4NCAyMCAxMiAxOS4zMjg0IDEyIDE4LjVDMTIgMTcuNjcxNiAxMS4zMjg0IDE3IDEwLjUgMTdaTTUgMTFIMTguNUMyMC40MzMgMTEgMjIgMTIuNTY3IDIyIDE0LjVDMjIgMTYuNDMzIDIwLjQzMyAxOCAxOC41IDE4QzE2Ljk5OTYgMTggMTUuNzE5NyAxNy4wNTU5IDE1LjIyMiAxNS43MjkzTDE3LjA5NTEgMTUuMDI2OEMxNy4zMDg0IDE1LjU5NTQgMTcuODU3IDE2IDE4LjUgMTZDMTkuMzI4NCAxNiAyMCAxNS4zMjg0IDIwIDE0LjVDMjAgMTMuNjcxNiAxOS4zMjg0IDEzIDE4LjUgMTNINUMzLjM0MzE1IDEzIDIgMTEuNjU2OSAyIDEwQzIgOC4zNDMxNSAzLjM0MzE1IDcgNSA3SDEzLjVDMTQuMzI4NCA3IDE1IDYuMzI4NDMgMTUgNS41QzE1IDQuNjcxNTcgMTQuMzI4NCA0IDEzLjUgNEMxMi44NTcgNCAxMi4zMDg0IDQuNDA0NjMgMTIuMDk1MSA0Ljk3MzE3TDEwLjIyMiA0LjI3MDczQzEwLjcxOTcgMi45NDQxNCAxMS45OTk2IDIgMTMuNSAyQzE1LjQzMyAyIDE3IDMuNTY3IDE3IDUuNUMxNyA3LjQzMyAxNS40MzMgOSAxMy41IDlINUM0LjQ0NzcyIDkgNCA5LjQ0NzcyIDQgMTBDNCAxMC41NTIzIDQuNDQ3NzIgMTEgNSAxMVonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IGdldEh1bWlkaXR5SWNvbiA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjODM3OTcwJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ003LjA1MDI1IDguMDQ2NzNMMTIgMy4wOTY5OEwxNi45NDk3IDguMDQ2NzNDMTkuNjgzNCAxMC43ODA0IDE5LjY4MzQgMTUuMjEyNiAxNi45NDk3IDE3Ljk0NjJDMTQuMjE2MSAyMC42Nzk5IDkuNzgzOTIgMjAuNjc5OSA3LjA1MDI1IDE3Ljk0NjJDNC4zMTY1OCAxNS4yMTI2IDQuMzE2NTggMTAuNzgwNCA3LjA1MDI1IDguMDQ2NzNaTTE4LjM2NCA2LjYzMjUyTDEyIDAuMjY4NTU1TDUuNjM2MDQgNi42MzI1MkMyLjEyMTMyIDEwLjE0NzIgMi4xMjEzMiAxNS44NDU3IDUuNjM2MDQgMTkuMzYwNEM5LjE1MDc2IDIyLjg3NTIgMTQuODQ5MiAyMi44NzUyIDE4LjM2NCAxOS4zNjA0QzIxLjg3ODcgMTUuODQ1NyAyMS44Nzg3IDEwLjE0NzIgMTguMzY0IDYuNjMyNTJaTTE2LjI0MjcgMTAuMTcxNEwxNC44Mjg1IDguNzU3MThMNy43NTc0IDE1LjgyODJMOS4xNzE2MSAxNy4yNDI1TDE2LjI0MjcgMTAuMTcxNFpNOC4xMTA5NSAxMS4yMzJDOC42OTY3NCAxMS44MTc4IDkuNjQ2NDggMTEuODE3OCAxMC4yMzIzIDExLjIzMkMxMC44MTgxIDEwLjY0NjMgMTAuODE4MSA5LjY5NjUyIDEwLjIzMjMgOS4xMTA3M0M5LjY0NjQ4IDguNTI0OTQgOC42OTY3NCA4LjUyNDk0IDguMTEwOTUgOS4xMTA3M0M3LjUyNTE2IDkuNjk2NTIgNy41MjUxNiAxMC42NDYzIDguMTEwOTUgMTEuMjMyWk0xNS44ODkxIDE2Ljg4ODlDMTUuMzAzMyAxNy40NzQ3IDE0LjM1MzYgMTcuNDc0NyAxMy43Njc4IDE2Ljg4ODlDMTMuMTgyIDE2LjMwMzEgMTMuMTgyIDE1LjM1MzQgMTMuNzY3OCAxNC43Njc2QzE0LjM1MzYgMTQuMTgxOCAxNS4zMDMzIDE0LjE4MTggMTUuODg5MSAxNC43Njc2QzE2LjQ3NDkgMTUuMzUzNCAxNi40NzQ5IDE2LjMwMzEgMTUuODg5MSAxNi44ODg5WidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0VXNlckljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNNCAyMkM0IDE3LjU4MTcgNy41ODE3MiAxNCAxMiAxNEMxNi40MTgzIDE0IDIwIDE3LjU4MTcgMjAgMjJIMThDMTggMTguNjg2MyAxNS4zMTM3IDE2IDEyIDE2QzguNjg2MjkgMTYgNiAxOC42ODYzIDYgMjJINFpNMTIgMTNDOC42ODUgMTMgNiAxMC4zMTUgNiA3QzYgMy42ODUgOC42ODUgMSAxMiAxQzE1LjMxNSAxIDE4IDMuNjg1IDE4IDdDMTggMTAuMzE1IDE1LjMxNSAxMyAxMiAxM1pNMTIgMTFDMTQuMjEgMTEgMTYgOS4yMSAxNiA3QzE2IDQuNzkgMTQuMjEgMyAxMiAzQzkuNzkgMyA4IDQuNzkgOCA3QzggOS4yMSA5Ljc5IDExIDEyIDExWidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dDdXJyZW50V2VhdGhlciA9ICh3ZWF0aGVyQ29udGFpbmVyLCB0ZW1wLCBjb25kaXRpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhjb25kaXRpb24pO1xyXG4gIGNvbnN0IGVsZW1lbnQgPSB3ZWF0aGVyQ29udGFpbmVyO1xyXG4gIC8vIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcclxuICAvLyBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgLy8gd2VhdGhlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbnRhaW5lcicpO1xyXG4gIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbnRhaW5lcl9faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGdldFdlYXRoZXJJY29uKCd0ZXN0JykpO1xyXG5cclxuICBjb25zdCB0ZW1wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXBJbmZvLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29udGFpbmVyX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIC8vICAgdGVtcFRleHQuY2xhc3NMaXN0LmFkZCgpO1xyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gdGVtcDtcclxuXHJcbiAgY29uc3QgZGVncmVlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlZ3JlZUljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGV0aGVyLWNvbnRhaW5lcl9fZGVncmVlJyk7XHJcbiAgZGVncmVlSWNvbi5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZUljb24pO1xyXG5cclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBJbmZvKTtcclxuXHJcbiAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0RheVdlYXRoZXIgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9fZGF0ZScpO1xyXG4gIGRhdGUudGV4dENvbnRlbnQgPSAnMDQuMDgnO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXJfX2ljb24nKTtcclxuICB3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZChnZXRXZWF0aGVySWNvbigndGVzdCcpKTtcclxuXHJcbiAgY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wSW5mby5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIC8vICAgdGVtcFRleHQuY2xhc3NMaXN0LmFkZCgpO1xyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gJzI1JztcclxuXHJcbiAgY29uc3QgZGVncmVlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlZ3JlZUljb24uY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9fZGVncmVlJyk7XHJcbiAgZGVncmVlSWNvbi5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZUljb24pO1xyXG5cclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEluZm8pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcbn07XHJcbi8vIGNvbnN0IHNob3dIb3VyV2VhdGhlciA9ICgpID0+IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dIb3VyRm9yZWNhc3QgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCB0aHJlZURheVdlYXRoZXIgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgc2hvd0RheVdlYXRoZXIoY29udGFpbmVyKTtcclxuICBzaG93RGF5V2VhdGhlcihjb250YWluZXIpO1xyXG4gIHNob3dEYXlXZWF0aGVyKGNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFdlYXRoZXJJbmZvID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkaXRpb25hbEluZm8uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1pbmZvJyk7XHJcblxyXG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmZWVsc0xpa2VUZW1wLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2UnKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZV9fdGVtcCcpO1xyXG5cclxuICBjb25zdCB0ZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wVGV4dC5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlX190ZXh0Jyk7XHJcblxyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gJzI1JztcclxuICBmZWVsc0xpa2VUZW1wLmFwcGVuZENoaWxkKGdldFVzZXJJY29uKCkpO1xyXG4gIHRlbXAuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXAuYXBwZW5kQ2hpbGQoZ2V0RGVncmVlc0ljb24oKSk7XHJcbiAgZmVlbHNMaWtlVGVtcC5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuXHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmQtc3BlZWQnKTtcclxuXHJcbiAgY29uc3Qgd2luZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgd2luZFRleHQuY2xhc3NMaXN0LmFkZCgnd2luZC1zcGVlZF9fdGV4dCcpO1xyXG5cclxuICB3aW5kVGV4dC50ZXh0Q29udGVudCA9ICcyNSBrbS9oJztcclxuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQoZ2V0V2luZEljb24oKSk7XHJcbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRUZXh0KTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlfX3RleHQnKTtcclxuXHJcbiAgaHVtaWRpdHlUZXh0LnRleHRDb250ZW50ID0gJzI1JSc7XHJcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoZ2V0SHVtaWRpdHlJY29uKCkpO1xyXG4gIGh1bWlkaXR5LmFwcGVuZENoaWxkKGh1bWlkaXR5VGV4dCk7XHJcblxyXG4gIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKGZlZWxzTGlrZVRlbXApO1xyXG4gIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKHdpbmRTcGVlZCk7XHJcbiAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkaXRpb25hbEluZm8pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dIb3VybHlGb3JlY2FzdCA9IChcclxuICBjb250YWluZXIsXHJcbiAgdGltZVRleHQgPSAnMTI6MzQnLFxyXG4gIHRlbXBUZXh0ID0gJzI1J1xyXG4pID0+IHtcclxuICBjb25zdCBob3VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRpbWUuY2xhc3NMaXN0LmFkZCgnaG91ci1pbmZvX190aW1lJyk7XHJcbiAgLy8gdGltZS50ZXh0Q29udGVudCA9ICcxMjoyMCc7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IHRpbWVUZXh0O1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hvdXItaW5mb19faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZChnZXRXZWF0aGVySWNvbigpKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnaG91ci1pbmZvX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAvLyB0ZW1wVmFsdWUudGV4dENvbnRlbnQgPSAnMjUnO1xyXG4gIHRlbXBWYWx1ZS50ZXh0Q29udGVudCA9IHRlbXBUZXh0O1xyXG5cclxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBWYWx1ZSk7XHJcbiAgdGVtcC5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQodGltZSk7XHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRlbXApO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91ckluZm8pO1xyXG59O1xyXG4iLCJmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XHJcbiAgLy8gY29uc29sZS5sb2coJ3Byb2Nlc3MnLCBkYXRhKTtcclxuICBjb25zdCB7IGN1cnJlbnQsIGZvcmVjYXN0IH0gPSBkYXRhO1xyXG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnQsIGZvcmVjYXN0KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdGVtcF9jOiB0ZW1wQyxcclxuICAgIHRlbXBfZjogdGVtcEYsXHJcbiAgICB3aW5kX21waDogd2luZE1waCxcclxuICAgIHdpbmRfa3BoOiB3aW5kS3BoLFxyXG4gICAgZmVlbHNsaWtlX2M6IGZlZWxzbGlrZUMsXHJcbiAgICBmZWVsc2xpa2VfZjogZmVlbHNsaWtlRixcclxuICAgIGxhc3RfdXBkYXRlZDogbGFzdFVwZGF0ZWQsXHJcbiAgICBodW1pZGl0eVxyXG4gIH0gPSBjdXJyZW50O1xyXG5cclxuICAvLyBjb25zb2xlLmxvZygnQ3VycmVudCcsIHtcclxuICAvLyAgIHRlbXBDLFxyXG4gIC8vICAgdGVtcEYsXHJcbiAgLy8gICB3aW5kS3BoLFxyXG4gIC8vICAgd2luZE1waCxcclxuICAvLyAgIGZlZWxzbGlrZUMsXHJcbiAgLy8gICBmZWVsc2xpa2VGLFxyXG4gIC8vICAgbGFzdFVwZGF0ZWQsXHJcbiAgLy8gICBodW1pZGl0eVxyXG4gIC8vIH0pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBob3VyOiBbLi4uaG91ckRhdGFdXHJcbiAgfSA9IGZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdO1xyXG5cclxuICBjb25zdCBob3VyRGV0YWlscyA9IFtdO1xyXG5cclxuICBob3VyRGF0YS5mb3JFYWNoKChob3VyKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRpbWUsXHJcbiAgICAgIHRlbXBfYzogaG91clRlbXBDLFxyXG4gICAgICB0ZW1wX2Y6IGhvdXJUZW1wRixcclxuICAgICAgY29uZGl0aW9uOiB7IHRleHQ6IGluZm8gfVxyXG4gICAgfSA9IGhvdXI7XHJcblxyXG4gICAgaG91ckRldGFpbHMucHVzaCh7IHRpbWUsIGhvdXJUZW1wQywgaG91clRlbXBGLCBpbmZvIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZygnSG91ckRldGFpbHMgd2VhdGhlciBmbicsIGhvdXJEZXRhaWxzKTtcclxuICAvLyBjb25zdCBkZXRhaWxzID0gWy4uLmhvdXJEYXRhLCB7IHRlbXBfYzogdGVtcEMsIHRlbXBfZjogdGVtcEYgfV07XHJcbiAgLy8gY29uc29sZS5sb2coJ0ZvcmVjYXN0JywgaG91ckRhdGEpO1xyXG5cclxuICBjb25zdCBkYXlEYXRhID0ge1xyXG4gICAgdGVtcEMsXHJcbiAgICB0ZW1wRixcclxuICAgIGZlZWxzbGlrZUMsXHJcbiAgICBmZWVsc2xpa2VGLFxyXG4gICAgd2luZEtwaCxcclxuICAgIHdpbmRNcGgsXHJcbiAgICBsYXN0VXBkYXRlZCxcclxuICAgIGh1bWlkaXR5XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZygnRGF5IHdlYXRoZXIgZm4nLCBkYXlEYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgaG91ckRldGFpbHMsIGRheURhdGEgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xyXG4gIC8vIHRyeSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT01NWM4N2VhMDg1YjY0MmIwOTAwMTEzNzIxMjMwMjA4JnE9JHtsb2NhdGlvbn1gLFxyXG4gICAgeyBtb2RlOiAnY29ycycgfVxyXG4gICk7XHJcbiAgLy8gY29uc3Qgd2VhdGhlckRhdGEgPSBwcm9jZXNzRGF0YShhd2FpdCByZXNwb25zZS5qc29uKCkpO1xyXG4gIGNvbnN0IHsgaG91ckRldGFpbHMsIGRheURhdGEgfSA9IHByb2Nlc3NEYXRhKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgLy8gY29uc29sZS5sb2coJ2FzeW5jJywgd2VhdGhlckRhdGEpO1xyXG4gIGNvbnNvbGUubG9nKCdhc3luYycsIGhvdXJEZXRhaWxzLCBkYXlEYXRhKTtcclxuICByZXR1cm4geyBob3VyRGV0YWlscywgZGF5RGF0YSB9O1xyXG4gIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIC8vIH1cclxuICAvLyByZXR1cm4gJ0Vycm9yJztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuLy8gY29uc3QgaGVsbG9Xb3JsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbi8vIGhlbGxvV29ybGQudGV4dENvbnRlbnQgPSAnSGVsbG8gV29ybGQhJztcclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVsbG9Xb3JsZCk7XHJcblxyXG4vLyBoZWxsb1dvcmxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCEnKTtcclxuLy8gfSk7XHJcbkhlYWRlcigpO1xyXG5BcHAoKTtcclxuRm9vdGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==