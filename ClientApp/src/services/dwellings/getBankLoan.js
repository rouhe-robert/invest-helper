import getPrice from "./getPrice";

export default (dwelling, bargainedAmount, debtEquityRatio) => (
  getPrice(dwelling, bargainedAmount) * (1 - (debtEquityRatio / 100))
);