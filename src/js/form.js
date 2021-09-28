import { validForm, validNumber } from './validator';

const form2 = document.querySelector('#form2');
const btnNext1 = document.querySelector('[data-action="button-next1"]');
const selectForm = document.querySelector('.form__list');
const vinRef = document.querySelector('#vin');
const markaRef = document.querySelector('#marka');
const fileLoadRef = document.querySelector('#file-load');
const inputList = document.querySelectorAll('[data-value]');
const modelRef = document.querySelector('#model');

btnNext1.addEventListener('click', event => {
  event.preventDefault();
  if (validNumber && validForm) {
    form2.classList.add('is-open');
  }
});

selectForm.addEventListener('change', event => {
  inputList.forEach(el => {
    el.classList.remove('is-open__label');
  });
  inputList[Number(event.target.value) - 1].classList.toggle('is-open__label');
});

markaRef.addEventListener('click', () => {
  modelRef.classList.add('is-open__label');
});
