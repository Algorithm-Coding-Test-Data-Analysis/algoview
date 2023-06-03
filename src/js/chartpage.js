import getProblemTypeData from './charts/problemTypeChart.js';
import getCompanyData from './charts/companyChart.js';
import getLevelDataJs from './charts/levelChartJS.js';
import getLevelDataPy from './charts/levelChartPy.js';
import getMethodDataJs from './charts/methodChartJs.js';
import getMethodDataPy from './charts/methodChartPy.js';
import getProblemTypeMethod from './charts/problemTypeMethodChart.js';

let lang = 'py';
let charts = [];
const URL = '../../src/dummydata/chart_data.json';

function setCharts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      getCompanyData(data, lang, charts);
      getProblemTypeData(data, lang, charts);
      getLevelDataJs(data, lang, charts);
      getLevelDataPy(data, lang, charts);
      getMethodDataJs(data, lang, charts);
      getMethodDataPy(data, lang, charts);
      getProblemTypeMethod(data, lang, charts);
    });
}

function updateCharts() {
  charts.map((chart) => chart.destroy());
  charts = [];
  setCharts(lang);
}

const $toggle = document.getElementById('lang-btn');

$toggle.addEventListener('click', () => {
  lang = lang === 'py' ? 'js' : 'py';
  updateCharts();
});

setCharts();
