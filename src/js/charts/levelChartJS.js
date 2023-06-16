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
    if (data.js.level_problem_type_ratio.level0) {
      const level0ProblemTypeData = [];
      for (const key in data['js']['level_problem_type_ratio']['level0']) {
        level0ProblemTypeData.push(
          data['js']['level_problem_type_ratio']['level0'][key]
        );
      }
      const level0ProblemTypeLabels = Object.keys(
        data['js']['level_problem_type_ratio']['level0']
      );
      // 레벨별 문제 유형 비율 레벨 0
      const level0ProblemTypeCanvas = document.getElementById(
        'level0-problem-type-chart'
      );
      createToolTip(level0ProblemTypeCanvas, data, 'level_problem_type_ratio');
      const level0ProblemTypeChart = new Chart(level0ProblemTypeCanvas, {
        type: 'doughnut',
        data: {
          labels: level0ProblemTypeLabels,
          datasets: [
            {
              data: level0ProblemTypeData,
              backgroundColor: [
                '#36a2ebaa',
                '#ff6384aa',
                '#4bc0c0aa',
                '#ff9f40aa',
                '#9966ffaa',
                '#ffcd56aa',
                '#c9cbcfaa',
              ],
              borderColor: '#ffffff',
              borderWidth: 1,
            },
          ],
        },
      });
      charts.push(level0ProblemTypeChart);
    }

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

    if (data.js.level_problem_type_ratio.level4) {
      // 레벨별 문제 유형 비율 level 4
      const level4ProblemTypeData = [];
      for (const key in data['js']['level_problem_type_ratio']['level4']) {
        level4ProblemTypeData.push(
          data['js']['level_problem_type_ratio']['level4'][key]
        );
      }
      const level4ProblemTypeLabels = Object.keys(
        data['js']['level_problem_type_ratio']['level4']
      );

      // 레벨별 문제 유형 비율 레벨 4
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
        }
      );
      charts.push(level4ProblemTypeChart);
    }

    if (data.js.level_problem_type_ratio.level5) {
      // 레벨별 문제 유형 비율 level 5
      const level5ProblemTypeData = [];
      for (const key in data['js']['level_problem_type_ratio']['level5']) {
        level5ProblemTypeData.push(
          data['js']['level_problem_type_ratio']['level5'][key]
        );
      }
      const level5ProblemTypeLabels = Object.keys(
        data['js']['level_problem_type_ratio']['level5']
      );

      // 레벨별 문제 유형 비율 레벨 5
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
        }
      );

      charts.push(level5ProblemTypeChart);
    }

    // 레벨별 메서드 수 level 0
    // const level0PerFunctionMethodData = [];
    // for (const key in data['js']['level_per_function_method']['level0']) {
    //   level0PerFunctionMethodData.push(
    //     data['js']['level_per_function_method']['level0'][key]
    //   );
    // }
    // const level0PerFunctionMethodLabels = Object.keys(
    //   data['js']['level_per_function_method']['level0']
    // );
    const level0PerFunctionMethodData = [];
    const level0PerFunctionMethodLabels = [];

    let sortLevelMethod = Object.entries(
      data['js']['level_per_function_method']['level0']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sortLevelMethod) {
      level0PerFunctionMethodData.push(element[1]);
      level0PerFunctionMethodLabels.push(element[0]);
    }

    // 레벨별 메서드 수 level 1
    // const level1PerFunctionMethodData = [];
    // for (const key in data['js']['level_per_function_method']['level1']) {
    //   level1PerFunctionMethodData.push(
    //     data['js']['level_per_function_method']['level1'][key]
    //   );
    // }
    // const level1PerFunctionMethodLabels = Object.keys(
    //   data['js']['level_per_function_method']['level1']
    // );
    const level1PerFunctionMethodData = [];
    const level1PerFunctionMethodLabels = [];

    sortLevelMethod = Object.entries(
      data['js']['level_per_function_method']['level1']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sortLevelMethod) {
      level1PerFunctionMethodData.push(element[1]);
      level1PerFunctionMethodLabels.push(element[0]);
    }

    // 레벨별 메서드 수 level 2
    // const level2PerFunctionMethodData = [];
    // for (const key in data['js']['level_per_function_method']['level2']) {
    //   level2PerFunctionMethodData.push(
    //     data['js']['level_per_function_method']['level2'][key]
    //   );
    // }
    // const level2PerFunctionMethodLabels = Object.keys(
    //   data['js']['level_per_function_method']['level2']
    // );
    const level2PerFunctionMethodData = [];
    const level2PerFunctionMethodLabels = [];

    sortLevelMethod = Object.entries(
      data['js']['level_per_function_method']['level2']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sortLevelMethod) {
      level2PerFunctionMethodData.push(element[1]);
      level2PerFunctionMethodLabels.push(element[0]);
    }

    // 레벨별 메서드 수 level 3
    // const level3PerFunctionMethodData = [];
    // for (const key in data['js']['level_per_function_method']['level3']) {
    //   level3PerFunctionMethodData.push(
    //     data['js']['level_per_function_method']['level3'][key]
    //   );
    // }
    // const level3PerFunctionMethodLabels = Object.keys(
    //   data['js']['level_per_function_method']['level3']
    // );
    const level3PerFunctionMethodData = [];
    const level3PerFunctionMethodLabels = [];

    sortLevelMethod = Object.entries(
      data['js']['level_per_function_method']['level3']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sortLevelMethod) {
      level3PerFunctionMethodData.push(element[1]);
      level3PerFunctionMethodLabels.push(element[0]);
    }

    if (data.js.level_per_function_method.level4) {
      // 레벨별 메서드 수 level 4
      // const level4PerFunctionMethodData = [];
      // for (const key in data['js']['level_per_function_method']['level4']) {
      //   level4PerFunctionMethodData.push(
      //     data['js']['level_per_function_method']['level4'][key]
      //   );
      // }
      // const level4PerFunctionMethodLabels = Object.keys(
      //   data['js']['level_per_function_method']['level4']
      // );
      const level4PerFunctionMethodData = [];
      const level4PerFunctionMethodLabels = [];

      sortLevelMethod = Object.entries(
        data['js']['level_per_function_method']['level4']
      ).sort((a, b) => b[1] - a[1]);

      for (let element of sortLevelMethod) {
        level4PerFunctionMethodData.push(element[1]);
        level4PerFunctionMethodLabels.push(element[0]);
      }

      // 전체 메소드 유형 level 4
      const level4PerFunctionMethodChart = new Chart(
        document.getElementById('level4-method-count-chart'),
        {
          type: 'bar',
          data: {
            labels: level4PerFunctionMethodLabels,
            datasets: [
              {
                data: level4PerFunctionMethodData,
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
          },
        }
      );
      charts.push(level4PerFunctionMethodChart);
    }

    if (data.js.level_per_function_method.level5) {
      // 레벨별 메서드 수 level 5
      // const level5PerFunctionMethodData = [];
      // for (const key in data['js']['level_per_function_method']['level5']) {
      //   level5PerFunctionMethodData.push(
      //     data['js']['level_per_function_method']['level5'][key]
      //   );
      // }
      // const level5PerFunctionMethodLabels = Object.keys(
      //   data['js']['level_per_function_method']['level5']
      // );
      const level5PerFunctionMethodData = [];
      const level5PerFunctionMethodLabels = [];

      sortLevelMethod = Object.entries(
        data['js']['level_per_function_method']['level5']
      ).sort((a, b) => b[1] - a[1]);

      for (let element of sortLevelMethod) {
        level5PerFunctionMethodData.push(element[1]);
        level5PerFunctionMethodLabels.push(element[0]);
      }

      // 전체 메소드 유형 level 5
      const level5PerFunctionMethodChart = new Chart(
        document.getElementById('level5-method-count-chart'),
        {
          type: 'bar',
          data: {
            labels: level5PerFunctionMethodLabels,
            datasets: [
              {
                data: level5PerFunctionMethodData,
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
          },
        }
      );
      charts.push(level5PerFunctionMethodChart);
    }

    // 레벨별 문제수
    const levelCountCanvas = document.getElementById('level-count-chart');
    createToolTip(levelCountCanvas, data, 'level_problem_name');
    const levelCountChart = new Chart(levelCountCanvas, {
      type: 'doughnut',
      data: {
        labels: levelCountLabels,
        datasets: [
          {
            data: levelCountData,
            backgroundColor: [
              '#36a2ebaa',
              '#ff6384aa',
              '#4bc0c0aa',
              '#ff9f40aa',
              '#9966ffaa',
              '#ffcd56aa',
              '#c9cbcfaa',
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        ],
      },
    });

    // 레벨별 유형별 문제수
    const levelProblemTypeCountCanvas = document.getElementById(
      'level-problem-type-count-chart'
    );
    createToolTip(levelProblemTypeCountCanvas, data, 'level_problem_type');
    const levelProblemTypeCountChart = new Chart(levelProblemTypeCountCanvas, {
      type: 'doughnut',
      data: {
        labels: levelProblemTypeCountLabels,
        datasets: [
          {
            data: levelProblemTypeCountData,
            backgroundColor: [
              '#36a2ebaa',
              '#ff6384aa',
              '#4bc0c0aa',
              '#ff9f40aa',
              '#9966ffaa',
              '#ffcd56aa',
              '#c9cbcfaa',
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        ],
      },
    });

    // 레벨별 문제 유형 비율 레벨 1
    const level1ProblemTypeCanvas = document.getElementById(
      'level1-problem-type-chart'
    );
    createToolTip(level1ProblemTypeCanvas, data, 'level_problem_type_ratio');
    const level1ProblemTypeChart = new Chart(level1ProblemTypeCanvas, {
      type: 'doughnut',
      data: {
        labels: level1ProblemTypeLabels,
        datasets: [
          {
            data: level1ProblemTypeData,
            backgroundColor: [
              '#36a2ebaa',
              '#ff6384aa',
              '#4bc0c0aa',
              '#ff9f40aa',
              '#9966ffaa',
              '#ffcd56aa',
              '#c9cbcfaa',
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        ],
      },
    });

    // 레벨별 문제 유형 비율 레벨 2
    const level2ProblemTypeCanvas = document.getElementById(
      'level2-problem-type-chart'
    );
    createToolTip(level2ProblemTypeCanvas, data, 'level_problem_type_ratio');
    const level2ProblemTypeChart = new Chart(level2ProblemTypeCanvas, {
      type: 'doughnut',
      data: {
        labels: level2ProblemTypeLabels,
        datasets: [
          {
            data: level2ProblemTypeData,
            backgroundColor: [
              '#36a2ebaa',
              '#ff6384aa',
              '#4bc0c0aa',
              '#ff9f40aa',
              '#9966ffaa',
              '#ffcd56aa',
              '#c9cbcfaa',
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        ],
      },
    });

    // 레벨별 문제 유형 비율 레벨 3
    const level3ProblemTypeCanvas = document.getElementById(
      'level3-problem-type-chart'
    );
    createToolTip(level3ProblemTypeCanvas, data, 'level_problem_type_ratio');
    const level3ProblemTypeChart = new Chart(level3ProblemTypeCanvas, {
      type: 'doughnut',
      data: {
        labels: level3ProblemTypeLabels,
        datasets: [
          {
            data: level3ProblemTypeData,
            backgroundColor: [
              '#36a2ebaa',
              '#ff6384aa',
              '#4bc0c0aa',
              '#ff9f40aa',
              '#9966ffaa',
              '#ffcd56aa',
              '#c9cbcfaa',
            ],
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        ],
      },
    });

    // 전체 메소드 유형 level 0
    const level0PerFunctionMethodCanvas = document.getElementById(
      'level0-method-count-chart'
    );
    createToolTip(
      level0PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const level0PerFunctionMethodChart = new Chart(
      level0PerFunctionMethodCanvas,
      {
        type: 'bar',
        data: {
          labels: level0PerFunctionMethodLabels,
          datasets: [
            {
              data: level0PerFunctionMethodData,
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
      }
    );

    // 전체 메소드 유형 level 1
    const level1PerFunctionMethodCanvas = document.getElementById(
      'level1-method-count-chart'
    );
    createToolTip(
      level1PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const level1PerFunctionMethodChart = new Chart(
      level1PerFunctionMethodCanvas,
      {
        type: 'bar',
        data: {
          labels: level1PerFunctionMethodLabels,
          datasets: [
            {
              data: level1PerFunctionMethodData,
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
      }
    );

    // 전체 메소드 유형 level 2
    const level2PerFunctionMethodCanvas = document.getElementById(
      'level2-method-count-chart'
    );
    createToolTip(
      level2PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const level2PerFunctionMethodChart = new Chart(
      level2PerFunctionMethodCanvas,
      {
        type: 'bar',
        data: {
          labels: level2PerFunctionMethodLabels,
          datasets: [
            {
              data: level2PerFunctionMethodData,
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
      }
    );

    // 전체 메소드 유형 level 3
    const level3PerFunctionMethodCanvas = document.getElementById(
      'level3-method-count-chart'
    );
    createToolTip(
      level3PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const level3PerFunctionMethodChart = new Chart(
      level3PerFunctionMethodCanvas,
      {
        type: 'bar',
        data: {
          labels: level3PerFunctionMethodLabels,
          datasets: [
            {
              data: level3PerFunctionMethodData,
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
      }
    );

    charts.push(
      levelCountChart,
      levelProblemTypeCountChart,
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

function createToolTip(canvas, data, key) {
  canvas.previousElementSibling.childNodes[0].textContent =
    data['description'][key];
}

export default getLevelDataJs;
