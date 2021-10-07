const btnNext2 = document.querySelector('[data-action="button-next2"]');
const btnNextCatalog = document.querySelector('[data-next__catalog]');
const btnNextCatalogTop = document.querySelector('[data-next__catalog--top]');
export const catalog = document.querySelector('#catalog');
export const dateTimeContainer = document.querySelector('.date-time__container');
const timePicker = document.querySelector('.time-pickable__container');
export const wrapperForm = document.querySelector('.wrapper');
const btnSkip = document.querySelector('[ data-skip]');

btnNext2.addEventListener('click', onClickBtnNext2);

btnNextCatalog.addEventListener('click', onClickBtnNextAndSkip);

btnNextCatalogTop.addEventListener('click', onClickBtnNextAndSkip);

btnSkip.addEventListener('click', onClickBtnNextAndSkip);

function onClickBtnNext2(event) {
  event.preventDefault();
  addRemoveClassIsHidden(wrapperForm, catalog, 'is-hidden');
}

function onClickBtnNextAndSkip(e) {
  e.preventDefault();
  addRemoveClassIsHidden(catalog, dateTimeContainer, 'is-hidden');
}

export function addRemoveClassIsHidden(isAddRef, isRemoveRef, className) {
  isAddRef.classList.add(className);
  isRemoveRef.classList.remove(className);
}
