import getProblemTypeData from './problemTypeChart.js';
import getProblemTypeMethod from './problemTypeMethodChart.js';
import getProblemTypeFunctionData from './problemTypeFunctionChart.js';
import getProblemTypeFunctionMethodData from './problemTypeFunctionMethodChart.js';
import getProblemTypeWCData from './problemTypeFunctionMethodWC.js';

function getCategoryProblemType(props) {
  getProblemTypeData(...props);
  getProblemTypeMethod(...props);
  getProblemTypeFunctionData(...props);
  getProblemTypeFunctionMethodData(...props);
  getProblemTypeWCData(...props);
}

export default getCategoryProblemType;
