function getMethodDataPy(data, lang, charts) {
  if (lang === 'py') {
    // 메소드 모듈 빈도수
    const methodCountData = [];
    for (const key in data["py"]["function_method_sort"]) {
      methodCountData.push(data["py"]["function_method_sort"][key])
    }
    // 메소드 모듈 빈도수
    const methodCountLvChart = new Chart(document.getElementById('method-count-chart'), {
      type: 'bar',
      data: {
        labels: ["range", "len", ".append", "int", "str", "sorted", "sum", "ord", "max", ".join", "set", ".count", "list", ".pop", ".sort", ".index", ".popleft", ".lower", ".replace", ".split", "print", "min", "chr", ".upper", "map", "zip", ".isdigit", ".items", ".find", "abs", ".sub", ".strip", ".compile", "bin", ".islower", "input", ".remove", "enumerate", ".isupper", ".insert", ".get", ".reverse", ".findall", ".isqrt", ".gcd", ".fromkeys", "reversed", ".zfill", ".keys", "divmod", "dict", ".values", ".startswith", "math", "deque", "re", "combinations", "collections", "ceil", "itertools"],
        datasets: [{
          data: methodCountData,
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
          // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
          borderWidth: 1
        }]
      },
      options: {
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
      methodCountLvChart
    );
  }
}

export default getMethodDataPy;
