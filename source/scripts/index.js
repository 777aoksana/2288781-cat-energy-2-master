/* в этот файл добавляет скрипты*/

// меню
document.querySelector('.toggle').addEventListener('click', () => {

  document.querySelector('.toggle__icon').classList.toggle('open');
});

document.querySelector('.navigation').classList.remove('navigation--no-js');

const btnToggle = document.querySelector('.toggle__icon');
const mainNav = document.querySelector('.navigation');

mainNav.classList.add('navigation--closed');

if (btnToggle) {
  btnToggle.addEventListener('click', () => {
    mainNav.classList.toggle('navigation--opened');
    mainNav.classList.toggle('navigation--closed');
  });
}

// ползунок


