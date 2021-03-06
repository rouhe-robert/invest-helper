import getMonthlyProfit from './getMonthlyProfit';
import getPrice from './getPrice';

export default (dwelling, bargainedAmount, rentEuros, rentingRate, debtEquityRatio, debtIntrestRate) => (
  (
    getMonthlyProfit(dwelling, rentEuros, rentingRate, bargainedAmount, debtEquityRatio, debtIntrestRate) * 12
  ) / (
    (getPrice({bargainedAmount, price: dwelling.price}) * (debtEquityRatio / 100))
      + dwelling.dwellingRenovationDebt
  ) * 100
);