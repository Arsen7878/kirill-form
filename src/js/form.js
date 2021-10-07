import { validForm, validNumber, outputError, backdropRef } from './validator';
import markupInformation from '../templates/markup-information.hbs';
import infVin from '../templates/inf-vin.hbs';

export const form2 = document.querySelector('#form2');
const btnNext1 = document.querySelector('[data-action="button-next1"]');
export const selectForm = document.querySelector('.form__list');
const markaRef = document.querySelector('#marka');
const inputList = document.querySelectorAll('[data-value]');
const modelRef = document.querySelector('#model');
const inputVin = document.querySelector('[data-action="input-vin"]');
const informationVinRef = document.querySelector('#information-vin');
const inputGos = document.querySelector('[data-action="input-gos"]');

btnNext1.addEventListener('click', event => {
  event.preventDefault();
  if (validNumber && validForm) {
    form2.classList.add('is-open');
  }
});

selectForm.addEventListener('change', event => {
  event.preventDefault();
  modelRef.classList.remove('is-open__label');
  inputList.forEach(el => {
    el.classList.remove('is-open__label');
  });
  if (event.target.value !== '0') {
    inputList[Number(event.target.value) - 1].classList.toggle('is-open__label');
  }
  informationVinRef.innerHTML = '';
  inputVin.value = '';
  inputGos.value = '';
});

markaRef.addEventListener('click', event => {
  event.preventDefault();
  modelRef.classList.add('is-open__label');
});

inputVin.addEventListener('change', event => {
  event.preventDefault();
  removeInput(inputVin, informationVinRef, 17);

  if (event.target.value.length < 17) {
    backdropRef.classList.remove('backdrop--is-hidden');
    const messageError = 'Некоректно введено vin-код автомбіля';
    outputError(messageError);
  } else {
    getPostVin(event.target.value);
  }
});

function removeInput(selector, removeEl, numberLength) {
  if (selector.value === '' || selector.value.length < numberLength) {
    removeEl.innerHTML = '';
  }
}

inputGos.addEventListener('change', event => {
  event.preventDefault();
  removeInput(inputGos, informationVinRef, 8);

  if (event.target.value.length < 8) {
    backdropRef.classList.remove('backdrop--is-hidden');
    const messageError = 'Некоректно введено реєстраційний номер автомбіля';
    outputError(messageError);
  } else {
    getPostGos(event.target.value);
  }
});

function findError(dataVin) {
  if (dataVin === '') {
    const messageError = 'Реєстраційний номер не знайдено!';
    outputError(messageError);
  }
}

function getPostGos(gos) {
  const request = new XMLHttpRequest();
  request.open('POST', 'https://autodoka-srv.com/Meric/hs/tecdoc/gos/');
  request.responseType = 'json';

  let bodyS = {
    gos,
  };

  const body = JSON.stringify(bodyS);

  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Token', 'sAnWaCmRqtrdEySnoXA6l5tFpP7qmETl');
  request.onload = function () {
    const dataVin = request.response.data;
    findError(dataVin);
    getPostVin(dataVin);
  };

  request.send(body);
}

function getPostVin(vin) {
  const request = new XMLHttpRequest();
  request.open('POST', 'https://autodoka-srv.com/Meric/hs/tecdoc/vin/');
  request.responseType = 'json';

  let bodyS = {
    vin,
  };

  const body = JSON.stringify(bodyS);

  request.setRequestHeader('Content-Type', 'application/json');

  request.setRequestHeader('Token', 'sAnWaCmRqtrdEySnoXA6l5tFpP7qmETl');

  request.onload = function () {
    informationForVin(request.response.data, vin);
  };

  request.send(body);
}

function informationForVin(data, dataVin) {
  informationVinRef.innerHTML = '';
  const createInformation = createMarkup(data);
  const createVin = createMarkupVin(dataVin);
  function createMarkup(data) {
    return markupInformation(data);
  }
  function createMarkupVin(dataVin) {
    return infVin({ dataVin });
  }
  if (informationVinRef.childElementCount < 1) {
    if (inputGos.value !== '') {
      informationVinRef.insertAdjacentHTML('beforeend', createVin);
    }

    informationVinRef.insertAdjacentHTML('beforeend', createInformation);
  }

  informationVinRef.classList.add('is-open__label');
}
