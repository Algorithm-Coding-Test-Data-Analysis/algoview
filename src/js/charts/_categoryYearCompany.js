import getCompanyData from './companyChart.js';
import getYearTypeChart from './yearTypeChart.js';

function getCategoryYearCompany(props) {
  getCompanyData(...props);
  getYearTypeChart(...props);
}

export default getCategoryYearCompany;
