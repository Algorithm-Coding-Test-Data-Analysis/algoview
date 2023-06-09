function getCompanyDataForRadar(data, lang) {
  const COMPANY_DATA = data[lang]['company_type'];
  const $company_list = document.querySelector('ul#company_list');

  const $canvas = document.createElement('canvas');
  const $h4 = document.createElement('h4');
  const $li = document.createElement('li');
  $h4.className = 'chart-tit';
  $h4.textContent = '출제 업체별 레이더 차트(임시)'; // 임시 차트명
  $canvas.id = 'company-type-radar-chart';
  $li.append($h4);
  $li.append($canvas);
  $company_list.append($li);

  // companyName = [카카오, 프로그래머스]
  const companyName = Object.keys(COMPANY_DATA);

  // labels = [DFSBFS, 구현, 그리다, 기타, 스택큐, 완전탐색, 해시]
  const labels = Object.keys(COMPANY_DATA[companyName[0]]);

  const companyChartRadar = new Chart(
    document.getElementById('company-type-radar-chart'),
    {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [
          {
            label: companyName[0],
            data: Object.values(COMPANY_DATA[companyName[0]]),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
          },
          {
            label: companyName[1],
            data: Object.values(COMPANY_DATA[companyName[1]]),
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
          },
        ],
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    }
  );
}

export default getCompanyDataForRadar;
