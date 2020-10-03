export default ({price, bargainedAmount}) => {
  if (!validParameters({bargainedAmount, price})) {
    throw new Error();
  }

  return price - bargainedAmount;
}

const validParameters = ({bargainedAmount, price}) => (
  typeof bargainedAmount !== 'undefined'
  && typeof price !== 'undefined'
);
