import getMonthlyProfit from './getMonthlyProfit';
import getPrice from './getPrice';

export default (dwelling, bargainedAmount, rentEuros, rentingRate, debtEquityRatio, debtIntrestRate) => (
  (
    getMonthlyProfit(dwelling, rentEuros, rentingRate, bargainedAmount, debtEquityRatio, debtIntrestRate) * 12
  ) / (
    getPrice(dwelling, bargainedAmount)
      + dwelling.dwellingRenovationDebt
      + dwelling.housingCooperativeRenovationDebt
  ) * 100
);