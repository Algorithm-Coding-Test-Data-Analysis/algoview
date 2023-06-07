function getLevelDataJs(data, lang, charts) {
  if (lang === 'js') {
    // 레벨별 문제수
    const levelCountData = [];
    for (const key in data['js']['level_problem_name']) {
      levelCountData.push(data['js']['level_problem_name'][key]);
    }
    const levelCountLabels = Object.keys(data['js']['level_problem_name']);

    // 레벨별 유형별 문제수
    const levelProblemTypeCountData = [];
    for (const key in data['js']['level_problem_type']) {
      levelProblemTypeCountData.push(data['js']['level_problem_type'][key]);
    }
    const levelProblemTypeCountLabels = Object.keys(
      data['js']['level_problem_type']
    );

    // 레벨별 문제 유형 비율 level 0
    const level0ProblemTypeData = [];
    for (const key in data['js']['level_problem_type_ratio']['level0']) {
      level0ProblemTypeData.push(
        data['js']['level_problem_type_ratio']['level0'][key]
      );
    }
    const level0ProblemTypeLabels = Object.keys(
      data['js']['level_problem_type_ratio']['level0']
    );

    // 레벨별 문제 유형 비율 level 1
    const level1ProblemTypeData = [];
    for (const key in data['js']['level_problem_type_ratio']['level1']) {
      level1ProblemTypeData.push(
        data['js']['level_problem_type_ratio']['level1'][key]
      );
    }
    const level1ProblemTypeLabels = Object.keys(
      data['js']['level_problem_type_ratio']['level1']
    );

    // 레벨별 문제 유형 비율 level 2
    const level2ProblemTypeData = [];
    for (const key in data['js']['level_problem_type_ratio']['level2']) {
      level2ProblemTypeData.push(
        data['js']['level_problem_type_ratio']['level2'][key]
      );
    }
    const level2ProblemTypeLabels = Object.keys(
      data['js']['level_problem_type_ratio']['level2']
    );

    // 레벨별 문제 유형 비율 level 3
    const level3ProblemTypeData = [];
    for (const key in data['js']['level_problem_type_ratio']['level3']) {
      level3ProblemTypeData.push(
        data['js']['level_problem_type_ratio']['level3'][key]
      );
    }
    const level3ProblemTypeLabels = Object.keys(
      data['js']['level_problem_type_ratio']['level3']
    );

    // 레벨별 메서드 수 level 0
    const level0PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level0']) {
      level0PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level0'][key]
      );
    }
    const level0PerFunctionMethodLabels = Object.keys(
      data['js']['level_per_function_method']['level0']
    );

    // 레벨별 메서드 수 level 1
    const level1PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level1']) {
      level1PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level1'][key]
      );
    }
    const level1PerFunctionMethodLabels = Object.keys(
      data['js']['level_per_function_method']['level1']
    );

    // 레벨별 메서드 수 level 2
    const level2PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level2']) {
      level2PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level2'][key]
      );
    }
    const level2PerFunctionMethodLabels = Object.keys(
      data['js']['level_per_function_method']['level2']
    );

    // 레벨별 메서드 수 level 3
    const level3PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level3']) {
      level3PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level3'][key]
      );
    }
    const level3PerFunctionMethodLabels = Object.keys(
      data['js']['level_per_function_method']['level3']
    );

    // 레벨별 문제수
    const levelCountChart = new Chart(
      document.getElementById('level-count-chart'),
      {
        type: 'doughnut',
        data: {
          labels: levelCountLabels,
          datasets: [
            {
              data: levelCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 유형별 문제수
    const levelProblemTypeCountChart = new Chart(
      document.getElementById('level-problem-type-count-chart'),
      {
        type: 'doughnut',
        data: {
          labels: levelProblemTypeCountLabels,
          datasets: [
            {
              data: levelProblemTypeCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율 레벨 0
    const level0ProblemTypeChart = new Chart(
      document.getElementById('level0-problem-type-chart'),
      {
        type: 'doughnut',
        data: {
          labels: level0ProblemTypeLabels,
          datasets: [
            {
              data: level0ProblemTypeData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(60, 170, 170, 0.8)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(60, 170, 170, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율 레벨 1
    const level1ProblemTypeChart = new Chart(
      document.getElementById('level1-problem-type-chart'),
      {
        type: 'doughnut',
        data: {
          labels: level1ProblemTypeLabels,
          datasets: [
            {
              data: level1ProblemTypeData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(60, 170, 170, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(180, 180, 25, 0.8)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(60, 170, 170, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(180, 180, 25, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율 레벨 2
    const level2ProblemTypeChart = new Chart(
      document.getElementById('level2-problem-type-chart'),
      {
        type: 'doughnut',
        data: {
          labels: level2ProblemTypeLabels,
          datasets: [
            {
              data: level2ProblemTypeData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(60, 170, 170, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(60, 170, 170, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율 레벨 3
    const level3ProblemTypeChart = new Chart(
      document.getElementById('level3-problem-type-chart'),
      {
        type: 'doughnut',
        data: {
          labels: level3ProblemTypeLabels,
          datasets: [
            {
              data: level3ProblemTypeData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 전체 메소드 유형 level 0
    const level0PerFunctionMethodChart = new Chart(
      document.getElementById('level0-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level0PerFunctionMethodLabels,
          datasets: [
            {
              data: level0PerFunctionMethodData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'level 0 Method Count Chart',
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

    // 전체 메소드 유형 level 1
    const level1PerFunctionMethodChart = new Chart(
      document.getElementById('level1-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level1PerFunctionMethodLabels,
          datasets: [
            {
              data: level1PerFunctionMethodData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'level 1 Method Count Chart',
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

    // 전체 메소드 유형 level 2
    const level2PerFunctionMethodChart = new Chart(
      document.getElementById('level2-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level2PerFunctionMethodLabels,
          datasets: [
            {
              data: level2PerFunctionMethodData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'level 2 Method Count Chart',
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

    // 전체 메소드 유형 level 3
    const level3PerFunctionMethodChart = new Chart(
      document.getElementById('level3-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level3PerFunctionMethodLabels,
          datasets: [
            {
              data: level3PerFunctionMethodData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'level 3 Method Count Chart',
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

    charts.push(
      levelCountChart,
      levelProblemTypeCountChart,
      level0ProblemTypeChart,
      level1ProblemTypeChart,
      level2ProblemTypeChart,
      level3ProblemTypeChart,
      level0PerFunctionMethodChart,
      level1PerFunctionMethodChart,
      level2PerFunctionMethodChart,
      level3PerFunctionMethodChart
    );
  }
}
export default getLevelDataJs;
