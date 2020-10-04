import getPrice from "./getPrice";
import getTotalRenovationDebt from "./getTotalRenovationDebt";

export default ({
  bargainedAmount,
  dwellingRenovationDebt,
  housingCooperativeRenovationDebt,
  price
}) => {
  const paidPrice = getPrice({
    bargainedAmount,
    price
  });

  const totalRenovationDebt = getTotalRenovationDebt({
    dwellingRenovationDebt,
    housingCooperativeRenovationDebt
  });

  return paidPrice + totalRenovationDebt;
};