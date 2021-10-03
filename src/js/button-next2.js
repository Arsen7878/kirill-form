const btnNext2 = document.querySelector('[data-action="button-next2"]');
const btnNextCatalog = document.querySelector('[data-next__catalog]');
const catalog = document.querySelector('#catalog');
const datePicker = document.querySelector('.datepicker__container');
const timePicker = document.querySelector('.time-pickable__container');
const wrapperForm = document.querySelector('.wrapper');

btnNext2.addEventListener('click', onClickBtnNext2);

function onClickBtnNext2(event) {
  event.preventDefault();

  catalog.classList.remove('is-hidden');
  wrapperForm.classList.add('is-hidden');
}

btnNextCatalog.addEventListener('click', e => {
  e.preventDefault();
  catalog.classList.add('is-hidden');
  datePicker.classList.remove('is-hidden');
  timePicker.classList.remove('is-hidden');
});
