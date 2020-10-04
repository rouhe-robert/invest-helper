import getBankLoan from './getBankLoan';
import getTotalRenovationDebt from './getTotalRenovationDebt';

export default (dwelling, bargainedAmount, debtEquityRatio) => (
  getBankLoan(dwelling, bargainedAmount, debtEquityRatio)
    + dwelling.financingDebt
    + getTotalRenovationDebt({
      dwellingRenovationDebt: dwelling.dwellingRenovationDebt,
      housingCooperativeRenovationDebt: dwelling.housingCooperativeRenovationDebt
    })
);