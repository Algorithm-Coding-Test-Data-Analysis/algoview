function getYearsChart(data, lang, charts) {
  const type = lang;
  // 받아온 데이터
  const years = data[type]['years'];
  // 데이터 레이블
  const yearslabels = [];
  // 데이터 값
  const yearsData = [];
  const chartData = [];

  // 데이터 레이블 세팅
  yearslabels.push(...Object.keys(years));
  yearslabels.sort((a, b) => a - b);

  // 데이터 값 세팅
  for (const key of yearslabels) {
    chartData.push(years[key]);
  }
  yearsData.push({
    label: '연도별 수집 문제수',
    data: chartData,
  });

  // 연도별 수집 문제수(years) 차트 세팅
  let yearsChart = new Chart(document.querySelector('#years-chart'), {
    type: 'bar',
    data: {
      labels: yearslabels,
      datasets: yearsData,
    },
    options: {
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
