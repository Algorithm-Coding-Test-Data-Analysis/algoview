import getProblemTypeData from './problemTypeChart.js';
import getProblemTypeMethod from './problemTypeMethodChart.js';
import getProblemTypeFunctionData from './problemTypeFunctionChart.js';

function getCategoryProblemType(props) {
  getProblemTypeData(...props);
  getProblemTypeMethod(...props);
  getProblemTypeFunctionData(...props);
}

export default getCategoryProblemType;
