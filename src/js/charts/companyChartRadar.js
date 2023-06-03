function getCompanyDataForRadar(data, lang, charts) {
    // TODO: data.json 취합되면 변경
    const dataURL =
        'https://file.notion.so/f/s/b71adbba-5568-4123-b81f-f87e23d26e93/data.json?id=d6880c45-243b-409f-b9d9-94ce42e0b447&table=block&spaceId=579fe283-28aa-489d-ae65-d683304becfc&expirationTimestamp=1685856593687&signature=1BURKLuLw4DA0s20ddvDQxLcsGY0A_uaNRXQPAx-JPQ&downloadName=data.json';

    fetch(dataURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);

            if (lang === 'python') {
                // dataPy = python의 데이타
                const dataPy = data['python']['company_type'];
                //   console.log('dataPy', dataPy);

                // companyName = [카카오, 프로그래머스]
                const companyNamePy = Object.keys(dataPy);
                //   console.log('companyNamePy', companyNamePy);

                // labelsPy = [DFSBFS, 구현, 그리다, 기타, 슽택큐, 완전탐색, 해시]
                const labelsPy = Object.keys(dataPy[companyNamePy[0]]);
                //   console.log('labelsPy', labelsPy);

                const pyCompanyChartRadar = new Chart(
                    document.getElementById('company-type-radar-chart'),
                    {
                        type: 'radar',
                        data: {
                            labels: labelsPy,
                            datasets: [
                                {
                                    label: companyNamePy[0],
                                    data: Object.values(dataPy[companyNamePy[0]]),
                                    fill: true,
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    pointBackgroundColor: 'rgb(255, 99, 132)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgb(255, 99, 132)',
                                },
                                {
                                    label: companyNamePy[1],
                                    data: Object.values(dataPy[companyNamePy[1]]),
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

                {
                }
                return pyCompanyChartRadar;
            } else if (lang === 'js') {
                // dataJs = js의 데이타
                const dataJs = data['js']['company_type'];
                //   console.log('dataJs', dataJs);

                // companyName = 카카오, 프로그래머스
                const companyNameJs = Object.keys(dataJs);
                //   console.log('companyNameJs', companyNameJs);

                // labelsPy = DFSBFS, 구현, 그리다, 기타, 슽택큐, 완전탐색, ,해시
                const labelsJs = Object.keys(dataJs[companyNameJs[0]]);
                //   console.log('labelsJs', labelsJs);

                const jsCompanyChartRadar = new Chart(
                    document.getElementById('company-type-radar-chart'),
                    {
                        type: 'radar',
                        data: {
                            labels: labelsJs,
                            datasets: [
                                {
                                    label: companyNameJs[0],
                                    data: Object.values(dataJs[companyNameJs[0]]),
                                    fill: true,
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                    borderColor: 'rgb(255, 99, 132)',
                                    pointBackgroundColor: 'rgb(255, 99, 132)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgb(255, 99, 132)',
                                },
                                {
                                    label: companyNameJs[1],
                                    data: Object.values(dataJs[companyNameJs[1]]),
                                    fill: true,
                                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                    borderColor: 'rgb(54, 162, 235)',
                                    pointBackgroundColor: 'rgb(54, 162, 235)',
                                    pointBorderColor: '#fff',
                                    pointHoverBackgroundColor: '#fff',
                                    pointHoverBorderColor: 'rgb(54, 162, 235)',
                                },
                                {
                                    label: companyNameJs[2],
                                    data: Object.values(dataJs[companyNameJs[2]]),
                                    fill: true,
                                    fillColor: 'rgba(0,120,0,0.2)',
                                    strokeColor: 'rgba(0,120,0,1)',
                                    pointColor: 'rgba(10,10,10,1)',
                                    pointStrokeColor: '#ccc',
                                    pointHighlightFill: '#333',
                                    pointHighlightStroke: 'rgba(255,255,0,1)',
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

                {
                }
                return jsCompanyChartRadar;
            }
            charts.push(pyCompanyChartRadar, jsCompanyChartRadar);
        });
}
export default getCompanyDataForRadar;