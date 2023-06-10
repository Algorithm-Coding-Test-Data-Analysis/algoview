const COMPONENTS_CLASS = ['.header', '.sidebar', '.main', '.footer'];

let isDarkMode = sessionStorage.getItem('algoview')
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
    if (topBtnLogo)
      topBtnLogo.style.background = `url('/src/assets/images/btn-top_dark.svg')`;
    COMPONENTS_CLASS.forEach((component) =>
      document.querySelector(component).classList.add('dark')
    );
  } else {
    $darkmode.checked = false;
    headerLogo.src = '/src/assets/images/ALGOVIEW-headerlogo.svg';
    footerLogo.src = '/src/assets/images/ALGOVIEWlogo.png';
    if (topBtnLogo)
      topBtnLogo.style.background = `url('/src/assets/images/btn-top.svg')`;
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
    renderDarkMode($darkmode);
  }
}
