import { isDarkMode } from './darkmode.js';
import getCategoryLevelMethod from './charts/categoryLevelMethod.js';
import getCategoryProblemType from './charts/categoryProblemType.js';
import getCategoryYearCompany from './charts/categoryYearCompany.js';

let data;
let lang = 'py';
let charts = [];
const URL = 'https://algoview.co.kr/dataAnalysis/notebook/chart_data.json';

Chart.defaults.color = isDarkMode ? '#fff' : '#272b33';

// Chart.defaults.font.size = '16';
// Chart.defaults.borderColor = '#36A2EB';
console.dir(Chart);
// Chart.defaults.plugins.legend.labels.padding = 15;
// Chart.defaults.plugins.legend.fullSize = false;

function setCharts() {
  getCategoryLevelMethod([data, lang, charts]);
  getCategoryProblemType([data, lang, charts]);
  getCategoryYearCompany([data, lang, charts]);
  showOnlyDrawnCanvas(); //그려진 캔버스만 보여줌
}

export function updateCharts(mode) {
  charts.map((chart) => chart.destroy());
  charts = [];
  Chart.defaults.color = mode ? '#fff' : '#272b33';
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

function resetHiddenClass() {
  canvasList.forEach((li) => {
    li.classList.remove('hidden');
  });
}
