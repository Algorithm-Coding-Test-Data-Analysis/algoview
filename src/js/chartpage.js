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
}

function updateCharts() {
  charts.map((chart) => chart.destroy());
  charts = [];
  setCharts();
}

fetch(URL)
  .then((response) => response.json())
  .then((json) => {
    data = json;
    setCharts();
  });

const $pyBtn = document.getElementById('py-btn');
const $jsBtn = document.getElementById('js-btn');

$pyBtn.addEventListener('click', (event) => {
  lang = 'py';
  updateCharts();
  showOnlyPyCanvas();
  changeLengBtnStyle(event);
  scrollToTop();
});
$jsBtn.addEventListener('click', (event) => {
  lang = 'js';
  updateCharts();
  showOnlyJsCanvas();
  changeLengBtnStyle(event);
  scrollToTop();
});

/* 언어 종류에 따른 캔버스 숨김 */
// py만 있는 차트
const $pyOnlyChart1 = document.getElementById(
  'problem-type-function-method-chart'
).parentNode;
const $pyOnlyChart2 = document.getElementById(
  'problem-type-function-chart'
).parentNode;
// js만 있는 차트
const $jsOnlyChart1 = document.getElementById('packJun-chart').parentNode;
const $jsOnlyChart2 = document.getElementById('kakao-chart').parentNode;
const $jsOnlyChart3 = document.getElementById('programmers-chart').parentNode;

function showOnlyPyCanvas() {
  $jsOnlyChart1.classList.add('hidden');
  $jsOnlyChart2.classList.add('hidden');
  $jsOnlyChart3.classList.add('hidden');

  $pyOnlyChart1.classList.remove('hidden');
  $pyOnlyChart2.classList.remove('hidden');
}

function showOnlyJsCanvas() {
  $jsOnlyChart1.classList.remove('hidden');
  $jsOnlyChart2.classList.remove('hidden');
  $jsOnlyChart3.classList.remove('hidden');

  $pyOnlyChart1.classList.add('hidden');
  $pyOnlyChart2.classList.add('hidden');
}

// 언어 버튼 선택 시, 스타일 변경
function changeLengBtnStyle(event) {
  if(event.target.id === 'js-btn') {
    $jsBtn.classList.add('selected-btn');
    $pyBtn.classList.remove('selected-btn');
  }
  else if (event.target.id === 'py-btn') {
    $jsBtn.classList.remove('selected-btn');
    $pyBtn.classList.add('selected-btn');
  }
}