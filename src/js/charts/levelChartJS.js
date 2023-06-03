function getLevelDataJs(data, lang, charts) {
  if (lang === 'js') {
    // 레벨별 문제수
    const levelCountData = [
      data['js']['level_problem_name']['level0'],
      data['js']['level_problem_name']['level1'],
      data['js']['level_problem_name']['level2'],
      data['js']['level_problem_name']['level3'],
    ];

    // 레벨별 유형별 문제수
    const levelProblemTypeCountData = [
      data['js']['level_problem_type']['level0'],
      data['js']['level_problem_type']['level1'],
      data['js']['level_problem_type']['level2'],
      data['js']['level_problem_type']['level3'],
    ];

    // 레벨별 문제 유형 비율 level 0
    const level0ProblemTypeData = [
      data['js']['level_problem_type_ratio']['level0']['구현'],
      data['js']['level_problem_type_ratio']['level0']['기타'],
      data['js']['level_problem_type_ratio']['level0']['완전탐색'],
      data['js']['level_problem_type_ratio']['level0']['정렬'],
      data['js']['level_problem_type_ratio']['level0']['해시'],
    ];

    // 레벨별 문제 유형 비율 level 1
    const level1ProblemTypeData = [
      data['js']['level_problem_type_ratio']['level1']['구현'],
      data['js']['level_problem_type_ratio']['level1']['그리디'],
      data['js']['level_problem_type_ratio']['level1']['기타'],
      data['js']['level_problem_type_ratio']['level1']['스택큐'],
      data['js']['level_problem_type_ratio']['level1']['완전탐색'],
      data['js']['level_problem_type_ratio']['level1']['정렬'],
      data['js']['level_problem_type_ratio']['level1']['집합'],
      data['js']['level_problem_type_ratio']['level1']['해시'],
    ];

    // 레벨별 문제 유형 비율 level 2
    const level2ProblemTypeData = [
      data['js']['level_problem_type_ratio']['level2']['구현'],
      data['js']['level_problem_type_ratio']['level2']['스택'],
      data['js']['level_problem_type_ratio']['level2']['스택큐'],
      data['js']['level_problem_type_ratio']['level2']['재귀'],
      data['js']['level_problem_type_ratio']['level2']['정렬'],
      data['js']['level_problem_type_ratio']['level2']['투포인터'],
      data['js']['level_problem_type_ratio']['level2']['해시'],
    ];

    // 레벨별 문제 유형 비율 level 3
    const level3ProblemTypeData = [
      data['js']['level_problem_type_ratio']['level3']['DFSBFS'],
      data['js']['level_problem_type_ratio']['level3']['구현'],
      data['js']['level_problem_type_ratio']['level3']['그래프'],
      data['js']['level_problem_type_ratio']['level3']['트리'],
    ];

    // 레벨별 메서드 수 level 0
    const level0PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level0']) {
      level0PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level0'][key]
      );
    }

    // 레벨별 메서드 수 level 1
    const level1PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level1']) {
      level1PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level1'][key]
      );
    }

    // 레벨별 메서드 수 level 2
    const level2PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level2']) {
      level2PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level2'][key]
      );
    }

    // 레벨별 메서드 수 level 3
    const level3PerFunctionMethodData = [];
    for (const key in data['js']['level_per_function_method']['level3']) {
      level3PerFunctionMethodData.push(
        data['js']['level_per_function_method']['level3'][key]
      );
    }

    // 레벨별 문제수
    const levelCountChart = new Chart(
      document.getElementById('level-count-chart'),
      {
        type: 'doughnut',
        data: {
          labels: ['level0', 'level1', 'level2', 'level3'],
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
          labels: ['level0', 'level1', 'level2', 'level3'],
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
          labels: ['구현', '기타', '완전탐색', '정렬', '해시'],
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
          labels: [
            '구현',
            '그리디',
            '기타',
            '스택큐',
            '완전탐색',
            '정렬',
            '집합',
            '해시',
          ],
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
          labels: [
            '구현',
            '스택',
            '스택큐',
            '재귀',
            '정렬',
            '투포인터',
            '해시',
          ],
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
          labels: ['DFSBFS', '구현', '그래프', '트리'],
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
          labels: [
            'abs',
            'add',
            'ceil',
            'charCodeAt',
            'createInterface',
            'filter',
            'find',
            'floor',
            'forEach',
            'from',
            'fromCharCode',
            'get',
            'includes',
            'indexOf',
            'isInteger',
            'isNaN',
            'join',
            'log',
            'map',
            'match',
            'max',
            'min',
            'on',
            'pop',
            'pow',
            'push',
            'reduce',
            'repeat',
            'replace',
            'replaceAll',
            'reverse',
            'round',
            'set',
            'shift',
            'slice',
            'sort',
            'splice',
            'split',
            'sqrt',
            'substring',
            'test',
            'toLowerCase',
            'toString',
            'toUpperCase',
            'unshift',
            'ParseInt',
          ],
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
          labels: [
            'Array',
            'abs',
            'charCodeAt',
            'every',
            'fill',
            'filter',
            'find',
            'floor',
            'forEach',
            'from',
            'fromCharCode',
            'get',
            'includes',
            'indexOf',
            'isInteger',
            'join',
            'keys',
            'log',
            'map',
            'max',
            'min',
            'on',
            'padStart',
            'pop',
            'pow',
            'push',
            'reduce',
            'repeat',
            'replace',
            'replaceAll',
            'reverse',
            'set',
            'setEncoding',
            'shift',
            'slice',
            'sort',
            'splice',
            'split',
            'sqrt',
            'substr',
            'test',
            'toLowerCase',
            'toString',
            'toUpperCase',
            'trunc',
            'ParseInt',
          ],
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
          labels: [
            'add',
            'ceil',
            'dequeue',
            'enqueue',
            'fill',
            'filter',
            'forEach',
            'from',
            'get',
            'indexOf',
            'join',
            'log',
            'map',
            'max',
            'min',
            'peek',
            'pop',
            'push',
            'readFileSync',
            'reduce',
            'replace',
            'replaceAll',
            'set',
            'shift',
            'slice',
            'sort',
            'splice',
            'split',
            'toLowerCase',
            'toString',
            'toUpperCase',
            'trim',
            'unshift',
            'values',
          ],
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
          labels: [
            'fill',
            'filter',
            'floor',
            'forEach',
            'from',
            'log2',
            'map',
            'max',
            'pop',
            'pow',
            'push',
            'reverse',
            'shift',
            'sort',
            'split',
            'toString',
            'unshift',
            'parseInt',
          ],
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
