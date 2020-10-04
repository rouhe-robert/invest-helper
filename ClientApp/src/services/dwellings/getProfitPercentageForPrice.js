import getMonthlyProfit from './getMonthlyProfit';
import getPrice from './getPrice';
import getTotalRenovationDebt from './getTotalRenovationDebt';

export default (dwelling, bargainedAmount, rentEuros, rentingRate, debtEquityRatio, debtIntrestRate) => (
  (
    getMonthlyProfit(dwelling, rentEuros, rentingRate, bargainedAmount, debtEquityRatio, debtIntrestRate) * 12
  ) / (
    getPrice({bargainedAmount, price: dwelling.price})
      + getTotalRenovationDebt({
        dwellingRenovationDebt: dwelling.dwellingRenovationDebt,
        housingCooperativeRenovationDebt: dwelling.housingCooperativeRenovationDebt
      })
  ) * 100
);