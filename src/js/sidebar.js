export function sidebarHTML() {
  const currentPath = window.location.pathname;

  function chartSidebar() {
    return `
    <input id="sidebar-check-btn" type="checkbox" />
    <aside class="sidebar-menu-container">
      <label class="sidebar-check-label dark" for="sidebar-check-btn">
      </label>
      <div class="select-lang">
        <button class="selected-btn" type="button" id="py-btn" value="py">Python</button>
        <button type="button" id="js-btn" value="js">JavaScript</button>
      </div>
      <ul class="sidebar-menu-list">
        <li>
          <button class="sidebar-menu-item">
            레벨
          </button>
        </li>
        <li>
          <button class="sidebar-menu-item">
            메서드
          </button>
        </li>
        <li>
          <button class="sidebar-menu-item">
            문제 유형
          </button>
        </li>
        <li>
          <button class="sidebar-menu-item">
            출제 연도
          </button>
        </li>
        <li>
          <button class="sidebar-menu-item">
            출제 업체
          </button>
        </li>
      </ul>
    </aside>
    `;
  }

  function referenceSidebar() {
    return `
      <aside class="sidebar-menu-container refer">
              <ul class="sidebar-menu-list">
                <li>
                  <a href="/pages/reference/youtube" class="sidebar-menu-item ${
                    currentPath === '/pages/reference/youtube/' &&
                    'sidebar-highlight'
                  }">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="/pages/reference/practice" class="sidebar-menu-item ${
                    currentPath === '/pages/reference/practice/' &&
                    'sidebar-highlight'
                  }">
                    Practice
                  </a>
                </li>
              </ul>
            </aside>
      `;
  }

  if (currentPath === '/') {
    document.querySelector('.sidebar').innerHTML = chartSidebar();
  } else if (
    currentPath === '/pages/reference/youtube/' ||
    currentPath === '/pages/reference/practice/'
  ) {
    document.querySelector('.sidebar').innerHTML = referenceSidebar();
  }
  return;
}

export function sidebarMenuHighlight() {
  const menuLinks = document.querySelectorAll('aside ul li button');
  const charts = document.querySelectorAll('.sec-charts article');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + window.innerHeight / 5;
    for (let index = 0; index < charts.length; index++) {
      const chartTop = charts[index].offsetTop;
      const chartBottom = chartTop + charts[index].offsetHeight + 60;
      if (scrollPosition >= chartTop && scrollPosition < chartBottom) {
        menuLinks[index].classList.add('sidebar-highlight');
      } else {
        menuLinks[index].classList.remove('sidebar-highlight');
      }
    }
  });
}

export function sidebarScrollEvent() {
  const sidebarBtnList = document.querySelectorAll('.sidebar-menu-list button');
  const articleList = document.querySelectorAll('.sec-charts article');

  for (let i = 0; i < sidebarBtnList.length; i++) {
    sidebarBtnList[i].addEventListener('click', () => {
      window.scrollTo({
        top: articleList[i].offsetTop - 80,
      });
    });
  }
}

export function sidebarToggleEvent() {
  const sidebarToggleBtn = document.querySelector('#sidebar-check-btn');
  const sidebarToggleLabel = document.querySelector('.sidebar-check-label');

  sidebarToggleBtn.addEventListener('click', () => {
    sidebarToggleLabel.classList.toggle('rotate');
  });
}
