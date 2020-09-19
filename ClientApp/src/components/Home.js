import React, { useState } from 'react';

import IncomeCalculation from './IncomeCalculation';
import NumberInput from './layout/NumberInput';

const Home = () => {

  // Dwelling
  const [price, setPrice] = useState('0');
  const [maintenanceCharge, setMaintenanceCharge] = useState('0');

  // Debt
  const [debtPaymentYears, setDebtPaymentYears] = useState('25');
  const [debtIntrestRate, setDebtIntrestRate] = useState('2');
  const [debtEquityRatio, setDebtEquityRatio] = useState('25');

  // Income
  const [rentEuros, setRentEuros] = useState('0');
  const [capitalIncomeTaxRate, setCapitalIncomeTaxRate] = useState('30');

  return (
    <>
      <h4>Asunto</h4>
      <NumberInput
        id={'price'}
        label={'Hinta, €'}
        setValue={setPrice}
        value={price}
      />
      <NumberInput
        id={'maintenance-charge'}
        label={'Hoitovastike, €'}
        setValue={setMaintenanceCharge}
        value={maintenanceCharge}
      />

      <h4>Velka</h4>
      <NumberInput
        id={'debt-payment-years'}
        label={'Velan takaisinmaksuaika, vuosia'}
        setValue={setDebtPaymentYears}
        value={debtPaymentYears}
      />
      <NumberInput
        id={'debt-interest-rate'}
        label={'Korko, %'}
        setValue={setDebtIntrestRate}
        value={debtIntrestRate}
      />
      <NumberInput
        id={'debt-equity-ratio'}
        label={'Omavaraisuusaste, %'}
        setValue={setDebtEquityRatio}
        value={debtEquityRatio}
      />

      <h4>Vuokratuotto</h4>
      <NumberInput
        id={'rent-euros'}
        label={'Vuokra, €'}
        setValue={setRentEuros}
        value={rentEuros}
      />
      <NumberInput
        id={'capital-income-tax-rate'}
        label={'Kiinteistövero, %'}
        setValue={setCapitalIncomeTaxRate}
        value={capitalIncomeTaxRate}
      />

      <IncomeCalculation
        capitalIncomeTaxRate={parseFloat(capitalIncomeTaxRate)}
        debtEquityRatio={parseFloat(debtEquityRatio)}
        debtIntrestRate={parseFloat(debtIntrestRate)}
        debtPaymentYears={parseFloat(debtPaymentYears)}
        maintenanceCharge={parseFloat(maintenanceCharge)}
        price={parseFloat(price)}
        rentEuros={parseFloat(rentEuros)}
      />
    </>
  );
}

export default Home;
