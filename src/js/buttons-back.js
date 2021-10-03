const btnBack = document.querySelector('[data-action="button__back"]');
const btnBackCatalog = document.querySelector('[data-back__catalog]');
const btnBackTime = document.querySelector('[data-back__date-time]');
const timePicker = document.querySelector('.time-pickable__container');
const datePicker = document.querySelector('.datepicker__container ');
const wrapperForm = document.querySelector('.wrapper');
const catalog = document.querySelector('#catalog');

btnBack.addEventListener('click', event => {
  event.preventDefault();
  form2.classList.remove('is-open');
});

btnBackCatalog.addEventListener('click', event => {
  event.preventDefault();

  catalog.classList.add('is-hidden');
  wrapperForm.classList.remove('is-hidden');
});

btnBackTime.addEventListener('click', event => {
  event.preventDefault();

  timePicker.classList.add('is-hidden');
  datePicker.classList.add('is-hidden');
  catalog.classList.remove('is-hidden');
});
