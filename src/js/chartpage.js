import getProblemTypeData from './charts/problemTypeChart.js';
import getCompanyData from './charts/companyChart.js';
import getLevelDataJs from './charts/levelChartJS.js';
import getLevelDataPy from './charts/levelChartPy.js';
import getMethodDataJs from './charts/methodChartJs.js';
import getMethodDataPy from './charts/methodChartPy.js';
import getProblemTypeMethod from './charts/problemTypeMethodChart.js';
import getProblemTypeFunctionData from './charts/problemTypeFunctionChart.js';
import getProblemTypeFunctionMethodData from './charts/problemTypeFunctionMethodChart.js';
import getCategoryLevelMethod from './charts/_categoryLevelMethod.js';
import getCategoryProblemType from './charts/_categoryProblemType.js';
import getCategoryYearCompany from './charts/_categoryYearCompany.js';

let lang = 'py';
let charts = [];
const URL = '../../src/dummydata/chart_data.json';

let data;

fetch(URL)
.then((response) => response.json())
.then((json) => {
  data = json;
  setCharts()
});

function setCharts() {
      getCompanyData(data, lang, charts);
      getProblemTypeData(data, lang, charts);
      getLevelDataJs(data, lang, charts);
      getLevelDataPy(data, lang, charts);
      getMethodDataJs(data, lang, charts);
      getMethodDataPy(data, lang, charts);
      getProblemTypeMethod(data, lang, charts);
      getProblemTypeFunctionData(data, lang, charts);
      getProblemTypeFunctionMethodData(data, lang, charts);
      getCategoryLevelMethod([data, lang, charts]);
      getCategoryProblemType([data, lang, charts]);
      getCategoryYearCompany([data, lang, charts]);
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
