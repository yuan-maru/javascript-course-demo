'use strict';

// modal elements
const modalEl = document.querySelector('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal 
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal 
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

const openModal = function () {
    //remove hidden classname in modal
    modalEl.classList.remove('hidden');
    
    //remove hidden keyword classname in overlay
    overlayEl.classList.remove('hidden');
};

const closeModal = function () {
    modalEl.classList.add('hidden');
    
    overlayEl.classList.add('hidden');
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

