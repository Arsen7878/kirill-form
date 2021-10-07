const inputTel = document.querySelector('input[type="tel"]');
const inputName = document.querySelector('[data-action="input-name"]');
const btnNext1 = document.querySelector('[data-action="button-next1"]');
export const backdropRef = document.querySelector('[data-modal]');
export const errorText = document.querySelector('.error__text');

export let validNumber = false;
export let validForm = false;

function checkNumber(AStr) {
  AStr = AStr.replace(/[\s\-\(\)]/g, '');
  return AStr.match(/^((\+?3)?8)?0\d{9}$/) != null;
}

function showCheck(AStr) {
  validNumber = false;
  if (!checkNumber(AStr)) {
    let messageError = 'Некоректно введено номер телефону!';
    outputError(messageError, backdropRef, errorText);
  } else {
    validNumber = true;
  }
}

function checkValue(value1) {
  validForm = false;

  if (value1 === '') {
    let messageError = 'Заповніть поле "Ім′я" !';

    outputError(messageError, backdropRef, errorText);
  } else {
    validForm = true;
  }
}

export function outputError(message, element1, element2) {
  element1.classList.remove('backdrop--is-hidden');
  element2.textContent = message;
}

btnNext1.addEventListener('click', event => {
  checkValue(inputName.value);
  showCheck(inputTel.value);
});
