const buttonUp = document.querySelector('.up-button');
const buttonDown = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length - 1;
const container = document.querySelector('.container');

const heightVH = container.clientHeight;

let activeSlideIndex = 0;


sidebar.style.top = `-${slidesCount * 100}vh`;

buttonUp.addEventListener('mousedown', () => {
  changeSlide('up');
})
buttonDown.addEventListener('mousedown', () => {
  changeSlide('down');
})
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ArrowUp') {
    changeSlide('up');
  } else if (evt.key === 'ArrowDown') {
    changeSlide('down');
  }
})


function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount;
    }
  }
  mainSlide.style.transform = `translateY(-${activeSlideIndex * heightVH}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * heightVH}px)`
}
