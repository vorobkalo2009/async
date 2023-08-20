import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createLiImg, createFilters } from '../js/renderHtml';

const refs = {
  filters: document.querySelector('.filters'),
  list: document.querySelector('.list'),
};

refs.filters.insertAdjacentHTML('beforeend', createFilters());
refs.list.insertAdjacentHTML('beforeend', createLiImg());

refs.filters.addEventListener('click', filter);

function filter(e) {
  e.preventDefault();
  const filterValue = e.target.textContent.trim();

  // console.log(e.target.classList.contains('filter-item'));
  // спрацювання на натискання по тегу "li"
  if (e.target.nodeName === 'LI') {
    e.target.classList.add('active');
    refs.list.innerHTML = '';

    refs.list.insertAdjacentHTML('beforeend', createLiImg(filterValue));
  }
  // Стилізація(видалення класу)
  const filterItems = refs.filters.querySelectorAll('li');

  filterItems.forEach(item => {
    if (item.textContent.trim() !== filterValue) {
      item.classList.remove('active');
    }
  });

  // Ситуація коли не працює жоден фільтр
  if (e.target.nodeName !== 'LI') {
    refs.list.innerHTML = '';
    refs.list.insertAdjacentHTML('beforeend', createLiImg());
  }
}

// let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log('вхід :>> ', arr4);
// console.log('вихід', arr4.flat(2));

let lightbox = new SimpleLightbox('.list a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
