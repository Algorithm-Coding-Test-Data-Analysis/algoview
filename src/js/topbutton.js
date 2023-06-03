const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

const btnTop = document.querySelector('.btn-top');
btnTop.addEventListener('click', scrollToTop);

const footer = document.querySelector('.footer');
const btnOffset = 80; // 버튼의 위치로부터의 거리 값

window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight;
  var footerOffset = footer.offsetTop;

  if (scrollTop + windowHeight >= footerOffset - btnOffset) {
    btnTop.classList.add('fixed');
  } else {
    btnTop.classList.remove('fixed');
  }
});
