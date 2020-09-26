import React from 'react';

const Analytics = ({
  capitalIncomeTaxRate,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears,
  dwelling,
  rentEuros,
  rentingRate,
}) => {
  const allInputsHasLargerThanZeroValues = () => (
    capitalIncomeTaxRate > 0 &&
    debtEquityRatio > 0 &&
    debtIntrestRate > 0 &&
    debtPaymentYears > 0 &&
    dwelling.maintenanceCharge > 0 &&
    dwelling.price > 0 &&
    rentEuros > 0 &&
    rentingRate > 0 &&
    dwelling.squareMeters > 0
  );

  if (!allInputsHasLargerThanZeroValues()) {
    return null;
  }

  const loan = dwelling.price * ((100 - debtEquityRatio) / 100);
  const ownMoneyAmount = dwelling.price - loan;
  const loanMontlyPayment = loan / debtPaymentYears / 12;
  const loanIntrestMonthlyPayment = (loan * (debtIntrestRate / 100)) / 12;
  
  const renovationDebt = dwelling.dwellingRenovationDebt + dwelling.housingCooperativeRenovationDebt;
  const costWithRenovationDebt = dwelling.price + renovationDebt;
  const ownMoneyWithDwellingRenovationDebt = ownMoneyAmount + dwelling.dwellingRenovationDebt;

  const pricePerSquareMeter = dwelling.price / dwelling.squareMeters;
  const maintenanceChargePerSquareMeter = dwelling.maintenanceCharge / dwelling.squareMeters;

  const averageMonthlyRentPayment = (rentEuros / 12) * rentingRate
  const income = averageMonthlyRentPayment - dwelling.maintenanceCharge - loanIntrestMonthlyPayment;
  const capitalIncomeTax = income < 0 ? 0 : income * (capitalIncomeTaxRate / 100);
  const yearlyProfitMargin = (income * 12) / costWithRenovationDebt * 100;
  const moneyFlow = income - loanMontlyPayment;

  return (
    <>
      <h4>Laskelmat</h4>

      <h5>Laina</h5>
      <p>Suuruus: {loan.toFixed(2)}€</p>
      <p>Rahoitettava itse: {ownMoneyAmount.toFixed(2)}€</p>
      <p>Velan takaisinmaksu: {loanMontlyPayment.toFixed(2)}€/kk</p>
      <p>Velan korkojen maksu: {loanIntrestMonthlyPayment.toFixed(2)}€/kk</p>

      <h5>Korjausvelka</h5>
      <p>Korjausvelka yhteensä: {renovationDebt}€</p>
      <p>Hinta korjausvelan kanssa: {costWithRenovationDebt}€</p>
      <p>Oman rahan tarve asunnon korjausvelan kanssa: {ownMoneyWithDwellingRenovationDebt.toFixed(2)}€</p>

      <h5>Neliöhinnat</h5>
      <p>Ostohinta: {pricePerSquareMeter.toFixed(2)} / m²</p>
      <p>Hoitovastike: {maintenanceChargePerSquareMeter.toFixed(2)}€ / m²</p>

      <h5>Verokulut</h5>
      <p>Pääomatulovero: {capitalIncomeTax.toFixed(2)}€ / kk</p>

      <h5>Avaintiedot</h5>
      <p>Keskimääräinen saatu vuokra: {averageMonthlyRentPayment.toFixed(2)}€/kk</p>
      <p>Tuotto: {income.toFixed(2)}€/kk</p>
      <p>Tuottoprosentti: {yearlyProfitMargin.toFixed(2)}%/vuosi</p>
      <p>Rahavirta: {moneyFlow.toFixed(2)}€</p>
    </>
  )
}

export default Analytics;
