export default ({
  dwellingRenovationDebt,
  housingCooperativeRenovationDebt
}) => {
  if (typeof dwellingRenovationDebt === 'undefined') {
    throw 'Undefined dwelling renovation debt';
  }

  if (typeof housingCooperativeRenovationDebt === 'undefined') {
    throw 'Undefined housing cooperative renovation debt';
  }

  return (
    dwellingRenovationDebt
      + housingCooperativeRenovationDebt
  );
};
