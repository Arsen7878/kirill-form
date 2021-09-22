const form2 = document.querySelector('#form2');
const btnSubbmit = document.querySelector('[data-action="submit"]');

btnSubbmit.addEventListener('click', () => {
  form2.classList.add('is-open');
});
