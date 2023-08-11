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

  const { time: forecastTime, hourTempC: temp, info, isHourDay } = weather;
  const formatedTime = forecastTime.split(' ')[1];

  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showHourlyForecast)(element, formatedTime, temp, info, isHourDay);
};

const showDaysForecast = (container, data) => {
  const { date, avgTempC, dayInfo, isSunUp } = data;
  const dayDate = date.split(' ')[0].split('-').reverse().join('.').slice(0, 5);

  (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showDayWeather)(container, dayDate, avgTempC, dayInfo, isSunUp);
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

    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showCurrentWeather)(weatherContainer, tempC, currentWeatherType, isDay);

    const { name, lastUpdated: time, feelslikeC, windKph, humidity } = day;
    cityName.textContent = name;

    const date = time.split(' ')[0].split('-').reverse().join('.');
    currentDate.textContent = date;

    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.additionalWeatherInfo)(additionalData, feelslikeC, windKph, humidity);

    hours.forEach((hour) => formatHourWeather(hour, hourlyWeather));
  };

  const fetchWeather = async (cityToFetch = 'Poznan') => {
    try {
      const { hourDetails, dayData, processedDays } = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(
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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/components/UI.js");


const Footer = () => {
  const footer = document.createElement('footer');

  const footerInfo = document.createElement('div');

  const text = document.createElement('span');
  text.textContent = 'Created By FranekDev';

  const githubLink = document.createElement('a');
  const githubIconColor = '#515151';
  githubLink.appendChild((0,_UI__WEBPACK_IMPORTED_MODULE_0__.getSvgIcon)(_UI__WEBPACK_IMPORTED_MODULE_0__.svgPaths.github, githubIconColor));
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
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/components/UI.js");


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

  const searchIcon = document.createElement('div');
  const searchButton = document.createElement('button');

  const searchIconColor = '#515151';
  searchButton.classList.add('search-button');

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
  });

  searchIcon.appendChild((0,_UI__WEBPACK_IMPORTED_MODULE_0__.getSvgIcon)(_UI__WEBPACK_IMPORTED_MODULE_0__.svgPaths.search, searchIconColor));
  searchButton.appendChild(searchIcon);

  searchContainer.appendChild(cityInput);
  searchContainer.appendChild(searchButton);

  forum.appendChild(searchContainer);

  const mobileSearchTrigger = document.createElement('a');
  mobileSearchTrigger.classList.add('mobile-search-trigger');
  mobileSearchTrigger.appendChild((0,_UI__WEBPACK_IMPORTED_MODULE_0__.getSvgIcon)(_UI__WEBPACK_IMPORTED_MODULE_0__.svgPaths.search, searchIconColor));

  const hide = (form, main, city) => {
    form.classList.remove('active');
    form.classList.toggle('hide');
    main.classList.toggle('show');
    main.classList.remove('hide');
    city.classList.remove('hide');
    city.classList.toggle('show');
  };

  const show = (form, main, city) => {
    form.classList.remove('hide');
    form.classList.toggle('active');
    main.classList.toggle('hide');
    main.classList.remove('show');
    city.classList.remove('show');
    city.classList.toggle('hide');
  };

  let isHidden = true;

  const animateForm = (form, main, city) => {
    if (isHidden) {
      setTimeout(() => {
        forum.style.display = 'block';
      }, 125);
      show(form, main, city);
    } else {
      setTimeout(() => {
        forum.style.display = 'none';
      }, 125);
      hide(form, main, city);
    }
  };

  mobileSearchTrigger.addEventListener('click', () => {
    const main = document.querySelector('main');
    animateForm(forum, main, cityData);
    isHidden = !isHidden;
  });

  if (window.screen.width <= 600) {
    searchButton.addEventListener('click', () => {
      const main = document.querySelector('main');
      animateForm(forum, main, cityData);
      isHidden = !isHidden;
    });
  }

  header.appendChild(cityData);
  header.appendChild(forum);
  header.appendChild(mobileSearchTrigger);

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
/* harmony export */   getSvgIcon: () => (/* binding */ getSvgIcon),
/* harmony export */   showCurrentWeather: () => (/* binding */ showCurrentWeather),
/* harmony export */   showDayWeather: () => (/* binding */ showDayWeather),
/* harmony export */   showHourlyForecast: () => (/* binding */ showHourlyForecast),
/* harmony export */   svgPaths: () => (/* binding */ svgPaths)
/* harmony export */ });
/* harmony import */ var _getWeatherIconPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherIconPath */ "./src/components/getWeatherIconPath.js");


const svgPaths = {
  degrees:
    'M4.5 10C2.567 10 1 8.433 1 6.5C1 4.567 2.567 3 4.5 3C6.433 3 8 4.567 8 6.5C8 8.433 6.433 10 4.5 10ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8ZM22 10H20C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10V15C12 17.2091 13.7909 19 16 19C18.2091 19 20 17.2091 20 15H22C22 18.3137 19.3137 21 16 21C12.6863 21 10 18.3137 10 15V10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10Z',
  wind: 'M10.5 17H4V15H10.5C12.433 15 14 16.567 14 18.5C14 20.433 12.433 22 10.5 22C8.99957 22 7.71966 21.0559 7.22196 19.7293L9.09513 19.0268C9.30843 19.5954 9.85696 20 10.5 20C11.3284 20 12 19.3284 12 18.5C12 17.6716 11.3284 17 10.5 17ZM5 11H18.5C20.433 11 22 12.567 22 14.5C22 16.433 20.433 18 18.5 18C16.9996 18 15.7197 17.0559 15.222 15.7293L17.0951 15.0268C17.3084 15.5954 17.857 16 18.5 16C19.3284 16 20 15.3284 20 14.5C20 13.6716 19.3284 13 18.5 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H13.5C14.3284 7 15 6.32843 15 5.5C15 4.67157 14.3284 4 13.5 4C12.857 4 12.3084 4.40463 12.0951 4.97317L10.222 4.27073C10.7197 2.94414 11.9996 2 13.5 2C15.433 2 17 3.567 17 5.5C17 7.433 15.433 9 13.5 9H5C4.44772 9 4 9.44772 4 10C4 10.5523 4.44772 11 5 11Z',
  humidity:
    'M7.05025 8.04673L12 3.09698L16.9497 8.04673C19.6834 10.7804 19.6834 15.2126 16.9497 17.9462C14.2161 20.6799 9.78392 20.6799 7.05025 17.9462C4.31658 15.2126 4.31658 10.7804 7.05025 8.04673ZM18.364 6.63252L12 0.268555L5.63604 6.63252C2.12132 10.1472 2.12132 15.8457 5.63604 19.3604C9.15076 22.8752 14.8492 22.8752 18.364 19.3604C21.8787 15.8457 21.8787 10.1472 18.364 6.63252ZM16.2427 10.1714L14.8285 8.75718L7.7574 15.8282L9.17161 17.2425L16.2427 10.1714ZM8.11095 11.232C8.69674 11.8178 9.64648 11.8178 10.2323 11.232C10.8181 10.6463 10.8181 9.69652 10.2323 9.11073C9.64648 8.52494 8.69674 8.52494 8.11095 9.11073C7.52516 9.69652 7.52516 10.6463 8.11095 11.232ZM15.8891 16.8889C15.3033 17.4747 14.3536 17.4747 13.7678 16.8889C13.182 16.3031 13.182 15.3534 13.7678 14.7676C14.3536 14.1818 15.3033 14.1818 15.8891 14.7676C16.4749 15.3534 16.4749 16.3031 15.8891 16.8889Z',
  user: 'M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z',
  search:
    'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z',
  github:
    'M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z'
};

const getSvgIcon = (path, color = '#837970') => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );

  iconSvg.setAttribute('fill', color);
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('icon');

  iconPath.setAttribute('d', path);
  iconPath.setAttribute('stroke-linecap', 'round');
  iconPath.setAttribute('stroke-linejoin', 'round');
  iconPath.setAttribute('stroke-width', '0');

  iconSvg.appendChild(iconPath);

  return iconSvg;
};

const showCurrentWeather = (
  weatherContainer,
  temp,
  condition,
  isDay
) => {
  const element = weatherContainer;
  element.textContent = '';

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('weather-container__icon');

  const path = (0,_getWeatherIconPath__WEBPACK_IMPORTED_MODULE_0__["default"])(condition, isDay);
  weatherIcon.appendChild(getSvgIcon(path));

  const tempInfo = document.createElement('div');
  tempInfo.classList.add('weather-container__temp');

  const tempText = document.createElement('span');
  tempText.textContent = temp;

  const degreeIcon = document.createElement('div');
  degreeIcon.classList.add('weatether-container__degree');
  degreeIcon.appendChild(getSvgIcon(svgPaths.degrees));

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

  const path = (0,_getWeatherIconPath__WEBPACK_IMPORTED_MODULE_0__["default"])(condition);
  weatherIcon.appendChild(getSvgIcon(path));

  const tempInfo = document.createElement('div');
  tempInfo.classList.add('day-container__temp');

  const tempText = document.createElement('span');
  tempText.textContent = temp;

  const degreeIcon = document.createElement('div');
  degreeIcon.classList.add('day-container__degree');
  degreeIcon.appendChild(getSvgIcon(svgPaths.degrees));

  tempInfo.appendChild(tempText);
  tempInfo.appendChild(degreeIcon);

  weatherContainer.appendChild(date);
  weatherContainer.appendChild(weatherIcon);
  weatherContainer.appendChild(tempInfo);

  container.appendChild(weatherContainer);
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
  feelsLikeTemp.appendChild(getSvgIcon(svgPaths.user));
  temp.appendChild(tempText);
  temp.appendChild(getSvgIcon(svgPaths.degrees));
  feelsLikeTemp.appendChild(temp);

  const windSpeed = document.createElement('div');
  windSpeed.classList.add('wind-speed');

  const windText = document.createElement('span');
  windText.classList.add('wind-speed__text');

  windText.textContent = `${wind} km/h`;
  windSpeed.appendChild(getSvgIcon(svgPaths.wind));
  windSpeed.appendChild(windText);

  const humidity = document.createElement('div');
  humidity.classList.add('humidity');

  const humidityText = document.createElement('span');
  humidity.classList.add('humidity__text');

  humidityText.textContent = `${humidityValue}%`;
  humidity.appendChild(getSvgIcon(svgPaths.humidity));
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
  weatherType,
  isHourDay
) => {
  const hourInfo = document.createElement('div');

  const time = document.createElement('span');
  time.classList.add('hour-info__time');
  time.textContent = timeText;

  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('hour-info__icon');

  const path = (0,_getWeatherIconPath__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherType, isHourDay);
  weatherIcon.appendChild(getSvgIcon(path));

  const temp = document.createElement('div');
  temp.classList.add('hour-info__temp');

  const tempValue = document.createElement('span');
  tempValue.textContent = tempText;

  temp.appendChild(tempValue);
  temp.appendChild(getSvgIcon(svgPaths.degrees));

  hourInfo.appendChild(time);
  hourInfo.appendChild(weatherIcon);
  hourInfo.appendChild(temp);

  container.appendChild(hourInfo);
};


/***/ }),

