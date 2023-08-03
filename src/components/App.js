import getWeather from './weather';

const App = () => {
  const main = document.createElement('main');

  getWeather('poznan');

  document.body.appendChild(main);
};

export default App;
