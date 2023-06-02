const problemArticle = document.getElementById('3.problem');

// 프로그래밍 언어 선택
let language = 'js';

const url ='./문제유형.json';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    drawProblemTypeMethodChart(data);
});


// 문제유형별 전체 메소드 사용횟수
function drawProblemTypeMethodChart(data) {
  const canvas = document.createElement('canvas');
  canvas.id = 'problem-type-method';
  problemArticle.appendChild(canvas);

  // py 로직
  // const labels = Object.keys(data[language]['problem_type_method']);
  // const problemTypeMethodData = Object.values(data[language]['problem_type_method']);

  // const labelList = new Set();
  // problemTypeMethodData.forEach(type => {
  //   Object.keys(type).forEach(method => labelList.add(method));
  // })

  // const datasets = [];
  // labelList.forEach(item => {
  //   datasets.push({
  //     'label': item,
  //     'data': []
  //   });
  // });

  // problemTypeMethodData.forEach(type => {
  //   [...labelList].forEach((method, i) => {
  //     datasets[i].data.push(type[method] || 0);
  //   });
  // });

  // js 로직
  const labelList = Object.keys(data[language]['problem_type_method']);
  const problemTypeMethodData = Object.values(data[language]['problem_type_method']);

  const labels = Object.keys(data[language]['problem_type_method'][labelList[0]])
  
  const datasets = [];
  labelList.forEach(item => {
    datasets.push({
      'label': item
    });
  });

  [...problemTypeMethodData].forEach((type, i) => {
      datasets[i].data = Object.values(type);
  });

  const ProblemTypeMethodChart = new Chart(canvas, {
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

  console.log(datasets)
}