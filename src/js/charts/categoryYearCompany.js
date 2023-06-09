import getCompanyData from './companyChart.js';
import getCompanyDataForRadar from './companyChartRadar.js';
import getYearTypeChart from './yearTypeChart.js';
import getYearsChart from './yearsChart.js';

function getCategoryYearCompany(props) {
  getCompanyData(...props);
  getCompanyDataForRadar(...props);
  getYearTypeChart(...props);
  getYearsChart(...props);
}

export default getCategoryYearCompany;
