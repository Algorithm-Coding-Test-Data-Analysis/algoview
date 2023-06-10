export default function getProblemTypeMethod(data, lang, charts) {
  const canvas = document.querySelector('#problem-type-method-chart');
  createToolTip(canvas, data);

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

    charts.push(drawChart(labels, datasets, canvas));

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

    charts.push(drawChart(labels, datasets, canvas));
  }
}

function drawChart(labels, datasets, canvas) {
  return new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
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

function createToolTip(canvas, data) {
  canvas.previousElementSibling.childNodes[0].textContent = data['description']['problem_type_method']; 
}