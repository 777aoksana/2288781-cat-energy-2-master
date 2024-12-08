/* в этот файл добавляет скрипты*/

// меню

const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});


// ползунок
document.documentElement.lang = 'ru';
document.documentElement.classList.add('page');
document.body.classList.add('page__body');

const slider = document.querySelector('.slider');
const curtain = slider.querySelector('.slider__curtain');
const sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;

window.addEventListener('pointerup', stopTheCurtainShifting);
curtain.addEventListener('pointerdown', startTheCurtainShifting);

function startTheCurtainShifting (event) {
  curtainPlaceStart = Number(sliderStyles.getPropertyValue('--curtain-place'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--curtain-place', `${curtainPlace}`);
}

function stopTheCurtainShifting () {
  window.removeEventListener('pointermove', shiftТheСurtain);
}

function check(radio) {
  radio.checked = true;
}

function uncheck(radio) {
  radio.checked = false;
}

///
if (before && after && sliderPhoto && scale) {
  before.addEventListener('click', () => {
    scale.classList.add('slider__scale--right');
    sliderPhoto.classList.add('slider__photo--after');
  });

  after.addEventListener('click', () => {
    scale.classList.remove('slider__scale--right');
    sliderPhoto.classList.remove('slider__photo--after');
  });

  scale.addEventListener('click', () => {
    if (!scale.classList.contains('slider__scale--right')) {
      scale.classList.add('slider__scale--right');
      sliderPhoto.classList.add('slider__photo--after');
      check(before);
      uncheck(after);
    } else {
      scale.classList.remove('slider__scale--right');
      sliderPhoto.classList.remove('slider__photo--after');
      check(after);
      uncheck(before);
    }
  });
}
