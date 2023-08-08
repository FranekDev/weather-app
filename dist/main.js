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
        console.log('click');
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
// const iconsPaths = new Map();
// iconsPaths.set('a' || 'b', 'test');
// console.log(iconsPaths.get('b'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQztBQU1yQjtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw0Q0FBNEM7QUFDdEQ7QUFDQTtBQUNBLEVBQUUsdURBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMEJBQTBCO0FBQ3BDO0FBQ0E7QUFDQSxFQUFFLG1EQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNDQUFzQyxRQUFRLG9EQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMERBQXFCO0FBQzNCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzQ0FBc0MsUUFBUSxvREFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdURBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwREFBcUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3SW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0N0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEl0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JSQTtBQUNBLFVBQVUsOEJBQThCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsTUFBTTtBQUNOO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLFFBQVE7QUFDUjtBQUNBLFlBQVksc0NBQXNDO0FBQ2xEO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNqRjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDZTtBQUNOO0FBQ007QUFDekM7QUFDQSw4REFBTTtBQUNOLDJEQUFHO0FBQ0gsOERBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vd2VhdGhlcic7XHJcbmltcG9ydCB7XHJcbiAgc2hvd0N1cnJlbnRXZWF0aGVyLFxyXG4gIGFkZGl0aW9uYWxXZWF0aGVySW5mbyxcclxuICBzaG93SG91cmx5Rm9yZWNhc3QsXHJcbiAgc2hvd0RheVdlYXRoZXJcclxufSBmcm9tICcuL1VJJztcclxuXHJcbmNvbnN0IGZvcm1hdEhvdXJXZWF0aGVyID0gKHdlYXRoZXIsIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBjb250YWluZXI7XHJcblxyXG4gIGNvbnN0IHsgdGltZTogZm9yZWNhc3RUaW1lLCBob3VyVGVtcEM6IHRlbXAsIGluZm8gfSA9IHdlYXRoZXI7XHJcbiAgY29uc3QgZm9ybWF0ZWRUaW1lID0gZm9yZWNhc3RUaW1lLnNwbGl0KCcgJylbMV07XHJcblxyXG4gIHNob3dIb3VybHlGb3JlY2FzdChlbGVtZW50LCBmb3JtYXRlZFRpbWUsIHRlbXAsIGluZm8pO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0RheXNGb3JlY2FzdCA9IChjb250YWluZXIsIGRhdGEpID0+IHtcclxuICBjb25zdCB7IGRhdGUsIGF2Z1RlbXBDLCBkYXlJbmZvIH0gPSBkYXRhO1xyXG4gIGNvbnN0IGRheURhdGUgPSBkYXRlLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLicpLnNsaWNlKDAsIDUpO1xyXG5cclxuICBzaG93RGF5V2VhdGhlcihjb250YWluZXIsIGRheURhdGUsIGF2Z1RlbXBDLCBkYXlJbmZvKTtcclxufTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1pbnB1dCcpO1xyXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckRhdGEuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1kYXRhJyk7XHJcbiAgY29uc3QgZGF5Rm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkYXlGb3JlY2FzdC5jbGFzc0xpc3QuYWRkKCdkYXktZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluV2VhdGhlci5jbGFzc0xpc3QuYWRkKCdtYWluLXdlYXRoZXInKTtcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtYWluRGF0YS5jbGFzc0xpc3QuYWRkKCdtYWluLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgYWRkaXRpb25hbERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRpdGlvbmFsRGF0YS5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWRhdGEnKTtcclxuXHJcbiAgY29uc3QgaG91cnNGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJzRm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnaG91cnMtZm9yZWNhc3QnKTtcclxuXHJcbiAgY29uc3QgaG91cmx5V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJseVdlYXRoZXIuY2xhc3NMaXN0LmFkZCgnaG91cmx5LXdlYXRoZXInKTtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS1uYW1lJyk7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1kYXRlJyk7XHJcblxyXG4gIG1haW5EYXRhLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRDaXR5ID0gJ1Bvem5hbic7XHJcbiAgICAgIGNvbnN0IHsgaG91ckRldGFpbHMsIGRheURhdGEsIHByb2Nlc3NlZERheXMgfSA9IGF3YWl0IGdldFdlYXRoZXIoXHJcbiAgICAgICAgZGVmYXVsdENpdHlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGRheUZvcmVjYXN0LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIHByb2Nlc3NlZERheXMuZm9yRWFjaCgoZGF5KSA9PiBzaG93RGF5c0ZvcmVjYXN0KGRheUZvcmVjYXN0LCBkYXkpKTtcclxuXHJcbiAgICAgIHNob3dDdXJyZW50V2VhdGhlcih3ZWF0aGVyQ29udGFpbmVyLCBkYXlEYXRhLnRlbXBDLCAnU3VubnknKTtcclxuXHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGxhc3RVcGRhdGVkOiB0aW1lLFxyXG4gICAgICAgIGZlZWxzbGlrZUMsXHJcbiAgICAgICAgd2luZEtwaCxcclxuICAgICAgICBodW1pZGl0eVxyXG4gICAgICB9ID0gZGF5RGF0YTtcclxuXHJcbiAgICAgIGNpdHlOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGUgPSB0aW1lLnNwbGl0KCcgJylbMF0uc3BsaXQoJy0nKS5yZXZlcnNlKCkuam9pbignLicpO1xyXG4gICAgICBjdXJyZW50RGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XHJcblxyXG4gICAgICBhZGRpdGlvbmFsV2VhdGhlckluZm8oYWRkaXRpb25hbERhdGEsIGZlZWxzbGlrZUMsIHdpbmRLcGgsIGh1bWlkaXR5KTtcclxuICAgICAgaG91cmx5V2VhdGhlci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBob3VyRGV0YWlscy5mb3JFYWNoKChob3VyKSA9PiBmb3JtYXRIb3VyV2VhdGhlcihob3VyLCBob3VybHlXZWF0aGVyKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGNpdHkudmFsdWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2l0eVZhbHVlID0gY2l0eS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCA/IGNpdHkudmFsdWUgOiAnUG96bmFuJztcclxuICAgICAgY29uc3QgeyBob3VyRGV0YWlscywgZGF5RGF0YSwgcHJvY2Vzc2VkRGF5cyB9ID0gYXdhaXQgZ2V0V2VhdGhlcihcclxuICAgICAgICBjaXR5VmFsdWVcclxuICAgICAgKTtcclxuICAgICAgY2l0eS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgZGF5Rm9yZWNhc3QudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgcHJvY2Vzc2VkRGF5cy5mb3JFYWNoKChkYXkpID0+IHNob3dEYXlzRm9yZWNhc3QoZGF5Rm9yZWNhc3QsIGRheSkpO1xyXG5cclxuICAgICAgc2hvd0N1cnJlbnRXZWF0aGVyKHdlYXRoZXJDb250YWluZXIsIGRheURhdGEudGVtcEMsICdTdW5ueScpO1xyXG5cclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHRpbWUsXHJcbiAgICAgICAgZmVlbHNsaWtlQyxcclxuICAgICAgICB3aW5kS3BoLFxyXG4gICAgICAgIGh1bWlkaXR5XHJcbiAgICAgIH0gPSBkYXlEYXRhO1xyXG5cclxuICAgICAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZSA9IHRpbWUuc3BsaXQoJyAnKVswXS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcuJyk7XHJcbiAgICAgIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcclxuXHJcbiAgICAgIGFkZGl0aW9uYWxEYXRhLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIGFkZGl0aW9uYWxXZWF0aGVySW5mbyhhZGRpdGlvbmFsRGF0YSwgZmVlbHNsaWtlQywgd2luZEtwaCwgaHVtaWRpdHkpO1xyXG5cclxuICAgICAgaG91cmx5V2VhdGhlci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICBob3VyRGV0YWlscy5mb3JFYWNoKChob3VyKSA9PiBmb3JtYXRIb3VyV2VhdGhlcihob3VyLCBob3VybHlXZWF0aGVyKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1haW5EYXRhLmFwcGVuZENoaWxkKGRheUZvcmVjYXN0KTtcclxuXHJcbiAgbWFpbldlYXRoZXIuYXBwZW5kQ2hpbGQobWFpbkRhdGEpO1xyXG4gIG1haW5XZWF0aGVyLmFwcGVuZENoaWxkKGFkZGl0aW9uYWxEYXRhKTtcclxuXHJcbiAgd2VhdGhlckRhdGEuYXBwZW5kQ2hpbGQobWFpbldlYXRoZXIpO1xyXG4gIGhvdXJzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5V2VhdGhlcik7XHJcbiAgd2VhdGhlckRhdGEuYXBwZW5kQ2hpbGQoaG91cnNGb3JlY2FzdCk7XHJcblxyXG4gIG1haW4uYXBwZW5kQ2hpbGQod2VhdGhlckRhdGEpO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJjb25zdCBzaG93R2l0aHViTG9nbyA9ICgpID0+IHtcclxuICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcclxuICAgICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXHJcbiAgICAncGF0aCdcclxuICApO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjNTE1MTUxJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMi4wMDEgMkM2LjQ3NTk4IDIgMi4wMDA5OCA2LjQ3NSAyLjAwMDk4IDEyQzIuMDAwOTggMTYuNDI1IDQuODYzNDggMjAuMTYyNSA4LjgzODQ4IDIxLjQ4NzVDOS4zMzg0OCAyMS41NzUgOS41MjU5OCAyMS4yNzUgOS41MjU5OCAyMS4wMTI1QzkuNTI1OTggMjAuNzc1IDkuNTEzNDggMTkuOTg3NSA5LjUxMzQ4IDE5LjE1QzcuMDAwOTggMTkuNjEyNSA2LjM1MDk4IDE4LjUzNzUgNi4xNTA5OCAxNy45NzVDNi4wMzg0OCAxNy42ODc1IDUuNTUwOTggMTYuOCA1LjEyNTk4IDE2LjU2MjVDNC43NzU5OCAxNi4zNzUgNC4yNzU5OCAxNS45MTI1IDUuMTEzNDggMTUuOUM1LjkwMDk4IDE1Ljg4NzUgNi40NjM0OCAxNi42MjUgNi42NTA5OCAxNi45MjVDNy41NTA5OCAxOC40Mzc1IDguOTg4NDggMTguMDEyNSA5LjU2MzQ4IDE3Ljc1QzkuNjUwOTggMTcuMSA5LjkxMzQ4IDE2LjY2MjUgMTAuMjAxIDE2LjQxMjVDNy45NzU5OCAxNi4xNjI1IDUuNjUwOTggMTUuMyA1LjY1MDk4IDExLjQ3NUM1LjY1MDk4IDEwLjM4NzUgNi4wMzg0OCA5LjQ4NzUgNi42NzU5OCA4Ljc4NzVDNi41NzU5OCA4LjUzNzUgNi4yMjU5OCA3LjUxMjUgNi43NzU5OCA2LjEzNzVDNi43NzU5OCA2LjEzNzUgNy42MTM0OCA1Ljg3NSA5LjUyNTk4IDcuMTYyNUMxMC4zMjYgNi45Mzc1IDExLjE3NiA2LjgyNSAxMi4wMjYgNi44MjVDMTIuODc2IDYuODI1IDEzLjcyNiA2LjkzNzUgMTQuNTI2IDcuMTYyNUMxNi40Mzg1IDUuODYyNSAxNy4yNzYgNi4xMzc1IDE3LjI3NiA2LjEzNzVDMTcuODI2IDcuNTEyNSAxNy40NzYgOC41Mzc1IDE3LjM3NiA4Ljc4NzVDMTguMDEzNSA5LjQ4NzUgMTguNDAxIDEwLjM3NSAxOC40MDEgMTEuNDc1QzE4LjQwMSAxNS4zMTI1IDE2LjA2MzUgMTYuMTYyNSAxMy44Mzg1IDE2LjQxMjVDMTQuMjAxIDE2LjcyNSAxNC41MTM1IDE3LjMyNSAxNC41MTM1IDE4LjI2MjVDMTQuNTEzNSAxOS42IDE0LjUwMSAyMC42NzUgMTQuNTAxIDIxLjAxMjVDMTQuNTAxIDIxLjI3NSAxNC42ODg1IDIxLjU4NzUgMTUuMTg4NSAyMS40ODc1QzE5LjI1OSAyMC4xMTMzIDIxLjk5OTkgMTYuMjk2MyAyMi4wMDEgMTJDMjIuMDAxIDYuNDc1IDE3LjUyNiAyIDEyLjAwMSAyWidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cclxuICBjb25zdCBmb290ZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdGV4dC50ZXh0Q29udGVudCA9ICdDcmVhdGVkIEJ5IEZyYW5la0Rldic7XHJcblxyXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChzaG93R2l0aHViTG9nbygpKTtcclxuICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0ZyYW5la0Rldi93ZWF0aGVyLWFwcCc7XHJcbiAgZ2l0aHViTGluay50YXJnZXQgPSAnYmxhbmsnO1xyXG5cclxuICBmb290ZXJJbmZvLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gIGZvb3RlckluZm8uYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckluZm8pO1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImNvbnN0IHNlYXJjaEljb25TdmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzUxNTE1MScpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNMTguMDMxIDE2LjYxNjhMMjIuMzEzNyAyMC44OTk1TDIwLjg5OTUgMjIuMzEzN0wxNi42MTY4IDE4LjAzMUMxNS4wNzY5IDE5LjI2MyAxMy4xMjQgMjAgMTEgMjBDNi4wMzIgMjAgMiAxNS45NjggMiAxMUMyIDYuMDMyIDYuMDMyIDIgMTEgMkMxNS45NjggMiAyMCA2LjAzMiAyMCAxMUMyMCAxMy4xMjQgMTkuMjYzIDE1LjA3NjkgMTguMDMxIDE2LjYxNjhaTTE2LjAyNDcgMTUuODc0OEMxNy4yNDc1IDE0LjYxNDYgMTggMTIuODk1NiAxOCAxMUMxOCA3LjEzMjUgMTQuODY3NSA0IDExIDRDNy4xMzI1IDQgNCA3LjEzMjUgNCAxMUM0IDE0Ljg2NzUgNy4xMzI1IDE4IDExIDE4QzEyLjg5NTYgMTggMTQuNjE0NiAxNy4yNDc1IDE1Ljg3NDggMTYuMDI0N0wxNi4wMjQ3IDE1Ljg3NDhaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcblxyXG4gIGNvbnN0IGJsYW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYmxhbmtEaXYuY2xhc3NMaXN0LmFkZCgnZ2hvc3QnKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmxhbmtEaXYpO1xyXG5cclxuICBjb25zdCBjaXR5RGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNpdHlEYXRhLmNsYXNzTGlzdC5hZGQoJ2NpdHktZGF0YScpO1xyXG5cclxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdjaXR5LW5hbWUnKTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtZGF0ZScpO1xyXG5cclxuICBjaXR5RGF0YS5hcHBlbmRDaGlsZChjaXR5TmFtZSk7XHJcbiAgY2l0eURhdGEuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG4gIGNvbnN0IGZvcnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2l0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2NpdHktaW5wdXQnKTtcclxuICBjaXR5SW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICBjaXR5SW5wdXQucGxhY2Vob2xkZXIgPSAnQ2l0eSc7XHJcblxyXG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG5cclxuICBzZWFyY2hJY29uLmFwcGVuZENoaWxkKHNlYXJjaEljb25TdmcoKSk7XHJcbiAgc2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xyXG5cclxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2l0eUlucHV0KTtcclxuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcclxuXHJcbiAgZm9ydW0uYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcclxuXHJcbiAgY29uc3QgbW9iaWxlU2VhcmNoVHJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICBtb2JpbGVTZWFyY2hUcmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS1zZWFyY2gtdHJpZ2dlcicpO1xyXG4gIG1vYmlsZVNlYXJjaFRyaWdnZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvblN2ZygpKTtcclxuXHJcbiAgbW9iaWxlU2VhcmNoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICBpZiAoZm9ydW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBmb3J1bS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9LCAxMjUpO1xyXG4gICAgICBmb3J1bS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgZm9ydW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgIGNpdHlEYXRhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgY2l0eURhdGEuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZm9ydW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH0sIDEyNSk7XHJcbiAgICAgIGZvcnVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgZm9ydW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgY2l0eURhdGEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICBjaXR5RGF0YS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5zY3JlZW4ud2lkdGggPD0gNjAwKSB7XHJcbiAgICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgICAgICBpZiAoZm9ydW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcnVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB9LCAxMjUpO1xyXG4gICAgICAgICAgZm9ydW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgZm9ydW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcclxuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgY2l0eURhdGEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgY2l0eURhdGEuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZm9ydW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICB9LCAxMjUpO1xyXG4gICAgICAgICAgZm9ydW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgZm9ydW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgY2l0eURhdGEuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgICAgY2l0eURhdGEuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjaXR5RGF0YSk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGZvcnVtKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobW9iaWxlU2VhcmNoVHJpZ2dlcik7XHJcblxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiLy8gY29uc3QgaWNvbnNQYXRocyA9IG5ldyBNYXAoKTtcclxuLy8gaWNvbnNQYXRocy5zZXQoJ2EnIHx8ICdiJywgJ3Rlc3QnKTtcclxuLy8gY29uc29sZS5sb2coaWNvbnNQYXRocy5nZXQoJ2InKSk7XHJcblxyXG5jb25zdCBnZXRXZWF0aGVySWNvbiA9ICh3ZWF0aGVyKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZygnV2VhdGhlciBJY29uOicsIHdlYXRoZXIpO1xyXG5cclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnZmlsbCcsICcjODM3OTcwJyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICcnKTtcclxuICBpY29uU3ZnLmNsYXNzTGlzdC5hZGQoJ3RyYXNoX2ljb24nKTtcclxuXHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxyXG4gICAgJ2QnLFxyXG4gICAgJ00xMiAyQzE1Ljg2NiAyIDE5IDUuMTM0MDEgMTkgOUMxOSA5LjExMzUxIDE4Ljk5NzMgOS4yMjYzOSAxOC45OTIgOS4zMzg1N0MyMS4zMjY1IDEwLjE2IDIzIDEyLjM4NDYgMjMgMTVDMjMgMTguMzEzNyAyMC4zMTM3IDIxIDE3IDIxSDdDMy42ODYyOSAyMSAxIDE4LjMxMzcgMSAxNUMxIDEyLjM4NDYgMi42NzM0NiAxMC4xNiA1LjAwODA0IDkuMzM4NTdDNS4wMDI3IDkuMjI2MzkgNSA5LjExMzUxIDUgOUM1IDUuMTM0MDEgOC4xMzQwMSAyIDEyIDJaTTEyIDRDOS4yMzg1OCA0IDcgNi4yMzg1OCA3IDlDNyA5LjA4MTQ3IDcuMDAxOTMgOS4xNjI2MyA3LjAwNTc4IDkuMjQzNDRMNy4wNzY2MiAxMC43MzA5TDUuNjcxODMgMTEuMjI1MkM0LjA4NDQgMTEuNzgzNyAzIDEzLjI4ODkgMyAxNUMzIDE3LjIwOTEgNC43OTA4NiAxOSA3IDE5SDE3QzE5LjIwOTEgMTkgMjEgMTcuMjA5MSAyMSAxNUMyMSAxMi43OSAxOS4yMSAxMSAxNyAxMUMxNS4yMzMgMTEgMTMuNzMzNyAxMi4xNDU3IDEzLjIwNDIgMTMuNzM0N0wxMS4zMDY0IDEzLjEwMjFDMTIuMTAwNSAxMC43MTg1IDE0LjM1IDkgMTcgOUMxNyA2LjIzODU4IDE0Ljc2MTQgNCAxMiA0WidcclxuICApO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XHJcblxyXG4gIHJldHVybiBpY29uU3ZnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0RGVncmVlc0ljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNNC41IDEwQzIuNTY3IDEwIDEgOC40MzMgMSA2LjVDMSA0LjU2NyAyLjU2NyAzIDQuNSAzQzYuNDMzIDMgOCA0LjU2NyA4IDYuNUM4IDguNDMzIDYuNDMzIDEwIDQuNSAxMFpNNC41IDhDNS4zMjg0MyA4IDYgNy4zMjg0MyA2IDYuNUM2IDUuNjcxNTcgNS4zMjg0MyA1IDQuNSA1QzMuNjcxNTcgNSAzIDUuNjcxNTcgMyA2LjVDMyA3LjMyODQzIDMuNjcxNTcgOCA0LjUgOFpNMjIgMTBIMjBDMjAgNy43OTA4NiAxOC4yMDkxIDYgMTYgNkMxMy43OTA5IDYgMTIgNy43OTA4NiAxMiAxMFYxNUMxMiAxNy4yMDkxIDEzLjc5MDkgMTkgMTYgMTlDMTguMjA5MSAxOSAyMCAxNy4yMDkxIDIwIDE1SDIyQzIyIDE4LjMxMzcgMTkuMzEzNyAyMSAxNiAyMUMxMi42ODYzIDIxIDEwIDE4LjMxMzcgMTAgMTVWMTBDMTAgNi42ODYyOSAxMi42ODYzIDQgMTYgNEMxOS4zMTM3IDQgMjIgNi42ODYyOSAyMiAxMFonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IGdldFdpbmRJY29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTEwLjUgMTdINFYxNUgxMC41QzEyLjQzMyAxNSAxNCAxNi41NjcgMTQgMTguNUMxNCAyMC40MzMgMTIuNDMzIDIyIDEwLjUgMjJDOC45OTk1NyAyMiA3LjcxOTY2IDIxLjA1NTkgNy4yMjE5NiAxOS43MjkzTDkuMDk1MTMgMTkuMDI2OEM5LjMwODQzIDE5LjU5NTQgOS44NTY5NiAyMCAxMC41IDIwQzExLjMyODQgMjAgMTIgMTkuMzI4NCAxMiAxOC41QzEyIDE3LjY3MTYgMTEuMzI4NCAxNyAxMC41IDE3Wk01IDExSDE4LjVDMjAuNDMzIDExIDIyIDEyLjU2NyAyMiAxNC41QzIyIDE2LjQzMyAyMC40MzMgMTggMTguNSAxOEMxNi45OTk2IDE4IDE1LjcxOTcgMTcuMDU1OSAxNS4yMjIgMTUuNzI5M0wxNy4wOTUxIDE1LjAyNjhDMTcuMzA4NCAxNS41OTU0IDE3Ljg1NyAxNiAxOC41IDE2QzE5LjMyODQgMTYgMjAgMTUuMzI4NCAyMCAxNC41QzIwIDEzLjY3MTYgMTkuMzI4NCAxMyAxOC41IDEzSDVDMy4zNDMxNSAxMyAyIDExLjY1NjkgMiAxMEMyIDguMzQzMTUgMy4zNDMxNSA3IDUgN0gxMy41QzE0LjMyODQgNyAxNSA2LjMyODQzIDE1IDUuNUMxNSA0LjY3MTU3IDE0LjMyODQgNCAxMy41IDRDMTIuODU3IDQgMTIuMzA4NCA0LjQwNDYzIDEyLjA5NTEgNC45NzMxN0wxMC4yMjIgNC4yNzA3M0MxMC43MTk3IDIuOTQ0MTQgMTEuOTk5NiAyIDEzLjUgMkMxNS40MzMgMiAxNyAzLjU2NyAxNyA1LjVDMTcgNy40MzMgMTUuNDMzIDkgMTMuNSA5SDVDNC40NDc3MiA5IDQgOS40NDc3MiA0IDEwQzQgMTAuNTUyMyA0LjQ0NzcyIDExIDUgMTFaJ1xyXG4gICk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMCcpO1xyXG5cclxuICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcclxuXHJcbiAgcmV0dXJuIGljb25Tdmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRIdW1pZGl0eUljb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgY29uc3QgaWNvblBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXHJcbiAgICAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxyXG4gICAgJ3BhdGgnXHJcbiAgKTtcclxuXHJcbiAgaWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnIzgzNzk3MCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCAnJyk7XHJcbiAgaWNvblN2Zy5jbGFzc0xpc3QuYWRkKCd0cmFzaF9pY29uJyk7XHJcblxyXG4gIGljb25QYXRoLnNldEF0dHJpYnV0ZShcclxuICAgICdkJyxcclxuICAgICdNNy4wNTAyNSA4LjA0NjczTDEyIDMuMDk2OThMMTYuOTQ5NyA4LjA0NjczQzE5LjY4MzQgMTAuNzgwNCAxOS42ODM0IDE1LjIxMjYgMTYuOTQ5NyAxNy45NDYyQzE0LjIxNjEgMjAuNjc5OSA5Ljc4MzkyIDIwLjY3OTkgNy4wNTAyNSAxNy45NDYyQzQuMzE2NTggMTUuMjEyNiA0LjMxNjU4IDEwLjc4MDQgNy4wNTAyNSA4LjA0NjczWk0xOC4zNjQgNi42MzI1MkwxMiAwLjI2ODU1NUw1LjYzNjA0IDYuNjMyNTJDMi4xMjEzMiAxMC4xNDcyIDIuMTIxMzIgMTUuODQ1NyA1LjYzNjA0IDE5LjM2MDRDOS4xNTA3NiAyMi44NzUyIDE0Ljg0OTIgMjIuODc1MiAxOC4zNjQgMTkuMzYwNEMyMS44Nzg3IDE1Ljg0NTcgMjEuODc4NyAxMC4xNDcyIDE4LjM2NCA2LjYzMjUyWk0xNi4yNDI3IDEwLjE3MTRMMTQuODI4NSA4Ljc1NzE4TDcuNzU3NCAxNS44MjgyTDkuMTcxNjEgMTcuMjQyNUwxNi4yNDI3IDEwLjE3MTRaTTguMTEwOTUgMTEuMjMyQzguNjk2NzQgMTEuODE3OCA5LjY0NjQ4IDExLjgxNzggMTAuMjMyMyAxMS4yMzJDMTAuODE4MSAxMC42NDYzIDEwLjgxODEgOS42OTY1MiAxMC4yMzIzIDkuMTEwNzNDOS42NDY0OCA4LjUyNDk0IDguNjk2NzQgOC41MjQ5NCA4LjExMDk1IDkuMTEwNzNDNy41MjUxNiA5LjY5NjUyIDcuNTI1MTYgMTAuNjQ2MyA4LjExMDk1IDExLjIzMlpNMTUuODg5MSAxNi44ODg5QzE1LjMwMzMgMTcuNDc0NyAxNC4zNTM2IDE3LjQ3NDcgMTMuNzY3OCAxNi44ODg5QzEzLjE4MiAxNi4zMDMxIDEzLjE4MiAxNS4zNTM0IDEzLjc2NzggMTQuNzY3NkMxNC4zNTM2IDE0LjE4MTggMTUuMzAzMyAxNC4xODE4IDE1Ljg4OTEgMTQuNzY3NkMxNi40NzQ5IDE1LjM1MzQgMTYuNDc0OSAxNi4zMDMxIDE1Ljg4OTEgMTYuODg4OVonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJJY29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcclxuICAgICdwYXRoJ1xyXG4gICk7XHJcblxyXG4gIGljb25Tdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJyM4Mzc5NzAnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcclxuICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJycpO1xyXG4gIGljb25TdmcuY2xhc3NMaXN0LmFkZCgndHJhc2hfaWNvbicpO1xyXG5cclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAnZCcsXHJcbiAgICAnTTQgMjJDNCAxNy41ODE3IDcuNTgxNzIgMTQgMTIgMTRDMTYuNDE4MyAxNCAyMCAxNy41ODE3IDIwIDIySDE4QzE4IDE4LjY4NjMgMTUuMzEzNyAxNiAxMiAxNkM4LjY4NjI5IDE2IDYgMTguNjg2MyA2IDIySDRaTTEyIDEzQzguNjg1IDEzIDYgMTAuMzE1IDYgN0M2IDMuNjg1IDguNjg1IDEgMTIgMUMxNS4zMTUgMSAxOCAzLjY4NSAxOCA3QzE4IDEwLjMxNSAxNS4zMTUgMTMgMTIgMTNaTTEyIDExQzE0LjIxIDExIDE2IDkuMjEgMTYgN0MxNiA0Ljc5IDE0LjIxIDMgMTIgM0M5Ljc5IDMgOCA0Ljc5IDggN0M4IDkuMjEgOS43OSAxMSAxMiAxMVonXHJcbiAgKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1saW5lY2FwJywgJ3JvdW5kJyk7XHJcbiAgaWNvblBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKTtcclxuICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcwJyk7XHJcblxyXG4gIGljb25TdmcuYXBwZW5kQ2hpbGQoaWNvblBhdGgpO1xyXG5cclxuICByZXR1cm4gaWNvblN2ZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93Q3VycmVudFdlYXRoZXIgPSAod2VhdGhlckNvbnRhaW5lciwgdGVtcCwgY29uZGl0aW9uKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudCA9IHdlYXRoZXJDb250YWluZXI7XHJcbiAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXItY29udGFpbmVyX19pY29uJyk7XHJcbiAgd2VhdGhlckljb24uYXBwZW5kQ2hpbGQoZ2V0V2VhdGhlckljb24oY29uZGl0aW9uKSk7XHJcblxyXG4gIGNvbnN0IHRlbXBJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcEluZm8uY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXJfX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdGVtcFRleHQudGV4dENvbnRlbnQgPSB0ZW1wO1xyXG5cclxuICBjb25zdCBkZWdyZWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGVncmVlSWNvbi5jbGFzc0xpc3QuYWRkKCd3ZWF0ZXRoZXItY29udGFpbmVyX19kZWdyZWUnKTtcclxuICBkZWdyZWVJY29uLmFwcGVuZENoaWxkKGdldERlZ3JlZXNJY29uKCkpO1xyXG5cclxuICB0ZW1wSW5mby5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQoZGVncmVlSWNvbik7XHJcblxyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEluZm8pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dEYXlXZWF0aGVyID0gKGNvbnRhaW5lciwgZGF0ZVRleHQsIHRlbXAsIGNvbmRpdGlvbikgPT4ge1xyXG4gIGNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB3ZWF0aGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXJfX2RhdGUnKTtcclxuICBkYXRlLnRleHRDb250ZW50ID0gZGF0ZVRleHQ7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZCgnZGF5LWNvbnRhaW5lcl9faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZENoaWxkKGdldFdlYXRoZXJJY29uKGNvbmRpdGlvbikpO1xyXG5cclxuICBjb25zdCB0ZW1wSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXBJbmZvLmNsYXNzTGlzdC5hZGQoJ2RheS1jb250YWluZXJfX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgdGVtcFRleHQudGV4dENvbnRlbnQgPSB0ZW1wO1xyXG5cclxuICBjb25zdCBkZWdyZWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGVncmVlSWNvbi5jbGFzc0xpc3QuYWRkKCdkYXktY29udGFpbmVyX19kZWdyZWUnKTtcclxuICBkZWdyZWVJY29uLmFwcGVuZENoaWxkKGdldERlZ3JlZXNJY29uKCkpO1xyXG5cclxuICB0ZW1wSW5mby5hcHBlbmRDaGlsZCh0ZW1wVGV4dCk7XHJcbiAgdGVtcEluZm8uYXBwZW5kQ2hpbGQoZGVncmVlSWNvbik7XHJcblxyXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XHJcbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wSW5mbyk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93SG91ckZvcmVjYXN0ID0gKCkgPT4ge307XHJcblxyXG5leHBvcnQgY29uc3QgdGhyZWVEYXlXZWF0aGVyID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gIHNob3dEYXlXZWF0aGVyKGNvbnRhaW5lcik7XHJcbiAgc2hvd0RheVdlYXRoZXIoY29udGFpbmVyKTtcclxuICBzaG93RGF5V2VhdGhlcihjb250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGl0aW9uYWxXZWF0aGVySW5mbyA9IChcclxuICBjb250YWluZXIsXHJcbiAgZmVlbHMsXHJcbiAgd2luZCxcclxuICBodW1pZGl0eVZhbHVlXHJcbikgPT4ge1xyXG4gIGNvbnN0IGFkZGl0aW9uYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkaXRpb25hbEluZm8uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1pbmZvJyk7XHJcblxyXG4gIGNvbnN0IGZlZWxzTGlrZVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBmZWVsc0xpa2VUZW1wLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzLWxpa2UnKTtcclxuXHJcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgnZmVlbHMtbGlrZV9fdGVtcCcpO1xyXG5cclxuICBjb25zdCB0ZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICB0ZW1wVGV4dC5jbGFzc0xpc3QuYWRkKCdmZWVscy1saWtlX190ZXh0Jyk7XHJcblxyXG4gIHRlbXBUZXh0LnRleHRDb250ZW50ID0gZmVlbHM7XHJcbiAgZmVlbHNMaWtlVGVtcC5hcHBlbmRDaGlsZChnZXRVc2VySWNvbigpKTtcclxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBUZXh0KTtcclxuICB0ZW1wLmFwcGVuZENoaWxkKGdldERlZ3JlZXNJY29uKCkpO1xyXG4gIGZlZWxzTGlrZVRlbXAuYXBwZW5kQ2hpbGQodGVtcCk7XHJcblxyXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdpbmRTcGVlZC5jbGFzc0xpc3QuYWRkKCd3aW5kLXNwZWVkJyk7XHJcblxyXG4gIGNvbnN0IHdpbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHdpbmRUZXh0LmNsYXNzTGlzdC5hZGQoJ3dpbmQtc3BlZWRfX3RleHQnKTtcclxuXHJcbiAgd2luZFRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5kfSBrbS9oYDtcclxuICB3aW5kU3BlZWQuYXBwZW5kQ2hpbGQoZ2V0V2luZEljb24oKSk7XHJcbiAgd2luZFNwZWVkLmFwcGVuZENoaWxkKHdpbmRUZXh0KTtcclxuXHJcbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xyXG5cclxuICBjb25zdCBodW1pZGl0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHlfX3RleHQnKTtcclxuXHJcbiAgaHVtaWRpdHlUZXh0LnRleHRDb250ZW50ID0gYCR7aHVtaWRpdHlWYWx1ZX0lYDtcclxuICBodW1pZGl0eS5hcHBlbmRDaGlsZChnZXRIdW1pZGl0eUljb24oKSk7XHJcbiAgaHVtaWRpdHkuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUZXh0KTtcclxuXHJcbiAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGVtcCk7XHJcbiAgYWRkaXRpb25hbEluZm8uYXBwZW5kQ2hpbGQod2luZFNwZWVkKTtcclxuICBhZGRpdGlvbmFsSW5mby5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRpdGlvbmFsSW5mbyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd0hvdXJseUZvcmVjYXN0ID0gKFxyXG4gIGNvbnRhaW5lcixcclxuICB0aW1lVGV4dCxcclxuICB0ZW1wVGV4dCxcclxuICB3ZWF0aGVyVHlwZVxyXG4pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZygnV2VhdGhlciB0eXBlOicsIHdlYXRoZXJUeXBlKTtcclxuICBjb25zdCBob3VySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRpbWUuY2xhc3NMaXN0LmFkZCgnaG91ci1pbmZvX190aW1lJyk7XHJcbiAgdGltZS50ZXh0Q29udGVudCA9IHRpbWVUZXh0O1xyXG5cclxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2hvdXItaW5mb19faWNvbicpO1xyXG4gIHdlYXRoZXJJY29uLmFwcGVuZChnZXRXZWF0aGVySWNvbih3ZWF0aGVyVHlwZSkpO1xyXG5cclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCdob3VyLWluZm9fX3RlbXAnKTtcclxuXHJcbiAgY29uc3QgdGVtcFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIHRlbXBWYWx1ZS50ZXh0Q29udGVudCA9IHRlbXBUZXh0O1xyXG5cclxuICB0ZW1wLmFwcGVuZENoaWxkKHRlbXBWYWx1ZSk7XHJcbiAgdGVtcC5hcHBlbmRDaGlsZChnZXREZWdyZWVzSWNvbigpKTtcclxuXHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQodGltZSk7XHJcbiAgaG91ckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xyXG4gIGhvdXJJbmZvLmFwcGVuZENoaWxkKHRlbXApO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG91ckluZm8pO1xyXG59O1xyXG4iLCJmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XHJcbiAgY29uc3QgeyBjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb24gfSA9IGRhdGE7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHRlbXBfYzogdGVtcEMsXHJcbiAgICB0ZW1wX2Y6IHRlbXBGLFxyXG4gICAgd2luZF9tcGg6IHdpbmRNcGgsXHJcbiAgICB3aW5kX2twaDogd2luZEtwaCxcclxuICAgIGZlZWxzbGlrZV9jOiBmZWVsc2xpa2VDLFxyXG4gICAgZmVlbHNsaWtlX2Y6IGZlZWxzbGlrZUYsXHJcbiAgICBsYXN0X3VwZGF0ZWQ6IGxhc3RVcGRhdGVkLFxyXG4gICAgaHVtaWRpdHlcclxuICB9ID0gY3VycmVudDtcclxuXHJcbiAgY29uc3QgeyBuYW1lIH0gPSBsb2NhdGlvbjtcclxuXHJcbiAgY29uc3QgWy4uLmRheXNdID0gZm9yZWNhc3QuZm9yZWNhc3RkYXk7XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZERheXMgPSBkYXlzLm1hcCgoc2luZ2xlRGF5KSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRhdGUsXHJcbiAgICAgIGRheToge1xyXG4gICAgICAgIGNvbmRpdGlvbjogeyB0ZXh0OiBkYXlJbmZvIH0sXHJcbiAgICAgICAgYXZndGVtcF9jOiBhdmdUZW1wQyxcclxuICAgICAgICBhdmd0ZW1wX2Y6IGF2Z1RlbXBGXHJcbiAgICAgIH1cclxuICAgIH0gPSBzaW5nbGVEYXk7XHJcbiAgICByZXR1cm4geyBkYXRlLCBkYXlJbmZvLCBhdmdUZW1wQywgYXZnVGVtcEYgfTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaG91cjogWy4uLmhvdXJEYXRhXVxyXG4gIH0gPSBmb3JlY2FzdC5mb3JlY2FzdGRheVswXTtcclxuXHJcbiAgY29uc3QgaG91ckRldGFpbHMgPSBbXTtcclxuXHJcbiAgaG91ckRhdGEuZm9yRWFjaCgoaG91cikgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0aW1lLFxyXG4gICAgICB0ZW1wX2M6IGhvdXJUZW1wQyxcclxuICAgICAgdGVtcF9mOiBob3VyVGVtcEYsXHJcbiAgICAgIGNvbmRpdGlvbjogeyB0ZXh0OiBpbmZvIH1cclxuICAgIH0gPSBob3VyO1xyXG5cclxuICAgIGhvdXJEZXRhaWxzLnB1c2goeyB0aW1lLCBob3VyVGVtcEMsIGhvdXJUZW1wRiwgaW5mbyB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coJ0hvdXJEZXRhaWxzIHdlYXRoZXIgZm4nLCBob3VyRGV0YWlscyk7XHJcblxyXG4gIGNvbnN0IGRheURhdGEgPSB7XHJcbiAgICB0ZW1wQyxcclxuICAgIHRlbXBGLFxyXG4gICAgZmVlbHNsaWtlQyxcclxuICAgIGZlZWxzbGlrZUYsXHJcbiAgICB3aW5kS3BoLFxyXG4gICAgd2luZE1waCxcclxuICAgIGxhc3RVcGRhdGVkLFxyXG4gICAgaHVtaWRpdHksXHJcbiAgICBuYW1lXHJcbiAgfTtcclxuICAvLyBjb25zb2xlLmxvZygnRGF5IHdlYXRoZXIgZm4nLCBkYXlEYXRhKTtcclxuXHJcbiAgcmV0dXJuIHsgaG91ckRldGFpbHMsIGRheURhdGEsIHByb2Nlc3NlZERheXMgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NTVjODdlYTA4NWI2NDJiMDkwMDExMzcyMTIzMDIwOCZxPSR7bG9jYXRpb259JmRheXM9M2AsXHJcbiAgICAgIHsgbW9kZTogJ2NvcnMnIH1cclxuICAgICk7XHJcbiAgICBjb25zdCB7IGhvdXJEZXRhaWxzLCBkYXlEYXRhLCBwcm9jZXNzZWREYXlzIH0gPSBwcm9jZXNzRGF0YShcclxuICAgICAgYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgaG91ckRldGFpbHMsIGRheURhdGEsIHByb2Nlc3NlZERheXMgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuSGVhZGVyKCk7XHJcbkFwcCgpO1xyXG5Gb290ZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9