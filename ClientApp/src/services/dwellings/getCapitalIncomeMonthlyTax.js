export default (dwelling, rentEuros, rentingRate, capitalIncomeTaxRate) => (
  (
    rentEuros
    * (rentingRate / 12)
    * (1 - (capitalIncomeTaxRate / 100))
  )
    - dwelling.maintenanceCharge
);