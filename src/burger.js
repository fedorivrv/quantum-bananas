(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[data-menu-toggle]'),
    menu: document.querySelector('[data-menu]'),
    body: document.body,
  };

  // Функція для закриття меню
  const closeMenu = () => {
    refs.menu.classList.remove('is-open');
    refs.toggleMenuBtn.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  };

  // Перемикання меню по кнопці
  refs.toggleMenuBtn.addEventListener('click', () => {
    const isOpen = refs.menu.classList.toggle('is-open');
    refs.toggleMenuBtn.classList.toggle('is-open');
    refs.body.classList.toggle('no-scroll', isOpen);
  });

  // Закриття меню при кліку на будь-яке посилання в бургер-меню
  const menuLinks = refs.menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
})();