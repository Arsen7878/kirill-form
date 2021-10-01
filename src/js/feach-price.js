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

    function createGroupMarkup(price) {
      return markupLeftPrice(price);
    }

    function createElGroupMarkup(price) {
      return markupRightPrice(price);
    }

    const catalogLeftRef = document.querySelector('.catalog__list--left');
    const catalogRightRef = document.querySelector('.catalog__wrapper--right');

    catalogLeftRef.insertAdjacentHTML('beforeend', createGroup);
    catalogRightRef.insertAdjacentHTML('beforeend', createElGroup);

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
  };
  request.send();
};

function counterService(event) {
  const p = document.querySelectorAll('.catalog__list--right');

  p.forEach((el, index) => {
    const g = el.querySelectorAll('.custom-checkbox');
    let counter = 0;
    g.forEach(el => {
      if (el.checked === true) {
        counter += 1;
      } else {
        counter = counter;
      }
    });
    const k = document.querySelectorAll('.conter-service');
    k[index].textContent = counter;
    if (counter === 0) {
      k[index].textContent = '';
    }
  });
}

createPriceMarkup();
