const { default: axios } = require('axios');

const refs = {
  seconds: document.querySelector('#clock'),
};

const timeout = setTimeout(() => {
  console.log('Реклама');
}, 10000);

console.log(timeout);

clearTimeout(timeout);

let seconds = 0;

const timer = setInterval(() => {
  seconds++;
  refs.seconds.innerHTML = `Ви вже знаходитись на нашому сайті ${seconds} секунд`;
}, 1000);

console.log(timer);

clearInterval(timer);
