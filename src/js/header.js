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
          <input class="dark-toggle-input" type="checkbox" id="toggle" hidden>
          <label for="toggle" class="dark-toggle">
              <img class="dark-toggle-img" src="/src/assets/images/dark-mode.svg" alt="다크모드">
              <img class="light-toggle-img" src="/src/assets/images/light-mode.svg" alt="밝은모드">
          </label>
          <button class="btn-hamburger" type="button">
              <span></span>
              <span></span>
              <span></span>
          </button>

          <div class="overlay">
            <div class="hidden-menu-bar">
              <div class="hidden-menu-wrapper">
                <img class="hidden-menu-logo" src="/src/assets/images/ALGOVIEWlogo.png"/>
                <input class="hidden-dark-toggle-input" type="checkbox" id="hiddenToggle" hidden>
                <label for="hiddenToggle" class="hidden-dark-toggle">
                  <img class="hidden-dark-toggle-img" src="/src/assets/images/dark-mode.svg" alt="다크모드">
                  <img class="hidden-light-toggle-img" src="/src/assets/images/light-mode.svg" alt="밝은모드">
                </label>
              </div>

              <div class="hidden-menu">
                <ul class="hidden-header-menu">
                  <li class="hidden-header-menu-chart ${
                    currentPath === '/' && 'on-click'
                  }"><a class="hidden-header-link" href="/">Chart</a></li>
                  <li class="hidden-header-menu-reference ${
                    (currentPath === '/pages/reference/youtube/' ||
                      currentPath === '/pages/reference/practice/') &&
                    'on-click'
                  }"><a class="hidden-header-link" href="/pages/reference/youtube">Reference</a></li>
                  <li class="hidden-header-menu-github">
                    <a class="hidden-header-link" href="https://github.com/Algorithm-Coding-Test-Data-Analysis/algoview">Github</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </nav>
    </div>
    `;
  return;
}

export function hamburger() {
  const BtnHamburger = document.querySelector('.btn-hamburger');
  const hiddenMenuBar = document.querySelector('.hidden-menu-bar');
  const overlay = document.querySelector('.overlay');

  // 햄버거 버튼 클릭 이벤트 리스너
  BtnHamburger.addEventListener('click', () => {
    toggleMenu();

    // 사이드바 열려 있을 때, 햄버거 버튼 클릭 시 사이드바 닫히는 기능
    const checkBox = document.querySelector('#sidebar-check-btn');
    const sidebarToggleLabel = document.querySelector('.sidebar-check-label');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');

    if (checkBox.checked === true) {
      sidebarOverlay.style.display = 'none';
      sidebarToggleLabel.classList.toggle('rotate');
    }
    checkBox.checked = false;
  });

  // 문서 클릭 이벤트 리스너
  document.addEventListener('click', (event) => {
    const target = event.target;
    const isMenuClicked = target.closest('.hidden-menu-bar') !== null;
    const isHamburgerClicked = target.closest('.btn-hamburger') !== null;

    if (!isMenuClicked && !isHamburgerClicked) {
      hideMenu();
    }
  });

  // 메뉴 토글 함수
  function toggleMenu() {
    if (
      hiddenMenuBar.style.display === 'none' ||
      hiddenMenuBar.style.display === ''
    ) {
      showMenu();
    } else {
      hideMenu();
    }
  }

  // 메뉴 표시 함수
  function showMenu() {
    hiddenMenuBar.style.display = 'block';
    overlay.style.display = 'block';
  }

  // 메뉴 숨기기 함수
  function hideMenu() {
    hiddenMenuBar.style.display = 'none';
    overlay.style.display = 'none';
  }
}
