const datePicker = document.querySelector('.days');
const timePicker = document.querySelector('.times');
const timeContainer = document.querySelectorAll('.time__container');
const days = document.querySelector('.days');

function onClickDatePicker(event) {
  cycleRemoveClass(days.children, 'current__day');

  if (event.target.className === 'day') {
    event.target.classList.add('current__day');
  }
}

function onClickTimePicker(event) {
  cycleRemoveClass(timeContainer, 'current__time');

  if (event.target.className === 'time__container') {
    event.target.classList.add('current__time');
  }
}

function cycleRemoveClass(elRef, selectorRemove) {
  for (let index = 0; index < elRef.length; index++) {
    const element = elRef[index];
    element.classList.remove(selectorRemove);
  }
}

timePicker.addEventListener('click', onClickTimePicker);
datePicker.addEventListener('click', onClickDatePicker);
