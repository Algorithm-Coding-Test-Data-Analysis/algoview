function getYearTypeChart(data, lang, charts) {
  const type = lang;
  // 받아온 데이터
  const yearType = data[type]['year_type'];
  // 데이터 레이블
  const yearTypelabels = [];
  // 데이터 값
  const yearTypeData = [];

  // 데이터 레이블 세팅 : ‘0000’은 연도가 아니라서 제외
  yearTypelabels.push(
    ...Object.keys(yearType[Object.keys(yearType)[0]]).filter(
      (v) => v !== '0000'
    )
  );

  // 데이터 값 세팅 : ‘0000’은 연도가 아니라서 제외
  for (const key in yearType) {
    let tempData = [];

    for (const year in yearType[key]) {
      year !== '0000' && tempData.push(yearType[key][year]);
    }

    // 데이터 값이 null이 아닐 경우에만 data 세팅
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i]) {
        let chartData = {
          label: key,
          data: tempData,
          // borderWidth: 1,
        };
        yearTypeData.push(chartData);
        break;
      }
    }
  }

  // 년도별 유형(year_type) 차트 세팅
  let yearTypeChart = new Chart(document.querySelector('#year-type-chart'), {
    type: 'bar',
    data: {
      labels: yearTypelabels,
      datasets: yearTypeData,
    },
    options: {
      // maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: '연도별 문제유형',
        },
      },
      scales: {
        x: {
          stacked: true,
          // display: false,
        },
        y: {
          stacked: true,
          // display: false,
          beginAtZero: true,
        },
      },
    },
  });

  charts.push(yearTypeChart);
}
export default getYearTypeChart;
