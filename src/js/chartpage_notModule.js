// const url ='https://raw.githubusercontent.com/Algorithm-Coding-Test-Data-Analysis/algoview/main/data.json';

let lang = 'py';
let charts = [];
const URL = '../../src/dummydata/chart_data.json';

function setCharts(lang) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      let problemTypeCountData = [];

      if (lang === 'py') {
        for (const key in data['py']['problem_type_count']) {
          problemTypeCountData.push(data['py']['problem_type_count'][key]);
        }
        // console.log(problemTypeCountData);

        const problemTypeCountChart = new Chart(
          document.getElementById('problem-type-chart-1'),
          {
            type: 'bar',
            data: {
              labels: [
                '구현',
                '스택큐',
                '기타',
                '완전탐색',
                'DFSBFS',
                '해시',
                '그리디',
                '비트연산',
              ],
              datasets: [
                {
                  data: problemTypeCountData,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            },
          }
        );

        charts.push(problemTypeCountChart); // 차트 모으기!
      } else if (lang === 'js') {
        for (const key in data['js']['problem_type_count']) {
          problemTypeCountData.push(data['js']['problem_type_count'][key]);
        }

        // 레벨 별 메서드 카운트 차트
        const problemTypeCountChart = new Chart(
          document.getElementById('problem-type-chart-1'),
          {
            type: 'bar',
            data: {
              labels: [
                '구현',
                '스택큐',
                '기타',
                '완전탐색',
                'DFSBFS',
                '해시',
                '그리디',
                '비트연산',
              ],
              datasets: [
                {
                  data: problemTypeCountData,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            },
          }
        );

        charts.push(problemTypeCountChart); // 차트 모으기!
      }
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

setCharts(lang);
