export default (dwelling, debtIntrestRate) => (
  (
    dwelling.dwellingRenovationDebt
    * (debtIntrestRate / 100)
  )
  / 12
);