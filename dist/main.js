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

  const hoursForecast = document.createElement('div');
  hoursForecast.classList.add('hours-forecast');

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
      console.log(hourDetails);
      hourlyWeather.textContent = '';
      hourDetails.forEach((hour) => formatHourWeather(hour, hourlyWeather));
    } catch (error) {
      console.log(error);
    }
  });

  search.addEventListener('click', async () => {
    // console.log(city.value);
    try {
      const cityValue = city.value.trim().length > 0 ? city.value : 'Poznan';
      const { hourDetails, dayData, processedDays } = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(
        cityValue
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

  const mobileSearchTrigger = document.createElement('a');
  mobileSearchTrigger.classList.add('mobile-search-trigger');
  mobileSearchTrigger.appendChild(searchIconSvg());

  mobileSearchTrigger.addEventListener('click', () => {
    const main = document.querySelector('main');
    if (forum.classList.contains('active')) {
      setTimeout(() => {
        forum.style.display = 'none';
      }, 125);
      forum.classList.remove('active');
      forum.classList.toggle('hide');
      main.classList.toggle('show');
      main.classList.remove('hide');
      cityData.classList.remove('hide');
      cityData.classList.toggle('show');
    } else {
      setTimeout(() => {
        forum.style.display = 'block';
      }, 125);
      forum.classList.remove('hide');
      forum.classList.toggle('active');
      main.classList.toggle('hide');
      main.classList.remove('show');
      cityData.classList.remove('show');
      cityData.classList.toggle('hide');
    }

    if (window.screen.width <= 600) {
      searchButton.addEventListener('click', () => {
        if (forum.classList.contains('active')) {
          setTimeout(() => {
            forum.style.display = 'none';
          }, 125);
          forum.classList.toggle('hide');
          forum.classList.remove('active');
          main.classList.toggle('show');
          main.classList.remove('hide');
          cityData.classList.remove('hide');
          cityData.classList.toggle('show');
        } else {
          setTimeout(() => {
            forum.style.display = 'block';
          }, 125);
          forum.classList.remove('hide');
          forum.classList.toggle('active');
          main.classList.toggle('hide');
          main.classList.remove('show');
          cityData.classList.remove('show');
          cityData.classList.toggle('hide');
        }
      });
    }
  });

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
/* harmony export */   showCurrentWeather: () => (/* binding */ showCurrentWeather),
/* harmony export */   showDayWeather: () => (/* binding */ showDayWeather),
/* harmony export */   showHourForecast: () => (/* binding */ showHourForecast),
/* harmony export */   showHourlyForecast: () => (/* binding */ showHourlyForecast),
/* harmony export */   threeDayWeather: () => (/* binding */ threeDayWeather)
/* harmony export */ });
/* harmony import */ var _getWeatherIconPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeatherIconPath */ "./src/components/getWeatherIconPath.js");
// const iconsPaths = new Map();
// iconsPaths.set('a' || 'b', 'test');
// console.log(iconsPaths.get('b'));


const getWeatherIcon = (weather) => {
  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  // console.log(weather);

  iconSvg.setAttribute('fill', '#837970');
  iconSvg.setAttribute('viewBox', '0 0 24 24');
  iconSvg.setAttribute('stroke', '');
  iconSvg.classList.add('trash_icon');

  const path = (0,_getWeatherIconPath__WEBPACK_IMPORTED_MODULE_0__["default"])(weather);
  // console.log('path:', path);

  iconPath.setAttribute('d', path);
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

/***/ "./src/components/getWeatherIconPath.js":
/*!**********************************************!*\
  !*** ./src/components/getWeatherIconPath.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getWeatherIconPath = (weatherType) => {
  const weatherTypes = new Map();
  weatherTypes.set(
    'Sunny',
    'M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'
  );
  weatherTypes.set(
    'Clear',
    'M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z'
  );
  weatherTypes.set(
    'Partly cloudy',
    'M9.98392 5.05991C11.1323 3.22236 13.1734 2 15.5 2C19.0899 2 22 4.91015 22 8.5C22 9.58031 21.7365 10.5991 21.2701 11.4955C22.3351 12.4985 23 13.9216 23 15.5C23 18.5376 20.5376 21 17.5 21H9C4.58172 21 1 17.4183 1 13C1 8.58172 4.58172 5 9 5C9.33312 5 9.66149 5.02036 9.98392 5.05991ZM12.0554 5.60419C14.0675 6.43637 15.6662 8.06578 16.4576 10.0986C16.7951 10.0339 17.1436 10 17.5 10C18.2351 10 18.9366 10.1442 19.5776 10.4059C19.8486 9.82719 20 9.18128 20 8.5C20 6.01472 17.9853 4 15.5 4C14.1177 4 12.8809 4.6233 12.0554 5.60419ZM17.5 19C19.433 19 21 17.433 21 15.5C21 13.567 19.433 12 17.5 12C16.5205 12 15.6351 12.4023 14.9998 13.0507C14.9999 13.0338 15 13.0169 15 13C15 9.68629 12.3137 7 9 7C5.68629 7 3 9.68629 3 13C3 16.3137 5.68629 19 9 19H17.5Z'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU1yQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw0Q0FBNEM7QUFDdEQ7QUFDQTtBQUNBLEVBQUUsdURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxFQUFFLG1EQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFzQyxRQUFRLG9EQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQXFCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFzQyxRQUFRLG9EQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFxQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlJbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JdEI7QUFDQTtBQUNBO0FBQ3NEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNU1sQztBQUNBLFVBQVUsOEJBQThCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLFFBQVE7QUFDUjtBQUNBLFlBQVksc0NBQXNDO0FBQ2xEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNqRjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDZTtBQUNOO0FBQ007QUFDekM7QUFDQSw4REFBTTtBQUNOLDJEQUFHO0FBQ0gsOERBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZ2V0V2VhdGhlckljb25QYXRoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7XHJcbiAgc2hvd0N1cnJlbnRXZWF0aGVyLFxyXG4gIGFkZGl0aW9uYWxXZWF0aGVySW5mbyxcclxuICBzaG93SG91cmx5Rm9yZWNhc3QsXHJcbiAgc2hvd0RheVdlYXRoZXJcclxufSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IGZvcm1hdEhvdXJXZWF0aGVyID0gKHdlYXRoZXIsIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjb250YWluZXI7XHJcblxyXG4gIGNvbnN0IHsgdGltZTogZm9yZWNhc3RUaW1lLCBob3VyVGVtcEM6IHRlbXAsIGluZm8gfSA9IHdlYXRoZXI7XHJcbiAgY29uc3QgZm9ybWF0ZWRUaW1lID0gZm9yZWNhc3RUaW1lLnNwbGl0KCcgJylbMV07XHJcblxyXG4gIHNob3dIb3VybHlGb3JlY2FzdChlbGVtZW50LCBmb3JtYXRlZFRpbWUsIHRlbXAsIGluZm8pO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0RheXNGb3JlY2FzdCA9IChjb250YWluZXIsIGRhdGEpID0+IHtcclxuICBjb25zdCB7IGRhdGUsIGF2Z1RlbXBDLCBkYXlJbmZvIH0gPSBkYXRhO1xyXG4gIGNvbnN0IGRheURhdGUgPSBkYXRlLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLicpLnNsaWNlKDAsIDUpO1xyXG5cclxuICBzaG93RGF5V2VhdGhlcihjb250YWluZXIsIGRheURhdGUsIGF2Z1RlbXBDLCBkYXlJbmZvKTtcclxufTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCcpO1xyXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckRhdGEuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kYXRhJyk7XHJcbiAgY29uc3QgZGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXlGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdkYXktZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluV2VhdGhlci5jbGFzc0xpc3QuYWRkKCdtYWluLXdlYXRoZXInKTtcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluRGF0YS5jbGFzc0xpc3QuYWRkKCdtYWluLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgYWRkaXRpb25hbERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgaG91cnNGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cnMtZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXdlYXRoZXInKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJyk7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1kYXRlJyk7XHJcblxyXG4gIG1haW5EYXRhLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRDaXR5ID0gJ1Bvem5hbic7XHJcbiAgICAgIGNvbnN0IHsgaG91ckRldGFpbHMsIGRheURhdGEsIHByb2Nlc3NlZERheXMgfSA9IGF3YWl0IGdldFdlYXRoZXIoXHJcbiAgICAgICAgZGVmYXVsdENpdHlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGRheUZvcmVjYXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIHByb2Nlc3NlZERheXMuZm9yRWFjaCgoZGF5KSA9PiBzaG93RGF5c0ZvcmVjYXN0KGRheUZvcmVjYXN0LCBkYXkpKTtcclxuXHJcbiAgICAgIHNob3dDdXJyZW50V2VhdGhlcih3ZWF0aGVyQ29udGFpbmVyLCBkYXlEYXRhLnRlbXBDLCAnU3VubnknKTtcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiB0aW1lLFxyXG4gICAgICAgIGZlZWxzbGlrZUMsXHJcbiAgICAgICAgd2luZEtwaCxcclxuICAgICAgICBodW1pZGl0eVxyXG4gICAgICB9ID0gZGF5RGF0YTtcclxuXHJcbiAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGUgPSB0aW1lLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLicpO1xyXG4gICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XHJcblxyXG4gICAgICBhZGRpdGlvbmFsV2VhdGhlckluZm8oYWRkaXRpb25hbERhdGEsIGZlZWxzbGlrZUMsIHdpbmRLcGgsIGh1bWlkaXR5KTtcclxuICAgICAgY29uc29sZS5sb2coaG91ckRldGFpbHMpO1xyXG4gICAgICBob3VybHlXZWF0aGVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGhvdXJEZXRhaWxzLmZvckVhY2goKGhvdXIpID0+IGZvcm1hdEhvdXJXZWF0aGVyKGhvdXIsIGhvdXJseVdlYXRoZXIpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coY2l0eS52YWx1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjaXR5VmFsdWUgPSBjaXR5LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwID8gY2l0eS52YWx1ZSA6ICdQb3puYW4nO1xyXG4gICAgICBjb25zdCB7IGhvdXJEZXRhaWxzLCBkYXlEYXRhLCBwcm9jZXNzZWREYXlzIH0gPSBhd2FpdCBnZXRXZWF0aGVyKFxyXG4gICAgICAgIGNpdHlWYWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBjaXR5LnZhbHVlID0gJyc7XHJcblxyXG4gICAgICBkYXlGb3JlY2FzdC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBwcm9jZXNzZWREYXlzLmZvckVhY2goKGRheSkgPT4gc2hvd0RheXNGb3JlY2FzdChkYXlGb3JlY2FzdCwgZGF5KSk7XHJcblxyXG4gICAgICBzaG93Q3VycmVudFdlYXRoZXIod2VhdGhlckNvbnRhaW5lciwgZGF5RGF0YS50ZW1wQywgJ1N1bm55Jyk7XHJcblxyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsYXN0VXBkYXRlZDogdGltZSxcclxuICAgICAgICBmZWVsc2xpa2VDLFxyXG4gICAgICAgIHdpbmRLcGgsXHJcbiAgICAgICAgaHVtaWRpdHlcclxuICAgICAgfSA9IGRheURhdGE7XHJcblxyXG4gICAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gICAgICBjb25zdCBkYXRlID0gdGltZS5zcGxpdCgnICcpWzBdLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy4nKTtcclxuICAgICAgY3VycmVudERhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xyXG5cclxuICAgICAgYWRkaXRpb25hbERhdGEudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgYWRkaXRpb25hbFdlYXRoZXJJbmZvKGFkZGl0aW9uYWxEYXRhLCBmZWVsc2xpa2VDLCB3aW5kS3BoLCBodW1pZGl0eSk7XHJcblxyXG4gICAgICBob3VybHlXZWF0aGVyLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGhvdXJEZXRhaWxzLmZvckVhY2goKGhvdXIpID0+IGZvcm1hdEhvdXJXZWF0aGVyKGhvdXIsIGhvdXJseVdlYXRoZXIpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWFpbkRhdGEuYXBwZW5kQ2hpbGQoZGF5Rm9yZWNhc3QpO1xyXG5cclxuICBtYWluV2VhdGhlci5hcHBlbmRDaGlsZChtYWluRGF0YSk7XHJcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQoYWRkaXRpb25hbERhdGEpO1xyXG5cclxuICB3ZWF0aGVyRGF0YS5hcHBlbmRDaGlsZChtYWluV2VhdGhlcik7XHJcbiAgaG91cnNGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlXZWF0aGVyKTtcclxuICB3ZWF0aGVyRGF0YS5hcHBlbmRDaGlsZChob3Vyc0ZvcmVjYXN0KTtcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZCh3ZWF0aGVyRGF0YSk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImNvbnN0IHNob3dHaXRodWJMb2dvID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM1MTUxNTEnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEyLjAwMSAyQzYuNDc1OTggMiAyLjAwMDk4IDYuNDc1IDIuMDAwOTggMTJDMi4wMDA5OCAxNi40MjUgNC44NjM0OCAyMC4xNjI1IDguODM4NDggMjEuNDg3NUM5LjMzODQ4IDIxLjU3NSA5LjUyNTk4IDIxLjI3NSA5LjUyNTk4IDIxLjAxMjVDOS41MjU5OCAyMC43NzUgOS41MTM0OCAxOS45ODc1IDkuNTEzNDggMTkuMTVDNy4wMDA5OCAxOS42MTI1IDYuMzUwOTggMTguNTM3NSA2LjE1MDk4IDE3Ljk3NUM2LjAzODQ4IDE3LjY4NzUgNS41NTA5OCAxNi44IDUuMTI1OTggMTYuNTYyNUM0Ljc3NTk4IDE2LjM3NSA0LjI3NTk4IDE1LjkxMjUgNS4xMTM0OCAxNS45QzUuOTAwOTggMTUuODg3NSA2LjQ2MzQ4IDE2LjYyNSA2LjY1MDk4IDE2LjkyNUM3LjU1MDk4IDE4LjQzNzUgOC45ODg0OCAxOC4wMTI1IDkuNTYzNDggMTcuNzVDOS42NTA5OCAxNy4xIDkuOTEzNDggMTYuNjYyNSAxMC4yMDEgMTYuNDEyNUM3Ljk3NTk4IDE2LjE2MjUgNS42NTA5OCAxNS4zIDUuNjUwOTggMTEuNDc1QzUuNjUwOTggMTAuMzg3NSA2LjAzODQ4IDkuNDg3NSA2LjY3NTk4IDguNzg3NUM2LjU3NTk4IDguNTM3NSA2LjIyNTk4IDcuNTEyNSA2Ljc3NTk4IDYuMTM3NUM2Ljc3NTk4IDYuMTM3NSA3LjYxMzQ4IDUuODc1IDkuNTI1OTggNy4xNjI1QzEwLjMyNiA2LjkzNzUgMTEuMTc2IDYuODI1IDEyLjAyNiA2LjgyNUMxMi44NzYgNi44MjUgMTMuNzI2IDYuOTM3NSAxNC41MjYgNy4xNjI1QzE2LjQzODUgNS44NjI1IDE3LjI3NiA2LjEzNzUgMTcuMjc2IDYuMTM3NUMxNy44MjYgNy41MTI1IDE3LjQ3NiA4LjUzNzUgMTcuMzc2IDguNzg3NUMxOC4wMTM1IDkuNDg3NSAxOC40MDEgMTAuMzc1IDE4LjQwMSAxMS40NzVDMTguNDAxIDE1LjMxMjUgMTYuMDYzNSAxNi4xNjI1IDEzLjgzODUgMTYuNDEyNUMxNC4yMDEgMTYuNzI1IDE0LjUxMzUgMTcuMzI1IDE0LjUxMzUgMTguMjYyNUMxNC41MTM1IDE5LjYgMTQuNTAxIDIwLjY3NSAxNC41MDEgMjEuMDEyNUMxNC41MDEgMjEuMjc1IDE0LjY4ODUgMjEuNTg3NSAxNS4xODg1IDIxLjQ4NzVDMTkuMjU5IDIwLjExMzMgMjEuOTk5OSAxNi4yOTYzIDIyLjAwMSAxMkMyMi4wMDEgNi40NzUgMTcuNTI2IDIgMTIuMDAxIDJaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblxyXG4gIGNvbnN0IGZvb3RlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gJ0NyZWF0ZWQgQnkgRnJhbmVrRGV2JztcclxuXHJcbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKHNob3dHaXRodWJMb2dvKCkpO1xyXG4gIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRnJhbmVrRGV2L3dlYXRoZXItYXBwJztcclxuICBnaXRodWJMaW5rLnRhcmdldCA9ICdibGFuayc7XHJcblxyXG4gIGZvb3RlckluZm8uYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgZm9vdGVySW5mby5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVySW5mbyk7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiY29uc3Qgc2VhcmNoSWNvblN2ZyA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNTE1MTUxJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xOC4wMzEgMTYuNjE2OEwyMi4zMTM3IDIwLjg5OTVMMjAuODk5NSAyMi4zMTM3TDE2LjYxNjggMTguMDMxQzE1LjA3NjkgMTkuMjYzIDEzLjEyNCAyMCAxMSAyMEM2LjAzMiAyMCAyIDE1Ljk2OCAyIDExQzIgNi4wMzIgNi4wMzIgMiAxMSAyQzE1Ljk2OCAyIDIwIDYuMDMyIDIwIDExQzIwIDEzLjEyNCAxOS4yNjMgMTUuMDc2OSAxOC4wMzEgMTYuNjE2OFpNMTYuMDI0NyAxNS44NzQ4QzE3LjI0NzUgMTQuNjE0NiAxOCAxMi44OTU2IDE4IDExQzE4IDcuMTMyNSAxNC44Njc1IDQgMTEgNEM3LjEzMjUgNCA0IDcuMTMyNSA0IDExQzQgMTQuODY3NSA3LjEzMjUgMTggMTEgMThDMTIuODk1NiAxOCAxNC42MTQ2IDE3LjI0NzUgMTUuODc0OCAxNi4wMjQ3TDE2LjAyNDcgMTUuODc0OFonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgY29uc3QgYmxhbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBibGFua0Rpdi5jbGFzc0xpc3QuYWRkKCdnaG9zdCcpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChibGFua0Rpdik7XHJcblxyXG4gIGNvbnN0IGNpdHlEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2l0eURhdGEuY2xhc3NMaXN0LmFkZCgnY2l0eS1kYXRhJyk7XHJcblxyXG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNpdHlOYW1lLmNsYXNzTGlzdC5hZGQoJ2NpdHktbmFtZScpO1xyXG5cclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1kYXRlJyk7XHJcblxyXG4gIGNpdHlEYXRhLmFwcGVuZENoaWxkKGNpdHlOYW1lKTtcclxuICBjaXR5RGF0YS5hcHBlbmRDaGlsZChkYXRlKTtcclxuXHJcbiAgY29uc3QgZm9ydW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnY2l0eS1pbnB1dCcpO1xyXG4gIGNpdHlJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gIGNpdHlJbnB1dC5wbGFjZWhvbGRlciA9ICdDaXR5JztcclxuXHJcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIHNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSk7XHJcblxyXG4gIHNlYXJjaEljb24uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvblN2ZygpKTtcclxuICBzZWFyY2hCdXR0b24uYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XHJcblxyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5SW5wdXQpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xyXG5cclxuICBmb3J1bS5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBtb2JpbGVTZWFyY2hUcmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gIG1vYmlsZVNlYXJjaFRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLXNlYXJjaC10cmlnZ2VyJyk7XHJcbiAgbW9iaWxlU2VhcmNoVHJpZ2dlci5hcHBlbmRDaGlsZChzZWFyY2hJY29uU3ZnKCkpO1xyXG5cclxuICBtb2JpbGVTZWFyY2hUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIGlmIChmb3J1bS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGZvcnVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0sIDEyNSk7XHJcbiAgICAgIGZvcnVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICBmb3J1bS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgY2l0eURhdGEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBjaXR5RGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmb3J1bS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgfSwgMTI1KTtcclxuICAgICAgZm9ydW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICBmb3J1bS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICBjaXR5RGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgIGNpdHlEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSA2MDApIHtcclxuICAgICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb3J1bS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZm9ydW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIH0sIDEyNSk7XHJcbiAgICAgICAgICBmb3J1bS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICBmb3J1bS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICBjaXR5RGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICBjaXR5RGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBmb3J1bS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgIH0sIDEyNSk7XHJcbiAgICAgICAgICBmb3J1bS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICBmb3J1bS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICBjaXR5RGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICBjaXR5RGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNpdHlEYXRhKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZm9ydW0pO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChtb2JpbGVTZWFyY2hUcmlnZ2VyKTtcclxuXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCIvLyBjb25zdCBpY29uc1BhdGhzID0gbmV3IE1hcCgpO1xyXG4vLyBpY29uc1BhdGhzLnNldCgnYScgfHwgJ2InLCAndGVzdCcpO1xyXG4vLyBjb25zb2xlLmxvZyhpY29uc1BhdGhzLmdldCgnYicpKTtcclxuaW1wb3J0IGdldFdlYXRoZXJJY29uUGF0aCBmcm9tICcuL2dldFdlYXRoZXJJY29uUGF0aCc7XHJcblxyXG5jb25zdCBnZXRXZWF0aGVySWNvbiA9ICh3ZWF0aGVyKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGNvbnN0IHBhdGggPSBnZXRXZWF0aGVySWNvblBhdGgod2VhdGhlcik7XHJcbiAgLy8gY29uc29sZS5sb2coJ3BhdGg6JywgcGF0aCk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnZCcsIHBhdGgpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RGVncmVlc0ljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNNC41IDEwQzIuNTY3IDEwIDEgOC40MzMgMSA2LjVDMSA0LjU2NyAyLjU2NyAzIDQuNSAzQzYuNDMzIDMgOCA0LjU2NyA4IDYuNUM4IDguNDMzIDYuNDMzIDEwIDQuNSAxMFpNNC41IDhDNS4zMjg0MyA4IDYgNy4zMjg0MyA2IDYuNUM2IDUuNjcxNTcgNS4zMjg0MyA1IDQuNSA1QzMuNjcxNTcgNSAzIDUuNjcxNTcgMyA2LjVDMyA3LjMyODQzIDMuNjcxNTcgOCA0LjUgOFpNMjIgMTBIMjBDMjAgNy43OTA4NiAxOC4yMDkxIDYgMTYgNkMxMy43OTA5IDYgMTIgNy43OTA4NiAxMiAxMFYxNUMxMiAxNy4yMDkxIDEzLjc5MDkgMTkgMTYgMTlDMTguMjA5MSAxOSAyMCAxNy4yMDkxIDIwIDE1SDIyQzIyIDE4LjMxMzcgMTkuMzEzNyAyMSAxNiAyMUMxMi42ODYzIDIxIDEwIDE4LjMxMzcgMTAgMTVWMTBDMTAgNi42ODYyOSAxMi42ODYzIDQgMTYgNEMxOS4zMTM3IDQgMjIgNi42ODYyOSAyMiAxMFonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IGdldFdpbmRJY29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEwLjUgMTdINFYxNUgxMC41QzEyLjQzMyAxNSAxNCAxNi41NjcgMTQgMTguNUMxNCAyMC40MzMgMTIuNDMzIDIyIDEwLjUgMjJDOC45OTk1NyAyMiA3LjcxOTY2IDIxLjA1NTkgNy4yMjE5NiAxOS43MjkzTDkuMDk1MTMgMTkuMDI2OEM5LjMwODQzIDE5LjU5NTQgOS44NTY5NiAyMCAxMC41IDIwQzExLjMyODQgMjAgMTIgMTkuMzI4NCAxMiAxOC41QzEyIDE3LjY3MTYgMTEuMzI4NCAxNyAxMC41IDE3Wk01IDExSDE4LjVDMjAuNDMzIDExIDIyIDEyLjU2NyAyMiAxNC41QzIyIDE2LjQzMyAyMC40MzMgMTggMTguNSAxOEMxNi45OTk2IDE4IDE1LjcxOTcgMTcuMDU1OSAxNS4yMjIgMTUuNzI5M0wxNy4wOTUxIDE1LjAyNjhDMTcuMzA4NCAxNS41OTU0IDE3Ljg1NyAxNiAxOC41IDE2QzE5LjMyODQgMTYgMjAgMTUuMzI4NCAyMCAxNC41QzIwIDEzLjY3MTYgMTkuMzI4NCAxMyAxOC41IDEzSDVDMy4zNDMxNSAxMyAyIDExLjY1NjkgMiAxMEMyIDguMzQzMTUgMy4zNDMxNSA3IDUgN0gxMy41QzE0LjMyODQgNyAxNSA2LjMyODQzIDE1IDUuNUMxNSA0LjY3MTU3IDE0LjMyODQgNCAxMy41IDRDMTIuODU3IDQgMTIuMzA4NCA0LjQwNDYzIDEyLjA5NTEgNC45NzMxN0wxMC4yMjIgNC4yNzA3M0MxMC43MTk3IDIuOTQ0MTQgMTEuOTk5NiAyIDEzLjUgMkMxNS40MzMgMiAxNyAzLjU2NyAxNyA1LjVDMTcgNy40MzMgMTUuNDMzIDkgMTMuNSA5SDVDNC40NDc3MiA5IDQgOS40NDc3MiA0IDEwQzQgMTAuNTUyMyA0LjQ0NzcyIDExIDUgMTFaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRIdW1pZGl0eUljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNNy4wNTAyNSA4LjA0NjczTDEyIDMuMDk2OThMMTYuOTQ5NyA4LjA0NjczQzE5LjY4MzQgMTAuNzgwNCAxOS42ODM0IDE1LjIxMjYgMTYuOTQ5NyAxNy45NDYyQzE0LjIxNjEgMjAuNjc5OSA5Ljc4MzkyIDIwLjY3OTkgNy4wNTAyNSAxNy45NDYyQzQuMzE2NTggMTUuMjEyNiA0LjMxNjU4IDEwLjc4MDQgNy4wNTAyNSA4LjA0NjczWk0xOC4zNjQgNi42MzI1MkwxMiAwLjI2ODU1NUw1LjYzNjA0IDYuNjMyNTJDMi4xMjEzMiAxMC4xNDcyIDIuMTIxMzIgMTUuODQ1NyA1LjYzNjA0IDE5LjM2MDRDOS4xNTA3NiAyMi44NzUyIDE0Ljg0OTIgMjIuODc1MiAxOC4zNjQgMTkuMzYwNEMyMS44Nzg3IDE1Ljg0NTcgMjEuODc4NyAxMC4xNDcyIDE4LjM2NCA2LjYzMjUyWk0xNi4yNDI3IDEwLjE3MTRMMTQuODI4NSA4Ljc1NzE4TDcuNzU3NCAxNS44MjgyTDkuMTcxNjEgMTcuMjQyNUwxNi4yNDI3IDEwLjE3MTRaTTguMTEwOTUgMTEuMjMyQzguNjk2NzQgMTEuODE3OCA5LjY0NjQ4IDExLjgxNzggMTAuMjMyMyAxMS4yMzJDMTAuODE4MSAxMC42NDYzIDEwLjgxODEgOS42OTY1MiAxMC4yMzIzIDkuMTEwNzNDOS42NDY0OCA4LjUyNDk0IDguNjk2NzQgOC41MjQ5NCA4LjExMDk1IDkuMTEwNzNDNy41MjUxNiA5LjY5NjUyIDcuNTI1MTYgMTAuNjQ2MyA4LjExMDk1IDExLjIzMlpNMTUuODg5MSAxNi44ODg5QzE1LjMwMzMgMTcuNDc0NyAxNC4zNTM2IDE3LjQ3NDcgMTMuNzY3OCAxNi44ODg5QzEzLjE4MiAxNi4zMDMxIDEzLjE4MiAxNS4zNTM0IDEzLjc2NzggMTQuNzY3NkMxNC4zNTM2IDE0LjE4MTggMTUuMzAzMyAxNC4xODE4IDE1Ljg4OTEgMTQuNzY3NkMxNi40NzQ5IDE1LjM1MzQgMTYuNDc0OSAxNi4zMDMxIDE1Ljg4OTEgMTYuODg4OVonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJJY29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTQgMjJDNCAxNy41ODE3IDcuNTgxNzIgMTQgMTIgMTRDMTYuNDE4MyAxNCAyMCAxNy41ODE3IDIwIDIySDE4QzE4IDE4LjY4NjMgMTUuMzEzNyAxNiAxMiAxNkM4LjY4NjI5IDE2IDYgMTguNjg2MyA2IDIySDRaTTEyIDEzQzguNjg1IDEzIDYgMTAuMzE1IDYgN0M2IDMuNjg1IDguNjg1IDEgMTIgMUMxNS4zMTUgMSAxOCAzLjY4NSAxOCA3QzE4IDEwLjMxNSAxNS4zMTUgMTMgMTIgMTNaTTEyIDExQzE0LjIxIDExIDE2IDkuMjEgMTYgN0MxNiA0Ljc5IDE0LjIxIDMgMTIgM0M5Ljc5IDMgOCA0Ljc5IDggN0M4IDkuMjEgOS43OSAxMSAxMiAxMVonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93Q3VycmVudFdlYXRoZXIgPSAod2VhdGhlckNvbnRhaW5lciwgdGVtcCwgY29uZGl0aW9uKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IHdlYXRoZXJDb250YWluZXI7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29udGFpbmVyX19pY29uJyk7XHJcbiAgd2VhdGhlckljb24uYXBwZW5kQ2hpbGQoZ2V0V2VhdGhlckljb24oY29uZGl0aW9uKSk7XHJcblxyXG4gIGNvbnN0IHRlbXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcEluZm8uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXJfX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdGVtcFRleHQudGV4dENvbnRlbnQgPSB0ZW1wO1xyXG5cclxuICBjb25zdCBkZWdyZWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGVncmVlSWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0ZXRoZXItY29udGFpbmVyX19kZWdyZWUnKTtcclxuICBkZWdyZWVJY29uLmFwcGVuZENoaWxkKGdldERlZ3JlZXNJY29uKCkpO1xyXG5cclxuICB0ZW1wSW5mby5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQoZGVncmVlSWNvbik7XHJcblxyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEluZm8pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dEYXlXZWF0aGVyID0gKGNvbnRhaW5lciwgZGF0ZVRleHQsIHRlbXAsIGNvbmRpdGlvbikgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXJfX2RhdGUnKTtcclxuICBkYXRlLnRleHRDb250ZW50ID0gZGF0ZVRleHQ7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGdldFdlYXRoZXJJY29uKGNvbmRpdGlvbikpO1xyXG5cclxuICBjb25zdCB0ZW1wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXBJbmZvLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXJfX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdGVtcFRleHQudGV4dENvbnRlbnQgPSB0ZW1wO1xyXG5cclxuICBjb25zdCBkZWdyZWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGVncmVlSWNvbi5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX19kZWdyZWUnKTtcclxuICBkZWdyZWVJY29uLmFwcGVuZENoaWxkKGdldERlZ3JlZXNJY29uKCkpO1xyXG5cclxuICB0ZW1wSW5mby5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQoZGVncmVlSWNvbik7XHJcblxyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XHJcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wSW5mbyk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93SG91ckZvcmVjYXN0ID0gKCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgdGhyZWVEYXlXZWF0aGVyID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gIHNob3dEYXlXZWF0aGVyKGNvbnRhaW5lcik7XHJcbiAgc2hvd0RheVdlYXRoZXIoY29udGFpbmVyKTtcclxuICBzaG93RGF5V2VhdGhlcihjb250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGl0aW9uYWxXZWF0aGVySW5mbyA9IChcclxuICBjb250YWluZXIsXHJcbiAgZmVlbHMsXHJcbiAgd2luZCxcclxuICBodW1pZGl0eVZhbHVlXHJcbikgPT4ge1xyXG4gIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkaXRpb25hbEluZm8uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1pbmZvJyk7XHJcblxyXG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmZWVsc0xpa2VUZW1wLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2UnKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZV9fdGVtcCcpO1xyXG5cclxuICBjb25zdCB0ZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wVGV4dC5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlX190ZXh0Jyk7XHJcblxyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gZmVlbHM7XHJcbiAgZmVlbHNMaWtlVGVtcC5hcHBlbmRDaGlsZChnZXRVc2VySWNvbigpKTtcclxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBUZXh0KTtcclxuICB0ZW1wLmFwcGVuZENoaWxkKGdldERlZ3JlZXNJY29uKCkpO1xyXG4gIGZlZWxzTGlrZVRlbXAuYXBwZW5kQ2hpbGQodGVtcCk7XHJcblxyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkJyk7XHJcblxyXG4gIGNvbnN0IHdpbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHdpbmRUZXh0LmNsYXNzTGlzdC5hZGQoJ3dpbmQtc3BlZWRfX3RleHQnKTtcclxuXHJcbiAgd2luZFRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5kfSBrbS9oYDtcclxuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQoZ2V0V2luZEljb24oKSk7XHJcbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRUZXh0KTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlfX3RleHQnKTtcclxuXHJcbiAgaHVtaWRpdHlUZXh0LnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHlWYWx1ZX0lYDtcclxuICBodW1pZGl0eS5hcHBlbmRDaGlsZChnZXRIdW1pZGl0eUljb24oKSk7XHJcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUZXh0KTtcclxuXHJcbiAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGVtcCk7XHJcbiAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcclxuICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRpdGlvbmFsSW5mbyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0hvdXJseUZvcmVjYXN0ID0gKFxyXG4gIGNvbnRhaW5lcixcclxuICB0aW1lVGV4dCxcclxuICB0ZW1wVGV4dCxcclxuICB3ZWF0aGVyVHlwZVxyXG4pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnV2VhdGhlciB0eXBlOicsIHdlYXRoZXJUeXBlKTtcclxuICBjb25zdCBob3VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRpbWUuY2xhc3NMaXN0LmFkZCgnaG91ci1pbmZvX190aW1lJyk7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IHRpbWVUZXh0O1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hvdXItaW5mb19faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZChnZXRXZWF0aGVySWNvbih3ZWF0aGVyVHlwZSkpO1xyXG5cclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCdob3VyLWluZm9fX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXBWYWx1ZS50ZXh0Q29udGVudCA9IHRlbXBUZXh0O1xyXG5cclxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBWYWx1ZSk7XHJcbiAgdGVtcC5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQodGltZSk7XHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRlbXApO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91ckluZm8pO1xyXG59O1xyXG4iLCJjb25zdCBnZXRXZWF0aGVySWNvblBhdGggPSAod2VhdGhlclR5cGUpID0+IHtcclxuICBjb25zdCB3ZWF0aGVyVHlwZXMgPSBuZXcgTWFwKCk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdTdW5ueScsXHJcbiAgICAnTTEyIDE4QzguNjg2MjkgMTggNiAxNS4zMTM3IDYgMTJDNiA4LjY4NjI5IDguNjg2MjkgNiAxMiA2QzE1LjMxMzcgNiAxOCA4LjY4NjI5IDE4IDEyQzE4IDE1LjMxMzcgMTUuMzEzNyAxOCAxMiAxOFpNMTIgMTZDMTQuMjA5MSAxNiAxNiAxNC4yMDkxIDE2IDEyQzE2IDkuNzkwODYgMTQuMjA5MSA4IDEyIDhDOS43OTA4NiA4IDggOS43OTA4NiA4IDEyQzggMTQuMjA5MSA5Ljc5MDg2IDE2IDEyIDE2Wk0xMSAxSDEzVjRIMTFWMVpNMTEgMjBIMTNWMjNIMTFWMjBaTTMuNTE0NzIgNC45Mjg5M0w0LjkyODkzIDMuNTE0NzJMNy4wNTAyNSA1LjYzNjA0TDUuNjM2MDQgNy4wNTAyNUwzLjUxNDcyIDQuOTI4OTNaTTE2Ljk0OTcgMTguMzY0TDE4LjM2NCAxNi45NDk3TDIwLjQ4NTMgMTkuMDcxMUwxOS4wNzExIDIwLjQ4NTNMMTYuOTQ5NyAxOC4zNjRaTTE5LjA3MTEgMy41MTQ3MkwyMC40ODUzIDQuOTI4OTNMMTguMzY0IDcuMDUwMjVMMTYuOTQ5NyA1LjYzNjA0TDE5LjA3MTEgMy41MTQ3MlpNNS42MzYwNCAxNi45NDk3TDcuMDUwMjUgMTguMzY0TDQuOTI4OTMgMjAuNDg1M0wzLjUxNDcyIDE5LjA3MTFMNS42MzYwNCAxNi45NDk3Wk0yMyAxMVYxM0gyMFYxMUgyM1pNNCAxMVYxM0gxVjExSDRaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdDbGVhcicsXHJcbiAgICAnTTEyIDE4QzguNjg2MjkgMTggNiAxNS4zMTM3IDYgMTJDNiA4LjY4NjI5IDguNjg2MjkgNiAxMiA2QzE1LjMxMzcgNiAxOCA4LjY4NjI5IDE4IDEyQzE4IDE1LjMxMzcgMTUuMzEzNyAxOCAxMiAxOFpNMTIgMTZDMTQuMjA5MSAxNiAxNiAxNC4yMDkxIDE2IDEyQzE2IDkuNzkwODYgMTQuMjA5MSA4IDEyIDhDOS43OTA4NiA4IDggOS43OTA4NiA4IDEyQzggMTQuMjA5MSA5Ljc5MDg2IDE2IDEyIDE2Wk0xMSAxSDEzVjRIMTFWMVpNMTEgMjBIMTNWMjNIMTFWMjBaTTMuNTE0NzIgNC45Mjg5M0w0LjkyODkzIDMuNTE0NzJMNy4wNTAyNSA1LjYzNjA0TDUuNjM2MDQgNy4wNTAyNUwzLjUxNDcyIDQuOTI4OTNaTTE2Ljk0OTcgMTguMzY0TDE4LjM2NCAxNi45NDk3TDIwLjQ4NTMgMTkuMDcxMUwxOS4wNzExIDIwLjQ4NTNMMTYuOTQ5NyAxOC4zNjRaTTE5LjA3MTEgMy41MTQ3MkwyMC40ODUzIDQuOTI4OTNMMTguMzY0IDcuMDUwMjVMMTYuOTQ5NyA1LjYzNjA0TDE5LjA3MTEgMy41MTQ3MlpNNS42MzYwNCAxNi45NDk3TDcuMDUwMjUgMTguMzY0TDQuOTI4OTMgMjAuNDg1M0wzLjUxNDcyIDE5LjA3MTFMNS42MzYwNCAxNi45NDk3Wk0yMyAxMVYxM0gyMFYxMUgyM1pNNCAxMVYxM0gxVjExSDRaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXJ0bHkgY2xvdWR5JyxcclxuICAgICdNOS45ODM5MiA1LjA1OTkxQzExLjEzMjMgMy4yMjIzNiAxMy4xNzM0IDIgMTUuNSAyQzE5LjA4OTkgMiAyMiA0LjkxMDE1IDIyIDguNUMyMiA5LjU4MDMxIDIxLjczNjUgMTAuNTk5MSAyMS4yNzAxIDExLjQ5NTVDMjIuMzM1MSAxMi40OTg1IDIzIDEzLjkyMTYgMjMgMTUuNUMyMyAxOC41Mzc2IDIwLjUzNzYgMjEgMTcuNSAyMUg5QzQuNTgxNzIgMjEgMSAxNy40MTgzIDEgMTNDMSA4LjU4MTcyIDQuNTgxNzIgNSA5IDVDOS4zMzMxMiA1IDkuNjYxNDkgNS4wMjAzNiA5Ljk4MzkyIDUuMDU5OTFaTTEyLjA1NTQgNS42MDQxOUMxNC4wNjc1IDYuNDM2MzcgMTUuNjY2MiA4LjA2NTc4IDE2LjQ1NzYgMTAuMDk4NkMxNi43OTUxIDEwLjAzMzkgMTcuMTQzNiAxMCAxNy41IDEwQzE4LjIzNTEgMTAgMTguOTM2NiAxMC4xNDQyIDE5LjU3NzYgMTAuNDA1OUMxOS44NDg2IDkuODI3MTkgMjAgOS4xODEyOCAyMCA4LjVDMjAgNi4wMTQ3MiAxNy45ODUzIDQgMTUuNSA0QzE0LjExNzcgNCAxMi44ODA5IDQuNjIzMyAxMi4wNTU0IDUuNjA0MTlaTTE3LjUgMTlDMTkuNDMzIDE5IDIxIDE3LjQzMyAyMSAxNS41QzIxIDEzLjU2NyAxOS40MzMgMTIgMTcuNSAxMkMxNi41MjA1IDEyIDE1LjYzNTEgMTIuNDAyMyAxNC45OTk4IDEzLjA1MDdDMTQuOTk5OSAxMy4wMzM4IDE1IDEzLjAxNjkgMTUgMTNDMTUgOS42ODYyOSAxMi4zMTM3IDcgOSA3QzUuNjg2MjkgNyAzIDkuNjg2MjkgMyAxM0MzIDE2LjMxMzcgNS42ODYyOSAxOSA5IDE5SDE3LjVaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdDbG91ZHknLFxyXG4gICAgJ005LjUgNkM1LjkxMDE1IDYgMyA4LjkxMDE1IDMgMTIuNUMzIDE2LjA4OTkgNS45MTAxNSAxOSA5LjUgMTlIMTYuNUMxOC45ODUzIDE5IDIxIDE2Ljk4NTMgMjEgMTQuNUMyMSAxMi4wMTQ3IDE4Ljk4NTMgMTAgMTYuNSAxMEMxNi4xNzE3IDEwIDE1Ljg1MTYgMTAuMDM1MiAxNS41NDMzIDEwLjEwMTlDMTQuNTg5IDcuNjk4OTQgMTIuMjQyOSA2IDkuNSA2Wk0xNi41IDIxSDkuNUM0LjgwNTU4IDIxIDEgMTcuMTk0NCAxIDEyLjVDMSA3LjgwNTU4IDQuODA1NTggNCA5LjUgNEMxMi41NDMzIDQgMTUuMjEzMSA1LjU5OTM5IDE2LjcxNDYgOC4wMDM0OEMyMC4yMDUxIDguMTE2NzEgMjMgMTAuOTgyIDIzIDE0LjVDMjMgMTguMDg5OSAyMC4wODk5IDIxIDE2LjUgMjFaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdPdmVyY2FzdCcsXHJcbiAgICAnTTkuNSA2QzUuOTEwMTUgNiAzIDguOTEwMTUgMyAxMi41QzMgMTYuMDg5OSA1LjkxMDE1IDE5IDkuNSAxOUgxNi41QzE4Ljk4NTMgMTkgMjEgMTYuOTg1MyAyMSAxNC41QzIxIDEyLjAxNDcgMTguOTg1MyAxMCAxNi41IDEwQzE2LjE3MTcgMTAgMTUuODUxNiAxMC4wMzUyIDE1LjU0MzMgMTAuMTAxOUMxNC41ODkgNy42OTg5NCAxMi4yNDI5IDYgOS41IDZaTTE2LjUgMjFIOS41QzQuODA1NTggMjEgMSAxNy4xOTQ0IDEgMTIuNUMxIDcuODA1NTggNC44MDU1OCA0IDkuNSA0QzEyLjU0MzMgNCAxNS4yMTMxIDUuNTk5MzkgMTYuNzE0NiA4LjAwMzQ4QzIwLjIwNTEgOC4xMTY3MSAyMyAxMC45ODIgMjMgMTQuNUMyMyAxOC4wODk5IDIwLjA4OTkgMjEgMTYuNSAyMVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01pc3QnLFxyXG4gICAgJ000IDRIOFY2SDRWNFpNMTYgMTlIMjBWMjFIMTZWMTlaTTIgOUg3VjExSDJWOVpNOSA5SDEyVjExSDlWOVpNMTQgOUgyMFYxMUgxNFY5Wk00IDE0SDEwVjE2SDRWMTRaTTEyIDE0SDE1VjE2SDEyVjE0Wk0xNyAxNEgyMlYxNkgxN1YxNFpNMTAgNEgyMlY2SDEwVjRaTTIgMTlIMTRWMjFIMlYxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhdGNoeSByYWluIHBvc3NpYmxlJyxcclxuICAgICdNMTYgMThWMTZIMTdDMTkuMjA5MSAxNiAyMSAxNC4yMDkxIDIxIDEyQzIxIDkuNzkwODYgMTkuMjA5MSA4IDE3IDhDMTYuMjA1NyA4IDE1LjQ2NTQgOC4yMzE1MyAxNC44NDMxIDguNjMwNzlDMTQuMjIzNiA1Ljk3Njg1IDExLjg0MjcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuOTczIDUuMTYyMjkgMTUuNDQxIDggMTUuOTE3VjE3LjkzODFDNC4wNTM2OSAxNy40NDYgMSAxNC4wNzk2IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTEuOTk2NyAyIDE0LjYwODYgMy42NDc2OCAxNS45NzkxIDYuMDg2NTFDMTYuMzEwOSA2LjAyOTYzIDE2LjY1MiA2IDE3IDZDMjAuMzEzNyA2IDIzIDguNjg2MjkgMjMgMTJDMjMgMTUuMzEzNyAyMC4zMTM3IDE4IDE3IDE4SDE2Wk0xMC4yMzIyIDE4LjczMjJMMTIgMTYuOTY0NUwxMy43Njc4IDE4LjczMjJDMTQuNzQ0MSAxOS43MDg1IDE0Ljc0NDEgMjEuMjkxNSAxMy43Njc4IDIyLjI2NzhDMTIuNzkxNSAyMy4yNDQxIDExLjIwODUgMjMuMjQ0MSAxMC4yMzIyIDIyLjI2NzhDOS4yNTU5MiAyMS4yOTE1IDkuMjU1OTIgMTkuNzA4NSAxMC4yMzIyIDE4LjczMjJaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXRjaHkgc25vdyBwb3NzaWJsZScsXHJcbiAgICAnTTYuMDI2NzkgMTcuNDI5M0MzLjA4MDc4IDE2LjI0OTIgMSAxMy4zNjc2IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjM2OSAyMC44MDMyIDE3LjcyNSAxOCAxNy45Nzc2QzE3Ljk4NzkgMTQuNjc0MiAxNS4zMDYyIDEyIDEyIDEyQzguODc4NzkgMTIgNi4zMTQyMSAxNC4zODMzIDYuMDI2NzkgMTcuNDI5M1pNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IHNsZWV0IHBvc3NpYmxlJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk05IDE2SDExVjIwSDlWMTZaTTEzIDE5SDE1VjIzSDEzVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGUnLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTkgMTZIMTFWMjBIOVYxNlpNMTMgMTlIMTVWMjNIMTNWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdUaHVuZGVyeSBvdXRicmVha3MgcG9zc2libGUnLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTEzIDE2LjAwNDhIMTZMMTEgMjIuNTA0OFYxOC4wMDQ4SDhMMTMgMTEuNVYxNi4wMDQ4WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnQmxvd2luZyBzbm93JyxcclxuICAgICdNNi4wMjY3OSAxNy40MjkzQzMuMDgwNzggMTYuMjQ5MiAxIDEzLjM2NzYgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMzY5IDIwLjgwMzIgMTcuNzI1IDE4IDE3Ljk3NzZDMTcuOTg3OSAxNC42NzQyIDE1LjMwNjIgMTIgMTIgMTJDOC44Nzg3OSAxMiA2LjMxNDIxIDE0LjM4MzMgNi4wMjY3OSAxNy40MjkzWk0xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdCbGl6emFyZCcsXHJcbiAgICAnTTYuMDI2NzkgMTcuNDI5M0MzLjA4MDc4IDE2LjI0OTIgMSAxMy4zNjc2IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjM2OSAyMC44MDMyIDE3LjcyNSAxOCAxNy45Nzc2QzE3Ljk4NzkgMTQuNjc0MiAxNS4zMDYyIDEyIDEyIDEyQzguODc4NzkgMTIgNi4zMTQyMSAxNC4zODMzIDYuMDI2NzkgMTcuNDI5M1pNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnRm9nJyxcclxuICAgICdNMS41ODQzIDEzLjAwNjlDMS4yMDc1MyAxMi4wNzg2IDEgMTEuMDYzNSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxMi42NzA5IDIyLjk5MjIgMTIuODM5OSAyMi45NzcgMTMuMDA2OUgyMC45NjM2QzIwLjk4NzYgMTIuODQxNCAyMSAxMi42NzIxIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuMDk1NyAzLjI5MzcgMTIuMTIyOCAzLjgwNjY2IDEzLjAwNjlIMS41ODQzWk00IDE5SDIxVjIxSDRWMTlaTTIgMTVIMjNWMTdIMlYxNVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0ZyZWV6aW5nIGZvZycsXHJcbiAgICAnTTEuNTg0MyAxMy4wMDY5QzEuMjA3NTMgMTIuMDc4NiAxIDExLjA2MzUgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTIuNjcwOSAyMi45OTIyIDEyLjgzOTkgMjIuOTc3IDEzLjAwNjlIMjAuOTYzNkMyMC45ODc2IDEyLjg0MTQgMjEgMTIuNjcyMSAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjA5NTcgMy4yOTM3IDEyLjEyMjggMy44MDY2NiAxMy4wMDY5SDEuNTg0M1pNNCAxOUgyMVYyMUg0VjE5Wk0yIDE1SDIzVjE3SDJWMTVaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXRjaHkgbGlnaHQgZHJpenpsZScsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNOSAxNkgxMVYyMEg5VjE2Wk0xMyAxOUgxNVYyM0gxM1YxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0xpZ2h0IGRyaXp6bGUnLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTkgMTZIMTFWMjBIOVYxNlpNMTMgMTlIMTVWMjNIMTNWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdGcmVlemluZyBkcml6emxlJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE2SDlWMjBIN1YxNlpNMTUgMTZIMTdWMjBIMTVWMTZaTTExIDE5SDEzVjIzSDExVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnSGVhdnkgZnJlZXppbmcgZHJpenpsZScsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNEg5VjIwSDdWMTRaTTE1IDE0SDE3VjIwSDE1VjE0Wk0xMSAxN0gxM1YyM0gxMVYxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhdGNoeSBsaWdodCByYWluJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk05IDE2SDExVjIwSDlWMTZaTTEzIDE5SDE1VjIzSDEzVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTGlnaHQgcmFpbicsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNOSAxNkgxMVYyMEg5VjE2Wk0xMyAxOUgxNVYyM0gxM1YxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIHJhaW4gYXQgdGltZXMnLFxyXG4gICAgJ001IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTZIOVYyMEg3VjE2Wk0xNSAxNkgxN1YyMEgxNVYxNlpNMTEgMTlIMTNWMjNIMTFWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSByYWluJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE2SDlWMjBIN1YxNlpNMTUgMTZIMTdWMjBIMTVWMTZaTTExIDE5SDEzVjIzSDExVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnSGVhdnkgcmFpbiBhdCB0aW1lcycsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNEg5VjIwSDdWMTRaTTE1IDE0SDE3VjIwSDE1VjE0Wk0xMSAxN0gxM1YyM0gxMVYxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0hlYXZ5IHJhaW4nLFxyXG4gICAgJ001IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTRIOVYyMEg3VjE0Wk0xNSAxNEgxN1YyMEgxNVYxNFpNMTEgMTdIMTNWMjNIMTFWMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdMaWdodCBmcmVlemluZyByYWluJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE2SDlWMjBIN1YxNlpNMTUgMTZIMTdWMjBIMTVWMTZaTTExIDE5SDEzVjIzSDExVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpbicsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNEg5VjIwSDdWMTRaTTE1IDE0SDE3VjIwSDE1VjE0Wk0xMSAxN0gxM1YyM0gxMVYxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0xpZ2h0IHNsZWV0JyxcclxuICAgICdcIk01IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTZIOVYyMEg3VjE2Wk0xNSAxNkgxN1YyMEgxNVYxNlpNMTEgMTlIMTNWMjNIMTFWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCcsXHJcbiAgICAnXCJNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE2SDlWMjBIN1YxNlpNMTUgMTZIMTdWMjBIMTVWMTZaTTExIDE5SDEzVjIzSDExVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IGxpZ2h0IHNub3cnLFxyXG4gICAgJ00xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0xpZ2h0IHNub3cnLFxyXG4gICAgJ00xMyAxNi4yNjhMMTQuOTY0MSAxNS4xMzRMMTUuOTY0MSAxNi44NjZMMTQgMThMMTUuOTY0MSAxOS4xMzRMMTQuOTY0MSAyMC44NjZMMTMgMTkuNzMyVjIySDExVjE5LjczMkw5LjAzNTkgMjAuODY2TDguMDM1OSAxOS4xMzRMMTAgMThMOC4wMzU5IDE2Ljg2Nkw5LjAzNTkgMTUuMTM0TDExIDE2LjI2OFYxNEgxM1YxNi4yNjhaTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhdGNoeSBtb2RlcmF0ZSBzbm93JyxcclxuICAgICdNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4Wk0xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSBzbm93JyxcclxuICAgICdNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4Wk0xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdQYXRjaHkgaGVhdnkgc25vdycsXHJcbiAgICAnTTEzIDE2LjI2OEwxNC45NjQxIDE1LjEzNEwxNS45NjQxIDE2Ljg2NkwxNCAxOEwxNS45NjQxIDE5LjEzNEwxNC45NjQxIDIwLjg2NkwxMyAxOS43MzJWMjJIMTFWMTkuNzMyTDkuMDM1OSAyMC44NjZMOC4wMzU5IDE5LjEzNEwxMCAxOEw4LjAzNTkgMTYuODY2TDkuMDM1OSAxNS4xMzRMMTEgMTYuMjY4VjE0SDEzVjE2LjI2OFpNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnSGVhdnkgc25vdycsXHJcbiAgICAnTTEzIDE2LjI2OEwxNC45NjQxIDE1LjEzNEwxNS45NjQxIDE2Ljg2NkwxNCAxOEwxNS45NjQxIDE5LjEzNEwxNC45NjQxIDIwLjg2NkwxMyAxOS43MzJWMjJIMTFWMTkuNzMyTDkuMDM1OSAyMC44NjZMOC4wMzU5IDE5LjEzNEwxMCAxOEw4LjAzNTkgMTYuODY2TDkuMDM1OSAxNS4xMzRMMTEgMTYuMjY4VjE0SDEzVjE2LjI2OFpNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnSWNlIHBlbGxldHMnLFxyXG4gICAgJ002IDE3LjQxODVDMy4wNjgxNyAxNi4yMzE3IDEgMTMuMzU3NCAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi4yMjA4IDQuMjA2NiAxNC4xNTk5IDYgMTUuMTk3M1YxNy40MTg1Wk0xMCAxN0M4Ljg5NTQzIDE3IDggMTYuMTA0NiA4IDE1QzggMTMuODk1NCA4Ljg5NTQzIDEzIDEwIDEzQzExLjEwNDYgMTMgMTIgMTMuODk1NCAxMiAxNUMxMiAxNi4xMDQ2IDExLjEwNDYgMTcgMTAgMTdaTTE1IDIwQzEzLjg5NTQgMjAgMTMgMTkuMTA0NiAxMyAxOEMxMyAxNi44OTU0IDEzLjg5NTQgMTYgMTUgMTZDMTYuMTA0NiAxNiAxNyAxNi44OTU0IDE3IDE4QzE3IDE5LjEwNDYgMTYuMTA0NiAyMCAxNSAyMFpNMTAgMjNDOC44OTU0MyAyMyA4IDIyLjEwNDYgOCAyMUM4IDE5Ljg5NTQgOC44OTU0MyAxOSAxMCAxOUMxMS4xMDQ2IDE5IDEyIDE5Ljg5NTQgMTIgMjFDMTIgMjIuMTA0NiAxMS4xMDQ2IDIzIDEwIDIzWidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTGlnaHQgcmFpbiBzaG93ZXInLFxyXG4gICAgJ00xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaTTkgMTZIMTFWMjBIOVYxNlpNMTMgMTlIMTVWMjNIMTNWMTlaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlcicsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNkg5VjIwSDdWMTZaTTE1IDE2SDE3VjIwSDE1VjE2Wk0xMSAxOUgxM1YyM0gxMVYxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1RvcnJlbnRpYWwgcmFpbiBzaG93ZXInLFxyXG4gICAgJ001IDE2LjkyOTdDMi42MDg3OSAxNS41NDY1IDEgMTIuOTYxMSAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMS43NzcgMy43NzI1IDEzLjM3MzYgNSAxNC40NzIyVjE2LjkyOTdaTTcgMTRIOVYyMEg3VjE0Wk0xNSAxNEgxN1YyMEgxNVYxNFpNMTEgMTdIMTNWMjNIMTFWMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdMaWdodCBzbGVldCBzaG93ZXJzJyxcclxuICAgICdNNSAxNi45Mjk3QzIuNjA4NzkgMTUuNTQ2NSAxIDEyLjk2MTEgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTEuNzc3IDMuNzcyNSAxMy4zNzM2IDUgMTQuNDcyMlYxNi45Mjk3Wk03IDE2SDlWMjBIN1YxNlpNMTUgMTZIMTdWMjBIMTVWMTZaTTExIDE5SDEzVjIzSDExVjE5WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2VycycsXHJcbiAgICAnTTUgMTYuOTI5N0MyLjYwODc5IDE1LjU0NjUgMSAxMi45NjExIDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjAxNzYgMjEuMzA4NSAxNy4xNCAxOSAxNy43OTNWMTUuNjYzMkMyMC4xODI1IDE1LjEwMTUgMjEgMTMuODk2MiAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDExLjc3NyAzLjc3MjUgMTMuMzczNiA1IDE0LjQ3MjJWMTYuOTI5N1pNNyAxNkg5VjIwSDdWMTZaTTE1IDE2SDE3VjIwSDE1VjE2Wk0xMSAxOUgxM1YyM0gxMVYxOVonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ0xpZ2h0IHNub3cgc2hvd2VycycsXHJcbiAgICAnTTEzIDE2LjI2OEwxNC45NjQxIDE1LjEzNEwxNS45NjQxIDE2Ljg2NkwxNCAxOEwxNS45NjQxIDE5LjEzNEwxNC45NjQxIDIwLjg2NkwxMyAxOS43MzJWMjJIMTFWMTkuNzMyTDkuMDM1OSAyMC44NjZMOC4wMzU5IDE5LjEzNEwxMCAxOEw4LjAzNTkgMTYuODY2TDkuMDM1OSAxNS4xMzRMMTEgMTYuMjY4VjE0SDEzVjE2LjI2OFpNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3WidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnTW9kZXJhdGUgb3IgaGVhdnkgc25vdyBzaG93ZXJzJyxcclxuICAgICdNMTMgMTYuMjY4TDE0Ljk2NDEgMTUuMTM0TDE1Ljk2NDEgMTYuODY2TDE0IDE4TDE1Ljk2NDEgMTkuMTM0TDE0Ljk2NDEgMjAuODY2TDEzIDE5LjczMlYyMkgxMVYxOS43MzJMOS4wMzU5IDIwLjg2Nkw4LjAzNTkgMTkuMTM0TDEwIDE4TDguMDM1OSAxNi44NjZMOS4wMzU5IDE1LjEzNEwxMSAxNi4yNjhWMTRIMTNWMTYuMjY4Wk0xNyAxOFYxNkgxNy41QzE5LjQzMyAxNiAyMSAxNC40MzMgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi42MTI0IDQuNjY5NjIgMTQuODM0OSA3IDE1LjY1ODZWMTcuNzQ4QzMuNTQ5NTUgMTYuODU5OSAxIDEzLjcyNzcgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuNTM3NiAyMC41Mzc2IDE4IDE3LjUgMThIMTdaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzJyxcclxuICAgICdNNiAxNy40MTg1QzMuMDY4MTcgMTYuMjMxNyAxIDEzLjM1NzQgMSAxMEMxIDUuNTgxNzIgNC41ODE3MiAyIDkgMkMxMi4zOTQ5IDIgMTUuMjk1OSA0LjExNDY2IDE2LjQ1NzYgNy4wOTg2NEMxNi43OTUxIDcuMDMzOSAxNy4xNDM2IDcgMTcuNSA3QzIwLjUzNzYgNyAyMyA5LjQ2MjQzIDIzIDEyLjVDMjMgMTUuMDE3NiAyMS4zMDg1IDE3LjE0IDE5IDE3Ljc5M1YxNS42NjMyQzIwLjE4MjUgMTUuMTAxNSAyMSAxMy44OTYyIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuMjIwOCA0LjIwNjYgMTQuMTU5OSA2IDE1LjE5NzNWMTcuNDE4NVpNMTAgMTdDOC44OTU0MyAxNyA4IDE2LjEwNDYgOCAxNUM4IDEzLjg5NTQgOC44OTU0MyAxMyAxMCAxM0MxMS4xMDQ2IDEzIDEyIDEzLjg5NTQgMTIgMTVDMTIgMTYuMTA0NiAxMS4xMDQ2IDE3IDEwIDE3Wk0xNSAyMEMxMy44OTU0IDIwIDEzIDE5LjEwNDYgMTMgMThDMTMgMTYuODk1NCAxMy44OTU0IDE2IDE1IDE2QzE2LjEwNDYgMTYgMTcgMTYuODk1NCAxNyAxOEMxNyAxOS4xMDQ2IDE2LjEwNDYgMjAgMTUgMjBaTTEwIDIzQzguODk1NDMgMjMgOCAyMi4xMDQ2IDggMjFDOCAxOS44OTU0IDguODk1NDMgMTkgMTAgMTlDMTEuMTA0NiAxOSAxMiAxOS44OTU0IDEyIDIxQzEyIDIyLjEwNDYgMTEuMTA0NiAyMyAxMCAyM1onXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHMnLFxyXG4gICAgJ002IDE3LjQxODVDMy4wNjgxNyAxNi4yMzE3IDEgMTMuMzU3NCAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS4wMTc2IDIxLjMwODUgMTcuMTQgMTkgMTcuNzkzVjE1LjY2MzJDMjAuMTgyNSAxNS4xMDE1IDIxIDEzLjg5NjIgMjEgMTIuNUMyMSAxMC41NjcgMTkuNDMzIDkgMTcuNSA5QzE2LjUyMDUgOSAxNS42MzUxIDkuNDAyMzIgMTQuOTk5OCAxMC4wNTA3QzE0Ljk5OTkgMTAuMDMzOCAxNSAxMC4wMTY5IDE1IDEwQzE1IDYuNjg2MjkgMTIuMzEzNyA0IDkgNEM1LjY4NjI5IDQgMyA2LjY4NjI5IDMgMTBDMyAxMi4yMjA4IDQuMjA2NiAxNC4xNTk5IDYgMTUuMTk3M1YxNy40MTg1Wk0xMCAxN0M4Ljg5NTQzIDE3IDggMTYuMTA0NiA4IDE1QzggMTMuODk1NCA4Ljg5NTQzIDEzIDEwIDEzQzExLjEwNDYgMTMgMTIgMTMuODk1NCAxMiAxNUMxMiAxNi4xMDQ2IDExLjEwNDYgMTcgMTAgMTdaTTE1IDIwQzEzLjg5NTQgMjAgMTMgMTkuMTA0NiAxMyAxOEMxMyAxNi44OTU0IDEzLjg5NTQgMTYgMTUgMTZDMTYuMTA0NiAxNiAxNyAxNi44OTU0IDE3IDE4QzE3IDE5LjEwNDYgMTYuMTA0NiAyMCAxNSAyMFpNMTAgMjNDOC44OTU0MyAyMyA4IDIyLjEwNDYgOCAyMUM4IDE5Ljg5NTQgOC44OTU0MyAxOSAxMCAxOUMxMS4xMDQ2IDE5IDEyIDE5Ljg5NTQgMTIgMjFDMTIgMjIuMTA0NiAxMS4xMDQ2IDIzIDEwIDIzWidcclxuICApO1xyXG4gIHdlYXRoZXJUeXBlcy5zZXQoXHJcbiAgICAnUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk0xMyAxNi4wMDQ4SDE2TDExIDIyLjUwNDhWMTguMDA0OEg4TDEzIDExLjVWMTYuMDA0OFonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ01vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyJyxcclxuICAgICdNMTcgMThWMTZIMTcuNUMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNi41MjA1IDkgMTUuNjM1MSA5LjQwMjMyIDE0Ljk5OTggMTAuMDUwN0MxNC45OTk5IDEwLjAzMzggMTUgMTAuMDE2OSAxNSAxMEMxNSA2LjY4NjI5IDEyLjMxMzcgNCA5IDRDNS42ODYyOSA0IDMgNi42ODYyOSAzIDEwQzMgMTIuNjEyNCA0LjY2OTYyIDE0LjgzNDkgNyAxNS42NTg2VjE3Ljc0OEMzLjU0OTU1IDE2Ljg1OTkgMSAxMy43Mjc3IDEgMTBDMSA1LjU4MTcyIDQuNTgxNzIgMiA5IDJDMTIuMzk0OSAyIDE1LjI5NTkgNC4xMTQ2NiAxNi40NTc2IDcuMDk4NjRDMTYuNzk1MSA3LjAzMzkgMTcuMTQzNiA3IDE3LjUgN0MyMC41Mzc2IDcgMjMgOS40NjI0MyAyMyAxMi41QzIzIDE1LjUzNzYgMjAuNTM3NiAxOCAxNy41IDE4SDE3Wk0xMyAxNi4wMDQ4SDE2TDExIDIyLjUwNDhWMTguMDA0OEg4TDEzIDExLjVWMTYuMDA0OFonXHJcbiAgKTtcclxuICB3ZWF0aGVyVHlwZXMuc2V0KFxyXG4gICAgJ1BhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlcicsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNMTMgMTYuMDA0OEgxNkwxMSAyMi41MDQ4VjE4LjAwNDhIOEwxMyAxMS41VjE2LjAwNDhaJ1xyXG4gICk7XHJcbiAgd2VhdGhlclR5cGVzLnNldChcclxuICAgICdNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlcicsXHJcbiAgICAnTTE3IDE4VjE2SDE3LjVDMTkuNDMzIDE2IDIxIDE0LjQzMyAyMSAxMi41QzIxIDEwLjU2NyAxOS40MzMgOSAxNy41IDlDMTYuNTIwNSA5IDE1LjYzNTEgOS40MDIzMiAxNC45OTk4IDEwLjA1MDdDMTQuOTk5OSAxMC4wMzM4IDE1IDEwLjAxNjkgMTUgMTBDMTUgNi42ODYyOSAxMi4zMTM3IDQgOSA0QzUuNjg2MjkgNCAzIDYuNjg2MjkgMyAxMEMzIDEyLjYxMjQgNC42Njk2MiAxNC44MzQ5IDcgMTUuNjU4NlYxNy43NDhDMy41NDk1NSAxNi44NTk5IDEgMTMuNzI3NyAxIDEwQzEgNS41ODE3MiA0LjU4MTcyIDIgOSAyQzEyLjM5NDkgMiAxNS4yOTU5IDQuMTE0NjYgMTYuNDU3NiA3LjA5ODY0QzE2Ljc5NTEgNy4wMzM5IDE3LjE0MzYgNyAxNy41IDdDMjAuNTM3NiA3IDIzIDkuNDYyNDMgMjMgMTIuNUMyMyAxNS41Mzc2IDIwLjUzNzYgMTggMTcuNSAxOEgxN1pNMTMgMTYuMDA0OEgxNkwxMSAyMi41MDQ4VjE4LjAwNDhIOEwxMyAxMS41VjE2LjAwNDhaJ1xyXG4gICk7XHJcblxyXG4gIHJldHVybiB3ZWF0aGVyVHlwZXMuaGFzKHdlYXRoZXJUeXBlKVxyXG4gICAgPyB3ZWF0aGVyVHlwZXMuZ2V0KHdlYXRoZXJUeXBlKVxyXG4gICAgOiAnTTE4LjUzNzQgMTkuNTY3NEMxNi43ODQ0IDIxLjA4MzEgMTQuNDk5MyAyMiAxMiAyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMkMxNy41MjI4IDIgMjIgNi40NzcxNSAyMiAxMkMyMiAxNC4xMzYxIDIxLjMzMDIgMTYuMTE1OCAyMC4xODkyIDE3Ljc0MDZMMTcgMTJIMjBDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBDMTQuMTUwMiAyMCAxNi4xMDIyIDE5LjE1MTcgMTcuNTM5OCAxNy43NzE2TDE4LjUzNzQgMTkuNTY3NFonO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlckljb25QYXRoO1xyXG4iLCJmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XHJcbiAgY29uc3QgeyBjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb24gfSA9IGRhdGE7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHRlbXBfYzogdGVtcEMsXHJcbiAgICB0ZW1wX2Y6IHRlbXBGLFxyXG4gICAgd2luZF9tcGg6IHdpbmRNcGgsXHJcbiAgICB3aW5kX2twaDogd2luZEtwaCxcclxuICAgIGZlZWxzbGlrZV9jOiBmZWVsc2xpa2VDLFxyXG4gICAgZmVlbHNsaWtlX2Y6IGZlZWxzbGlrZUYsXHJcbiAgICBsYXN0X3VwZGF0ZWQ6IGxhc3RVcGRhdGVkLFxyXG4gICAgaHVtaWRpdHlcclxuICB9ID0gY3VycmVudDtcclxuXHJcbiAgY29uc3QgeyBuYW1lIH0gPSBsb2NhdGlvbjtcclxuXHJcbiAgY29uc3QgWy4uLmRheXNdID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZERheXMgPSBkYXlzLm1hcCgoc2luZ2xlRGF5KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIGRheToge1xyXG4gICAgICAgIGNvbmRpdGlvbjogeyB0ZXh0OiBkYXlJbmZvIH0sXHJcbiAgICAgICAgYXZndGVtcF9jOiBhdmdUZW1wQyxcclxuICAgICAgICBhdmd0ZW1wX2Y6IGF2Z1RlbXBGXHJcbiAgICAgIH1cclxuICAgIH0gPSBzaW5nbGVEYXk7XHJcbiAgICByZXR1cm4geyBkYXRlLCBkYXlJbmZvLCBhdmdUZW1wQywgYXZnVGVtcEYgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaG91cjogWy4uLmhvdXJEYXRhXVxyXG4gIH0gPSBmb3JlY2FzdC5mb3JlY2FzdGRheVswXTtcclxuXHJcbiAgY29uc3QgaG91ckRldGFpbHMgPSBbXTtcclxuXHJcbiAgaG91ckRhdGEuZm9yRWFjaCgoaG91cikgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aW1lLFxyXG4gICAgICB0ZW1wX2M6IGhvdXJUZW1wQyxcclxuICAgICAgdGVtcF9mOiBob3VyVGVtcEYsXHJcbiAgICAgIGNvbmRpdGlvbjogeyB0ZXh0OiBpbmZvIH1cclxuICAgIH0gPSBob3VyO1xyXG5cclxuICAgIGhvdXJEZXRhaWxzLnB1c2goeyB0aW1lLCBob3VyVGVtcEMsIGhvdXJUZW1wRiwgaW5mbyB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coJ0hvdXJEZXRhaWxzIHdlYXRoZXIgZm4nLCBob3VyRGV0YWlscyk7XHJcblxyXG4gIGNvbnN0IGRheURhdGEgPSB7XHJcbiAgICB0ZW1wQyxcclxuICAgIHRlbXBGLFxyXG4gICAgZmVlbHNsaWtlQyxcclxuICAgIGZlZWxzbGlrZUYsXHJcbiAgICB3aW5kS3BoLFxyXG4gICAgd2luZE1waCxcclxuICAgIGxhc3RVcGRhdGVkLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICBuYW1lXHJcbiAgfTtcclxuICAvLyBjb25zb2xlLmxvZygnRGF5IHdlYXRoZXIgZm4nLCBkYXlEYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgaG91ckRldGFpbHMsIGRheURhdGEsIHByb2Nlc3NlZERheXMgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NTVjODdlYTA4NWI2NDJiMDkwMDExMzcyMTIzMDIwOCZxPSR7bG9jYXRpb259JmRheXM9M2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cclxuICAgICk7XHJcbiAgICBjb25zdCB7IGhvdXJEZXRhaWxzLCBkYXlEYXRhLCBwcm9jZXNzZWREYXlzIH0gPSBwcm9jZXNzRGF0YShcclxuICAgICAgYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgaG91ckRldGFpbHMsIGRheURhdGEsIHByb2Nlc3NlZERheXMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuSGVhZGVyKCk7XHJcbkFwcCgpO1xyXG5Gb290ZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9