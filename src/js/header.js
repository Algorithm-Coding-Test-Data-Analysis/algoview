export function footerHTML() {
    return `
        <header>
            <h1>
                <a href="#">
                    <img class="top-logo" src="./images/algo-view-logo.svg" alt="알고뷰 로고">
                </a>
            </h1>
            <nav>
                <ul class="top-menu">
                    <li class="top-menu-chart on-click"><a href="#none">Chart</a></li>
                    <li class="top-menu-reference"><a href="#none">Reference</a></li>
                </ul>
                <input type="checkbox" id="toggle" hidden>
                <label for="toggle" class="dark-toggle">
                    <img class="dark-toggle-img" src="./images/dark-mode.svg" alt="다크모드">
                    <img class="light-toggle-img" src="./images/light-mode.svg" alt="밝은모드">
                </label>
            </nav>
        </header>
      `;
  }