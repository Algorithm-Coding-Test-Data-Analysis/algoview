const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
};

const btnTop = document.querySelector('.btn-top');
btnTop.addEventListener('click', scrollToTop);
