import store from './store.js';

const COMPONENTS_CLASS = ['.header', '.sidebar', '.main', '.footer'];

export let isDarkMode = sessionStorage.getItem('algoview')
  ? JSON.parse(sessionStorage.getItem('algoview'))
  : window.matchMedia('(prefers-color-scheme: dark)').matches;

function renderDarkMode($darkmode) {
  const headerLogo = document.querySelector('.header-logo');
  const footerLogo = document.querySelector('.logo-img');
  const topBtnLogo = document.querySelector('.btn-top');

  if (isDarkMode) {
    $darkmode.checked = true;
    headerLogo.src = '/src/assets/images/ALGOVIEW-headerlogo_dark.svg';
    footerLogo.src = '/src/assets/images/ALGOVIEWlogo_dark.png';
    if (topBtnLogo) topBtnLogo.classList.add('dark');
    COMPONENTS_CLASS.forEach((component) =>
      document.querySelector(component).classList.add('dark')
    );
  } else {
    $darkmode.checked = false;
    headerLogo.src = '/src/assets/images/ALGOVIEW-headerlogo.svg';
    footerLogo.src = '/src/assets/images/ALGOVIEWlogo.png';
    if (topBtnLogo) topBtnLogo.classList.remove('dark');
    COMPONENTS_CLASS.forEach((component) =>
      document.querySelector(component).classList.remove('dark')
    );
  }
}

export function toggleDarkMode() {
  const $darkmode = document.getElementById('toggle');
  const $darkmode2 = document.getElementById('hiddenToggle');
  renderDarkMode($darkmode);

  $darkmode.addEventListener('click', () => {
    updateMode();
  });
  $darkmode2.addEventListener('click', () => {
    updateMode();
  });

  function updateMode() {
    isDarkMode = !isDarkMode;
    sessionStorage.setItem('algoview', isDarkMode);
    store.setDarkMode = isDarkMode;
    renderDarkMode($darkmode);
  }
}
