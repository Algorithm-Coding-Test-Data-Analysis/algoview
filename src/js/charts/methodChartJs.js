function getMethodDataJs(data, lang, charts) {
  if (lang === 'js') {
    // 종합 메소드 모듈 빈도수
    const methodCountData = [];
    for (const key in data['js']['function_method_sort']) {
      methodCountData.push(data['js']['function_method_sort'][key]);
    }
    const methodCountLabels = Object.keys(data['js']['function_method_sort']);

    // 전체 메소드 유형 모음
    const methodCountChart = new Chart(
      document.getElementById('method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: methodCountLabels,
          datasets: [
            {
              data: methodCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Method Count Chart',
              font: {
                size: 16,
                weight: 'bold',
              },
            },
            legend: {
              display: false,
            },
          },
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

    charts.push(methodCountChart);
  }
}

export default getMethodDataJs;
