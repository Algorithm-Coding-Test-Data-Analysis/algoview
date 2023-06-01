const url =
  'https://raw.githubusercontent.com/Algorithm-Coding-Test-Data-Analysis/algoview/main/data.json';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // 레벨 별 메서드 카운트
    let methodCountLvData = [];
    for (const key in data['python']['countmethod']) {
      methodCountLvData.push(data['python']['countmethod'][key]);
    }
    console.log(methodCountLvData);

    // 레벨 별 메서드 카운트 차트
    var methodCountLvChart = new Chart(document.getElementById('level-chart'), {
      type: 'bar',
      data: {
        labels: ['LV0', 'LV1', 'LV2', 'LV3', 'LV4', 'LV5'],
        datasets: [
          {
            data: methodCountLvData,
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
    });
  });
