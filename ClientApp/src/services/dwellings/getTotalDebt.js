import getBankLoan from "./getBankLoan";

export default (dwelling, bargainedAmount, debtEquityRatio) => (
  getBankLoan(dwelling, bargainedAmount, debtEquityRatio)
    + dwelling.financingDebt
    + dwelling.dwellingRenovationDebt
    + dwelling.housingCooperativeRenovationDebt
);