import getPrice from '../../../services/dwellings/getPrice';

describe('services/dwellingx/getPrice', () => {
  it('Calculates price correctly', async () => {
    expect(getPrice({price: 100000, bargainedAmount: 20000})).toEqual(80000);
  });
});
