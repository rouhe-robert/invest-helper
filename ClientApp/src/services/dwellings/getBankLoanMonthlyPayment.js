import getBankLoan from "./getBankLoan";

export default (dwelling, bargainedAmount, debtEquityRatio, debtPaymentYears) => (
  getBankLoan(dwelling, bargainedAmount, debtEquityRatio) / 12 / debtPaymentYears
);