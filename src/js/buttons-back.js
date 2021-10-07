import { addRemoveClassIsHidden, catalog, wrapperForm, dateTimeContainer } from './button-next2';
import { form2 } from './form';

const btnBack = document.querySelector('[data-action="button__back"]');
const btnBackCatalog = document.querySelector('[data-back__catalog]');
const btnBackCatalogTop = document.querySelector('[data-back__catalog--top]');
const btnBackTime = document.querySelector('[data-back__date-time]');

function isClickBtnBackAndBtnBackCatalog(event) {
  event.preventDefault();
  addRemoveClassIsHidden(catalog, wrapperForm, 'is-hidden');
}

btnBack.addEventListener('click', event => {
  event.preventDefault();
  form2.classList.remove('is-open');
});

btnBackCatalog.addEventListener('click', isClickBtnBackAndBtnBackCatalog);

btnBackCatalogTop.addEventListener('click', isClickBtnBackAndBtnBackCatalog);

btnBackTime.addEventListener('click', event => {
  event.preventDefault();
  addRemoveClassIsHidden(dateTimeContainer, catalog, 'is-hidden');
});
