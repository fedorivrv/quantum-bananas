(() => {
  const refs = {
    openButtons: document.querySelectorAll('.price-btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalWrappers: document.querySelectorAll('.modal-wrapper'),
  };

  refs.openButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      refs.modal.classList.add('is-open');
      refs.modalWrappers.forEach((wrapper, i) => {
        if (i === index) {
          wrapper.classList.remove('none');
        } else {
          wrapper.classList.add('none');
        }
      });
    });
  });

  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.remove('is-open');
  });
})();

