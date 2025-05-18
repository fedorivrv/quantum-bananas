export const menuIcon = document.getElementById('menu-icon');
export const useElement = menuIcon.querySelector('use');
export const mobileMenu = document.getElementById('mobileMenu');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');

  const currentIcon = useElement.getAttribute('href');
  const isMenuOpen = currentIcon.includes('icon-menu');

  useElement.setAttribute(
    'href',
    isMenuOpen ? '/img/icons.svg#icon-close' : '/img/icons.svg#icon-menu'
  );
});
