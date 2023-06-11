function getMethodDataPy(data, lang, charts) {
  document.getElementById(
    'method-count-chart'
  ).previousElementSibling.childNodes[0].textContent =
    data['description']['function_method_sort'];

  if (lang === 'py') {
    // 메소드 모듈 빈도수
    const methodCountData = [];
    for (const key in data['py']['function_method_sort']) {
      methodCountData.push(data['py']['function_method_sort'][key]);
    }
    const methodCountLabels = Object.keys(data['py']['function_method_sort']);

    // 메소드 모듈 빈도수
    const methodCountLvChart = new Chart(
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
    charts.push(methodCountLvChart);
  }
}

export default getMethodDataPy;