/***/ "./src/components/getWeatherIconPath.js":
/*!**********************************************!*\
  !*** ./src/components/getWeatherIconPath.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getWeatherIconPath = (weatherType, isDay = 1) => {
  const weatherTypes = new Map();
  weatherTypes.set(
    'Sunny',
    // sun
    'M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'
  );
  weatherTypes.set(
    'Clear',
    // sun
    'M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'
  );
  weatherTypes.set(
    'sunny-clear',
    // moon
    'M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z'
  );
  weatherTypes.set(
    'Partly cloudy',
    // sun cloud
    'M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'
  );
  weatherTypes.set(
    'moon-cloudy',
    // moon cloud
    'M8.67047 5.00666C9.79257 2.63812 12.205 1 15 1C15.4162 1 15.8239 1.03632 16.2201 1.10596C16.0772 1.54488 16 2.01342 16 2.5C16 4.98528 18.0147 7 20.5 7C20.9866 7 21.4551 6.92277 21.894 6.77991C21.9637 7.17612 22 7.58382 22 8C22 9.2228 21.6865 10.3724 21.1354 11.3727C22.2787 12.3806 23 13.856 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.6921 4.405 5.17948 8.67047 5.00666ZM10.8473 5.21433C13.4205 5.82257 15.5135 7.67351 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.1745 10 18.8207 10.1214 19.4179 10.3436C19.6433 9.91944 19.8095 9.45894 19.9054 8.97316C16.79 8.69062 14.3094 6.20996 14.0268 3.09465C12.7061 3.35519 11.5722 4.13582 10.8473 5.21433ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'
  );
  weatherTypes.set(
    'Cloudy',
    'M9.5 6C5.91015 6 3 8.91015 3 12.5C3 16.0899 5.91015 19 9.5 19H16.5C18.9853 19 21 16.9853 21 14.5C21 12.0147 18.9853 10 16.5 10C16.1717 10 15.8516 10.0352 15.5433 10.1019C14.589 7.69894 12.2429 6 9.5 6ZM16.5 21H9.5C4.80558 21 1 17.1944 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 8.00348C20.2051 8.11671 23 10.982 23 14.5C23 18.0899 20.0899 21 16.5 21Z'
  );
  weatherTypes.set(
    'Overcast',
    'M9.5 6C5.91015 6 3 8.91015 3 12.5C3 16.0899 5.91015 19 9.5 19H16.5C18.9853 19 21 16.9853 21 14.5C21 12.0147 18.9853 10 16.5 10C16.1717 10 15.8516 10.0352 15.5433 10.1019C14.589 7.69894 12.2429 6 9.5 6ZM16.5 21H9.5C4.80558 21 1 17.1944 1 12.5C1 7.80558 4.80558 4 9.5 4C12.5433 4 15.2131 5.59939 16.7146 8.00348C20.2051 8.11671 23 10.982 23 14.5C23 18.0899 20.0899 21 16.5 21Z'
  );
  weatherTypes.set(
    'Mist',
    'M4 4H8V6H4V4ZM16 19H20V21H16V19ZM2 9H7V11H2V9ZM9 9H12V11H9V9ZM14 9H20V11H14V9ZM4 14H10V16H4V14ZM12 14H15V16H12V14ZM17 14H22V16H17V14ZM10 4H22V6H10V4ZM2 19H14V21H2V19Z'
  );
  weatherTypes.set(
    'Patchy rain possible',
    'M16 18V16H17C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C16.2057 8 15.4654 8.23153 14.8431 8.63079C14.2236 5.97685 11.8427 4 9 4C5.68629 4 3 6.68629 3 10C3 12.973 5.16229 15.441 8 15.917V17.9381C4.05369 17.446 1 14.0796 1 10C1 5.58172 4.58172 2 9 2C11.9967 2 14.6086 3.64768 15.9791 6.08651C16.3109 6.02963 16.652 6 17 6C20.3137 6 23 8.68629 23 12C23 15.3137 20.3137 18 17 18H16ZM10.2322 18.7322L12 16.9645L13.7678 18.7322C14.7441 19.7085 14.7441 21.2915 13.7678 22.2678C12.7915 23.2441 11.2085 23.2441 10.2322 22.2678C9.25592 21.2915 9.25592 19.7085 10.2322 18.7322Z'
  );
  weatherTypes.set(
    'Patchy snow possible',
    'M6.02679 17.4293C3.08078 16.2492 1 13.3676 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.369 20.8032 17.725 18 17.9776C17.9879 14.6742 15.3062 12 12 12C8.87879 12 6.31421 14.3833 6.02679 17.4293ZM13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268Z'
  );
  weatherTypes.set(
    'Patchy sleet possible',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z'
  );
  weatherTypes.set(
    'Patchy freezing drizzle possible',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z'
  );
  weatherTypes.set(
    'Thundery outbreaks possible',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM13 16.0048H16L11 22.5048V18.0048H8L13 11.5V16.0048Z'
  );
  weatherTypes.set(
    'Blowing snow',
    'M6.02679 17.4293C3.08078 16.2492 1 13.3676 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.369 20.8032 17.725 18 17.9776C17.9879 14.6742 15.3062 12 12 12C8.87879 12 6.31421 14.3833 6.02679 17.4293ZM13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268Z'
  );
  weatherTypes.set(
    'Blizzard',
    'M6.02679 17.4293C3.08078 16.2492 1 13.3676 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.369 20.8032 17.725 18 17.9776C17.9879 14.6742 15.3062 12 12 12C8.87879 12 6.31421 14.3833 6.02679 17.4293ZM13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268Z'
  );
  weatherTypes.set(
    'Fog',
    'M1.5843 13.0069C1.20753 12.0786 1 11.0635 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 12.6709 22.9922 12.8399 22.977 13.0069H20.9636C20.9876 12.8414 21 12.6721 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.0957 3.2937 12.1228 3.80666 13.0069H1.5843ZM4 19H21V21H4V19ZM2 15H23V17H2V15Z'
  );
  weatherTypes.set(
    'Freezing fog',
    'M1.5843 13.0069C1.20753 12.0786 1 11.0635 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 12.6709 22.9922 12.8399 22.977 13.0069H20.9636C20.9876 12.8414 21 12.6721 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.0957 3.2937 12.1228 3.80666 13.0069H1.5843ZM4 19H21V21H4V19ZM2 15H23V17H2V15Z'
  );
  weatherTypes.set(
    'Patchy light drizzle',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z'
  );
  weatherTypes.set(
    'Light drizzle',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z'
  );
  weatherTypes.set(
    'Freezing drizzle',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Heavy freezing drizzle',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z'
  );
  weatherTypes.set(
    'Patchy light rain',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z'
  );
  weatherTypes.set(
    'Light rain',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z'
  );
  weatherTypes.set(
    'Moderate rain at times',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Moderate rain',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Heavy rain at times',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z'
  );
  weatherTypes.set(
    'Heavy rain',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z'
  );
  weatherTypes.set(
    'Light freezing rain',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Moderate or heavy freezing rain',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z'
  );
  weatherTypes.set(
    'Light sleet',
    '"M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Moderate or heavy sleet',
    '"M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Patchy light snow',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Light snow',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Patchy moderate snow',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Moderate snow',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Patchy heavy snow',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Heavy snow',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Ice pellets',
    'M6 17.4185C3.06817 16.2317 1 13.3574 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.2208 4.2066 14.1599 6 15.1973V17.4185ZM10 17C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15C12 16.1046 11.1046 17 10 17ZM15 20C13.8954 20 13 19.1046 13 18C13 16.8954 13.8954 16 15 16C16.1046 16 17 16.8954 17 18C17 19.1046 16.1046 20 15 20ZM10 23C8.89543 23 8 22.1046 8 21C8 19.8954 8.89543 19 10 19C11.1046 19 12 19.8954 12 21C12 22.1046 11.1046 23 10 23Z'
  );
  weatherTypes.set(
    'Light rain shower',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM9 16H11V20H9V16ZM13 19H15V23H13V19Z'
  );
  weatherTypes.set(
    'Moderate or heavy rain shower',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Torrential rain shower',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 14H9V20H7V14ZM15 14H17V20H15V14ZM11 17H13V23H11V17Z'
  );
  weatherTypes.set(
    'Light sleet showers',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Moderate or heavy sleet showers',
    'M5 16.9297C2.60879 15.5465 1 12.9611 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 11.777 3.7725 13.3736 5 14.4722V16.9297ZM7 16H9V20H7V16ZM15 16H17V20H15V16ZM11 19H13V23H11V19Z'
  );
  weatherTypes.set(
    'Light snow showers',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Moderate or heavy snow showers',
    'M13 16.268L14.9641 15.134L15.9641 16.866L14 18L15.9641 19.134L14.9641 20.866L13 19.732V22H11V19.732L9.0359 20.866L8.0359 19.134L10 18L8.0359 16.866L9.0359 15.134L11 16.268V14H13V16.268ZM17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17Z'
  );
  weatherTypes.set(
    'Light showers of ice pellets',
    'M6 17.4185C3.06817 16.2317 1 13.3574 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.2208 4.2066 14.1599 6 15.1973V17.4185ZM10 17C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15C12 16.1046 11.1046 17 10 17ZM15 20C13.8954 20 13 19.1046 13 18C13 16.8954 13.8954 16 15 16C16.1046 16 17 16.8954 17 18C17 19.1046 16.1046 20 15 20ZM10 23C8.89543 23 8 22.1046 8 21C8 19.8954 8.89543 19 10 19C11.1046 19 12 19.8954 12 21C12 22.1046 11.1046 23 10 23Z'
  );
  weatherTypes.set(
    'Moderate or heavy showers of ice pellets',
    'M6 17.4185C3.06817 16.2317 1 13.3574 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.0176 21.3085 17.14 19 17.793V15.6632C20.1825 15.1015 21 13.8962 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.2208 4.2066 14.1599 6 15.1973V17.4185ZM10 17C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15C12 16.1046 11.1046 17 10 17ZM15 20C13.8954 20 13 19.1046 13 18C13 16.8954 13.8954 16 15 16C16.1046 16 17 16.8954 17 18C17 19.1046 16.1046 20 15 20ZM10 23C8.89543 23 8 22.1046 8 21C8 19.8954 8.89543 19 10 19C11.1046 19 12 19.8954 12 21C12 22.1046 11.1046 23 10 23Z'
  );
  weatherTypes.set(
    'Patchy light rain with thunder',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM13 16.0048H16L11 22.5048V18.0048H8L13 11.5V16.0048Z'
  );
  weatherTypes.set(
    'Moderate or heavy rain with thunder',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM13 16.0048H16L11 22.5048V18.0048H8L13 11.5V16.0048Z'
  );
  weatherTypes.set(
    'Patchy light snow with thunder',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM13 16.0048H16L11 22.5048V18.0048H8L13 11.5V16.0048Z'
  );
  weatherTypes.set(
    'Moderate or heavy snow with thunder',
    'M17 18V16H17.5C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C16.5205 9 15.6351 9.40232 14.9998 10.0507C14.9999 10.0338 15 10.0169 15 10C15 6.68629 12.3137 4 9 4C5.68629 4 3 6.68629 3 10C3 12.6124 4.66962 14.8349 7 15.6586V17.748C3.54955 16.8599 1 13.7277 1 10C1 5.58172 4.58172 2 9 2C12.3949 2 15.2959 4.11466 16.4576 7.09864C16.7951 7.0339 17.1436 7 17.5 7C20.5376 7 23 9.46243 23 12.5C23 15.5376 20.5376 18 17.5 18H17ZM13 16.0048H16L11 22.5048V18.0048H8L13 11.5V16.0048Z'
  );

  if (isDay === 0 && (weatherType === 'Sunny' || weatherType === 'Clear')) {
    return weatherTypes.get('sunny-clear');
  }

  if (isDay === 0 && weatherType === 'Partly cloudy') {
    return weatherTypes.get('moon-cloudy');
  }

  return weatherTypes.has(weatherType)
    ? weatherTypes.get(weatherType)
    : 'M18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherIconPath);


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
    humidity,
    condition: { text: currentWeatherType },
    is_day: isDay
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
      },
      astro: { is_sun_up: isSunUp }
    } = singleDay;
    return { date, dayInfo, avgTempC, avgTempF, isSunUp };
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
      condition: { text: info },
      is_day: isHourDay
    } = hour;

    hourDetails.push({ time, hourTempC, hourTempF, info, isHourDay });
  });

  const dayData = {
    tempC,
    tempF,
    feelslikeC,
    feelslikeF,
    windKph,
    windMph,
    lastUpdated,
    humidity,
    name,
    currentWeatherType,
    isDay
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU1yQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx1REFBdUQ7QUFDakU7QUFDQTtBQUNBLEVBQUUsdURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQSxFQUFFLG1EQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBLElBQUksdURBQWtCO0FBQ3RCO0FBQ0EsWUFBWSx5REFBeUQ7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0NBQXNDLFFBQVEsb0RBQVU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSHlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0NBQVUsQ0FBQyx5Q0FBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx5QkFBeUIsK0NBQVUsQ0FBQyx5Q0FBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQVUsQ0FBQyx5Q0FBUTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dnQztBQUN0RDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pPbEM7QUFDQSxVQUFVLDhCQUE4QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQSxJQUFJO0FBQ0o7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0EsT0FBTztBQUNQLGVBQWU7QUFDZixNQUFNO0FBQ04sYUFBYTtBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLDZDQUE2QztBQUNwRSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsU0FBUztBQUNwRyxRQUFRO0FBQ1I7QUFDQSxZQUFZLHNDQUFzQztBQUNsRDtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDcEYxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ2U7QUFDTjtBQUNNO0FBQ3pDO0FBQ0EsOERBQU07QUFDTiwyREFBRztBQUNILDhEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2Nzcy9tYWluLnNjc3M/Y2JiNyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZ2V0V2VhdGhlckljb25QYXRoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7XHJcbiAgc2hvd0N1cnJlbnRXZWF0aGVyLFxyXG4gIGFkZGl0aW9uYWxXZWF0aGVySW5mbyxcclxuICBzaG93SG91cmx5Rm9yZWNhc3QsXHJcbiAgc2hvd0RheVdlYXRoZXJcclxufSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IGZvcm1hdEhvdXJXZWF0aGVyID0gKHdlYXRoZXIsIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjb250YWluZXI7XHJcblxyXG4gIGNvbnN0IHsgdGltZTogZm9yZWNhc3RUaW1lLCBob3VyVGVtcEM6IHRlbXAsIGluZm8sIGlzSG91ckRheSB9ID0gd2VhdGhlcjtcclxuICBjb25zdCBmb3JtYXRlZFRpbWUgPSBmb3JlY2FzdFRpbWUuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgc2hvd0hvdXJseUZvcmVjYXN0KGVsZW1lbnQsIGZvcm1hdGVkVGltZSwgdGVtcCwgaW5mbywgaXNIb3VyRGF5KTtcclxufTtcclxuXHJcbmNvbnN0IHNob3dEYXlzRm9yZWNhc3QgPSAoY29udGFpbmVyLCBkYXRhKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRlLCBhdmdUZW1wQywgZGF5SW5mbywgaXNTdW5VcCB9ID0gZGF0YTtcclxuICBjb25zdCBkYXlEYXRlID0gZGF0ZS5zcGxpdCgnICcpWzBdLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy4nKS5zbGljZSgwLCA1KTtcclxuXHJcbiAgc2hvd0RheVdlYXRoZXIoY29udGFpbmVyLCBkYXlEYXRlLCBhdmdUZW1wQywgZGF5SW5mbywgaXNTdW5VcCk7XHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktaW5wdXQnKTtcclxuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJEYXRhLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItZGF0YScpO1xyXG4gIGNvbnN0IGRheUZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGF5Rm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZGF5LWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IG1haW5XZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpbldlYXRoZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi13ZWF0aGVyJyk7XHJcblxyXG4gIGNvbnN0IG1haW5EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbWFpbkRhdGEuY2xhc3NMaXN0LmFkZCgnbWFpbi1kYXRhJyk7XHJcblxyXG4gIGNvbnN0IGFkZGl0aW9uYWxEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkaXRpb25hbERhdGEuY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1kYXRhJyk7XHJcblxyXG4gIGNvbnN0IGhvdXJzRm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3Vyc0ZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWZvcmVjYXN0Jyk7XHJcblxyXG4gIGNvbnN0IGhvdXJseVdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3VybHlXZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2hvdXJseS13ZWF0aGVyJyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtZGF0ZScpO1xyXG5cclxuICBtYWluRGF0YS5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3Qgc2hvd1dlYXRoZXIgPSAoaG91cnMsIGRheSwgZGF5cykgPT4ge1xyXG4gICAgZGF5cy5mb3JFYWNoKChzaW5nbGVEYXkpID0+IHNob3dEYXlzRm9yZWNhc3QoZGF5Rm9yZWNhc3QsIHNpbmdsZURheSkpO1xyXG5cclxuICAgIGNvbnN0IHsgdGVtcEMsIGN1cnJlbnRXZWF0aGVyVHlwZSwgaXNEYXkgfSA9IGRheTtcclxuXHJcbiAgICBzaG93Q3VycmVudFdlYXRoZXIod2VhdGhlckNvbnRhaW5lciwgdGVtcEMsIGN1cnJlbnRXZWF0aGVyVHlwZSwgaXNEYXkpO1xyXG5cclxuICAgIGNvbnN0IHsgbmFtZSwgbGFzdFVwZGF0ZWQ6IHRpbWUsIGZlZWxzbGlrZUMsIHdpbmRLcGgsIGh1bWlkaXR5IH0gPSBkYXk7XHJcbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IHRpbWUuc3BsaXQoJyAnKVswXS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcuJyk7XHJcbiAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XHJcblxyXG4gICAgYWRkaXRpb25hbFdlYXRoZXJJbmZvKGFkZGl0aW9uYWxEYXRhLCBmZWVsc2xpa2VDLCB3aW5kS3BoLCBodW1pZGl0eSk7XHJcblxyXG4gICAgaG91cnMuZm9yRWFjaCgoaG91cikgPT4gZm9ybWF0SG91cldlYXRoZXIoaG91ciwgaG91cmx5V2VhdGhlcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIChjaXR5VG9GZXRjaCA9ICdQb3puYW4nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGhvdXJEZXRhaWxzLCBkYXlEYXRhLCBwcm9jZXNzZWREYXlzIH0gPSBhd2FpdCBnZXRXZWF0aGVyKFxyXG4gICAgICAgIGNpdHlUb0ZldGNoXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjaXR5LnZhbHVlID0gJyc7XHJcbiAgICAgIGRheUZvcmVjYXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGFkZGl0aW9uYWxEYXRhLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGhvdXJseVdlYXRoZXIudGV4dENvbnRlbnQgPSAnJztcclxuXHJcbiAgICAgIHNob3dXZWF0aGVyKGhvdXJEZXRhaWxzLCBkYXlEYXRhLCBwcm9jZXNzZWREYXlzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGZldGNoV2VhdGhlcigpKTtcclxuXHJcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgY2l0eVZhbHVlID0gY2l0eS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCA/IGNpdHkudmFsdWUgOiAnUG96bmFuJztcclxuICAgIGZldGNoV2VhdGhlcihjaXR5VmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICBtYWluRGF0YS5hcHBlbmRDaGlsZChkYXlGb3JlY2FzdCk7XHJcblxyXG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKG1haW5EYXRhKTtcclxuICBtYWluV2VhdGhlci5hcHBlbmRDaGlsZChhZGRpdGlvbmFsRGF0YSk7XHJcblxyXG4gIHdlYXRoZXJEYXRhLmFwcGVuZENoaWxkKG1haW5XZWF0aGVyKTtcclxuICBob3Vyc0ZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXJseVdlYXRoZXIpO1xyXG4gIHdlYXRoZXJEYXRhLmFwcGVuZENoaWxkKGhvdXJzRm9yZWNhc3QpO1xyXG5cclxuICBtYWluLmFwcGVuZENoaWxkKHdlYXRoZXJEYXRhKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IHsgZ2V0U3ZnSWNvbiwgc3ZnUGF0aHMgfSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuXHJcbiAgY29uc3QgZm9vdGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRleHQudGV4dENvbnRlbnQgPSAnQ3JlYXRlZCBCeSBGcmFuZWtEZXYnO1xyXG5cclxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIGNvbnN0IGdpdGh1Ykljb25Db2xvciA9ICcjNTE1MTUxJztcclxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdldFN2Z0ljb24oc3ZnUGF0aHMuZ2l0aHViLCBnaXRodWJJY29uQ29sb3IpKTtcclxuICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5la0Rldi93ZWF0aGVyLWFwcCc7XHJcbiAgZ2l0aHViTGluay50YXJnZXQgPSAnYmxhbmsnO1xyXG5cclxuICBmb290ZXJJbmZvLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gIGZvb3RlckluZm8uYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckluZm8pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCB7IGdldFN2Z0ljb24sIHN2Z1BhdGhzIH0gZnJvbSAnLi9VSSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblxyXG4gIGNvbnN0IGJsYW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYmxhbmtEaXYuY2xhc3NMaXN0LmFkZCgnZ2hvc3QnKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmxhbmtEaXYpO1xyXG5cclxuICBjb25zdCBjaXR5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNpdHlEYXRhLmNsYXNzTGlzdC5hZGQoJ2NpdHktZGF0YScpO1xyXG5cclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdjaXR5LW5hbWUnKTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtZGF0ZScpO1xyXG5cclxuICBjaXR5RGF0YS5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XHJcbiAgY2l0eURhdGEuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG4gIGNvbnN0IGZvcnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2l0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NpdHktaW5wdXQnKTtcclxuICBjaXR5SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBjaXR5SW5wdXQucGxhY2Vob2xkZXIgPSAnQ2l0eSc7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgY29uc3Qgc2VhcmNoSWNvbkNvbG9yID0gJyM1MTUxNTEnO1xyXG4gIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHNlYXJjaEljb24uYXBwZW5kQ2hpbGQoZ2V0U3ZnSWNvbihzdmdQYXRocy5zZWFyY2gsIHNlYXJjaEljb25Db2xvcikpO1xyXG4gIHNlYXJjaEJ1dHRvbi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcclxuXHJcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpdHlJbnB1dCk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XHJcblxyXG4gIGZvcnVtLmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG1vYmlsZVNlYXJjaFRyaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgbW9iaWxlU2VhcmNoVHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtc2VhcmNoLXRyaWdnZXInKTtcclxuICBtb2JpbGVTZWFyY2hUcmlnZ2VyLmFwcGVuZENoaWxkKGdldFN2Z0ljb24oc3ZnUGF0aHMuc2VhcmNoLCBzZWFyY2hJY29uQ29sb3IpKTtcclxuXHJcbiAgY29uc3QgaGlkZSA9IChmb3JtLCBtYWluLCBjaXR5KSA9PiB7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgY2l0eS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBjaXR5LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93ID0gKGZvcm0sIG1haW4sIGNpdHkpID0+IHtcclxuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICBjaXR5LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgIGNpdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gIH07XHJcblxyXG4gIGxldCBpc0hpZGRlbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVGb3JtID0gKGZvcm0sIG1haW4sIGNpdHkpID0+IHtcclxuICAgIGlmIChpc0hpZGRlbikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmb3J1bS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgfSwgMTI1KTtcclxuICAgICAgc2hvdyhmb3JtLCBtYWluLCBjaXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGZvcnVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0sIDEyNSk7XHJcbiAgICAgIGhpZGUoZm9ybSwgbWFpbiwgY2l0eSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbW9iaWxlU2VhcmNoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICBhbmltYXRlRm9ybShmb3J1bSwgbWFpbiwgY2l0eURhdGEpO1xyXG4gICAgaXNIaWRkZW4gPSAhaXNIaWRkZW47XHJcbiAgfSk7XHJcblxyXG4gIGlmICh3aW5kb3cuc2NyZWVuLndpZHRoIDw9IDYwMCkge1xyXG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgICBhbmltYXRlRm9ybShmb3J1bSwgbWFpbiwgY2l0eURhdGEpO1xyXG4gICAgICBpc0hpZGRlbiA9ICFpc0hpZGRlbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNpdHlEYXRhKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZm9ydW0pO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtb2JpbGVTZWFyY2hUcmlnZ2VyKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgZ2V0V2VhdGhlckljb25QYXRoIGZyb20gJy4vZ2V0V2VhdGhlckljb25QYXRoJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdQYXRocyA9IHtcclxuICBkZWdyZWVzOlxyXG4gICAgJ000LjUgMTBDMi41NjcgMTAgMSA4LjQzMyAxIDYuNUMxIDQuNTY3IDIuNTY3IDMgNC41IDNDNi40MzMgMyA4IDQuNTY3IDggNi41QzggOC40MzMgNi40MzMgMTAgNC41IDEwWk00LjUgOEM1LjMyODQzIDggNiA3LjMyODQzIDYgNi41QzYgNS42NzE1NyA1LjMyODQzIDUgNC41IDVDMy42NzE1NyA1IDMgNS42NzE1NyAzIDYuNUMzIDcuMzI4NDMgMy42NzE1NyA4IDQuNSA4Wk0yMiAxMEgyMEMyMCA3Ljc5MDg2IDE4LjIwOTEgNiAxNiA2QzEzLjc5MDkgNiAxMiA3Ljc5MDg2IDEyIDEwVjE1QzEyIDE3LjIwOTEgMTMuNzkwOSAxOSAxNiAxOUMxOC4yMDkxIDE5IDIwIDE3LjIwOTEgMjAgMTVIMjJDMjIgMTguMzEzNyAxOS4zMTM3IDIxIDE2IDIxQzEyLjY4NjMgMjEgMTAgMTguMzEzNyAxMCAxNVYxMEMxMCA2LjY4NjI5IDEyLjY4NjMgNCAxNiA0QzE5LjMxMzcgNCAyMiA2LjY4NjI5IDIyIDEwWicsXHJcbiAgd2luZDogJ00xMC41IDE3SDRWMTVIMTAuNUMxMi40MzMgMTUgMTQgMTYuNTY3IDE0IDE4LjVDMTQgMjAuNDMzIDEyLjQzMyAyMiAxMC41IDIyQzguOTk5NTcgMjIgNy43MTk2NiAyMS4wNTU5IDcuMjIxOTYgMTkuNzI5M0w5LjA5NTEzIDE5LjAyNjhDOS4zMDg0MyAxOS41OTU0IDkuODU2OTYgMjAgMTAuNSAyMEMxMS4zMjg0IDIwIDEyIDE5LjMyODQgMTIgMTguNUMxMiAxNy42NzE2IDExLjMyODQgMTcgMTAuNSAxN1pNNSAxMUgxOC41QzIwLjQzMyAxMSAyMiAxMi41NjcgMjIgMTQuNUMyMiAxNi40MzMgMjAuNDMzIDE4IDE4LjUgMThDMTYuOTk5NiAxOCAxNS43MTk3IDE3LjA1NTkgMTUuMjIyIDE1LjcyOTNMMTcuMDk1MSAxNS4wMjY4QzE3LjMwODQgMTUuNTk1NCAxNy44NTcgMTYgMTguNSAxNkMxOS4zMjg0IDE2IDIwIDE1LjMyODQgMjAgMTQuNUMyMCAxMy42NzE2IDE5LjMyODQgMTMgMTguNSAxM0g1QzMuMzQzMTUgMTMgMiAxMS42NTY5IDIgMTBDMiA4LjM0MzE1IDMuMzQzMTUgNyA1IDdIMTMuNUMxNC4zMjg0IDcgMTUgNi4zMjg0MyAxNSA1LjVDMTUgNC42NzE1NyAxNC4zMjg0IDQgMTMuNSA0QzEyLjg1NyA0IDEyLjMwODQgNC40MDQ2MyAxMi4wOTUxIDQuOTczMTdMMTAuMjIyIDQuMjcwNzNDMTAuNzE5NyAyLjk0NDE0IDExLjk5OTYgMiAxMy41IDJDMTUuNDMzIDIgMTcgMy41NjcgMTcgNS41QzE3IDcuNDMzIDE1LjQzMyA5IDEzLjUgOUg1QzQuNDQ3NzIgOSA0IDkuNDQ3NzIgNCAxMEM0IDEwLjU1MjMgNC40NDc3MiAxMSA1IDExWicsXHJcbiAgaHVtaWRpdHk6XHJcbiAgICAnTTcuMDUwMjUgOC4wNDY3M0wxMiAzLjA5Njk4TDE2Ljk0OTcgOC4wNDY3M0MxOS42ODM0IDEwLjc4MDQgMTkuNjgzNCAxNS4yMTI2IDE2Ljk0OTcgMTcuOTQ2MkMxNC4yMTYxIDIwLjY3OTkgOS43ODM5MiAyMC42Nzk5IDcuMDUwMjUgMTcuOTQ2MkM0LjMxNjU4IDE1LjIxMjYgNC4zMTY1OCAxMC43ODA0IDcuMDUwMjUgOC4wNDY3M1pNMTguMzY0IDYuNjMyNTJMMTIgMC4yNjg1NTVMNS42MzYwNCA2LjYzMjUyQzIuMTIxMzIgMTAuMTQ3MiAyLjEyMTMyIDE1Ljg0NTcgNS42MzYwNCAxOS4zNjA0QzkuMTUwNzYgMjIuODc1MiAxNC44NDkyIDIyLjg3NTIgMTguMzY0IDE5LjM2MDRDMjEuODc4NyAxNS44NDU3IDIxLjg3ODcgMTAuMTQ3MiAxOC4zNjQgNi42MzI1MlpNMTYuMjQyNyAxMC4xNzE0TDE0LjgyODUgOC43NTcxOEw3Ljc1NzQgMTUuODI4Mkw5LjE3MTYxIDE3LjI0MjVMMTYuMjQyNyAxMC4xNzE0Wk04LjExMDk1IDExLjIzMkM4LjY5Njc0IDExLjgxNzggOS42NDY0OCAxMS44MTc4IDEwLjIzMjMgMTEuMjMyQzEwLjgxODEgMTAuNjQ2MyAxMC44MTgxIDkuNjk2NTIgMTAuMjMyMyA5LjExMDczQzkuNjQ2NDggOC41MjQ5NCA4LjY5Njc0IDguNTI0OTQgOC4xMTA5NSA5LjExMDczQzcuNTI1MTYgOS42OTY1MiA3LjUyNTE2IDEwLjY0NjMgOC4xMTA5NSAxMS4yMzJaTTE1Ljg4OTEgMTYuODg4OUMxNS4zMDMzIDE3LjQ3NDcgMTQuMzUzNiAxNy40NzQ3IDEzLjc2NzggMTYuODg4OUMxMy4xODIgMTYuMzAzMSAxMy4xODIgMTUuMzUzNCAxMy43Njc4IDE0Ljc2NzZDMTQuMzUzNiAxNC4xODE4IDE1LjMwMzMgMTQuMTgxOCAxNS44ODkxIDE0Ljc2NzZDMTYuNDc0OSAxNS4zNTM0IDE2LjQ3NDkgMTYuMzAzMSAxNS44ODkxIDE2Ljg4ODlaJyxcclxuICB1c2VyOiAnTTQgMjJDNCAxNy41ODE3IDcuNTgxNzIgMTQgMTIgMTRDMTYuNDE4MyAxNCAyMCAxNy41ODE3IDIwIDIySDE4QzE4IDE4LjY4NjMgMTUuMzEzNyAxNiAxMiAxNkM4LjY4NjI5IDE2IDYgMTguNjg2MyA2IDIySDRaTTEyIDEzQzguNjg1IDEzIDYgMTAuMzE1IDYgN0M2IDMuNjg1IDguNjg1IDEgMTIgMUMxNS4zMTUgMSAxOCAzLjY4NSAxOCA3QzE4IDEwLjMxNSAxNS4zMTUgMTMgMTIgMTNaTTEyIDExQzE0LjIxIDExIDE2IDkuMjEgMTYgN0MxNiA0Ljc5IDE0LjIxIDMgMTIgM0M5Ljc5IDMgOCA0Ljc5IDggN0M4IDkuMjEgOS43OSAxMSAxMiAxMVonLFxyXG4gIHNlYXJjaDpcclxuICAgICdNMTguMDMxIDE2LjYxNjhMMjIuMzEzNyAyMC44OTk1TDIwLjg5OTUgMjIuMzEzN0wxNi42MTY4IDE4LjAzMUMxNS4wNzY5IDE5LjI2MyAxMy4xMjQgMjAgMTEgMjBDNi4wMzIgMjAgMiAxNS45NjggMiAxMUMyIDYuMDMyIDYuMDMyIDIgMTEgMkMxNS45NjggMiAyMCA2LjAzMiAyMCAxMUMyMCAxMy4xMjQgMTkuMjYzIDE1LjA3NjkgMTguMDMxIDE2LjYxNjhaTTE2LjAyNDcgMTUuODc0OEMxNy4yNDc1IDE0LjYxNDYgMTggMTIuODk1NiAxOCAxMUMxOCA3LjEzMjUgMTQuODY3NSA0IDExIDRDNy4xMzI1IDQgNCA3LjEzMjUgNCAxMUM0IDE0Ljg2NzUgNy4xMzI1IDE4IDExIDE4QzEyLjg5NTYgMTggMTQuNjE0NiAxNy4yNDc1IDE1Ljg3NDggMTYuMDI0N0wxNi4wMjQ3IDE1Ljg3NDhaJyxcclxuICBnaXRodWI6XHJcbiAgICAnTTEyLjAwMSAyQzYuNDc1OTggMiAyLjAwMDk4IDYuNDc1IDIuMDAwOTggMTJDMi4wMDA5OCAxNi40MjUgNC44NjM0OCAyMC4xNjI1IDguODM4NDggMjEuNDg3NUM5LjMzODQ4IDIxLjU3NSA5LjUyNTk4IDIxLjI3NSA5LjUyNTk4IDIxLjAxMjVDOS41MjU5OCAyMC43NzUgOS41MTM0OCAxOS45ODc1IDkuNTEzNDggMTkuMTVDNy4wMDA5OCAxOS42MTI1IDYuMzUwOTggMTguNTM3NSA2LjE1MDk4IDE3Ljk3NUM2LjAzODQ4IDE3LjY4NzUgNS41NTA5OCAxNi44IDUuMTI1OTggMTYuNTYyNUM0Ljc3NTk4IDE2LjM3NSA0LjI3NTk4IDE1LjkxMjUgNS4xMTM0OCAxNS45QzUuOTAwOTggMTUuODg3NSA2LjQ2MzQ4IDE2LjYyNSA2LjY1MDk4IDE2LjkyNUM3LjU1MDk4IDE4LjQzNzUgOC45ODg0OCAxOC4wMTI1IDkuNTYzNDggMTcuNzVDOS42NTA5OCAxNy4xIDkuOTEzNDggMTYuNjYyNSAxMC4yMDEgMTYuNDEyNUM3Ljk3NTk4IDE2LjE2MjUgNS42NTA5OCAxNS4zIDUuNjUwOTggMTEuNDc1QzUuNjUwOTggMTAuMzg3NSA2LjAzODQ4IDkuNDg3NSA2LjY3NTk4IDguNzg3NUM2LjU3NTk4IDguNTM3NSA2LjIyNTk4IDcuNTEyNSA2Ljc3NTk4IDYuMTM3NUM2Ljc3NTk4IDYuMTM3NSA3LjYxMzQ4IDUuODc1IDkuNTI1OTggNy4xNjI1QzEwLjMyNiA2LjkzNzUgMTEuMTc2IDYuODI1IDEyLjAyNiA2LjgyNUMxMi44NzYgNi44MjUgMTMuNzI2IDYuOTM3NSAxNC41MjYgNy4xNjI1QzE2LjQzODUgNS44NjI1IDE3LjI3NiA2LjEzNzUgMTcuMjc2IDYuMTM3NUMxNy44MjYgNy41MTI1IDE3LjQ3NiA4LjUzNzUgMTcuMzc2IDguNzg3NUMxOC4wMTM1IDkuNDg3NSAxOC40MDEgMTAuMzc1IDE4LjQwMSAxMS40NzVDMTguNDAxIDE1LjMxMjUgMTYuMDYzNSAxNi4xNjI1IDEzLjgzODUgMTYuNDEyNUMxNC4yMDEgMTYuNzI1IDE0LjUxMzUgMTcuMzI1IDE0LjUxMzUgMTguMjYyNUMxNC41MTM1IDE5LjYgMTQuNTAxIDIwLjY3NSAxNC41MDEgMjEuMDEyNUMxNC41MDEgMjEuMjc1IDE0LjY4ODUgMjEuNTg3NSAxNS4xODg1IDIxLjQ4NzVDMTkuMjU5IDIwLjExMzMgMjEuOTk5OSAxNi4yOTYzIDIyLjAwMSAxMkMyMi4wMDEgNi40NzUgMTcuNTI2IDIgMTIuMDAxIDJaJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN2Z0ljb24gPSAocGF0aCwgY29sb3IgPSAnIzgzNzk3MCcpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsIGNvbG9yKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBwYXRoKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93Q3VycmVudFdlYXRoZXIgPSAoXHJcbiAgd2VhdGhlckNvbnRhaW5lcixcclxuICB0ZW1wLFxyXG4gIGNvbmRpdGlvbixcclxuICBpc0RheVxyXG4pID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gd2VhdGhlckNvbnRhaW5lcjtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXJfX2ljb24nKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IGdldFdlYXRoZXJJY29uUGF0aChjb25kaXRpb24sIGlzRGF5KTtcclxuICB3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZChnZXRTdmdJY29uKHBhdGgpKTtcclxuXHJcbiAgY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wSW5mby5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyLWNvbnRhaW5lcl9fdGVtcCcpO1xyXG5cclxuICBjb25zdCB0ZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wVGV4dC50ZXh0Q29udGVudCA9IHRlbXA7XHJcblxyXG4gIGNvbnN0IGRlZ3JlZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkZWdyZWVJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRldGhlci1jb250YWluZXJfX2RlZ3JlZScpO1xyXG4gIGRlZ3JlZUljb24uYXBwZW5kQ2hpbGQoZ2V0U3ZnSWNvbihzdmdQYXRocy5kZWdyZWVzKSk7XHJcblxyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKHRlbXBUZXh0KTtcclxuICB0ZW1wSW5mby5hcHBlbmRDaGlsZChkZWdyZWVJY29uKTtcclxuXHJcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XHJcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wSW5mbyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0RheVdlYXRoZXIgPSAoY29udGFpbmVyLCBkYXRlVGV4dCwgdGVtcCwgY29uZGl0aW9uKSA9PiB7XHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9fZGF0ZScpO1xyXG4gIGRhdGUudGV4dENvbnRlbnQgPSBkYXRlVGV4dDtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX19pY29uJyk7XHJcblxyXG4gIGNvbnN0IHBhdGggPSBnZXRXZWF0aGVySWNvblBhdGgoY29uZGl0aW9uKTtcclxuICB3ZWF0aGVySWNvbi5hcHBlbmRDaGlsZChnZXRTdmdJY29uKHBhdGgpKTtcclxuXHJcbiAgY29uc3QgdGVtcEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB0ZW1wSW5mby5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gdGVtcDtcclxuXHJcbiAgY29uc3QgZGVncmVlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlZ3JlZUljb24uY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9fZGVncmVlJyk7XHJcbiAgZGVncmVlSWNvbi5hcHBlbmRDaGlsZChnZXRTdmdJY29uKHN2Z1BhdGhzLmRlZ3JlZXMpKTtcclxuXHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXBJbmZvLmFwcGVuZENoaWxkKGRlZ3JlZUljb24pO1xyXG5cclxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEluZm8pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkaXRpb25hbFdlYXRoZXJJbmZvID0gKFxyXG4gIGNvbnRhaW5lcixcclxuICBmZWVscyxcclxuICB3aW5kLFxyXG4gIGh1bWlkaXR5VmFsdWVcclxuKSA9PiB7XHJcbiAgY29uc3QgYWRkaXRpb25hbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRpdGlvbmFsSW5mby5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWluZm8nKTtcclxuXHJcbiAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGZlZWxzTGlrZVRlbXAuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZScpO1xyXG5cclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlX190ZW1wJyk7XHJcblxyXG4gIGNvbnN0IHRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXBUZXh0LmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2VfX3RleHQnKTtcclxuXHJcbiAgdGVtcFRleHQudGV4dENvbnRlbnQgPSBmZWVscztcclxuICBmZWVsc0xpa2VUZW1wLmFwcGVuZENoaWxkKGdldFN2Z0ljb24oc3ZnUGF0aHMudXNlcikpO1xyXG4gIHRlbXAuYXBwZW5kQ2hpbGQodGVtcFRleHQpO1xyXG4gIHRlbXAuYXBwZW5kQ2hpbGQoZ2V0U3ZnSWNvbihzdmdQYXRocy5kZWdyZWVzKSk7XHJcbiAgZmVlbHNMaWtlVGVtcC5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuXHJcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2luZFNwZWVkLmNsYXNzTGlzdC5hZGQoJ3dpbmQtc3BlZWQnKTtcclxuXHJcbiAgY29uc3Qgd2luZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgd2luZFRleHQuY2xhc3NMaXN0LmFkZCgnd2luZC1zcGVlZF9fdGV4dCcpO1xyXG5cclxuICB3aW5kVGV4dC50ZXh0Q29udGVudCA9IGAke3dpbmR9IGttL2hgO1xyXG4gIHdpbmRTcGVlZC5hcHBlbmRDaGlsZChnZXRTdmdJY29uKHN2Z1BhdGhzLndpbmQpKTtcclxuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQod2luZFRleHQpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XHJcblxyXG4gIGNvbnN0IGh1bWlkaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eV9fdGV4dCcpO1xyXG5cclxuICBodW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSBgJHtodW1pZGl0eVZhbHVlfSVgO1xyXG4gIGh1bWlkaXR5LmFwcGVuZENoaWxkKGdldFN2Z0ljb24oc3ZnUGF0aHMuaHVtaWRpdHkpKTtcclxuICBodW1pZGl0eS5hcHBlbmRDaGlsZChodW1pZGl0eVRleHQpO1xyXG5cclxuICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChmZWVsc0xpa2VUZW1wKTtcclxuICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZCh3aW5kU3BlZWQpO1xyXG4gIGFkZGl0aW9uYWxJbmZvLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZGl0aW9uYWxJbmZvKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93SG91cmx5Rm9yZWNhc3QgPSAoXHJcbiAgY29udGFpbmVyLFxyXG4gIHRpbWVUZXh0LFxyXG4gIHRlbXBUZXh0LFxyXG4gIHdlYXRoZXJUeXBlLFxyXG4gIGlzSG91ckRheVxyXG4pID0+IHtcclxuICBjb25zdCBob3VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRpbWUuY2xhc3NMaXN0LmFkZCgnaG91ci1pbmZvX190aW1lJyk7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IHRpbWVUZXh0O1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hvdXItaW5mb19faWNvbicpO1xyXG5cclxuICBjb25zdCBwYXRoID0gZ2V0V2VhdGhlckljb25QYXRoKHdlYXRoZXJUeXBlLCBpc0hvdXJEYXkpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGdldFN2Z0ljb24ocGF0aCkpO1xyXG5cclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCdob3VyLWluZm9fX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXBWYWx1ZS50ZXh0Q29udGVudCA9IHRlbXBUZXh0O1xyXG5cclxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBWYWx1ZSk7XHJcbiAgdGVtcC5hcHBlbmRDaGlsZChnZXRTdmdJY29uKHN2Z1BhdGhzLmRlZ3JlZXMpKTtcclxuXHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQodGltZSk7XHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRlbXApO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91ckluZm8pO1xyXG59O1xyXG4iLCJjb25zdCBnZXRXZWF0aGVySWNvblBhdGggPSAod2VhdGhlclR5cGUsIGlzRGF5ID0gMSkgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJUeXBlcyA9IG5ldyBNYXAoKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1N1bm55JyxcclxuICAgIC8vIHN1blxyXG4gICAgJ00xMiAxOEM4LjY4NjI5IDE4IDYgMTUuMzEzNyA2IDEyQzYgOC42ODYyOSA4LjY4NjI5IDYgMTIgNkMxNS4zMTM3IDYgMTggOC42ODYyOSAxOCAxMkMxOCAxNS4zMTM3IDE1LjMxMzcgMTggMTIgMThaTTEyIDE2QzE0LjIwOTEgMTYgMTYgMTQuMjA5MSAxNiAxMkMxNiA5Ljc5MDg2IDE0LjIwOTEgOCAxMiA4QzkuNzkwODYgOCA4IDkuNzkwODYgOCAxMkM4IDE0LjIwOTEgOS43OTA4NiAxNiAxMiAxNlpNMTEgMUgxM1Y0SDExVjFaTTExIDIwSDEzVjIzSDExVjIwWk0zLjUxNDcyIDQuOTI4OTNMNC45Mjg5MyAzLjUxNDcyTDcuMDUwMjUgNS42MzYwNEw1LjYzNjA0IDcuMDUwMjVMMy41MTQ3MiA0LjkyODkzWk0xNi45NDk3IDE4LjM2NEwxOC4zNjQgMTYuOTQ5N0wyMC40ODUzIDE5LjA3MTFMMTkuMDcxMSAyMC40ODUzTDE2Ljk0OTcgMTguMzY0Wk0xOS4wNzExIDMuNTE0NzJMMjAuNDg1MyA0LjkyODkzTDE4LjM2NCA3LjA1MDI1TDE2Ljk0OTcgNS42MzYwNEwxOS4wNzExIDMuNTE0NzJaTTUuNjM2MDQgMTYuOTQ5N0w3LjA1MDI1IDE4LjM2NEw0LjkyODkzIDIwLjQ4NTNMMy41MTQ3MiAxOS4wNzExTDUuNjM2MDQgMTYuOTQ5N1pNMjMgMTFWMTNIMjBWMTFIMjNaTTQgMTFWMTNIMVYxMUg0WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnQ2xlYXInLFxyXG4gICAgLy8gc3VuXHJcbiAgICAnTTEyIDE4QzguNjg2MjkgMTggNiAxNS4zMTM3IDYgMTJDNiA4LjY4NjI5IDguNjg2MjkgNiAxMiA2QzE1LjMxMzcgNiAxOCA4LjY4NjI5IDE4IDEyQzE4IDE1LjMxMzcgMTUuMzEzNyAxOCAxMiAxOFpNMTIgMTZDMTQuMjA5MSAxNiAxNiAxNC4yMDkxIDE2IDEyQzE2IDkuNzkwODYgMTQuMjA5MSA4IDEyIDhDOS43OTA4NiA4IDggOS43OTA4NiA4IDEyQzggMTQuMjA5MSA5Ljc5MDg2IDE2IDEyIDE2Wk0xMSAxSDEzVjRIMTFWMVpNMTEgMjBIMTNWMjNIMTFWMjBaTTMuNTE0NzIgNC45Mjg5M0w0LjkyODkzIDMuNTE0NzJMNy4wNTAyNSA1LjYzNjA0TDUuNjM2MDQgNy4wNTAyNUwzLjUxNDcyIDQuOTI4OTNaTTE2Ljk0OTcgMTguMzY0TDE4LjM2NCAxNi45NDk3TDIwLjQ4NTMgMTkuMDcxMUwxOS4wNzExIDIwLjQ4NTNMMTYuOTQ5NyAxOC4zNjRaTTE5LjA3MTEgMy41MTQ3MkwyMC40ODUzIDQuOTI4OTNMMTguMzY0IDcuMDUwMjVMMTYuOTQ5NyA1LjYzNjA0TDE5LjA3MTEgMy41MTQ3MlpNNS42MzYwNCAxNi45NDk3TDcuMDUwMjUgMTguMzY0TDQuOTI4OTMgMjAuNDg1M0wzLjUxNDcyIDE5LjA3MTFMNS42MzYwNCAxNi45NDk3Wk0yMyAxMVYxM0gyMFYxMUgyM1pNNCAxMVYxM0gxVjExSDRaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdzdW5ueS1jbGVhcicsXHJcbiAgICAvLyBtb29uXHJcbiAgICAnTTEwIDdDMTAgMTAuODY2IDEzLjEzNCAxNCAxNyAxNEMxOC45NTg0IDE0IDIwLjcyOSAxMy4xOTU3IDIxLjk5OTUgMTEuODk5NUMyMiAxMS45MzMgMjIgMTEuOTY2NSAyMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJDNi40NzcxNSAyMiAyIDE3LjUyMjggMiAxMkMyIDYuNDc3MTUgNi40NzcxNSAyIDEyIDJDMTIuMDMzNSAyIDEyLjA2NyAyIDEyLjEwMDUgMi4wMDA0OUMxMC44MDQzIDMuMjcwOTggMTAgNS4wNDE1NyAxMCA3Wk00IDEyQzQgMTYuNDE4MyA3LjU4MTcyIDIwIDEyIDIwQzE1LjA1ODMgMjAgMTcuNzE1OCAxOC4yODM5IDE5LjA2MiAxNS43NjIxQzE4LjM5NDUgMTUuOTE4NyAxNy43MDM1IDE2IDE3IDE2QzEyLjAyOTQgMTYgOCAxMS45NzA2IDggN0M4IDYuMjk2NDggOC4wODEzMyA1LjYwNTQ3IDguMjM3OSA0LjkzOEM1LjcxNjExIDYuMjg0MjMgNCA4Ljk0MTcgNCAxMlonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhcnRseSBjbG91ZHknLFxyXG4gICAgLy8gc3VuIGNsb3VkXHJcbiAgICAnTTkuOTgzOTIgNS4wNTk5MUMxMS4xMzIzIDMuMjIyMzYgMTMuMTczNCAyIDE1LjUgMkMxOS4wODk5IDIgMjIgNC45MTAxNSAyMiA4LjVDMjIgOS41ODAzMSAyMS43MzY1IDEwLjU5OTEgMjEuMjcwMSAxMS40OTU1QzIyLjMzNTEgMTIuNDk4NSAyMyAxMy45MjE2IDIzIDE1LjVDMjMgMTguNTM3NiAyMC41Mzc2IDIxIDE3LjUgMjFIOUM0LjU4MTcyIDIxIDEgMTcuNDE4MyAxIDEzQzEgOC41ODE3MiA0LjU4MTcyIDUgOSA1QzkuMzMzMTIgNSA5LjY2MTQ5IDUuMDIwMzYgOS45ODM5MiA1LjA1OTkxWk0xMi4wNTU0IDUuNjA0MTlDMTQuMDY3NSA2LjQzNjM3IDE1LjY2NjIgOC4wNjU3OCAxNi40NTc2IDEwLjA5ODZDMTYuNzk1MSAxMC4wMzM5IDE3LjE0MzYgMTAgMTcuNSAxMEMxOC4yMzUxIDEwIDE4LjkzNjYgMTAuMTQ0MiAxOS41Nzc2IDEwLjQwNTlDMTkuODQ4NiA5LjgyNzE5IDIwIDkuMTgxMjggMjAgOC41QzIwIDYuMDE0NzIgMTcuOTg1MyA0IDE1LjUgNEMxNC4xMTc3IDQgMTIuODgwOSA0LjYyMzMgMTIuMDU1NCA1LjYwNDE5Wk0xNy41IDE5QzE5LjQzMyAxOSAyMSAxNy40MzMgMjEgMTUuNUMyMSAxMy41NjcgMTkuNDMzIDEyIDE3LjUgMTJDMTYuNTIwNSAxMiAxNS42MzUxIDEyLjQwMjMgMTQuOTk5OCAxMy4wNTA3QzE0Ljk5OTkgMTMuMDMzOCAxNSAxMy4wMTY5IDE1IDEzQzE1IDkuNjg2MjkgMTIuMzEzNyA3IDkgN0M1LjY4NjI5IDcgMyA5LjY4NjI5IDMgMTNDMyAxNi4zMTM3IDUuNjg2MjkgMTkgOSAxOUgxNy41WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnbW9vbi1jbG91ZHknLFxyXG4gICAgLy8gbW9vbiBjbG91ZFxyXG4gICAgJ004LjY3MDQ3IDUuMDA2NjZDOS43OTI1NyAyLjYzODEyIDEyLjIwNSAxIDE1IDFDMTUuNDE2MiAxIDE1LjgyMzkgMS4wMzYzMiAxNi4yMjAxIDEuMTA1OTZDMTYuMDc3MiAxLjU0NDg4IDE2IDIuMDEzNDIgMTYgMi41QzE2IDQuOTg1MjggMTguMDE0NyA3IDIwLjUgN0MyMC45ODY2IDcgMjEuNDU1MSA2LjkyMjc3IDIxLjg5NCA2Ljc3OTkxQzIxLjk2MzcgNy4xNzYxMiAyMiA3LjU4MzgyIDIyIDhDMjIgOS4yMjI4IDIxLjY4NjUgMTAuMzcyNCAyMS4xMzU0IDExLjM3MjdDMjIuMjc4NyAxMi4zODA2IDIzIDEzLjg1NiAyMyAxNS41QzIzIDE4LjUzNzYgMjAuNTM3NiAyMSAxNy41IDIxSDlDNC41ODE3MiAyMSAxIDE3LjQxODMgMSAxM0MxIDguNjkyMSA0LjQwNSA1LjE3OTQ4IDguNjcwNDcgNS4wMDY2NlpNMTAuODQ3MyA1LjIxNDMzQzEzLjQyMDUgNS44MjI1NyAxNS41MTM1IDcuNjczNTEgMTYuNDU3NiAxMC4wOTg2QzE2Ljc5NTEgMTAuMDMzOSAxNy4xNDM2IDEwIDE3LjUgMTBDMTguMTc0NSAxMCAxOC44MjA3IDEwLjEyMTQgMTkuNDE3OSAxMC4zNDM2QzE5LjY0MzMgOS45MTk0NCAxOS44MDk1IDkuNDU4OTQgMTkuOTA1NCA4Ljk3MzE2QzE2Ljc5IDguNjkwNjIgMTQuMzA5NCA2LjIwOTk2IDE0LjAyNjggMy4wOTQ2NUMxMi43MDYxIDMuMzU1MTkgMTEuNTcyMiA0LjEzNTgyIDEwLjg0NzMgNS4yMTQzM1pNMTcuNSAxOUMxOS40MzMgMTkgMjEgMTcuNDMzIDIxIDE1LjVDMjEgMTMuNTY3IDE5LjQzMyAxMiAxNy41IDEyQzE2LjUyMDUgMTIgMTUuNjM1MSAxMi40MDIzIDE0Ljk5OTggMTMuMDUwN0MxNC45OTk5IDEzLjAzMzggMTUgMTMuMDE2OSAxNSAxM0MxNSA5LjY4NjI5IDEyLjMxMzcgNyA5IDdDNS42ODYyOSA3IDMgOS42ODYyOSAzIDEzQzMgMTYuMzEzNyA1LjY4NjI5IDE5IDkgMTlIMTcuNVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0Nsb3VkeScsXHJcbiAgICAnTTkuNSA2QzUuOTEwMTUgNiAzIDguOTEwMTUgMyAxMi41QzMgMTYuMDg5OSA1LjkxMDE1IDE5IDkuNSAxOUgxNi41QzE4Ljk4NTMgMTkgMjEgMTYuOTg1MyAyMSAxNC41QzIxIDEyLjAxNDcgMTguOTg1MyAxMCAxNi41IDEwQzE2LjE3MTcgMTAgMTUuODUxNiAxMC4wMzUyIDE1LjU0MzMgMTAuMTAxOUMxNC41ODkgNy42OTg5NCAxMi4yNDI5IDYgOS41IDZaTTE2LjUgMjFIOS41QzQuODA1NTggMjEgMSAxNy4xOTQ0IDEgMTIuNUMxIDcuODA1NTggNC44MDU1OCA0IDkuNSA0QzEyLjU0MzMgNCAxNS4yMTMxIDUuNTk5MzkgMTYuNzE0NiA4LjAwMzQ4QzIwLjIwNTEgOC4xMTY3MSAyMyAxMC45ODIgMjMgMTQuNUMyMyAxOC4wODk5IDIwLjA4OTkgMjEgMTYuNSAyMVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ092ZXJjYXN0JyxcclxuICAgICdNOS41IDZDNS45MTAxNSA2IDMgOC45MTAxNSAzIDEyLjVDMyAxNi4wODk5IDUuOTEwMTUgMTkgOS41IDE5SDE2LjVDMTguOTg1MyAxOSAyMSAxNi45ODUzIDIxIDE0LjVDMjEgMTIuMDE0NyAxOC45ODUzIDEwIDE2LjUgMTBDMTYuMTcxNyAxMCAxNS44NTE2IDEwLjAzNTIgMTUuNTQzMyAxMC4xMDE5QzE0LjU4OSA3LjY5ODk0IDEyLjI0MjkgNiA5LjUgNlpNMTYuNSAyMUg5LjVDNC44MDU1OCAyMSAxIDE3LjE5NDQgMSAxMi41QzEgNy44MDU1OCA0LjgwNTU4IDQgOS41IDRDMTIuNTQzMyA0IDE1LjIxMzEgNS41OTkzOSAxNi43MTQ2IDguMDAzNDhDMjAuMjA1MSA4LjExNjcxIDIzIDEwLjk4MiAyMyAxNC41QzIzIDE4LjA4OTkgMjAuMDg5OSAyMSAxNi41IDIxWidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTWlzdCcsXHJcbiAgICAnTTQgNEg4VjZINFY0Wk0xNiAxOUgyMFYyMUgxNlYxOVpNMiA5SDdWMTFIMlY5Wk05IDlIMTJWMTFIOVY5Wk0xNCA5SDIwVjExSDE0VjlaTTQgMTRIMTBWMTZINFYxNFpNMTIgMTRIMTVWMTZIMTJWMTRaTTE3IDE0SDIyVjE2SDE3VjE0Wk0xMCA0SDIyVjZIMTBWNFpNMiAxOUgxNFYyMUgyVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IHJhaW4gcG9zc2libGUnLFxyXG4gICAgJ00xNiAxOFYxNkgxN0MxOS4yMDkxIDE2IDIxIDE0LjIwOTEgMjEgMTJDMjEgOS43OTA4NiAxOS4yMDkxIDggMTcgOEMxNi4yMDU3IDggMTUuNDY1NCA4LjIzMTUzIDE0Ljg0MzEgOC42MzA3OUMxNC4yMjM2IDUuOTc2ODUgMTEuODQyNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi45NzMgNS4xNjIyOSAxNS40NDEgOCAxNS45MTdWMTcuOTM4MUM0LjA1MzY5IDE3LjQ0NiAxIDE0LjA3OTYgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMS45OTY3IDIgMTQuNjA4NiAzLjY0NzY4IDE1Ljk3OTEgNi4wODY1MUMxNi4zMTA5IDYuMDI5NjMgMTYuNjUyIDYgMTcgNkMyMC4zMTM3IDYgMjMgOC42ODYyOSAyMyAxMkMyMyAxNS4zMTM3IDIwLjMxMzcgMTggMTcgMThIMTZaTTEwLjIzMjIgMTguNzMyMkwxMiAxNi45NjQ1TDEzLjc2NzggMTguNzMyMkMxNC43NDQxIDE5LjcwODUgMTQuNzQ0MSAyMS4yOTE1IDEzLjc2NzggMjIuMjY3OEMxMi43OTE1IDIzLjI0NDEgMTEuMjA4NSAyMy4yNDQxIDEwLjIzMjIgMjIuMjY3OEM5LjI1NTkyIDIxLjI5MTUgOS4yNTU5MiAxOS43MDg1IDEwLjIzMjIgMTguNzMyMlonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhdGNoeSBzbm93IHBvc3NpYmxlJyxcclxuICAgICdNNi4wMjY3OSAxNy40MjkzQzMuMDgwNzggMTYuMjQ5MiAxIDEzLjM2NzYgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMzY5IDIwLjgwMzIgMTcuNzI1IDE4IDE3Ljk3NzZDMTcuOTg3OSAxNC42NzQyIDE1LjMwNjIgMTIgMTIgMTJDOC44Nzg3OSAxMiA2LjMxNDIxIDE0LjM4MzMgNi4wMjY3OSAxNy40MjkzWk0xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXRjaHkgc2xlZXQgcG9zc2libGUnLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTkgMTZIMTFWMjBIOVYxNlpNMTMgMTlIMTVWMjNIMTNWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZScsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNOSAxNkgxMVYyMEg5VjE2Wk0xMyAxOUgxNVYyM0gxM1YxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1RodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZScsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNMTMgMTYuMDA0OEgxNkwxMSAyMi41MDQ4VjE4LjAwNDhIOEwxMyAxMS41VjE2LjAwNDhaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdCbG93aW5nIHNub3cnLFxyXG4gICAgJ002LjAyNjc5IDE3LjQyOTNDMy4wODA3OCAxNi4yNDkyIDEgMTMuMzY3NiAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4zNjkgMjAuODAzMiAxNy43MjUgMTggMTcuOTc3NkMxNy45ODc5IDE0LjY3NDIgMTUuMzA2MiAxMiAxMiAxMkM4Ljg3ODc5IDEyIDYuMzE0MjEgMTQuMzgzMyA2LjAyNjc5IDE3LjQyOTNaTTEzIDE2LjI2OEwxNC45NjQxIDE1LjEzNEwxNS45NjQxIDE2Ljg2NkwxNCAxOEwxNS45NjQxIDE5LjEzNEwxNC45NjQxIDIwLjg2NkwxMyAxOS43MzJWMjJIMTFWMTkuNzMyTDkuMDM1OSAyMC44NjZMOC4wMzU5IDE5LjEzNEwxMCAxOEw4LjAzNTkgMTYuODY2TDkuMDM1OSAxNS4xMzRMMTEgMTYuMjY4VjE0SDEzVjE2LjI2OFonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0JsaXp6YXJkJyxcclxuICAgICdNNi4wMjY3OSAxNy40MjkzQzMuMDgwNzggMTYuMjQ5MiAxIDEzLjM2NzYgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMzY5IDIwLjgwMzIgMTcuNzI1IDE4IDE3Ljk3NzZDMTcuOTg3OSAxNC42NzQyIDE1LjMwNjIgMTIgMTIgMTJDOC44Nzg3OSAxMiA2LjMxNDIxIDE0LjM4MzMgNi4wMjY3OSAxNy40MjkzWk0xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdGb2cnLFxyXG4gICAgJ00xLjU4NDMgMTMuMDA2OUMxLjIwNzUzIDEyLjA3ODYgMSAxMS4wNjM1IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDEyLjY3MDkgMjIuOTkyMiAxMi44Mzk5IDIyLjk3NyAxMy4wMDY5SDIwLjk2MzZDMjAuOTg3NiAxMi44NDE0IDIxIDEyLjY3MjEgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS4wOTU3IDMuMjkzNyAxMi4xMjI4IDMuODA2NjYgMTMuMDA2OUgxLjU4NDNaTTQgMTlIMjFWMjFINFYxOVpNMiAxNUgyM1YxN0gyVjE1WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnRnJlZXppbmcgZm9nJyxcclxuICAgICdNMS41ODQzIDEzLjAwNjlDMS4yMDc1MyAxMi4wNzg2IDEgMTEuMDYzNSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxMi42NzA5IDIyLjk5MjIgMTIuODM5OSAyMi45NzcgMTMuMDA2OUgyMC45NjM2QzIwLjk4NzYgMTIuODQxNCAyMSAxMi42NzIxIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuMDk1NyAzLjI5MzcgMTIuMTIyOCAzLjgwNjY2IDEzLjAwNjlIMS41ODQzWk00IDE5SDIxVjIxSDRWMTlaTTIgMTVIMjNWMTdIMlYxNVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhdGNoeSBsaWdodCBkcml6emxlJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk05IDE2SDExVjIwSDlWMTZaTTEzIDE5SDE1VjIzSDEzVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTGlnaHQgZHJpenpsZScsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNOSAxNkgxMVYyMEg5VjE2Wk0xMyAxOUgxNVYyM0gxM1YxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0ZyZWV6aW5nIGRyaXp6bGUnLFxyXG4gICAgJ001IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTZIOVYyMEg3VjE2Wk0xNSAxNkgxN1YyMEgxNVYxNlpNMTEgMTlIMTNWMjNIMTFWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdIZWF2eSBmcmVlemluZyBkcml6emxlJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE0SDlWMjBIN1YxNFpNMTUgMTRIMTdWMjBIMTVWMTRaTTExIDE3SDEzVjIzSDExVjE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IGxpZ2h0IHJhaW4nLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTkgMTZIMTFWMjBIOVYxNlpNMTMgMTlIMTVWMjNIMTNWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdMaWdodCByYWluJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk05IDE2SDExVjIwSDlWMTZaTTEzIDE5SDE1VjIzSDEzVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTW9kZXJhdGUgcmFpbiBhdCB0aW1lcycsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNkg5VjIwSDdWMTZaTTE1IDE2SDE3VjIwSDE1VjE2Wk0xMSAxOUgxM1YyM0gxMVYxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIHJhaW4nLFxyXG4gICAgJ001IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTZIOVYyMEg3VjE2Wk0xNSAxNkgxN1YyMEgxNVYxNlpNMTEgMTlIMTNWMjNIMTFWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdIZWF2eSByYWluIGF0IHRpbWVzJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE0SDlWMjBIN1YxNFpNMTUgMTRIMTdWMjBIMTVWMTRaTTExIDE3SDEzVjIzSDExVjE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnSGVhdnkgcmFpbicsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNEg5VjIwSDdWMTRaTTE1IDE0SDE3VjIwSDE1VjE0Wk0xMSAxN0gxM1YyM0gxMVYxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0xpZ2h0IGZyZWV6aW5nIHJhaW4nLFxyXG4gICAgJ001IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTZIOVYyMEg3VjE2Wk0xNSAxNkgxN1YyMEgxNVYxNlpNMTEgMTlIMTNWMjNIMTFWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE0SDlWMjBIN1YxNFpNMTUgMTRIMTdWMjBIMTVWMTRaTTExIDE3SDEzVjIzSDExVjE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTGlnaHQgc2xlZXQnLFxyXG4gICAgJ1wiTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNkg5VjIwSDdWMTZaTTE1IDE2SDE3VjIwSDE1VjE2Wk0xMSAxOUgxM1YyM0gxMVYxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0JyxcclxuICAgICdcIk01IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTZIOVYyMEg3VjE2Wk0xNSAxNkgxN1YyMEgxNVYxNlpNMTEgMTlIMTNWMjNIMTFWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXRjaHkgbGlnaHQgc25vdycsXHJcbiAgICAnTTEzIDE2LjI2OEwxNC45NjQxIDE1LjEzNEwxNS45NjQxIDE2Ljg2NkwxNCAxOEwxNS45NjQxIDE5LjEzNEwxNC45NjQxIDIwLjg2NkwxMyAxOS43MzJWMjJIMTFWMTkuNzMyTDkuMDM1OSAyMC44NjZMOC4wMzU5IDE5LjEzNEwxMCAxOEw4LjAzNTkgMTYuODY2TDkuMDM1OSAxNS4xMzRMMTEgMTYuMjY4VjE0SDEzVjE2LjI2OFpNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTGlnaHQgc25vdycsXHJcbiAgICAnTTEzIDE2LjI2OEwxNC45NjQxIDE1LjEzNEwxNS45NjQxIDE2Ljg2NkwxNCAxOEwxNS45NjQxIDE5LjEzNEwxNC45NjQxIDIwLjg2NkwxMyAxOS43MzJWMjJIMTFWMTkuNzMyTDkuMDM1OSAyMC44NjZMOC4wMzU5IDE5LjEzNEwxMCAxOEw4LjAzNTkgMTYuODY2TDkuMDM1OSAxNS4xMzRMMTEgMTYuMjY4VjE0SDEzVjE2LjI2OFpNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IG1vZGVyYXRlIHNub3cnLFxyXG4gICAgJ00xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIHNub3cnLFxyXG4gICAgJ00xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhdGNoeSBoZWF2eSBzbm93JyxcclxuICAgICdNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4Wk0xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdIZWF2eSBzbm93JyxcclxuICAgICdNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4Wk0xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdJY2UgcGVsbGV0cycsXHJcbiAgICAnTTYgMTcuNDE4NUMzLjA2ODE3IDE2LjIzMTcgMSAxMy4zNTc0IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjIyMDggNC4yMDY2IDE0LjE1OTkgNiAxNS4xOTczVjE3LjQxODVaTTEwIDE3QzguODk1NDMgMTcgOCAxNi4xMDQ2IDggMTVDOCAxMy44OTU0IDguODk1NDMgMTMgMTAgMTNDMTEuMTA0NiAxMyAxMiAxMy44OTU0IDEyIDE1QzEyIDE2LjEwNDYgMTEuMTA0NiAxNyAxMCAxN1pNMTUgMjBDMTMuODk1NCAyMCAxMyAxOS4xMDQ2IDEzIDE4QzEzIDE2Ljg5NTQgMTMuODk1NCAxNiAxNSAxNkMxNi4xMDQ2IDE2IDE3IDE2Ljg5NTQgMTcgMThDMTcgMTkuMTA0NiAxNi4xMDQ2IDIwIDE1IDIwWk0xMCAyM0M4Ljg5NTQzIDIzIDggMjIuMTA0NiA4IDIxQzggMTkuODk1NCA4Ljg5NTQzIDE5IDEwIDE5QzExLjEwNDYgMTkgMTIgMTkuODk1NCAxMiAyMUMxMiAyMi4xMDQ2IDExLjEwNDYgMjMgMTAgMjNaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdMaWdodCByYWluIHNob3dlcicsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNOSAxNkgxMVYyMEg5VjE2Wk0xMyAxOUgxNVYyM0gxM1YxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE2SDlWMjBIN1YxNlpNMTUgMTZIMTdWMjBIMTVWMTZaTTExIDE5SDEzVjIzSDExVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnVG9ycmVudGlhbCByYWluIHNob3dlcicsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNEg5VjIwSDdWMTRaTTE1IDE0SDE3VjIwSDE1VjE0Wk0xMSAxN0gxM1YyM0gxMVYxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0xpZ2h0IHNsZWV0IHNob3dlcnMnLFxyXG4gICAgJ001IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTZIOVYyMEg3VjE2Wk0xNSAxNkgxN1YyMEgxNVYxNlpNMTEgMTlIMTNWMjNIMTFWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE2SDlWMjBIN1YxNlpNMTUgMTZIMTdWMjBIMTVWMTZaTTExIDE5SDEzVjIzSDExVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTGlnaHQgc25vdyBzaG93ZXJzJyxcclxuICAgICdNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4Wk0xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnMnLFxyXG4gICAgJ00xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0xpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnLFxyXG4gICAgJ002IDE3LjQxODVDMy4wNjgxNyAxNi4yMzE3IDEgMTMuMzU3NCAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi4yMjA4IDQuMjA2NiAxNC4xNTk5IDYgMTUuMTk3M1YxNy40MTg1Wk0xMCAxN0M4Ljg5NTQzIDE3IDggMTYuMTA0NiA4IDE1QzggMTMuODk1NCA4Ljg5NTQzIDEzIDEwIDEzQzExLjEwNDYgMTMgMTIgMTMuODk1NCAxMiAxNUMxMiAxNi4xMDQ2IDExLjEwNDYgMTcgMTAgMTdaTTE1IDIwQzEzLjg5NTQgMjAgMTMgMTkuMTA0NiAxMyAxOEMxMyAxNi44OTU0IDEzLjg5NTQgMTYgMTUgMTZDMTYuMTA0NiAxNiAxNyAxNi44OTU0IDE3IDE4QzE3IDE5LjEwNDYgMTYuMTA0NiAyMCAxNSAyMFpNMTAgMjNDOC44OTU0MyAyMyA4IDIyLjEwNDYgOCAyMUM4IDE5Ljg5NTQgOC44OTU0MyAxOSAxMCAxOUMxMS4xMDQ2IDE5IDEyIDE5Ljg5NTQgMTIgMjFDMTIgMjIuMTA0NiAxMS4xMDQ2IDIzIDEwIDIzWidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0cycsXHJcbiAgICAnTTYgMTcuNDE4NUMzLjA2ODE3IDE2LjIzMTcgMSAxMy4zNTc0IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjIyMDggNC4yMDY2IDE0LjE1OTkgNiAxNS4xOTczVjE3LjQxODVaTTEwIDE3QzguODk1NDMgMTcgOCAxNi4xMDQ2IDggMTVDOCAxMy44OTU0IDguODk1NDMgMTMgMTAgMTNDMTEuMTA0NiAxMyAxMiAxMy44OTU0IDEyIDE1QzEyIDE2LjEwNDYgMTEuMTA0NiAxNyAxMCAxN1pNMTUgMjBDMTMuODk1NCAyMCAxMyAxOS4xMDQ2IDEzIDE4QzEzIDE2Ljg5NTQgMTMuODk1NCAxNiAxNSAxNkMxNi4xMDQ2IDE2IDE3IDE2Ljg5NTQgMTcgMThDMTcgMTkuMTA0NiAxNi4xMDQ2IDIwIDE1IDIwWk0xMCAyM0M4Ljg5NTQzIDIzIDggMjIuMTA0NiA4IDIxQzggMTkuODk1NCA4Ljg5NTQzIDE5IDEwIDE5QzExLjEwNDYgMTkgMTIgMTkuODk1NCAxMiAyMUMxMiAyMi4xMDQ2IDExLjEwNDYgMjMgMTAgMjNaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXInLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTEzIDE2LjAwNDhIMTZMMTEgMjIuNTA0OFYxOC4wMDQ4SDhMMTMgMTEuNVYxNi4wMDQ4WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXInLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTEzIDE2LjAwNDhIMTZMMTEgMjIuNTA0OFYxOC4wMDQ4SDhMMTMgMTEuNVYxNi4wMDQ4WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk0xMyAxNi4wMDQ4SDE2TDExIDIyLjUwNDhWMTguMDA0OEg4TDEzIDExLjVWMTYuMDA0OFonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk0xMyAxNi4wMDQ4SDE2TDExIDIyLjUwNDhWMTguMDA0OEg4TDEzIDExLjVWMTYuMDA0OFonXHJcbiAgKTtcclxuXHJcbiAgaWYgKGlzRGF5ID09PSAwICYmICh3ZWF0aGVyVHlwZSA9PT0gJ1N1bm55JyB8fCB3ZWF0aGVyVHlwZSA9PT0gJ0NsZWFyJykpIHtcclxuICAgIHJldHVybiB3ZWF0aGVyVHlwZXMuZ2V0KCdzdW5ueS1jbGVhcicpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRGF5ID09PSAwICYmIHdlYXRoZXJUeXBlID09PSAnUGFydGx5IGNsb3VkeScpIHtcclxuICAgIHJldHVybiB3ZWF0aGVyVHlwZXMuZ2V0KCdtb29uLWNsb3VkeScpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdlYXRoZXJUeXBlcy5oYXMod2VhdGhlclR5cGUpXHJcbiAgICA/IHdlYXRoZXJUeXBlcy5nZXQod2VhdGhlclR5cGUpXHJcbiAgICA6ICdNMTguNTM3NCAxOS41Njc0QzE2Ljc4NDQgMjEuMDgzMSAxNC40OTkzIDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyQzIyIDE0LjEzNjEgMjEuMzMwMiAxNi4xMTU4IDIwLjE4OTIgMTcuNzQwNkwxNyAxMkgyMEMyMCA3LjU4MTcyIDE2LjQxODMgNCAxMiA0QzcuNTgxNzIgNCA0IDcuNTgxNzIgNCAxMkM0IDE2LjQxODMgNy41ODE3MiAyMCAxMiAyMEMxNC4xNTAyIDIwIDE2LjEwMjIgMTkuMTUxNyAxNy41Mzk4IDE3Ljc3MTZMMTguNTM3NCAxOS41Njc0Wic7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVySWNvblBhdGg7XHJcbiIsImZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcclxuICBjb25zdCB7IGN1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbiB9ID0gZGF0YTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdGVtcF9jOiB0ZW1wQyxcclxuICAgIHRlbXBfZjogdGVtcEYsXHJcbiAgICB3aW5kX21waDogd2luZE1waCxcclxuICAgIHdpbmRfa3BoOiB3aW5kS3BoLFxyXG4gICAgZmVlbHNsaWtlX2M6IGZlZWxzbGlrZUMsXHJcbiAgICBmZWVsc2xpa2VfZjogZmVlbHNsaWtlRixcclxuICAgIGxhc3RfdXBkYXRlZDogbGFzdFVwZGF0ZWQsXHJcbiAgICBodW1pZGl0eSxcclxuICAgIGNvbmRpdGlvbjogeyB0ZXh0OiBjdXJyZW50V2VhdGhlclR5cGUgfSxcclxuICAgIGlzX2RheTogaXNEYXlcclxuICB9ID0gY3VycmVudDtcclxuXHJcbiAgY29uc3QgeyBuYW1lIH0gPSBsb2NhdGlvbjtcclxuXHJcbiAgY29uc3QgWy4uLmRheXNdID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZERheXMgPSBkYXlzLm1hcCgoc2luZ2xlRGF5KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIGRheToge1xyXG4gICAgICAgIGNvbmRpdGlvbjogeyB0ZXh0OiBkYXlJbmZvIH0sXHJcbiAgICAgICAgYXZndGVtcF9jOiBhdmdUZW1wQyxcclxuICAgICAgICBhdmd0ZW1wX2Y6IGF2Z1RlbXBGXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzdHJvOiB7IGlzX3N1bl91cDogaXNTdW5VcCB9XHJcbiAgICB9ID0gc2luZ2xlRGF5O1xyXG4gICAgcmV0dXJuIHsgZGF0ZSwgZGF5SW5mbywgYXZnVGVtcEMsIGF2Z1RlbXBGLCBpc1N1blVwIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGhvdXI6IFsuLi5ob3VyRGF0YV1cclxuICB9ID0gZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF07XHJcblxyXG4gIGNvbnN0IGhvdXJEZXRhaWxzID0gW107XHJcblxyXG4gIGhvdXJEYXRhLmZvckVhY2goKGhvdXIpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdGltZSxcclxuICAgICAgdGVtcF9jOiBob3VyVGVtcEMsXHJcbiAgICAgIHRlbXBfZjogaG91clRlbXBGLFxyXG4gICAgICBjb25kaXRpb246IHsgdGV4dDogaW5mbyB9LFxyXG4gICAgICBpc19kYXk6IGlzSG91ckRheVxyXG4gICAgfSA9IGhvdXI7XHJcblxyXG4gICAgaG91ckRldGFpbHMucHVzaCh7IHRpbWUsIGhvdXJUZW1wQywgaG91clRlbXBGLCBpbmZvLCBpc0hvdXJEYXkgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRheURhdGEgPSB7XHJcbiAgICB0ZW1wQyxcclxuICAgIHRlbXBGLFxyXG4gICAgZmVlbHNsaWtlQyxcclxuICAgIGZlZWxzbGlrZUYsXHJcbiAgICB3aW5kS3BoLFxyXG4gICAgd2luZE1waCxcclxuICAgIGxhc3RVcGRhdGVkLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICBuYW1lLFxyXG4gICAgY3VycmVudFdlYXRoZXJUeXBlLFxyXG4gICAgaXNEYXlcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBob3VyRGV0YWlscywgZGF5RGF0YSwgcHJvY2Vzc2VkRGF5cyB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT01NWM4N2VhMDg1YjY0MmIwOTAwMTEzNzIxMjMwMjA4JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCxcclxuICAgICAgeyBtb2RlOiAnY29ycycgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHsgaG91ckRldGFpbHMsIGRheURhdGEsIHByb2Nlc3NlZERheXMgfSA9IHByb2Nlc3NEYXRhKFxyXG4gICAgICBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICk7XHJcbiAgICByZXR1cm4geyBob3VyRGV0YWlscywgZGF5RGF0YSwgcHJvY2Vzc2VkRGF5cyB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5IZWFkZXIoKTtcclxuQXBwKCk7XHJcbkZvb3RlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=