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
        }
      );
      charts.push(level5ProblemTypeChart);
    }

    // 레벨별 모듈 메소드(lv0~lv3)
    // 레벨별 모듈 메소드(lv0)
    // const level0MethodCountData = [];
    // for (const key in data['py']['level_per_function_method']['level0']) {
    //   level0MethodCountData.push(
    //     data['py']['level_per_function_method']['level0'][key]
    //   );
    // }
    // const level0MethodCountLabels = Object.keys(
    //   data['py']['level_per_function_method']['level0']
    // );
    const level0MethodCountData = [];
    const level0MethodCountLabels = [];

    let sorted = Object.entries(
      data['py']['level_per_function_method']['level0']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sorted) {
      level0MethodCountLabels.push(element[0]);
      level0MethodCountData.push(element[1]);
    }

    // 레벨별 모듈 메소드(lv1)
    // const level1MethodCountData = [];
    // for (const key in data['py']['level_per_function_method']['level1']) {
    //   level1MethodCountData.push(
    //     data['py']['level_per_function_method']['level1'][key]
    //   );
    // }
    // const level1MethodCountLabels = Object.keys(
    //   data['py']['level_per_function_method']['level1']
    // );
    const level1MethodCountData = [];
    const level1MethodCountLabels = [];

    sorted = Object.entries(
      data['py']['level_per_function_method']['level1']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sorted) {
      level1MethodCountLabels.push(element[0]);
      level1MethodCountData.push(element[1]);
    }

    // 레벨별 모듈 메소드(lv2)
    // const level2MethodCountData = [];
    // for (const key in data['py']['level_per_function_method']['level2']) {
    //   level2MethodCountData.push(
    //     data['py']['level_per_function_method']['level2'][key]
    //   );
    // }
    // const level2MethodCountLabels = Object.keys(
    //   data['py']['level_per_function_method']['level2']
    // );
    const level2MethodCountData = [];
    const level2MethodCountLabels = [];

    sorted = Object.entries(
      data['py']['level_per_function_method']['level2']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sorted) {
      level2MethodCountLabels.push(element[0]);
      level2MethodCountData.push(element[1]);
    }

    // 레벨별 모듈 메소드(lv3)
    // const level3MethodCountData = [];
    // for (const key in data['py']['level_per_function_method']['level3']) {
    //   level3MethodCountData.push(
    //     data['py']['level_per_function_method']['level3'][key]
    //   );
    // }
    // const level3MethodCountLabels = Object.keys(
    //   data['py']['level_per_function_method']['level3']
    // );
    const level3MethodCountData = [];
    const level3MethodCountLabels = [];

    sorted = Object.entries(
      data['py']['level_per_function_method']['level3']
    ).sort((a, b) => b[1] - a[1]);

    for (let element of sorted) {
      level3MethodCountLabels.push(element[0]);
      level3MethodCountData.push(element[1]);
    }

    // 레벨별 모듈 메소드(lv4)
    if (data['py']['level_per_function_method']['level4']) {
      // const level4MethodCountData = [];
      // for (const key in data['py']['level_per_function_method']['level4']) {
      //   level4MethodCountData.push(
      //     data['py']['level_per_function_method']['level4'][key]
      //   );
      // }
      // const level4MethodCountLabels = Object.keys(
      //   data['py']['level_per_function_method']['level4']
      // );
      const level4MethodCountData = [];
      const level4MethodCountLabels = [];

      sorted = Object.entries(
        data['py']['level_per_function_method']['level4']
      ).sort((a, b) => b[1] - a[1]);

      for (let element of sorted) {
        level4MethodCountLabels.push(element[0]);
        level4MethodCountData.push(element[1]);
      }

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
      charts.push(methodCountLv4Chart);
    }

    // 레벨별 모듈 메소드(lv5)
    if (data['py']['level_per_function_method']['level5']) {
      // const level5MethodCountData = [];
      // for (const key in data['py']['level_per_function_method']['level5']) {
      //   level5MethodCountData.push(
      //     data['py']['level_per_function_method']['level5'][key]
      //   );
      // }
      // const level5MethodCountLabels = Object.keys(
      //   data['py']['level_per_function_method']['level5']
      // );
      const level5MethodCountData = [];
      const level5MethodCountLabels = [];

      sorted = Object.entries(
        data['py']['level_per_function_method']['level5']
      ).sort((a, b) => b[1] - a[1]);

      for (let element of sorted) {
        level5MethodCountLabels.push(element[0]);
        level5MethodCountData.push(element[1]);
      }

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
      charts.push(methodCountLv5Chart);
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

    // 레벨별 문제 유형 비율(lv0~lv3)
    // 레벨별 문제 유형 비율(lv0)
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

    // 레벨별 문제 유형 비율(lv1)
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

    // 레벨별 문제 유형 비율(lv2)
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

    // 레벨별 문제 유형 비율(lv3)
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

    // 레벨별 모듈 메소드(lv0~lv3)
    // 레벨별 모듈 메소드 (lv0)
    const level0PerFunctionMethodCanvas = document.getElementById(
      'level0-method-count-chart'
    );
    createToolTip(
      level0PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const methodCountLv0Chart = new Chart(level0PerFunctionMethodCanvas, {
      type: 'bar',
      data: {
        labels: level0MethodCountLabels,
        datasets: [
          {
            label: 'Level 0 Method Count',
            data: level0MethodCountData,
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

    // 레벨별 모듈 메소드 (lv1)
    const level1PerFunctionMethodCanvas = document.getElementById(
      'level1-method-count-chart'
    );
    createToolTip(
      level1PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const methodCountLv1Chart = new Chart(level1PerFunctionMethodCanvas, {
      type: 'bar',
      data: {
        labels: level1MethodCountLabels,
        datasets: [
          {
            data: level1MethodCountData,
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

    // 레벨별 모듈 메소드 (lv2)
    const level2PerFunctionMethodCanvas = document.getElementById(
      'level2-method-count-chart'
    );
    createToolTip(
      level2PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const methodCountLv2Chart = new Chart(level2PerFunctionMethodCanvas, {
      type: 'bar',
      data: {
        labels: level2MethodCountLabels,
        datasets: [
          {
            data: level2MethodCountData,
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

    // 레벨별 모듈 메소드 (lv3)
    const level3PerFunctionMethodCanvas = document.getElementById(
      'level3-method-count-chart'
    );
    createToolTip(
      level3PerFunctionMethodCanvas,
      data,
      'level_per_function_method'
    );
    const methodCountLv3Chart = new Chart(level3PerFunctionMethodCanvas, {
      type: 'bar',
      data: {
        labels: level3MethodCountLabels,
        datasets: [
          {
            data: level3MethodCountData,
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

function createToolTip(canvas, data, key) {
  canvas.previousElementSibling.childNodes[0].textContent =
    data['description'][key];
}

export default getLevelDataPy;
