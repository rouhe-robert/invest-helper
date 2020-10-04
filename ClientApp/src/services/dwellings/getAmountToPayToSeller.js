import getPrice from './getPrice'

export default ({bargainedAmount, financingDebt, price}) => {
  const paidPrice = getPrice({bargainedAmount, price});

  if (typeof financingDebt === 'undefined') {
    throw 'Undefined financing debt';
  }

  return paidPrice - financingDebt;
};
