import getCategoryLevelMethod from './charts/_categoryLevelMethod.js';
import getCategoryProblemType from './charts/_categoryProblemType.js';
import getCategoryYearCompany from './charts/_categoryYearCompany.js';

let lang = 'py';
let charts = [];
const URL = '../../src/dummydata/chart_data.json';

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

const $toggle = document.getElementById('lang-btn');

$toggle.addEventListener('click', () => {
  lang = lang === 'py' ? 'js' : 'py';
  updateCharts();
});

setCharts();
