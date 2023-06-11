function getProblemTypeData(data, lang, charts) {
  let problemType = [];
  let problemTypeCount = [];
  const PROBLEM_TYPE_DATA = data[lang]['problem_type_count'];
  const PROBLEM_TYPE_DESC = data['description']['problem_type_count'];
  const $canvas = document.getElementById('problem-type-count-chart');
  const $tooltip = $canvas.previousElementSibling.childNodes[0];
  $tooltip.textContent = PROBLEM_TYPE_DESC;

  for (const key in PROBLEM_TYPE_DATA) {
    problemType.push(key);
    problemTypeCount.push(PROBLEM_TYPE_DATA[key]);
  }

  const problemTypeCountChart = new Chart($canvas, {
    type: 'bar',
    data: {
      labels: problemType,
      datasets: [
        {
          data: problemTypeCount,
          backgroundColor: [
            '#36a2ebaa',
            '#ff6384aa',
            '#4bc0c0aa',
            '#ff9f40aa',
            '#9966ffaa',
            '#ffcd56aa',
            '#c9cbcfaa',
          ],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  charts.push(problemTypeCountChart); // 차트 모으기!
}

export default getProblemTypeData;
