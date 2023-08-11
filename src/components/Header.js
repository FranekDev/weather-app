import { getSvgIcon, svgPaths } from './UI';

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

  searchIcon.appendChild(getSvgIcon(svgPaths.search, searchIconColor));
  searchButton.appendChild(searchIcon);

  searchContainer.appendChild(cityInput);
  searchContainer.appendChild(searchButton);

  forum.appendChild(searchContainer);

  const mobileSearchTrigger = document.createElement('a');
  mobileSearchTrigger.classList.add('mobile-search-trigger');
  mobileSearchTrigger.appendChild(getSvgIcon(svgPaths.search, searchIconColor));

  const hide = (form, main, city) => {
    form.classList.remove('active');
    form.classList.toggle('hide');
    main.classList.toggle('show');
    main.classList.remove('hide');
    city.classList.remove('hide');
    city.classList.toggle('show');
    mobileSearchTrigger.classList.remove('showBg');
    mobileSearchTrigger.classList.add('hideBg');
  };

  const show = (form, main, city) => {
    form.classList.remove('hide');
    form.classList.toggle('active');
    main.classList.toggle('hide');
    main.classList.remove('show');
    city.classList.remove('show');
    city.classList.toggle('hide');
    mobileSearchTrigger.classList.add('showBg');
    mobileSearchTrigger.classList.remove('hideBg');
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

export default Header;
