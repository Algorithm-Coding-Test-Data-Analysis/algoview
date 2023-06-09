export function sideBarHTML() {
  const currentPath = window.location.pathname;

  function chartSidebar() {
    return `
      <aside class="sidebar-menu-container">
              <ul class="sidebar-menu-list">
                <li>
                  <a href="#level" class="sidebar-menu-item">
                    레벨
                  </a>
                </li>
                <li>
                  <a href="#method" class="sidebar-menu-item">
                    메서드
                  </a>
                </li>
                <li>
                  <a href="#problem" class="sidebar-menu-item">
                    문제 유형
                  </a>
                </li>
                <li>
                  <a href="#year" class="sidebar-menu-item">
                    출제 연도
                  </a>
                </li>
                <li>
                  <a href="#company" class="sidebar-menu-item">
                    출제 업체
                  </a>
                </li>
              </ul>
            </aside>
      `;
  }

  function referenceSidebar() {
    return `
      <aside class="sidebar-menu-container">
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
  const menuLinks = document.querySelectorAll('aside ul li a');
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
