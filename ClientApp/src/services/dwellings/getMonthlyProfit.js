import getTotalIntrestPayments from "./getTotalIntrestPayments";

export default (dwelling, rentEuros, rentingRate, bargainedAmount, debtEquityRatio, debtIntrestRate) => (
  (rentEuros * (rentingRate / 12))
    - dwelling.maintenanceCharge
    - getTotalIntrestPayments(dwelling, bargainedAmount, debtEquityRatio, debtIntrestRate)
);