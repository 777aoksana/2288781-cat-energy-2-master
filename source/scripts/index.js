/* в этот файл добавляет скрипты*/


// Кнопка "Гамбургер"
const navMain = document.querySelector('.main-nav');
const body = document.querySelector('body');
const navToggle = document.querySelector('.page-header__toggle');

body.classList.remove('nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');

    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.remove('page-header__toggle--opened');
  }
});
