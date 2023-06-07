export function sideBarHTML() {
  document.querySelector('.sidebar').innerHTML = `
  <aside class="sidebar-menu-container">
        <ul class="sidebar-menu-list">
          <li>
            <a href="#1.level" class="sidebar-menu-item">
              레벨
            </a>
          </li>
          <li>
            <a href="#2.method" class="sidebar-menu-item">
              메서드
            </a>
          </li>
          <li>
            <a href="#3.problem" class="sidebar-menu-item">
              문제 유형
            </a>
          </li>
          <li>
            <a href="#4.year" class="sidebar-menu-item">
              출제 연도
            </a>
          </li>
          <li>
            <a href="#5.company" class="sidebar-menu-item">
              출제 업체
            </a>
          </li>
        </ul>
      </aside>
  `;

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
