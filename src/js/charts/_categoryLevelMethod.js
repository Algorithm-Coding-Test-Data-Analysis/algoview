import getMethodDataJs from './levelMethod/methodChartJs.js';
import getMethodDataPy from './levelMethod/methodChartPy.js';
import getLevelDataJs from './levelMethod/levelChartJS.js';
import getLevelDataPy from './levelMethod/levelChartPy.js';

function getCategoryLevelMethod(data, lang, charts) {
  getMethodDataJs(data, lang, charts);
  getMethodDataPy(data, lang, charts);
  getLevelDataJs(data, lang, charts);
  getLevelDataPy(data, lang, charts);
}

export default getCategoryLevelMethod;
