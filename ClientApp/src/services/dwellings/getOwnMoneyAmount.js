import getAmountToPayToSeller from './getAmountToPayToSeller';
import getBankLoan from './getBankLoan';

export default (dwelling, bargainedAmount, debtEquityRatio) => (
  getAmountToPayToSeller(dwelling, bargainedAmount) - getBankLoan(dwelling, bargainedAmount, debtEquityRatio) + dwelling.dwellingRenovationDebt
);