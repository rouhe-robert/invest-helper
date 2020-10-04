import getTotalRenovationDebt from '../../../services/dwellings/getTotalRenovationDebt';

describe('services/dwellingx/getTotalRenovationDebt', () => {
  it('Calculates total renovation debt correctly', async () => {
    expect(getTotalRenovationDebt({
      dwellingRenovationDebt: 3000,
      housingCooperativeRenovationDebt: 5000
    })).toEqual(8000);
  });

  it('Notices that dwelling renovation debt is missing', async () => {
    expect(() => getTotalRenovationDebt({
      housingCooperativeRenovationDebt: 5000
    })).toThrow('Undefined dwelling renovation debt');
  });

  it('Notices that housing cooperative renovation debt is missing', async () => {
    expect(() => getTotalRenovationDebt({
      dwellingRenovationDebt: 3000
    })).toThrow('Undefined housing cooperative renovation debt');
  });
});
