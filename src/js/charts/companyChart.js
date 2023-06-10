function getCompanyData(data, lang) {
  const charts_extracted = {}; // 차트 대체
  const COMPANY_DATA = data[lang]['company_type'];
  const COMPANY_DESC = data['description']['company_type'];
  const $company_list = document.querySelector('ul#company_list');

  $company_list.innerHTML = '';

  for (const key in COMPANY_DATA) {
    const $canvas = document.createElement('canvas');
    const $h4 = document.createElement('h4');
    const $li = document.createElement('li');
    const $tooltip = document.createElement('span');
    const $tooltip_txt = document.createElement('span');

    $tooltip_txt.textContent = COMPANY_DESC;

    $h4.className = 'chart-tit';
    $tooltip.className = 'tooltip';
    $tooltip_txt.className = 'tooltip-txt';
    $h4.textContent = `${key} 출제  문제 유형 수`;
    $canvas.id = `${key}-chart`;
    $tooltip.append($tooltip_txt);
    $li.append($h4);
    $li.append($tooltip);
    $li.append($canvas);
    $company_list.append($li);

    charts_extracted[`${key}${lang}Data`] = new Chart(
      document.getElementById(`${key}-chart`),
      {
        type: 'pie',
        data: {
          labels: [...Object.keys(COMPANY_DATA[key])],
          datasets: [
            {
              data: [...Object.values(COMPANY_DATA[key])],
              backgroundColor: [
                '#36a2ebaa',
                '#ff6384aa',
                '#4bc0c0aa',
                '#ff9f40aa',
                '#9966ffaa',
                '#ffcd56aa',
                '#c9cbcfaa',
              ],
              borderWidth: 1,
            },
          ],
        },
      }
    );
  }
}

export default getCompanyData;
