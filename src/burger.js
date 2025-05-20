(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[data-menu-toggle]'),
    menu: document.querySelector('[data-menu]'),
    body: document.body,
  };

  refs.toggleMenuBtn.addEventListener('click', () => {
    const isOpen = refs.menu.classList.toggle('is-open');
    refs.toggleMenuBtn.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll', isOpen);
  });
})();