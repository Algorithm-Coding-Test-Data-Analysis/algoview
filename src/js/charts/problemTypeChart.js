function getProblemTypeData(data, lang, charts) {
  let problemType = [];
  let problemTypeCount = [];
  const PROBLEM_TYPE_DATA = data[lang]['problem_type_count'];

  for (const key in PROBLEM_TYPE_DATA) {
    problemType.push(key);
    problemTypeCount.push(PROBLEM_TYPE_DATA[key]);
  }

  const problemTypeCountChart = new Chart(
    document.getElementById('problem-type-count-chart'),
    {
      type: 'bar',
      data: {
        labels: problemType,
        datasets: [
          {
            data: problemTypeCount,
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
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    }
  );

  charts.push(problemTypeCountChart); // 차트 모으기!
}

export default getProblemTypeData;
