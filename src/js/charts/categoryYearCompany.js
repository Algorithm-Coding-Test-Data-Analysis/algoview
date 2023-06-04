import getCompanyData from './companyChart.js';
import getCompanyDataForRadar from './companyChartRadar.js';
import getYearTypeChart from './yearTypeChart.js';

function getCategoryYearCompany(props) {
  getCompanyData(...props);
  getCompanyDataForRadar(...props);
  getYearTypeChart(...props);
}

export default getCategoryYearCompany;
