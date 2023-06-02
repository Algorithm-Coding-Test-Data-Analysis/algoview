// 연도별 문제유형 차트

// 현재 선택된 타입
// 'js', 'python'
const type = 'js';
const url =
  'https://file.notion.so/f/s/b71adbba-5568-4123-b81f-f87e23d26e93/data.json?id=d6880c45-243b-409f-b9d9-94ce42e0b447&table=block&spaceId=579fe283-28aa-489d-ae65-d683304becfc&expirationTimestamp=1685765852365&signature=Bv-jstHW_srfvsflN5ciAmyyNO8RuQfgauXxJyZRoeY&downloadName=data.json';

// 막대 색상 배열
// const yearTypeBarColor
// 막대 테두리 색상 배열
// const yearTypeBorderColor

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // 받아온 데이터
    const yearType = data[type]['year_type'];
    // 데이터 레이블
    const yearTypelabels = [];
    // 데이터 값
    const yearTypeData = [];

    // 데이터 레이블 세팅 : ‘0000’은 연도가 아니라서 제외
    yearTypelabels.push(
      ...Object.keys(yearType[Object.keys(yearType)[0]]).filter(
        (v) => v !== '0000'
      )
    );

    // 데이터 값 세팅 : ‘0000’은 연도가 아니라서 제외
    for (const key in yearType) {
      let tempData = [];
      for (const year in yearType[key]) {
        year !== '0000' && tempData.push(yearType[key][year]);
      }
      let chartData = {
        label: key,
        data: tempData,
        // borderWidth: 1,
      };
      yearTypeData.push(chartData);
    }

    // 년도별 유형(year_type) 차트 세팅
    let yearTypeChart = new Chart(document.querySelector('#year-chart'), {
      type: 'bar',
      data: {
        labels: yearTypelabels,
        datasets: yearTypeData,
      },
      options: {
        // maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: '연도별 문제유형',
          },
        },
        scales: {
          x: {
            stacked: true,
            // display: false,
          },
          y: {
            stacked: true,
            // display: false,
            beginAtZero: true,
          },
        },
      },
    });
  });
