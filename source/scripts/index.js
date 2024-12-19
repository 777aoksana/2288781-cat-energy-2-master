/* в этот файл добавляет скрипты*/


// Кнопка "Гамбургер"
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
    navToggle.classList.remove('page-header__toggle--close');
    navToggle.classList.add('page-header__toggle--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
    navToggle.classList.add('page-header__toggle--close');
    navToggle.classList.remove('page-header__toggle-nav--open');
  }
});
