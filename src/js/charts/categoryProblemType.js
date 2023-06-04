import getProblemTypeData from './problemTypeChart.js';
import getProblemTypeMethod from './problemTypeMethodChart.js';
import getProblemTypeFunctionData from './problemTypeFunctionChart.js';
import getProblemTypeFunctionMethodData from './problemTypeFunctionMethodChart.js';

function getCategoryProblemType(props) {
  getProblemTypeData(...props);
  getProblemTypeMethod(...props);
  getProblemTypeFunctionData(...props);
  getProblemTypeFunctionMethodData(...props);
}

export default getCategoryProblemType;
