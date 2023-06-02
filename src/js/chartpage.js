import getProblemTypeData from './charts/problemTypeChart.js';
import getCompanyData from './charts/companyChart.js';

let lang = 'py';
let charts = [];
const URL = '../../src/dummydata/chart_data.json';

function setCharts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      getCompanyData(data, lang, charts);
      getProblemTypeData(data, lang, charts);
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
