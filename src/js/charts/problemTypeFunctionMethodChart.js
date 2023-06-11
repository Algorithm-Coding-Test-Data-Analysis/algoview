function getProblemTypeFunctionMethodData(data, lang, charts) {
  document.getElementById(
    'problem-type-function-method-chart'
  ).previousElementSibling.childNodes[0].textContent =
    data['description']['problem_type_function_method'];

  if (lang === 'py') {
    const problemType = Object.keys(data['py']['problem_type_function_method']);

    const problemTypeFunctionData = Object.values(
      data['py']['problem_type_function_method']
    );
    const allFunctions = [];
    problemTypeFunctionData.forEach((i) => {
      allFunctions.push(...Object.keys(i));
    });
    const functionList = new Set(allFunctions);

    const datasets = [];
    functionList.forEach((item) => {
      datasets.push({
        label: item,
        data: [],
      });
    });
    problemTypeFunctionData.forEach((el) => {
      [...functionList].forEach((funcName, idx) => {
        datasets[idx].data.push(el[funcName] || 0);
      });
    });

    const problemTypeFunctionMethodChart = new Chart(
      document.getElementById('problem-type-function-method-chart'),
      {
        type: 'bar',
        data: {
          labels: problemType,
          datasets: datasets,
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      }
    );

    charts.push(problemTypeFunctionMethodChart);
  } else if (lang === 'js') {
    const problemType = Object.keys(data['js']['problem_type_function_method']);

    const problemTypeFunctionData = Object.values(
      data['js']['problem_type_function_method']
    );
    const allFunctions = [];
    problemTypeFunctionData.forEach((i) => {
      allFunctions.push(...Object.keys(i));
    });
    const functionList = new Set(allFunctions);

    const datasets = [];
    functionList.forEach((item) => {
      datasets.push({
        label: item,
        data: [],
      });
    });
    problemTypeFunctionData.forEach((el) => {
      [...functionList].forEach((funcName, idx) => {
        datasets[idx].data.push(el[funcName] || 0);
      });
    });

    const problemTypeFunctionMethodChart = new Chart(
      document.getElementById('problem-type-function-method-chart'),
      {
        type: 'bar',
        data: {
          labels: problemType,
          datasets: datasets,
        },
        options: {
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        },
      }
    );

    charts.push(problemTypeFunctionMethodChart);
  }
}

export default getProblemTypeFunctionMethodData;
