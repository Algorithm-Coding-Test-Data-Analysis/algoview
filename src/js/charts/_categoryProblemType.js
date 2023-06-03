import getProblemTypeData from './problemType/problemTypeChart.js';
import getProblemTypeMethod from './problemType/problemTypeMethodChart.js';

function getCategoryProblemType(data, lang, charts) {
  getProblemTypeData(data, lang, charts);
  getProblemTypeMethod(data, lang, charts);
}

export default getCategoryProblemType;
