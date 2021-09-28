const groupItems = document.querySelectorAll('.catalog__item--left');
const groupElItems = document.querySelectorAll('.catalog__list--right');
const divLeft = document.querySelector('.catalog__wrapper--left');

groupItems.forEach((el, index) => {
  groupElItems[0].classList.remove('hidden');

  el.addEventListener('click', onClickGroup);
});

function onClickGroup(event) {
  groupElItems.forEach(e => {
    e.classList.add('hidden');
  });
  const i = Number(event.currentTarget.dataset.value) - 1;
  groupElItems[i].classList.remove('hidden');
}
