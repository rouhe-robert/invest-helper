import getBankLoanMonthlyIntrest from "./getBankLoanMonthlyIntrest";
import getBankLoanMonthlyPayment from "./getBankLoanMonthlyPayment";
import getDwellingRenovationDebtMonthlyIntrest from "./getDwellingRenovationDebtMonthlyIntrest";
import getDwellingRenovationDebtMonthlyPayment from "./getDwellingRenovationDebtMonthlyPayment";
import getHousingCooperativeRenovationDebtMonthlyIntrest from "./getHousingCooperativeRenovationDebtMonthlyIntrest";
import getHousingCooperativeRenovationDebtMonthlyPayment from "./getHousingCooperativeRenovationDebtMonthlyPayment";

export default (dwelling, bargainedAmount, debtEquityRatio, debtIntrestRate, debtPaymentYears) => (
  dwelling.financingDebtCharge
    + getBankLoanMonthlyIntrest(dwelling, bargainedAmount, debtEquityRatio, debtIntrestRate)
    + getBankLoanMonthlyPayment(dwelling, bargainedAmount, debtEquityRatio, debtPaymentYears)
    + getDwellingRenovationDebtMonthlyIntrest(dwelling, debtIntrestRate)
    + getDwellingRenovationDebtMonthlyPayment(dwelling, debtPaymentYears)
    + getHousingCooperativeRenovationDebtMonthlyIntrest(dwelling, debtIntrestRate)
    + getHousingCooperativeRenovationDebtMonthlyPayment(dwelling, debtPaymentYears)
);