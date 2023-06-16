function getYearsChart(data, lang, charts) {
  const type = lang;
  // 받아온 데이터
  const years = data[type]['years'];
  // 데이터 레이블
  const yearslabels = [];
  // 데이터 값
  const yearsData = [];
  const chartData = [];

  document.getElementById(
    'years-chart'
  ).previousElementSibling.childNodes[0].textContent =
    data['description']['years'];

  // 데이터 레이블 세팅
  yearslabels.push(...Object.keys(years).filter((v) => v !== '0000'));
  yearslabels.sort((a, b) => a - b);

  // 데이터 값 세팅
  for (const key of yearslabels) {
    chartData.push(years[key]);
  }
  yearsData.push({
    label: '연도별 수집 문제수',
    data: chartData,
    backgroundColor: [
      '#36a2ebaa',
      '#ff6384aa',
      '#4bc0c0aa',
      '#ff9f40aa',
      '#9966ffaa',
      '#ffcd56aa',
      '#c9cbcfaa',
    ],
  });

  // 연도별 수집 문제수(years) 차트 세팅
  let yearsChart = new Chart(document.querySelector('#years-chart'), {
    type: 'bar',
    data: {
      labels: yearslabels,
      datasets: yearsData,
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  charts.push(yearsChart);
}

export default getYearsChart;
