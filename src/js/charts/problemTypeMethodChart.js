export default function getProblemTypeMethod(data, lang, charts) {
  if (lang === 'py') {
    const labels = Object.keys(data[lang]['problem_type_method']);
    const problemTypeMethodData = Object.values(data[lang]['problem_type_method']);
  
    const labelList = new Set();
    problemTypeMethodData.forEach(type => {
      Object.keys(type).forEach(method => labelList.add(method));
    })
  
    const datasets = [];
    labelList.forEach(item => {
      datasets.push({
        'label': item,
        'data': []
      });
    });
  
    problemTypeMethodData.forEach(type => {
      [...labelList].forEach((method, i) => {
        datasets[i].data.push(type[method] || 0);
      });
    });

    charts.push(drawChart(labels, datasets));

  } else if (lang === 'js') {
    const labelList = Object.keys(data[lang]['problem_type_method']);
    const problemTypeMethodData = Object.values(data[lang]['problem_type_method']);
    const labels = Object.keys(data[lang]['problem_type_method'][labelList[0]])

    const datasets = [];
    labelList.forEach(item => {
      datasets.push({
        'label': item
      });
    });

    [...problemTypeMethodData].forEach((type, i) => {
        datasets[i].data = Object.values(type);
    });

    charts.push(drawChart(labels, datasets));
  }
}

function drawChart(labels, datasets) {
  return new Chart(document.querySelector('#problem-type-method-chart'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: '문제유형별 전체 메소드 사용횟수'
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    },
  });
}