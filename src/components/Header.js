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

export default Header;
