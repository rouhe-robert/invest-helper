import getAmountToPayToSeller from '../../../services/dwellings/getAmountToPayToSeller';

describe('services/dwellingx/getAmountToPayToSeller', () => {
  it('Calculates amount to pay to seller correctly', async () => {
    expect(getAmountToPayToSeller({
      bargainedAmount: 20000,
      financingDebt: 10000,
      price: 100000
    })).toEqual(70000);
  });

  it('Notices that bargained amount is missing', async () => {
    expect(() => getAmountToPayToSeller({
      financingDebt: 10000,
      price: 100000
    })).toThrow('Undefined bargained amount');
  });

  it('Notices that financing debt is missing', async () => {
    expect(() => getAmountToPayToSeller({
      bargainedAmount: 20000,
      price: 100000
    })).toThrow('Undefined financing debt');
  });

  it('Notices that price is missing', async () => {
    expect(() => getAmountToPayToSeller({
      bargainedAmount: 20000,
      financingDebt: 10000,
    })).toThrow('Undefined price');
  });
});
