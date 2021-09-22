const inputTel = document.querySelector('input[type="tel"]');
const inputName = document.querySelector('[data-action="input-name"]');
const btnSubbmit = document.querySelector('[data-action="submit"]');

function checkNumber(AStr) {
  AStr = AStr.replace(/[\s\-\(\)]/g, '');
  return AStr.match(/^((\+?3)?8)?0\d{9}$/) != null;
}
function showCheck(AStr) {
  if (!checkNumber(AStr)) {
    alert('Некорректно введён номер телефона');
  }
}

function checkValue(value) {
  if (value === '') {
    alert('Заполните все поля!');
  }
}

btnSubbmit.addEventListener('click', event => {
  event.preventDefault();
  checkValue(inputTel.value);
  checkValue(inputName.value);
  showCheck(inputTel.value);
});
