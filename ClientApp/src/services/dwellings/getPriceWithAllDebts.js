export default (dwelling, bargainedAmount) => (
  dwelling.price
    + dwelling.dwellingRenovationDebt
    + dwelling.housingCooperativeRenovationDebt
    - bargainedAmount
);