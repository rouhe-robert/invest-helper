import getPriceWithAllDebts from '../../../services/dwellings/getPriceWithAllDebts';

describe('services/dwellingx/getPriceWithAllDebts', () => {
  it('Calculates price with all debts correctly', async () => {
    expect(getPriceWithAllDebts({
      bargainedAmount: 10000,
      dwellingRenovationDebt: 3000,
      housingCooperativeRenovationDebt: 5000,
      price: 100000
    })).toEqual(98000);
  });

  it('Notices that bargained amount is missing', async () => {
    expect(() => getPriceWithAllDebts({
      dwellingRenovationDebt: 3000,
      housingCooperativeRenovationDebt: 5000,
      price: 100000
    })).toThrow('Undefined bargained amount');
  });

  it('Notices that dwelling renovation debt is missing', async () => {
    expect(() => getPriceWithAllDebts({
      bargainedAmount: 10000,
      housingCooperativeRenovationDebt: 5000,
      price: 100000
    })).toThrow('Undefined dwelling renovation debt');
  });

  it('Notices that housing cooperative renovation debt is missing', async () => {
    expect(() => getPriceWithAllDebts({
      bargainedAmount: 10000,
      dwellingRenovationDebt: 3000,
      price: 100000
    })).toThrow('Undefined housing cooperative renovation debt');
  });

  it('Notices that price is missing', async () => {
    expect(() => getPriceWithAllDebts({
      bargainedAmount: 10000,
      dwellingRenovationDebt: 3000,
      housingCooperativeRenovationDebt: 5000,
    })).toThrow('Undefined price');
  });
});
