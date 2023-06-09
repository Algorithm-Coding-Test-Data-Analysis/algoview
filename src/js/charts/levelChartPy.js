function getLevelDataPy(data, lang, charts) {
  if (lang === 'py') {
    // 레벨별 문제수
    const levelCountData = [];
    for (const key in data['py']['level_problem_name']) {
      levelCountData.push(data['py']['level_problem_name'][key]);
    }
    const levelCountLabels = Object.keys(data['py']['level_problem_name']);

    // 레벨별 유형별 문제수
    const levelProblemTypeCountata = [];
    for (const key in data['py']['level_problem_type']) {
      levelProblemTypeCountata.push(data['py']['level_problem_type'][key]);
    }
    const levelProblemTypeCountLabels = Object.keys(
      data['py']['level_problem_type']
    );

    // 레벨별 문제 유형 비율(lv0~lv3)
    // 레벨별 문제 유형 비율(lv0)
    const level0ProblemTypeData = [];
    for (const key in data['py']['level_problem_type_ratio']['level0']) {
      level0ProblemTypeData.push(
        data['py']['level_problem_type_ratio']['level0'][key]
      );
    }
    const level0ProblemTypeLabels = Object.keys(
      data['py']['level_problem_type_ratio']['level0']
    );

    // 레벨별 문제 유형 비율(lv1)
    const level1ProblemTypeData = [];
    for (const key in data['py']['level_problem_type_ratio']['level1']) {
      level1ProblemTypeData.push(
        data['py']['level_problem_type_ratio']['level1'][key]
      );
    }
    const level1ProblemTypeLabels = Object.keys(
      data['py']['level_problem_type_ratio']['level1']
    );

    // 레벨별 문제 유형 비율(lv2)
    const level2ProblemTypeData = [];
    for (const key in data['py']['level_problem_type_ratio']['level2']) {
      level2ProblemTypeData.push(
        data['py']['level_problem_type_ratio']['level2'][key]
      );
    }
    const level2ProblemTypeLabels = Object.keys(
      data['py']['level_problem_type_ratio']['level2']
    );

    // 레벨별 문제 유형 비율(lv3)
    const level3ProblemTypeData = [];
    for (const key in data['py']['level_problem_type_ratio']['level3']) {
      level3ProblemTypeData.push(
        data['py']['level_problem_type_ratio']['level3'][key]
      );
    }
    const level3ProblemTypeLabels = Object.keys(
      data['py']['level_problem_type_ratio']['level3']
    );

    // 레벨별 문제 유형 비율(lv4)
    if (data['py']['level_problem_type_ratio']['level4']) {
      const level4ProblemTypeData = [];
      for (const key in data['py']['level_problem_type_ratio']['level4']) {
        level4ProblemTypeData.push(
          data['py']['level_problem_type_ratio']['level4'][key]
        );
      }
      const level4ProblemTypeLabels = Object.keys(
        data['py']['level_problem_type_ratio']['level4']
      );

      const level4ProblemTypeChart = new Chart(
        document.getElementById('level4-problem-type-chart'),
        {
          type: 'doughnut',
          data: {
            labels: level4ProblemTypeLabels,
            datasets: [
              {
                data: level4ProblemTypeData,
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
      charts.push(level4ProblemTypeChart);
    }

    // 레벨별 문제 유형 비율(lv5)
    if (data['py']['level_problem_type_ratio']['level5']) {
      const level5ProblemTypeData = [];
      for (const key in data['py']['level_problem_type_ratio']['level5']) {
        level5ProblemTypeData.push(
          data['py']['level_problem_type_ratio']['level5'][key]
        );
      }
      const level5ProblemTypeLabels = Object.keys(
        data['py']['level_problem_type_ratio']['level5']
      );

      const level5ProblemTypeChart = new Chart(
        document.getElementById('level5-problem-type-chart'),
        {
          type: 'doughnut',
          data: {
            labels: level5ProblemTypeLabels,
            datasets: [
              {
                data: level5ProblemTypeData,
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
      charts.push(level5ProblemTypeChart);
    }

    // 레벨별 모듈 메소드(lv0~lv3)
    // 레벨별 모듈 메소드(lv0)
    const level0MethodCountData = [];
    for (const key in data['py']['level_per_function_method']['level0']) {
      level0MethodCountData.push(
        data['py']['level_per_function_method']['level0'][key]
      );
    }
    const level0MethodCountLabels = Object.keys(
      data['py']['level_per_function_method']['level0']
    );

    // 레벨별 모듈 메소드(lv1)
    const level1MethodCountData = [];
    for (const key in data['py']['level_per_function_method']['level1']) {
      level1MethodCountData.push(
        data['py']['level_per_function_method']['level1'][key]
      );
    }
    const level1MethodCountLabels = Object.keys(
      data['py']['level_per_function_method']['level1']
    );

    // 레벨별 모듈 메소드(lv2)
    const level2MethodCountData = [];
    for (const key in data['py']['level_per_function_method']['level2']) {
      level2MethodCountData.push(
        data['py']['level_per_function_method']['level2'][key]
      );
    }
    const level2MethodCountLabels = Object.keys(
      data['py']['level_per_function_method']['level2']
    );

    // 레벨별 모듈 메소드(lv3)
    const level3MethodCountData = [];
    for (const key in data['py']['level_per_function_method']['level3']) {
      level3MethodCountData.push(
        data['py']['level_per_function_method']['level3'][key]
      );
    }
    const level3MethodCountLabels = Object.keys(
      data['py']['level_per_function_method']['level3']
    );

    // 레벨별 모듈 메소드(lv4)
    if (data['py']['level_per_function_method']['level4']) {
      const level4MethodCountData = [];
      for (const key in data['py']['level_per_function_method']['level4']) {
        level4MethodCountData.push(
          data['py']['level_per_function_method']['level4'][key]
        );
      }
      const level4MethodCountLabels = Object.keys(
        data['py']['level_per_function_method']['level4']
      );

      const methodCountLv4Chart = new Chart(
        document.getElementById('level4-method-count-chart'),
        {
          type: 'bar',
          data: {
            labels: level4MethodCountLabels,
            datasets: [
              {
                data: level4MethodCountData,
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
                text: 'level 4 Method Count Chart',
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
      charts.push(methodCountLv4Chart);
    }

    // 레벨별 모듈 메소드(lv5)
    if (data['py']['level_per_function_method']['level5']) {
      const level5MethodCountData = [];
      for (const key in data['py']['level_per_function_method']['level5']) {
        level5MethodCountData.push(
          data['py']['level_per_function_method']['level5'][key]
        );
      }
      const level5MethodCountLabels = Object.keys(
        data['py']['level_per_function_method']['level5']
      );

      const methodCountLv5Chart = new Chart(
        document.getElementById('level5-method-count-chart'),
        {
          type: 'bar',
          data: {
            labels: level5MethodCountLabels,
            datasets: [
              {
                data: level5MethodCountData,
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
                text: 'level 5 Method Count Chart',
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
      charts.push(methodCountLv5Chart);
    }




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
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(225, 225, 0, 0.5)',
                'rgba(225, 120, 102, 0.5)',
              ],
              // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
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
              data: levelCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(225, 225, 0, 0.5)',
                'rgba(225, 120, 102, 0.5)',
              ],
              // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율(lv0~lv3)
    // 레벨별 문제 유형 비율(lv0)
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
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
              ],
              // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율(lv1)
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
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(225, 225, 0, 0.5)',
                'rgba(225, 120, 102, 0.5)',
                'rgba(205, 99, 105, 0.5)',
                'rgba(104, 52, 75, 0.5)',
                'rgba(85, 99, 150, 0.5)',
                'rgba(120, 162, 99, 0.5)',
              ],
              // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율(lv2)
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
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(225, 225, 0, 0.5)',
                'rgba(225, 120, 102, 0.5)',
              ],
              // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 문제 유형 비율(lv3)
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
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(225, 225, 0, 0.5)',
              ],
              // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    // 레벨별 모듈 메소드(lv0~lv3)
    // 레벨별 모듈 메소드 (lv0)
    const methodCountLv0Chart = new Chart(
      document.getElementById('level0-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level0MethodCountLabels,
          datasets: [
            {
              label: 'Level 0 Method Count',
              data: level0MethodCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
              text: 'Level 0 Method Count Chart',
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

    // 레벨별 모듈 메소드 (lv1)
    const methodCountLv1Chart = new Chart(
      document.getElementById('level1-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level1MethodCountLabels,
          datasets: [
            {
              data: level1MethodCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
              text: 'Level 1 Method Count Chart',
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

    // 레벨별 모듈 메소드 (lv2)
    const methodCountLv2Chart = new Chart(
      document.getElementById('level2-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level2MethodCountLabels,
          datasets: [
            {
              data: level2MethodCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
              text: 'Level 2 Method Count Chart',
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

    // 레벨별 모듈 메소드 (lv3)
    const methodCountLv3Chart = new Chart(
      document.getElementById('level3-method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: level3MethodCountLabels,
          datasets: [
            {
              data: level3MethodCountData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
              text: 'Level 3 Method Count Chart',
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
      methodCountLv0Chart,
      methodCountLv1Chart,
      methodCountLv2Chart,
      methodCountLv3Chart
    );
  }
}
export default getLevelDataPy;
