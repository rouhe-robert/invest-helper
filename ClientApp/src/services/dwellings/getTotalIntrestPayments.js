import getBankLoanMonthlyIntrest from './getBankLoanMonthlyIntrest';
import getHousingCooperativeRenovationDebtMonthlyIntrest from './getHousingCooperativeRenovationDebtMonthlyIntrest';
import getDwellingRenovationDebtMonthlyIntrest from './getDwellingRenovationDebtMonthlyIntrest';

export default (dwelling, bargainedAmount, debtEquityRatio, debtIntrestRate) => (
  getBankLoanMonthlyIntrest(dwelling, bargainedAmount, debtEquityRatio, debtIntrestRate)
  + getDwellingRenovationDebtMonthlyIntrest(dwelling, debtIntrestRate)
  + getHousingCooperativeRenovationDebtMonthlyIntrest(dwelling, debtIntrestRate)
);