import getBankLoan from "./getBankLoan";

export default (dwelling, bargainedAmount, debtEquityRatio, debtIntrestRate) => (
  (
    getBankLoan(dwelling, bargainedAmount, debtEquityRatio)
    * (debtIntrestRate / 100)
  )
  / 12
);