import getAmountToPayToSeller from './getAmountToPayToSeller';
import getBankLoan from './getBankLoan';

export default (dwelling, bargainedAmount, debtEquityRatio) => (
  getAmountToPayToSeller({
    bargainedAmount,
    financingDebt: dwelling.financingDebt,
    price: dwelling.price
  }) - getBankLoan(
    dwelling,
    bargainedAmount,
    debtEquityRatio
  ) + dwelling.dwellingRenovationDebt
);