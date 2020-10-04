import getPrice from '../../../services/dwellings/getPrice';

describe('services/dwellingx/getPrice', () => {
  it('Calculates price correctly', async () => {
    expect(getPrice({bargainedAmount: 20000, price: 100000})).toEqual(80000);
  });

  it('Notices that price is missing', async () => {
    expect(() => getPrice({bargainedAmount: 20000})).toThrow('Undefined price');
  });

  it('Notices that bargained amount is missing', async () => {
    expect(() => getPrice({price: 100000})).toThrow('Undefined bargained amount');
  });
});
