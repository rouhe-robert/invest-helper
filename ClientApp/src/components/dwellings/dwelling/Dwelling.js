import React, { useState, useEffect } from 'react';

import Analytics from './src/Analytics';
import apiDwellings from '../../../api/dwellings';
import BasicInformation from './src/BasicInformation';
import CreateDwelling from '../CreateDwelling';
import Header from './src/Header';
import Settings from './src/Settings';
import Tabs from './src/Tabs';

const Dwelling = ({match}) => {

  const [activeTab, setActiveTab] = useState('basic-information');

  // Debt
  const [debtPaymentYears, setDebtPaymentYears] = useState('25');
  const [debtIntrestRate, setDebtIntrestRate] = useState('2');
  const [debtEquityRatio, setDebtEquityRatio] = useState('30');

  // Income
  const [rentEuros, setRentEuros] = useState('0');
  const [rentingRate, setRentingRate] = useState('11');
  const [capitalIncomeTaxRate, setCapitalIncomeTaxRate] = useState('30');
  const [dwelling, setDwelling] = useState(null);

  const fetchDwelling = async () => {
    const apiDwelling = await apiDwellings.get(match.params.id);
    setDwelling(apiDwelling);
    setRentEuros(apiDwelling.rentEuros)
  }

  useEffect(() => {
    if (match.params.id !== 'create') {
      fetchDwelling();
    }
  }, []);

  if (match.params.id === 'create') {
    return <CreateDwelling/>;
  }

  if (dwelling === null) {
    return null;
  }

  const getTab = () => {
    if (activeTab === 'analytics') {
      return (
        <Analytics
          capitalIncomeTaxRate={parseFloat(capitalIncomeTaxRate)}
          debtEquityRatio={parseFloat(debtEquityRatio)}
          debtIntrestRate={parseFloat(debtIntrestRate)}
          debtPaymentYears={parseFloat(debtPaymentYears)}
          dwelling={dwelling}
          rentEuros={parseFloat(rentEuros)}
          rentingRate={parseFloat(rentingRate)}
        />
      );
    }

    if (activeTab === 'basic-information') {
      return <BasicInformation dwelling={dwelling} />;
    }

    if (activeTab === 'settings') {
      return (
        <Settings
          capitalIncomeTaxRate={capitalIncomeTaxRate}
          debtEquityRatio={debtEquityRatio}
          debtIntrestRate={debtIntrestRate}
          debtPaymentYears={debtPaymentYears}
          rentEuros={rentEuros}
          rentingRate={rentingRate}
          setCapitalIncomeTaxRate={setCapitalIncomeTaxRate}
          setDebtEquityRatio={setDebtEquityRatio}
          setDebtIntrestRate={setDebtIntrestRate}
          setDebtPaymentYears={setDebtPaymentYears}
          setRentEuros={setRentEuros}
          setRentingRate={setRentingRate}
        />
      );
    }

    return null;
  }

  return (
    <>
      <Header dwelling={dwelling} />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {getTab()}
    </>
  );
}

export default Dwelling;
