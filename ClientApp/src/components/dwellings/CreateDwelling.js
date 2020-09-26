import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button } from 'reactstrap';

import apiDistricts from '../../api/districts';
import apiDwellings from '../../api/dwellings';
import CheckboxInput from '../layout/CheckboxInput';
import FloatInput from '../layout/FloatInput';
import NumberInput from '../layout/NumberInput';
import Select from '../layout/Select';
import TextInput from '../layout/TextInput';

const CreateDwelling = () => {

  // Form state
  const [districts, setDistricts] = useState([]);
  const [saved, setSaved] = useState(false);

  // Dwelling
  const [address, setAddress] = useState('');
  const [builtYear, setBuiltYear] = useState('0');
  const [district, setDistrict] = useState('');
  const [price, setPrice] = useState('0');
  const [financingDebt, setFinancingDebt] = useState('0');
  const [maintenanceCharge, setMaintenanceCharge] = useState('0');
  const [financingDebtCharge, setFinancingDebtCharge] = useState('0');
  const [type, setType] = useState('apartment');
  const [squareMeters, setSquareMeters] = useState('0');
  const [roomsCount, setRoomsCount] = useState('0');
  const [floor, setFloor] = useState('0');
  const [hasElevator, setHasElevator] = useState(false);
  const [hasOwnLandLot, setHasOwnLandLot] = useState(false);
  const [hasSauna, setHasSauna] = useState(false);
  const [webLink, setWebLink] = useState('');

  // RenovationDebt
  const [dwellingRenovationDebt, setDwellingRenovationDebt] = useState('0');
  const [housingCooperativeRenovationDebt, setHousingCooperativeRenovationDebt] = useState('0');

  // Income
  const [rentEuros, setRentEuros] = useState('0');

  useEffect(
    () => {
      const initializeDistricts = async () => {
        const response = await apiDistricts.get();
        setDistricts(
          [
            {name: '-', value: ''},
            ...response.map(district => ({
              name: district.name + ', ' + district.city.name,
              value: district.id
            }))
          ]
        );
      };

      initializeDistricts();
    },
    []
  );

  const onSave = () => {
    apiDwellings.post({
      address,
      builtYear: parseInt(builtYear),
      district: parseInt(district),
      dwellingRenovationDebt: parseFloat(dwellingRenovationDebt),
      financingDebt: parseFloat(financingDebt),
      financingDebtCharge: parseFloat(financingDebtCharge),
      floor: parseInt(floor),
      hasElevator,
      hasOwnLandLot,
      hasSauna,
      housingCooperativeRenovationDebt: parseFloat(housingCooperativeRenovationDebt),
      maintenanceCharge: parseFloat(maintenanceCharge),
      price: parseFloat(price),
      rentEuros: parseFloat(rentEuros),
      roomsCount: parseInt(roomsCount),
      squareMeters: parseFloat(squareMeters),
      type,
      webLink,
    });

    setSaved(true);
  };

  if (saved) {
    return (
      <>
        Tallennus onnistui!
      </>
    )
  }

  return (
    <>
      <h4>Asunto</h4>
      <Container>
        <Row>
          <Col md="3">
            <TextInput
              id={'address'}
              label={'Osoite'}
              setValue={setAddress}
              value={address}
            />
          </Col>
          <Col md="3">
            <Select
              id={'district'}
              label={'Kaupunginosa'}
              options={districts}
              setValue={setDistrict}
              value={district}
            />
          </Col>
          <Col md="3">
            <NumberInput
              id={'built-year'}
              label={'Rakennusvuosi'}
              setValue={setBuiltYear}
              value={builtYear}
            />
          </Col>
          <Col md="3">
            <TextInput
              id={'web-link'}
              label={'Linkki'}
              setValue={setWebLink}
              value={webLink}
            />
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <FloatInput
              id={'price'}
              label={'Velaton hinta, €'}
              setValue={setPrice}
              value={price}
            />
          </Col>
          <Col md="3">
            <FloatInput
              id={'financing-debt'}
              label={'Taloyhtiövelka, €'}
              setValue={setFinancingDebt}
              value={financingDebt}
            />
          </Col>
          <Col md="3">
            <FloatInput
              id={'maintenance-charge'}
              label={'Hoitovastike, €'}
              setValue={setMaintenanceCharge}
              value={maintenanceCharge}
            />
          </Col>
          <Col md="3">
            <FloatInput
              id={'financing-debt-charge'}
              label={'Rahoitusvastike, €'}
              setValue={setFinancingDebtCharge}
              value={financingDebtCharge}
            />
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <Select
              id={'type'}
              label={'Tyyppi'}
              options={[
                {name: 'Kerrostaloasunto', 'value': 'apartment'},
                {name: 'Rivitalo', 'value': 'row-house'},
                {name: 'Omakotitalo', 'value': 'house'}
              ]}
              setValue={setType}
              value={type}
            />
          </Col>
          <Col md="3">
            <FloatInput
              id={'square-meters'}
              label={'Neliöt, m²'}
              setValue={setSquareMeters}
              value={squareMeters}
            />
          </Col>
          <Col md="3">
            <NumberInput
              id={'rooms-count'}
              label={'Huoneiden lukumäärä'}
              setValue={setRoomsCount}
              value={roomsCount}
            />
          </Col>
          <Col md="3">
            <NumberInput
              id={'floor'}
              label={'Kerros'}
              setValue={setFloor}
              value={floor}
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

      <h4>Vuokra</h4>
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
        </Row>
      </Container>

      <Button onClick={onSave}>Tallenna</Button>
    </>
  );
}

export default CreateDwelling;
