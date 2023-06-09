function getCompanyDataForRadar(data, lang) {
  const COMPANY_DATA = data[lang]['company_type'];
  const $company_list = document.querySelector('ul#company_list');

  const $canvas = document.createElement('canvas');
  const $h4 = document.createElement('h4');
  const $li = document.createElement('li');
  const $tooltip = document.createElement('span');
  const $tooltip_txt = document.createElement('span');

  $tooltip_txt.textContent = '임시 툴팁 체험해보세요';

  $h4.className = 'chart-tit';
  $tooltip.className = 'tooltip';
  $tooltip_txt.className = 'tooltip-txt';
  $h4.textContent = '출제 업체별 레이더 차트(임시)'; // 임시 차트명
  $canvas.id = 'company-type-radar-chart';
  $tooltip.append($tooltip_txt);
  $li.append($h4);
  $li.append($tooltip);
  $li.append($canvas);
  $company_list.append($li);

  // companyName = [카카오, 프로그래머스]
  const companyName = Object.keys(COMPANY_DATA);

  // labels = [DFSBFS, 구현, 그리다, 기타, 스택큐, 완전탐색, 해시]
  const labels = Object.keys(COMPANY_DATA[companyName[0]]);

  const datasets = [];
  companyName.forEach((v) => {
    datasets.push({
      label: v,
      data: Object.values(COMPANY_DATA[v]),
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
