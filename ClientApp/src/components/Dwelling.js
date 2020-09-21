import React, { useState, useEffect } from 'react';

import apiDwellings from '../api/dwellings';
import CheckboxInput from './layout/CheckboxInput';
import CreateDwelling from './CreateDwelling';
import FloatInput from './layout/FloatInput';
import IncomeCalculation from './IncomeCalculation';
import NumberInput from './layout/NumberInput';
import { Col, Container, Row } from 'reactstrap';

const Dwelling = ({match}) => {

  // Debt
  const [debtPaymentYears, setDebtPaymentYears] = useState('25');
  const [debtIntrestRate, setDebtIntrestRate] = useState('2');
  const [debtEquityRatio, setDebtEquityRatio] = useState('30');

  // Income
  const [rentingRate, setRentingRate] = useState('11');
  const [capitalIncomeTaxRate, setCapitalIncomeTaxRate] = useState('30');
  const [dwelling, setDwelling] = useState(null);

  const fetchDwelling = async () => {
    setDwelling(await apiDwellings.get(match.params.id));
  }

  useEffect(() => {
    if (match.params.id !== 'create') {
      fetchDwelling();
    }
  }, []);

  if (match.params.id === 'create') {
    return <CreateDwelling/>
  }

  if (dwelling === null) {
    return null;
  }

  const getApartmentType = () => {
    if (dwelling.type === 'apartment') {
      return (<>Kerrostaloasunto<br /></>)
    }

    return (<>VIRHEELLINEN ASUNNON TYYPPI: '{dwelling.type}'<br/></>)
  }

  const getHasElevator = () => dwelling.hasElevator ? <>Hissi<br /></> : null;
  const getHasOwnLandlot = () => dwelling.hasOwnLandLot ? <>Oma tontti<br /></> : null;
  const getHasSauna = () => dwelling.hasSauna ? <>Sauna<br /></> : null;

  return (
    <>
      <h4>{dwelling.address}, {dwelling.district.name}, {dwelling.district.city.name}</h4>
      <Container>
        <Row>
          <Col md="4">
            Neliöt: {dwelling.squareMeters}m²<br />
            Huoneiden lukumäärä: {dwelling.roomsCount}
          </Col>
          <Col md="4">
            {getApartmentType()}
            {getHasOwnLandlot()}
            {getHasElevator()}
            {getHasSauna()}
          </Col>
          <Col md="4">
            Hinta: <strong>{dwelling.price}€</strong><br />
            Hoitovastike: {dwelling.maintenanceCharge}€<br />
            Asunnon korjausvelka: {dwelling.dwellingRenovationDebt}€<br />
            Taloyhtiön korjausvelka: {dwelling.housingCooperativeRenovationDebt}€
          </Col>
        </Row>
      </Container>

      <h4>Velka</h4>
      <Container>
        <Row>
          <Col md="4">
            <FloatInput
              id={'debt-payment-years'}
              label={'Velan takaisinmaksuaika, vuosia'}
              setValue={setDebtPaymentYears}
              value={debtPaymentYears}
            />
          </Col>
          <Col md="4">
            <FloatInput
              id={'debt-interest-rate'}
              label={'Korko, %'}
              setValue={setDebtIntrestRate}
              value={debtIntrestRate}
            />
          </Col>
          <Col md="4">
            <FloatInput
              id={'debt-equity-ratio'}
              label={'Omavaraisuusaste, %'}
              setValue={setDebtEquityRatio}
              value={debtEquityRatio}
            />
          </Col>
        </Row>
      </Container>

      <h4>Vuokratuotto</h4>
      <Container>
        <Row>
          <Col md="4">
            Vuokra: {dwelling.rentEuros}€
          </Col>
          <Col md="4">
            <FloatInput
              id={'capital-income-tax-rate'}
              label={'Kiinteistövero, %'}
              setValue={setCapitalIncomeTaxRate}
              value={capitalIncomeTaxRate}
            />
          </Col>
          <Col md="4">
            <FloatInput
              id={'renting-rate'}
              label={'Vuokrausaste, kk'}
              setValue={setRentingRate}
              value={rentingRate}
            />
          </Col>
        </Row>
      </Container>

      <IncomeCalculation
        capitalIncomeTaxRate={parseFloat(capitalIncomeTaxRate)}
        debtEquityRatio={parseFloat(debtEquityRatio)}
        debtIntrestRate={parseFloat(debtIntrestRate)}
        debtPaymentYears={parseFloat(debtPaymentYears)}
        dwellingRenovationDebt={dwelling.dwellingRenovationDebt}
        housingCooperativeRenovationDebt={dwelling.housingCooperativeRenovationDebt}
        maintenanceCharge={dwelling.maintenanceCharge}
        price={dwelling.price}
        rentEuros={dwelling.rentEuros}
        rentingRate={parseFloat(rentingRate)}
        squareMeters={dwelling.squareMeters}
      />
    </>
  );
}

export default Dwelling;
