import { outputError } from './validator';
import { selectForm } from './form';

const btnSub = document.querySelector('[data-submit]');
export const imgBackdrop = document.querySelector('.img__error');
const backdropDone = document.querySelector('.backdrop__done');
const backdropRef = document.querySelector('.backdrop');
const btnCloseBackdrop = document.querySelector('[data-modal-close]');
const btnCloseBackdropDone = document.querySelector('[data-done-close]');
const doneText = document.querySelector('.done__text');
const selectAddressRef = document.querySelector('#change-address');
const months = [
  'січень',
  'лютий',
  'березень',
  'квітень',
  'травень',
  'червень',
  'липень',
  'серпень',
  'вересень',
  'жовтень',
  'листопад',
  'грудень',
];

function onClickBtnSub(event) {
  event.preventDefault();
  backdropDone.classList.remove('backdrop--is-hidden__done');
  const messageDone = 'Вітаю! Ви успішно записані!';
  const selectInputDate = selectForm[selectForm.value].text;
  const selectAddress = selectAddressRef[selectAddressRef.value].text;
  const outpitInf = document.querySelectorAll('.form__input');
  const customCheckboxList = document.querySelectorAll('.custom-checkbox');
  const labelCheckbox = document.querySelectorAll('.label__checkbox');
  const catalogTextRight = document.querySelectorAll('.catalog__text--right');
  const objectFormData = informmationOfCar();
  const objDataServise = informationOfServices();
  const objDateTime = dateAndTime();

  const formData = [
    { generalInf: [...objectFormData] },
    { servise: objDataServise },
    { date: [objDateTime] },
  ];

  function informmationOfCar() {
    let arrayGeneralInf = [];
    for (let index = 0; index < outpitInf.length; index++) {
      const elementValue = outpitInf[index].value;
      const name = outpitInf[index].name;
      if (outpitInf[index].value !== '') {
        arrayGeneralInf.push({ [name]: elementValue });
      }
    }
    return arrayGeneralInf;
  }

  function informationOfServices() {
    let serv = [];
    for (let index = 0; index < customCheckboxList.length; index++) {
      const elementNameServise = customCheckboxList[index];
      const price = labelCheckbox[index].dataset.price;
      const nameService = catalogTextRight[index].textContent;
      if (elementNameServise.checked) {
        serv.push({ nameService: nameService, price: price });
      }
    }
    return serv;
  }

  function dateAndTime() {
    const date = document.querySelector('.current__day');
    const time = document.querySelector('.current__time');
    const month = document.querySelector('.current__month');

    function name() {
      if (months.includes(month.textContent.toLowerCase())) {
        return months.indexOf(month.textContent.toLowerCase()) + 1;
      }
    }

    const currentMonthNumber = name();

    let dateTime = {
      date: date.textContent.padStart(2, 0) + '.' + currentMonthNumber.toString().padStart(2, 0),
      time: time.textContent,
    };
    return dateTime;
  }

  console.log(formData);
  outputError(messageDone, backdropDone, doneText);
}

function onCloseBackdrop(event) {
  backdropRef.classList.add('backdrop--is-hidden');
}

function onCloseBackdropDone(event) {
  backdropDone.classList.add('backdrop--is-hidden__done');
}

btnSub.addEventListener('click', onClickBtnSub);

btnCloseBackdrop.addEventListener('click', onCloseBackdrop);
btnCloseBackdropDone.addEventListener('click', onCloseBackdropDone);
