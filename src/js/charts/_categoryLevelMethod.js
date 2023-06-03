import getMethodDataJs from './methodChartJs.js';
import getMethodDataPy from './methodChartPy.js';
import getLevelDataJs from './levelChartJS.js';
import getLevelDataPy from './levelChartPy.js';

function getCategoryLevelMethod(props) {
  getMethodDataJs(...props);
  getMethodDataPy(...props);
  getLevelDataJs(...props);
  getLevelDataPy(...props);
}

export default getCategoryLevelMethod;
