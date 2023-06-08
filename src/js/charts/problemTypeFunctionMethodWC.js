zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';

function getProblemTypeWCData(data, lang) {
  if (lang === 'py') {
    const problemTypeFunctionMethodData = data['py']['problem_type_function_method'];

    const dataset = [];
    for (const [problemType, value] of Object.entries(problemTypeFunctionMethodData)) {
      const words = []
      for (const [funcName, count] of Object.entries(value)) {
        words.push({
          text: funcName,
          count: count
        })
      }

      dataset.push({
        title: problemType,
        words: words
      })
    }

    // 배치
    const totalCnt = dataset.length;
    const col = totalCnt === 1 ? 1 : (totalCnt <= 4 ? 2 : 3);
    const width = col === 1 ? '100' : (col === 2 ? '49' : '32');

    // 워드클라우드 차트 집합
    var myConfig = {
      graphset: []
    };

    dataset.forEach((data, idx) => {
      const wc = {
        type: 'wordcloud',
        // backgroundColor: '#393b46', // 다크모드
        backgroundColor: 'white',
        width: width + '%',
        height: '150',
        x: idx % col * width + '%',
        y: Math.floor(idx / col) * 200,
        title: {
          text: data['title'],
          backgroundColor: 'none',
          // fontColor: '#fff', // 다크모드
          fontColor: '#000',
          fontSize: '16px',
          y: '2%',
        },
        options: {
          words: data['words'],
          minLength: 1,
          maxItems: 40,
          maxFontSize: '50px',
          minFontSize: '14px',
          // colorType: 'palette',
          // palette: ['#2196F3', '#3F51B5', '#42A5F5', '#5C6BC0', '#64B5F6', '#7986CB', '#90CAF9', '#9FA8DA', '#BBDEFB', '#C5CAE9']
        },
        plotarea: {
          margin: '30px 5px 5px',
        },
      }

      myConfig.graphset.push(wc);
    })


    // 워드클라우드 렌더링
    zingchart.render({
      id: 'problemTypeFunctionMethodWordcloudChart',
      data: myConfig,
      width: '100%',
      height: '600',
    });
  }
}

export default getProblemTypeWCData;
