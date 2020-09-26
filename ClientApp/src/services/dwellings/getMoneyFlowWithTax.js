import getTotalMonthlyPayment from './getTotalMonthlyPayment';
import getCapitalIncomeMonthlyTax from './getCapitalIncomeMonthlyTax';

export default (
  dwelling,
  rentEuros,
  rentingRate,
  bargainedAmount,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears,
  capitalIncomeTaxRate
) => (
  rentEuros
  - dwelling.maintenanceCharge
  - getTotalMonthlyPayment(
      dwelling,
      bargainedAmount,
      debtEquityRatio,
      debtIntrestRate,
      debtPaymentYears
    )
  - getCapitalIncomeMonthlyTax(
    dwelling,
    rentEuros,
    rentingRate,
    capitalIncomeTaxRate
  )
);