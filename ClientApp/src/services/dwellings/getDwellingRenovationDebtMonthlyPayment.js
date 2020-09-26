export default (dwelling, debtPaymentYears) => (
  dwelling.dwellingRenovationDebt / 12 / debtPaymentYears
);