'use strict';

/* document.querySelector('.show-modal').addEventListener('click', () => {
  console.log(document.querySelector('.modal'));
  document.querySelector('.hidden').removeClass('hidden');
}); */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
let isOpen = false;
// console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    isOpen = true;
  });
}

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

/* btnCloseModal.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  //   modal.classList.add('hidden');
  //   overlay.classList.add('hidden');
}); */

btnCloseModal.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', e => {
  /* e = e || window.event;
  var isEscape = false;
  if ('key' in e) {
    isEscape = e.key === 'Escape' || e.key === 'Esc';
  } else {
    isEscape = e.keyCode === 27;
  }
  //   if (isEscape) {
  //     modal.classList.toggle('hidden');
  //     overlay.classList.toggle('hidden');
  //   }
  if (isEscape) {
    if (!modal.classList.contains('hidden')) {
      toggleModal();
    }
  } */
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
});
