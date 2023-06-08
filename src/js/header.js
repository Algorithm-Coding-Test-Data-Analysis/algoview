export function headerHTML() {
  const currentPath = window.location.pathname;

  document.querySelector('.header').innerHTML = `
    <div class="header-wrapper-div">
      <h1>
          <a class="header-link" href="/">
              <img class="header-logo" src="/src/assets/images/ALGOVIEW-headerlogo.svg" alt="알고뷰 로고">
          </a>
      </h1>
      
      <nav class="header-nav">
          <ul class="header-menu">
              <li class="header-menu-chart ${
                currentPath === '/' && 'on-click'
              }"><a class="header-link" href="/">Chart</a></li>
              <li class="header-menu-reference ${
                (currentPath === '/pages/reference/youtube/' ||
                  currentPath === '/pages/reference/practice/') &&
                'on-click'
              }"><a class="header-link" href="/pages/reference/youtube">Reference</a></li>
          </ul>
          <input type="checkbox" id="toggle" hidden>
          <label for="toggle" class="dark-toggle">
              <img class="dark-toggle-img" src="/src/assets/images/dark-mode.svg" alt="다크모드">
              <img class="light-toggle-img" src="/src/assets/images/light-mode.svg" alt="밝은모드">
          </label>
      </nav>
    </div>
    `;
  return;
}
