function getLevelDataPy(data, lang, charts) {
  if (lang === 'py') {
    // 레벨별 문제수
    const levelCountData = [
      data["py"]["level_problem_name"]["level0"],
      data["py"]["level_problem_name"]["level1"],
      data["py"]["level_problem_name"]["level2"],
      data["py"]["level_problem_name"]["level3"]
    ];

    // 레벨별 유형별 문제수
    const levelProblemTypeCountData = [
      data["py"]["level_problem_type"]["level0"],
      data["py"]["level_problem_type"]["level1"],
      data["py"]["level_problem_type"]["level2"],
      data["py"]["level_problem_type"]["level3"]
    ];

    // 레벨별 문제 유형 비율(lv0~lv3)
    // 레벨별 문제 유형 비율(lv0)
    const level0ProblemTypeData = [
      data["py"]["level_problem_type_ratio"]["level0"]["구현"],
      data["py"]["level_problem_type_ratio"]["level0"]["기타"]
    ];

    // 레벨별 문제 유형 비율(lv1)
    const level1ProblemTypeData = [
      data["py"]["level_problem_type_ratio"]["level1"]["구현"],
      data["py"]["level_problem_type_ratio"]["level1"]["그리디"],
      data["py"]["level_problem_type_ratio"]["level1"]["기타"],
      data["py"]["level_problem_type_ratio"]["level1"]["비트연산"],
      data["py"]["level_problem_type_ratio"]["level1"]["스택큐"],
      data["py"]["level_problem_type_ratio"]["level1"]["완전탐색"],
      data["py"]["level_problem_type_ratio"]["level1"]["해시"]
    ];

    // 레벨별 문제 유형 비율(lv2)
    const level2ProblemTypeData = [
      data["py"]["level_problem_type_ratio"]["level2"]["DFSBFS"],
      data["py"]["level_problem_type_ratio"]["level2"]["구현"],
      data["py"]["level_problem_type_ratio"]["level2"]["스택큐"],
      data["py"]["level_problem_type_ratio"]["level2"]["완전탐색"]
    ];

    // 레벨별 문제 유형 비율(lv3)
    const level3ProblemTypeData = [
      data["py"]["level_problem_type_ratio"]["level3"]["DFSBFS"],
      data["py"]["level_problem_type_ratio"]["level3"]["기타"],
      data["py"]["level_problem_type_ratio"]["level3"]["해시"]
    ];

    // 레벨별 모듈 메소드(lv0~lv3)
    // 레벨별 모듈 메소드(lv0)
    const level0MethodCountData = [];
    for (const key in data["py"]["level_per_function_method"]["level0"]) {
      level0MethodCountData.push(data["py"]["level_per_function_method"]["level0"][key])
    }

    // 레벨별 모듈 메소드(lv1) 
    const level1MethodCountData = [];
    for (const key in data["py"]["level_per_function_method"]["level1"]) {
      level1MethodCountData.push(data["py"]["level_per_function_method"]["level1"][key])
    }


    // 레벨별 모듈 메소드(lv2)
    const level2MethodCountData = [];
    for (const key in data["py"]["level_per_function_method"]["level2"]) {
      level2MethodCountData.push(data["py"]["level_per_function_method"]["level2"][key])
    }


    // 레벨별 모듈 메소드(lv3)
    const level3MethodCountData = [];
    for (const key in data["py"]["level_per_function_method"]["level3"]) {
      level3MethodCountData.push(data["py"]["level_per_function_method"]["level3"][key])
    }

    // console.log(level3MethodCountData)

    // 레벨별 문제수
    const levelCountChart = new Chart(document.getElementById('level-count-chart'), {
      type: 'doughnut',
      data: {
        labels: ["level0", "level1", "level2", "level3"],
        datasets: [{
          data: levelCountData,
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(225, 225, 0, 0.5)', 'rgba(225, 120, 102, 0.5)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      }
    });

    // 레벨별 유형별 문제수
    const levelProblemTypeCountChart = new Chart(document.getElementById('level-problem-type-count-chart'), {
      type: 'doughnut',
      data: {
        labels: ["level0", "level1", "level2", "level3"],
        datasets: [{
          data: levelCountData,
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(225, 225, 0, 0.5)', 'rgba(225, 120, 102, 0.5)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      }
    });

    // 레벨별 문제 유형 비율(lv0~lv3)
    // 레벨별 문제 유형 비율(lv0)
    const level0ProblemTypeChart = new Chart(document.getElementById('level0-problem-type-chart'), {
      type: 'doughnut',
      data: {
        labels: ["구현", "기타"],
        datasets: [{
          data: level0ProblemTypeData,
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      }
    });

    // 레벨별 문제 유형 비율(lv1)
    const level1ProblemTypeChart = new Chart(document.getElementById('level1-problem-type-chart'), {
      type: 'doughnut',
      data: {
        labels: ["구현", "그리디", "기타", "비트연산", "스택큐", "완전탐색", "해시"],
        datasets: [{
          data: level1ProblemTypeData,
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(225, 225, 0, 0.5)', 'rgba(225, 120, 102, 0.5)', 'rgba(205, 99, 105, 0.5)', 'rgba(104, 52, 75, 0.5)', 'rgba(85, 99, 150, 0.5)', 'rgba(120, 162, 99, 0.5)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      }
    });

    // 레벨별 문제 유형 비율(lv2)
    const level2ProblemTypeChart = new Chart(document.getElementById('level2-problem-type-chart'), {
      type: 'doughnut',
      data: {
        labels: ["DFSBFS", "구현", "스택큐", "완전탐색"],
        datasets: [{
          data: level2ProblemTypeData,
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(225, 225, 0, 0.5)', 'rgba(225, 120, 102, 0.5)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      }
    });

    // 레벨별 문제 유형 비율(lv3)
    const level3ProblemTypeChart = new Chart(document.getElementById('level3-problem-type-chart'), {
      type: 'doughnut',
      data: {
        labels: ["DFSBFS", "기타", "해시"],
        datasets: [{
          data: level3ProblemTypeData,
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(225, 225, 0, 0.5)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
          borderWidth: 1
        }]
      }
    });

    // 레벨별 모듈 메소드(lv0~lv3)
    // 레벨별 모듈 메소드 (lv0)
    const methodCountLv0Chart = new Chart(document.getElementById('level0-method-count-chart'), {
      type: 'bar',
      data: {
        labels: [".append", ".count", ".find", ".fromkeys", ".index", ".insert", ".isdigit", ".islower", ".isupper", ".items", ".join", ".lower", ".pop", ".remove", ".replace", ".reverse", ".sort", ".split", ".startswith", ".sub", ".upper", "abs", "input", "int", "len", "list", "max", "min", "print", "range", "re", "set", "sorted", "str", "sum"],
        datasets: [{
          label: 'Level 0 Method Count',
          data: level0MethodCountData,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Level 0 Method Count Chart',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
      }
    });

    // 레벨별 모듈 메소드 (lv1)
    const methodCountLv1Chart = new Chart(document.getElementById('level1-method-count-chart'), {
      type: 'bar',
      data: {
        labels: [".append", ".compile", ".count", ".find", ".findall", ".gcd", ".get", ".index", ".isdigit", ".islower", ".isqrt", ".isupper", ".items", ".join", ".keys", ".lower", ".pop", ".remove", ".replace", ".sort", ".split", ".strip", ".sub", ".upper", ".values", ".zfill", "abs", "bin", "chr", "combinations", "dict", "enumerate", "input", "int", "itertools", "len", "list", "map", "math", "max", "min", "ord", "print", "range", "re", "reversed", "set", "sorted", "str", "sum", "zip"],
        datasets: [{
          data: level1MethodCountData,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Level 1 Method Count Chart',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // 레벨별 모듈 메소드 (lv2)
    const methodCountLv2Chart = new Chart(document.getElementById('level2-method-count-chart'), {
      type: 'bar',
      data: {
        labels: [".append", ".count", ".join", ".lower", ".pop", ".popleft", ".split", ".upper", "bin", "ceil", "collections", "deque", "divmod", "int", "len", "list", "map", "math", "max", "min", "range", "sorted", "str", "sum", "zip"],
        datasets: [{
          data: level2MethodCountData,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Level 2 Method Count Chart',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    // 레벨별 모듈 메소드 (lv3)
    const methodCountLv3Chart = new Chart(document.getElementById('level3-method-count-chart'), {
      type: 'bar',
      data: {
        labels: [".append", ".index", ".items", ".popleft", ".sort", "collections", "deque", "enumerate", "len", "max", "print", "range", "sorted", "zip"],
        datasets: [{
          data: level3MethodCountData,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Level 3 Method Count Chart',
            font: {
              size: 16,
              weight: 'bold'
            }
          },
          legend: {
            display: false
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
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
export default getLevelDataPy;
