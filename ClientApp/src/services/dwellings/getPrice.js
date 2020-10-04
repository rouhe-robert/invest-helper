export default ({bargainedAmount, price}) => {
  if (typeof bargainedAmount === 'undefined') {
    throw 'Undefined bargained amount';
  }

  if (typeof price === 'undefined') {
    throw 'Undefined price';
  }

  return price - bargainedAmount;
}
