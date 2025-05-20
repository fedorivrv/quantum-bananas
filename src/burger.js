(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[data-menu-toggle]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.toggleMenuBtn.addEventListener('click', () => {
    refs.toggleMenuBtn.classList.toggle('is-open');
    refs.menu.classList.toggle('is-open');
  });
})();