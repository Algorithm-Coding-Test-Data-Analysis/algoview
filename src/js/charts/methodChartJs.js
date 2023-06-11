function getMethodDataJs(data, lang, charts) {
  document.getElementById(
    'method-count-chart'
  ).previousElementSibling.childNodes[0].textContent =
    data['description']['function_method_sort'];

  if (lang === 'js') {
    // 종합 메소드 모듈 빈도수
    const methodCountData = [];
    for (const key in data['js']['function_method_sort']) {
      methodCountData.push(data['js']['function_method_sort'][key]);
    }
    const methodCountLabels = Object.keys(data['js']['function_method_sort']);

    // 전체 메소드 유형 모음
    const methodCountChart = new Chart(
      document.getElementById('method-count-chart'),
      {
        type: 'bar',
        data: {
          labels: methodCountLabels,
          datasets: [
            {
              data: methodCountData,
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

    charts.push(methodCountChart);
  }
}

export default getMethodDataJs;
