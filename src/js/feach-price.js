import markupLeftPrice from '../templates/price-left.hbs';
import markupRightPrice from '../templates/price-right.hbs';

const createPriceMarkup = function () {
  const request = new XMLHttpRequest();

  request.open('GET', `https://autodoka-srv.com/Meric/hs/tecdoc/price/`);

  request.responseType = 'json';

  request.onload = function () {
    const price = request.response;

    const createGroup = createGroupMarkup(price);
    const createElGroup = createElGroupMarkup(price);

    const catalogLeftRef = document.querySelector('.catalog__list--left');
    const catalogRightRef = document.querySelector('.catalog__wrapper--right');

    createHTML(catalogLeftRef, createGroup);
    createHTML(catalogRightRef, createElGroup);

    function createHTML(elRef, string) {
      elRef.insertAdjacentHTML('beforeend', string);
    }

    const groupItems = document.querySelectorAll('.catalog__item--left');
    const groupElItems = document.querySelectorAll('.catalog__list--right');

    groupItems.forEach((el, index) => {
      groupElItems[0].classList.remove('hidden');
      el.addEventListener('click', onClickGroup);
    });

    function onClickGroup(event) {
      groupElItems.forEach(e => {
        e.classList.add('hidden');
      });
      const i = Number(event.currentTarget.dataset.value) - 1;
      groupElItems[i].classList.remove('hidden');
    }

    groupElItems.forEach(el => {
      el.addEventListener('click', counterService);
    });

    btnClean();
  };
  request.send();
};

let arrayCounterPrice = [];

function counterService(event) {
  const catalogListRight = document.querySelectorAll('.catalog__list--right');
  const counterSpanList = document.querySelectorAll('.conter-service');
  const dataCounterService = document.querySelector('[data-counter__service]');
  const dataCounterSum = document.querySelector('[data-counter__sum]');

  catalogListRight.forEach((el, index) => {
    const customCheckboxList = el.querySelectorAll('.custom-checkbox');
    let counter = 0;

    customCheckboxList.forEach(el => {
      if (el.checked === true) {
        counter += 1;
      } else {
        counter = counter;
      }
    });

    counterSpanList[index].textContent = counter;
    if (counter === 0) {
      counterSpanList[index].textContent = '';
    }
  });

  let arrayCounterService = [];

  if (event.target.dataset.price !== undefined) {
    const price = Number(event.target.dataset.price);
    if (event.target.control.checked === false) {
      arrayCounterPrice.push(price);
    } else {
      const index = arrayCounterPrice.indexOf(price);
      if (index > -1) {
        arrayCounterPrice.splice(index, 1);
      }
    }
  }

  counterSpanList.forEach(el => {
    if (el.textContent !== '') {
      arrayCounterService.push(el.textContent);
    }
  });

  const sumService = sum(arrayCounterService);
  dataCounterService.textContent = sumService;

  const sumPrice = sum(arrayCounterPrice);
  if (sumPrice === 0) {
    dataCounterSum.textContent = '₴';
  }
  dataCounterSum.textContent = sumPrice + ' ' + '₴';
}

function sum(array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    let element = Number(array[index]);
    count += element;
  }
  return count;
}

function createGroupMarkup(price) {
  return markupLeftPrice(price);
}

function createElGroupMarkup(price) {
  return markupRightPrice(price);
}

function btnClean() {
  const dataButtonClean = document.querySelector('[data-button-clean]');
  const dataCounterService = document.querySelector('[data-counter__service]');
  const dataCounterSum = document.querySelector('[data-counter__sum]');
  const inputListRef = document.querySelectorAll('.custom-checkbox');
  const counterSpanList = document.querySelectorAll('.conter-service');

  dataButtonClean.addEventListener('click', onClean);

  function onClean(event) {
    event.preventDefault();
    dataCounterService.textContent = '';
    dataCounterSum.textContent = '';
    arrayCounterPrice = [0];
    inputListRef.forEach(e => {
      e.checked = false;
    });
    counterSpanList.forEach(e => {
      e.textContent = '';
    });
  }
}

createPriceMarkup();
