import React from 'react';

const IncomeCalculation = ({
  capitalIncomeTaxRate,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears,
  maintenanceCharge,
  price,
  rentEuros
}) => {
  const allInputsHasLargerThanZeroValues = () => (
    capitalIncomeTaxRate > 0 &&
    debtEquityRatio > 0 &&
    debtIntrestRate > 0 &&
    debtPaymentYears > 0 &&
    maintenanceCharge > 0 &&
    price > 0 &&
    rentEuros > 0
  );

  if (!allInputsHasLargerThanZeroValues()) {
    return null;
  }

  const loan = price * ((100 - debtEquityRatio) / 100);
  const ownMoneyAmount = price - loan;
  const loanMontlyPayment = loan / debtPaymentYears / 12;
  const loanIntrestMonthlyPayment = (loan * (debtIntrestRate / 100)) / 12;
  const income = rentEuros - maintenanceCharge;
  const capitalIncomeTax = income * (capitalIncomeTaxRate / 100)
  const yearlyProfitMargin = (income * 12) / price * 100;
  const moneyFlow = income - loanMontlyPayment - loanIntrestMonthlyPayment;

  return (
    <>
      <h2>Laskelmat</h2>
      <h4>Laina</h4>
      <p>Suuruus: {loan}€</p>
      <p>Rahoitettava itse: {ownMoneyAmount}€</p>
      <p>Velan takaisinmaksu: {loanMontlyPayment}€/kk</p>
      <p>Velan korkojen maksu: {loanIntrestMonthlyPayment}€/kk</p>
      <h4>Verokulut</h4>
      <p>Pääomatulovero: {capitalIncomeTax}</p>
      <h4>Avaintiedot</h4>
      <p>Tuottoprosentti vuodessa: {yearlyProfitMargin}%</p>
      <p>Rahavirta: {moneyFlow}€</p>
    </>
  )
}

export default IncomeCalculation;
