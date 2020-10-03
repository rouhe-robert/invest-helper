import getAmountToPayToSeller from '../../../services/dwellings/getAmountToPayToSeller';

describe('services/dwellingx/getAmountToPayToSeller', () => {
  it('Calculates amount to pay to seller correctly', async () => {
    expect(getAmountToPayToSeller({
      bargainedAmount: 20000,
      financingDebt: 10000,
      price: 100000
    })).toEqual(70000);
  });
});
