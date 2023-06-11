export function sidebarHTML() {
  const currentPath = window.location.pathname;

  // 차트 페이지 사이드바
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
      <div class='sidebar-overlay'></div>
    `;
  }

  // 레퍼런스 페이지 사이드바
  function referenceSidebar() {
    return `
      <input id="sidebar-check-btn" type="checkbox" />
      <aside class="sidebar-menu-container refer">
        <label class="sidebar-check-label dark" for="sidebar-check-btn">
        </label>
        <ul class="sidebar-menu-list">
          <li>
            <a href="/pages/reference/youtube" class="sidebar-menu-item ${
              currentPath === '/pages/reference/youtube/' && 'sidebar-highlight'
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
      <div class='sidebar-overlay'></div>
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

// 스크롤 시, 차트 카테고리에 맞는 사이드바 메뉴에 하이라이트
export function sidebarMenuHighlight() {
  const menuLinks = document.querySelectorAll('aside ul li button');
  const charts = document.querySelectorAll('.sec-charts article');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset + window.innerHeight / 5;
    for (let index = 0; index < charts.length; index++) {
      const chartTop = charts[index].offsetTop;
      const chartBottom = chartTop + charts[index].offsetHeight + 60;
      if (scrollPosition >= chartTop && scrollPosition < chartBottom - 12) {
        menuLinks[index].classList.add('sidebar-highlight');
      } else {
        menuLinks[index].classList.remove('sidebar-highlight');
      }
    }
  });
}

// 사이드바 메뉴 클릭 시 해당하는 차트로 이동
export function sidebarScrollEvent() {
  const sidebarBtnList = document.querySelectorAll('.sidebar-menu-list button');
  const articleList = document.querySelectorAll('.sec-charts article');
  if (sidebarBtnList) {
    for (let i = 0; i < sidebarBtnList.length; i++) {
      sidebarBtnList[i].addEventListener('click', () => {
        const windowInnerWidth = window.innerWidth;
        let headerHeight = 80;
        windowInnerWidth >= 805 ? (headerHeight = 80) : (headerHeight = 50);

        window.scrollTo({
          top: articleList[i].offsetTop - headerHeight,
          behavior: 'instant',
        });
      });
    }
  }
}

// 사이드바를 열고 닫을 시 버튼안의 화살표의 방향을 조정
export function sidebarToggleEvent() {
  const sidebarToggleBtn = document.querySelector('#sidebar-check-btn');
  const sidebarToggleLabel = document.querySelector('.sidebar-check-label');

  sidebarToggleBtn.addEventListener('click', () => {
    sidebarToggleLabel.classList.toggle('rotate');
  });
}

// 사이드바 열려 있을 시, 사이드바 이외의 공간을 클릭하면 사이드바가 접히는 기능
export function sidebarDisplayEvent() {
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  const checkBox = document.querySelector('#sidebar-check-btn');
  const sidebarToggleLabel = document.querySelector('.sidebar-check-label');

  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      sidebarOverlay.style.display = 'block';
    } else {
      sidebarOverlay.style.display = 'none';
    }
  });
  sidebarOverlay.addEventListener('click', () => {
    checkBox.checked = false;
    sidebarOverlay.style.display = 'none';
    sidebarToggleLabel.classList.toggle('rotate');
  });
}
