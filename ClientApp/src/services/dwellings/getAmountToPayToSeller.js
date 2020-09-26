export default (dwelling, bargainedAmount) => (
  dwelling.price
  - dwelling.financingDebt
  - bargainedAmount
);