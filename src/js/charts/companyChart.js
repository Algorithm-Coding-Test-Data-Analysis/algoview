function getCompanyData(data, lang, charts) {
  let packJunJs = [];
  let kakaoJs = [];
  let progrmersJs = [];

  if (lang === 'js') {
    // JS - 백준 데이터
    for (const key in data['js']['company_type']['백준']) {
      packJunJs.push(data['js']['company_type']['백준'][key]);
    }

    // JS - 카카오 데이터
    for (const key in data['js']['company_type']['카카오']) {
      kakaoJs.push(data['js']['company_type']['카카오'][key]);
    }

    // JS = 프로그래머스 데이터
    for (const key in data['js']['company_type']['프로그래머스']) {
      progrmersJs.push(data['js']['company_type']['프로그래머스'][key]);
    }

    let packJunJsData = new Chart(document.getElementById('packJun-chart'), {
      type: 'pie',
      data: {
        labels: [
          'DFSBFS',
          '구현',
          '그래프',
          '그리디',
          '기타',
          '스택',
          '스택큐',
          '완전탐색',
          '정렬',
          '투포인터',
          '트리',
          '해시',
        ],
        datasets: [
          {
            data: packJunJs,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    let kakaoJsData = new Chart(document.getElementById('kakao-chart'), {
      type: 'pie',
      data: {
        labels: [
          'DFSBFS',
          '구현',
          '그래프',
          '그리디',
          '기타',
          '스택',
          '스택큐',
          '완전탐색',
          '정렬',
          '투포인터',
          '트리',
          '해시',
        ],
        datasets: [
          {
            data: kakaoJs,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    let programmersJsData = new Chart(
      document.getElementById('programmers-chart'),
      {
        type: 'pie',
        data: {
          labels: [
            'DFSBFS',
            '구현',
            '그래프',
            '그리디',
            '기타',
            '스택',
            '스택큐',
            '완전탐색',
            '정렬',
            '투포인터',
            '트리',
            '해시',
          ],
          datasets: [
            {
              data: progrmersJs,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );

    charts.push(packJunJsData, kakaoJsData, programmersJsData); // 차트 모으기!
  }
}

export default getCompanyData;
