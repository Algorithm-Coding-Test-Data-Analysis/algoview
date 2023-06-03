function getProblemTypeData(data, lang, charts) {
  let problemTypeCountData = [];

  for (const key in data[lang]['problem_type_count']) {
    problemTypeCountData.push(data[lang]['problem_type_count'][key]);
  }

  const problemTypeCountChart = new Chart(
    document.getElementById('problem-type-count-chart'),
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

export default getProblemTypeData;
