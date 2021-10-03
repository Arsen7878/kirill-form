const inputTel = document.querySelector('input[type="tel"]');
const inputName = document.querySelector('[data-action="input-name"]');
const btnNext1 = document.querySelector('[data-action="button-next1"]');
export const backdropRef = document.querySelector('[data-modal]');
const btnCloseBackdrop = document.querySelector('[data-modal-close]');
const errorText = document.querySelector('.error__text');

export let validNumber = false;
export let validForm = false;

function checkNumber(AStr) {
  AStr = AStr.replace(/[\s\-\(\)]/g, '');
  return AStr.match(/^((\+?3)?8)?0\d{9}$/) != null;
}

function showCheck(AStr) {
  validNumber = false;
  if (!checkNumber(AStr)) {
    let messageError = 'Некорректно введён номер телефона!';
    outputError(messageError);
  } else {
    validNumber = true;
  }
}

function checkValue(value1, value2) {
  validForm = false;

  if (value1 === '') {
    let messageError = 'Заполните поле "Имя"!';

    outputError(messageError);
  } else {
    validForm = true;
  }
}

export function outputError(message) {
  backdropRef.classList.remove('backdrop--is-hidden');
  errorText.textContent = message;
}

btnNext1.addEventListener('click', event => {
  checkValue(inputName.value);
  showCheck(inputTel.value);
});

btnCloseBackdrop.addEventListener('click', onCloseBackdrop);

function onCloseBackdrop(event) {
  backdropRef.classList.add('backdrop--is-hidden');
}
