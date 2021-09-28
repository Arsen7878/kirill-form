import markupRightPrice from '../templates/price-right.hbs';
import markupLeftPrice from '../templates/price-left.hbs';
import price from '../price.json';

const catalogLeftRef = document.querySelector('.catalog__list--left');
const catalogRightRef = document.querySelector('.catalog__wrapper--right');

const createGroup = createGroupMarkup(price);
const createElGroup = createElGroupMarkup(price);

function createGroupMarkup(price) {
  return markupLeftPrice(price);
}

function createElGroupMarkup(price) {
  return markupRightPrice(price);
}

catalogLeftRef.insertAdjacentHTML('beforeend', createGroup);
catalogRightRef.insertAdjacentHTML('beforeend', createElGroup);
