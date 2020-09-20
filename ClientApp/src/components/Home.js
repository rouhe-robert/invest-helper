import React, { useState } from 'react';

import FloatInput from './layout/FloatInput';
import IncomeCalculation from './IncomeCalculation';
import NumberInput from './layout/NumberInput';
import TextInput from './layout/TextInput';
import { Col, Container, Row } from 'reactstrap';
import CheckboxInput from './layout/CheckboxInput';

const Home = () => {

  // Dwelling
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('0');
  const [maintenanceCharge, setMaintenanceCharge] = useState('0');
  const [squareMeters, setSquareMeters] = useState('0');
  const [roomsCount, setRoomsCount] = useState('0');
  const [hasElevator, setHasElevator] = useState(false);
  const [hasOwnLandLot, setHasOwnLandLot] = useState(false);
  const [hasSauna, setHasSauna] = useState(false);

  // RenovationDebt
  const [dwellingRenovationDebt, setDwellingRenovationDebt] = useState('0');
  const [housingCooperativeRenovationDebt, setHousingCooperativeRenovationDebt] = useState('0');

  // Debt
  const [debtPaymentYears, setDebtPaymentYears] = useState('25');
  const [debtIntrestRate, setDebtIntrestRate] = useState('2');
  const [debtEquityRatio, setDebtEquityRatio] = useState('30');

  // Income
  const [rentEuros, setRentEuros] = useState('0');
  const [rentingRate, setRentingRate] = useState('11');
  const [capitalIncomeTaxRate, setCapitalIncomeTaxRate] = useState('30');

  return (
    <>
      <h4>Asunto</h4>
      <Container>
        <Row>
          <Col>
            <TextInput
              id={'address'}
              label={'Osoite'}
              setValue={setAddress}
              value={address}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FloatInput
              id={'price'}
              label={'Hinta, €'}
              setValue={setPrice}
              value={price}
            />
          </Col>
          <Col sm="6">
            <FloatInput
              id={'maintenance-charge'}
              label={'Hoitovastike, €'}
              setValue={setMaintenanceCharge}
              value={maintenanceCharge}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FloatInput
              id={'square-meters'}
              label={'Neliöt, m²'}
              setValue={setSquareMeters}
              value={squareMeters}
            />
          </Col>
          <Col sm="6">
            <NumberInput
              id={'rooms-count'}
              label={'Huoneiden lukumäärä'}
              setValue={setRoomsCount}
              value={roomsCount}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="3" lg="2">
            <CheckboxInput
              checked={hasElevator}
              id={'has-elevator'}
              label={'Hissi'}
              setChecked={setHasElevator}
            />
          </Col>
          <Col sm="3" lg="2">
            <CheckboxInput
              checked={hasOwnLandLot}
              id={'has-own-land-lot'}
              label={'Oma tontti'}
              setChecked={setHasOwnLandLot}
            />
          </Col>
          <Col sm="3" lg="2">
            <CheckboxInput
              checked={hasSauna}
              id={'has-sauna'}
              label={'Sauna'}
              setChecked={setHasSauna}
            />
          </Col>
        </Row>
      </Container>

      <h4>Korjausvelka</h4>
      <Container>
        <Row>
          <Col sm="6">
            <FloatInput
              id={'dwelling-renovation-debt'}
              label={'Asunnon korjausvelka, €'}
              setValue={setDwellingRenovationDebt}
              value={dwellingRenovationDebt}
            />
          </Col>
          <Col sm="6">
            <FloatInput
              id={'housing-cooperative-renovation-debt'}
              label={'Taloyhtiön korjausvelka, €'}
              setValue={setHousingCooperativeRenovationDebt}
              value={housingCooperativeRenovationDebt}
            />
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
            <FloatInput
              id={'rent-euros'}
              label={'Vuokra, €'}
              setValue={setRentEuros}
              value={rentEuros}
            />
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
        dwellingRenovationDebt={parseFloat(dwellingRenovationDebt)}
        housingCooperativeRenovationDebt={parseFloat(housingCooperativeRenovationDebt)}
        maintenanceCharge={parseFloat(maintenanceCharge)}
        price={parseFloat(price)}
        rentEuros={parseFloat(rentEuros)}
        rentingRate={parseFloat(rentingRate)}
        squareMeters={parseFloat(squareMeters)}
      />
    </>
  );
}

export default Home;
