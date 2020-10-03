import getPrice from './getPrice'

export default ({bargainedAmount, financingDebt, price}) => {
  if (!validParameters({bargainedAmount, financingDebt, price})) {
    throw new Error();
  }

  return (
    getPrice({bargainedAmount, price})
      - financingDebt
  );
}

const validParameters = ({bargainedAmount, financingDebt, price}) => (
  typeof bargainedAmount !== 'undefined'
  && typeof financingDebt !== 'undefined'
  && typeof price !== 'undefined'
);