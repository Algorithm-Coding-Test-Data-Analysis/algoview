import getCategoryLevelMethod from './charts/categoryLevelMethod.js';
import getCategoryProblemType from './charts/categoryProblemType.js';
import getCategoryYearCompany from './charts/categoryYearCompany.js';

// 언어 버튼 선택 시 맨 위로 스크롤하는 함수
import scrollToTop from './topbutton.js';

let data;
let lang = 'py';
let charts = [];
const URL = 'https://algoview.co.kr/dataAnalysis/notebook/chart_data.json';

function setCharts() {
  getCategoryLevelMethod([data, lang, charts]);
  getCategoryProblemType([data, lang, charts]);
  getCategoryYearCompany([data, lang, charts]);
  showOnlyDrawnCanvas(); //그려진 캔버스만 보여줌
}

function updateCharts() {
  charts.map((chart) => chart.destroy());
  charts = [];
  setCharts();
}

(async () => {
  try {
    const res = await fetch(URL);
    if (res.status === 200) {
      data = await res.json();
      setCharts();
    } else throw res.statusText;
  } catch (err) {
    console.error('에러 발생!', err);
    alert('현재는 차트를 불러올 수 없습니다.');
    return;
  }
})();

const $pyBtn = document.getElementById('py-btn');
const $jsBtn = document.getElementById('js-btn');

$pyBtn.addEventListener('click', (event) => {
  lang = 'py';
  updateCharts();
  changeLengBtnStyle(event);
  scrollToTop();
});
$jsBtn.addEventListener('click', (event) => {
  lang = 'js';
  updateCharts();
  changeLengBtnStyle(event);
  scrollToTop();
});

/* 그려지지 않은 캔버스 숨김 */
const canvasList = [...document.querySelectorAll('.sec-charts li')];

function showOnlyDrawnCanvas() {
  resetHiddenClass();

  const chartList = charts.map((index) => {
    if (index.canvas) return index.canvas.parentNode;
  });
  canvasList.forEach((li) => {
    if (!chartList.includes(li)) {
      li.classList.add('hidden');
    }
  });
}
// hidden 클래스 모두 제거
function resetHiddenClass() {
  canvasList.forEach((li) => {
    li.classList.remove('hidden');
  });
}

/* 언어 버튼 선택 시, 스타일 변경 */
function changeLengBtnStyle(event) {
  if (event.target.id === 'js-btn') {
    $jsBtn.classList.add('selected-btn');
    $pyBtn.classList.remove('selected-btn');
  } else if (event.target.id === 'py-btn') {
    $jsBtn.classList.remove('selected-btn');
    $pyBtn.classList.add('selected-btn');
  }
}
