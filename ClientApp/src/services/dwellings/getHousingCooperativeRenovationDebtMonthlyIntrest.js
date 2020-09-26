export default (dwelling, debtIntrestRate) => (
  (
    dwelling.housingCooperativeRenovationDebt
    * (debtIntrestRate / 100)
  )
  / 12
);