const { default: axios } = require('axios');
// const { debounce } = require('debounce');
// import Notiflix from 'notiflix';

const refs = {
  postDiv: document.querySelector('.posts'),
  // q: document.querySelector('.q'),
  loadMore: document.querySelector('.button'),
};

const B_URL = 'https://jsonplaceholder.typicode.com/';
const currentResource = 'posts';

let dataLimit = 10;
let page = 1;

async function getData(page = 1, limit = 10) {
  // q = 'car'
  const response = await axios.get(
    `${B_URL}${currentResource}?&_page=${page}&_limit=${limit}`
    // q=${q}
  );
  const data = await response.data;
  return data;
}

async function postMarkup(data) {
  const markUp = data
    .map(({ title }) => {
      return `<div>${title} </div>`;
    })
    .join(' ');
  refs.postDiv.insertAdjacentHTML('beforeend', markUp);
}

window.addEventListener('load', onLoad);

async function onLoad(e) {
  const data = await getData();
  postMarkup(data);
}

refs.loadMore.addEventListener('click', onClick);

async function onClick(e) {
  const pageLimit = 110 / dataLimit;
  page += 1;
  if (page <= pageLimit) {
    refs.loadMore.style.display = 'block';
    const data = await getData(page);
    postMarkup(data);
  } else {
    refs.loadMore.style.display = 'none';
  }
}

// refs.q.addEventListener('input', debounce(onInput, 300));

// async function onInput(e) {
//   const value = e.target.value.trim();

//   if (!value) {
//     Notiflix.Notify.info('Введіть тему');
//     return;
//   }

//   const data = await getData(value);
//   postMarkup(data);
// }
