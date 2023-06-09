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

  const datasets = [];
  companyName.forEach(v => {
    datasets.push({
      'label': v,
      'data': Object.values(COMPANY_DATA[v])
    });
  });

  const companyChartRadar = new Chart(
    document.getElementById('company-type-radar-chart'),
    {
      type: 'radar',
      data: {
        labels: labels,
        datasets: datasets,
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
