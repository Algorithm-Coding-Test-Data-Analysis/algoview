import scrollToTop from './topbutton.js';
import { updateCharts } from './chartpage.js';

let lang = 'py';
const $pyBtn = document.getElementById('py-btn');
const $jsBtn = document.getElementById('js-btn');

$pyBtn.addEventListener('click', (e) => {
  lang = 'py';
  changeLang(e);
});

$jsBtn.addEventListener('click', (e) => {
  lang = 'js';
  changeLang(e);
});

function changeLang(e) {
  updateCharts({ lang });
  changeLengBtnStyle(e);
  scrollToTop();
}

/* 언어 버튼 선택 시 스타일 변경 */
function changeLengBtnStyle(event) {
  if (event.target.id === 'js-btn') {
    $jsBtn.classList.add('selected-btn');
    $pyBtn.classList.remove('selected-btn');
  } else if (event.target.id === 'py-btn') {
    $jsBtn.classList.remove('selected-btn');
    $pyBtn.classList.add('selected-btn');
  }
}
