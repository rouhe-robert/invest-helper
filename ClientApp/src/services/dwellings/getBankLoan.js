import getAmountToPayToSeller from "./getAmountToPayToSeller";

export default (dwelling, bargainedAmount, debtEquityRatio) => (
  getAmountToPayToSeller(dwelling, bargainedAmount) * (1 - (debtEquityRatio / 100))
);