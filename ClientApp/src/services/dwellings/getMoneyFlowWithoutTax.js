import getTotalMonthlyPayment from './getTotalMonthlyPayment';

export default (
  dwelling,
  rentEuros,
  rentingRate,
  bargainedAmount,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears
) => (
  (rentEuros * (rentingRate / 12))
  - dwelling.maintenanceCharge
  - getTotalMonthlyPayment(
      dwelling,
      bargainedAmount,
      debtEquityRatio,
      debtIntrestRate,
      debtPaymentYears
    )
);