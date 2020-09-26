import getTotalIntrestPayments from "./getTotalIntrestPayments";

export default (dwelling, rentEuros, rentingRate, bargainedAmount, debtEquityRatio, debtIntrestRate) => (
  ((rentEuros - dwelling.maintenanceCharge) * (rentingRate / 12))
    - getTotalIntrestPayments(dwelling, bargainedAmount, debtEquityRatio, debtIntrestRate)
);