import getMonthlyProfit from "./getMonthlyProfit";

export default (
  dwelling,
  rentEuros,
  rentingRate,
  bargainedAmount,
  debtEquityRatio,
  debtIntrestRate,
  capitalIncomeTaxRate
) => (
  getMonthlyProfit(
    dwelling,
    rentEuros,
    rentingRate,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate
  ) * (
    capitalIncomeTaxRate / 100
  )
);