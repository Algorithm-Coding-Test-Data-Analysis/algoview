import getProblemTypeData from './problemTypeChart.js';
import getProblemTypeMethod from './problemTypeMethodChart.js';

function getCategoryProblemType(props) {
  getProblemTypeData(...props);
  getProblemTypeMethod(...props);
}

export default getCategoryProblemType;
