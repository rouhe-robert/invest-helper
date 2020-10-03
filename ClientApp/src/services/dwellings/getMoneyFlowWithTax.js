import getTotalMonthlyPayment from './getTotalMonthlyPayment';
import getCapitalIncomeMonthlyTax from './getCapitalIncomeMonthlyTax';
import getMoneyFlowWithoutTax from './getMoneyFlowWithoutTax';

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
  getMoneyFlowWithoutTax(
    dwelling,
    rentEuros,
    rentingRate,
    bargainedAmount,
    debtEquityRatio,
    debtIntrestRate,
    debtPaymentYears
  )
  - getCapitalIncomeMonthlyTax(
      dwelling,
      rentEuros,
      rentingRate,
      bargainedAmount,
      debtEquityRatio,
      debtIntrestRate,
      capitalIncomeTaxRate
    )
);