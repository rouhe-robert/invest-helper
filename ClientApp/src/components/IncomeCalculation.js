import React from 'react';

const IncomeCalculation = ({
  capitalIncomeTaxRate,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears,
  dwellingRenovationDebt,
  housingCooperativeRenovationDebt,
  maintenanceCharge,
  price,
  rentEuros,
  rentingRate,
  squareMeters,
}) => {
  const allInputsHasLargerThanZeroValues = () => (
    capitalIncomeTaxRate > 0 &&
    debtEquityRatio > 0 &&
    debtIntrestRate > 0 &&
    debtPaymentYears > 0 &&
    maintenanceCharge > 0 &&
    price > 0 &&
    rentEuros > 0 &&
    rentingRate > 0 &&
    squareMeters > 0
  );

  if (!allInputsHasLargerThanZeroValues()) {
    return null;
  }

  const loan = price * ((100 - debtEquityRatio) / 100);
  const ownMoneyAmount = price - loan;
  const loanMontlyPayment = loan / debtPaymentYears / 12;
  const loanIntrestMonthlyPayment = (loan * (debtIntrestRate / 100)) / 12;
  
  const renovationDebt = dwellingRenovationDebt + housingCooperativeRenovationDebt;
  const costWithRenovationDebt = price + renovationDebt;
  const ownMoneyWithDwellingRenovationDebt = ownMoneyAmount + dwellingRenovationDebt;

  const pricePerSquareMeter = price / squareMeters;
  const maintenanceChargePerSquareMeter = maintenanceCharge / squareMeters;

  const averageMonthlyRentPayment = (rentEuros / 12) * rentingRate
  const income = averageMonthlyRentPayment - maintenanceCharge - loanIntrestMonthlyPayment;
  const capitalIncomeTax = income < 0 ? 0 : income * (capitalIncomeTaxRate / 100);
  const yearlyProfitMargin = (income * 12) / costWithRenovationDebt * 100;
  const moneyFlow = income - loanMontlyPayment;

  return (
    <>
      <h2>Laskelmat</h2>

      <h4>Laina</h4>
      <p>Suuruus: {loan}€</p>
      <p>Rahoitettava itse: {ownMoneyAmount}€</p>
      <p>Velan takaisinmaksu: {loanMontlyPayment}€/kk</p>
      <p>Velan korkojen maksu: {loanIntrestMonthlyPayment}€/kk</p>

      <h4>Korjausvelka</h4>
      <p>Korjausvelka yhteensä: {renovationDebt}€</p>
      <p>Hinta korjausvelan kanssa: {costWithRenovationDebt}€</p>
      <p>Oman rahan tarve asunnon korjausvelan kanssa: {ownMoneyWithDwellingRenovationDebt}€</p>

      <h4>Neliöhinnat</h4>
      <p>Ostohinta: {pricePerSquareMeter.toFixed(2)} / m²</p>
      <p>Hoitovastike: {maintenanceChargePerSquareMeter.toFixed(2)}€ / m²</p>

      <h4>Verokulut</h4>
      <p>Pääomatulovero: {capitalIncomeTax.toFixed(2)}€ / kk</p>

      <h4>Avaintiedot</h4>
      <p>Keskimääräinen saatu vuokra: {averageMonthlyRentPayment.toFixed(2)}€/kk</p>
      <p>Tuotto: {income.toFixed(2)}€/kk</p>
      <p>Tuottoprosentti: {yearlyProfitMargin.toFixed(2)}%/vuosi</p>
      <p>Rahavirta: {moneyFlow.toFixed(2)}€</p>
    </>
  )
}

export default IncomeCalculation;
