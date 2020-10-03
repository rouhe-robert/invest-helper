import getAmountToPayToSeller from "./getAmountToPayToSeller";

export default (dwelling, bargainedAmount, debtEquityRatio) => (
  getAmountToPayToSeller({
    bargainedAmount,
    financingDebt: dwelling.financingDebt,
    price: dwelling.price
  }) * (
    1 - (debtEquityRatio / 100)
  )
);