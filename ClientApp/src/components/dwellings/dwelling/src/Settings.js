import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';

import FloatInput from '../../../layout/FloatInput';

const Settings = ({
  bargainedAmount,
  capitalIncomeTaxRate,
  debtEquityRatio,
  debtIntrestRate,
  debtPaymentYears,
  deleteDwelling,
  rentEuros,
  rentingRate,
  setBargainedAmount,
  setCapitalIncomeTaxRate,
  setDebtEquityRatio,
  setDebtIntrestRate,
  setDebtPaymentYears,
  setRentingRate,
  setRentEuros
}) => (
  <>
    <h5>Velka</h5>
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

    <h5>Kulujen alentaminen</h5>
    <Container>
      <Row>
        <Col md="4">
          <FloatInput
            id={'bargained-amount'}
            label={'Tingitty, €'}
            setValue={setBargainedAmount}
            value={bargainedAmount}
          />
        </Col>
      </Row>
    </Container>

    <h5>Vuokratuotto</h5>
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

    <h5>Poista</h5>
    <Container>
      <Row>
        <Col md="4">
          <Button onClick={deleteDwelling}>Poista</Button>
        </Col>
      </Row>
    </Container>
  </>
);

export default Settings;
