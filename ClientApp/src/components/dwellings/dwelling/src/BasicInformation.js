import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const BasicInformation = ({dwelling}) => {
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
    <Container>
      <Row>
        <Col md="4">
          Neliöt: {dwelling.squareMeters}m²<br />
          Huoneiden lukumäärä: {dwelling.roomsCount}<br/>
          Kerros: {dwelling.floor}
        </Col>
        <Col md="4">
          {getApartmentType()}
          {getHasOwnLandlot()}
          {getHasElevator()}
          {getHasSauna()}
        </Col>
        <Col md="4">
          Velaton hinta: <strong>{dwelling.price}€</strong><br />
          Taloyhtiövelka: {dwelling.financingDebt}€<br />
          Hoitovastike: {dwelling.maintenanceCharge}€<br />
          Rahoitusvastike: {dwelling.financingDebtCharge}€<br />
          Asunnon korjausvelka: {dwelling.dwellingRenovationDebt}€<br />
          Taloyhtiön korjausvelka: {dwelling.housingCooperativeRenovationDebt}€
        </Col>
      </Row>
    </Container>
  );
};

export default BasicInformation;
