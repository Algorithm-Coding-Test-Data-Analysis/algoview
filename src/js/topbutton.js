const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

const btnTop = document.querySelector('.btn-top');
const footer = document.querySelector('.footer');

btnTop.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset;
  let windowHeight = window.innerHeight;
  let footerOffset = footer.offsetTop;
  if (scrollTop + windowHeight > footerOffset) {
    btnTop.classList.add('unfixed');
  } else {
    btnTop.classList.remove('unfixed');
  }
});
