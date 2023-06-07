const COMPONENTS_CLASS = ['.header', '.sidebar', '.main', '.footer'];

let isDarkMode = sessionStorage.getItem('algoview')
  ? JSON.parse(sessionStorage.getItem('algoview'))
  : !window.matchMedia('(prefers-color-scheme)').matches;

function renderDarkMode($darkmode) {
  const headerLogo = document.querySelector('.header-logo');
  const footerLogo = document.querySelector('.logo-img');

  if (isDarkMode) {
    $darkmode.checked = true;
    headerLogo.src = '/src/assets/images/ALGOVIEW-headerlogo_dark.svg';
    footerLogo.src = '/src/assets/images/ALGOVIEWlogo_dark.png';
    COMPONENTS_CLASS.forEach((component) =>
      document.querySelector(component).classList.add('dark')
    );
  } else {
    $darkmode.checked = false;
    headerLogo.src = '/src/assets/images/ALGOVIEW-headerlogo.svg';
    footerLogo.src = '/src/assets/images/ALGOVIEWlogo.png';
    COMPONENTS_CLASS.forEach((component) =>
      document.querySelector(component).classList.remove('dark')
    );
  }
}

export function toggleDarkMode() {
  const $darkmode = document.getElementById('toggle');
  renderDarkMode($darkmode);

  $darkmode.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    sessionStorage.setItem('algoview', isDarkMode);
    renderDarkMode($darkmode);
  });
}
