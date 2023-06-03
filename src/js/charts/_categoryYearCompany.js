import getCompanyData from './yearCompany/companyChart.js';
import getYearTypeChart from './yearCompany/yearTypeChart.js';

function getCategoryYearCompany(data, lang, charts) {
  getCompanyData(data, lang, charts);
  getYearTypeChart(data, lang, charts);
}

export default getCategoryYearCompany;
