import getCategoryLevelMethod from './charts/categoryLevelMethod.js';
import getCategoryProblemType from './charts/categoryProblemType.js';
import getCategoryYearCompany from './charts/categoryYearCompany.js';

let lang = 'py';
let charts = [];
const URL = 'https://algoview.co.kr/src/dummydata/chart_data.json'; // 임시 주소 연결

function setCharts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      getCategoryLevelMethod([data, lang, charts]);
      getCategoryProblemType([data, lang, charts]);
      getCategoryYearCompany([data, lang, charts]);
    });
}

function updateCharts() {
  charts.map((chart) => chart.destroy());
  charts = [];
  setCharts();
}

// const $toggle = document.getElementById('lang-btn');

const $pyBtn = document.getElementById('py-btn');
const $jsBtn = document.getElementById('js-btn');

$pyBtn.addEventListener('click', () => {
  // lang = lang === 'py' ? 'js' : 'py';
  lang = 'py';
  updateCharts();
});
$jsBtn.addEventListener('click', () => {
  lang = 'js';
  updateCharts();
});

setCharts();
