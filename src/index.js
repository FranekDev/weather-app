import './scss/main.scss';

const helloWorld = document.createElement('h1');
helloWorld.textContent = 'Hello World!';

document.body.appendChild(helloWorld);

helloWorld.addEventListener('click', () => {
  console.log('Hello World!');
});
