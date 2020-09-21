import React, { useState, useEffect } from 'react';

import apiDistricts from '../api/districts';
import apiDwellings from '../api/dwellings';
import FloatInput from './layout/FloatInput';
import NumberInput from './layout/NumberInput';
import Select from './layout/Select';
import TextInput from './layout/TextInput';
import { Col, Container, Row, Button } from 'reactstrap';
import CheckboxInput from './layout/CheckboxInput';

const CreateDwelling = () => {

  // Form state
  const [districts, setDistricts] = useState([]);
  const [saved, setSaved] = useState(false);

  // Dwelling
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [price, setPrice] = useState('0');
  const [maintenanceCharge, setMaintenanceCharge] = useState('0');
  const [type, setType] = useState('apartment');
  const [squareMeters, setSquareMeters] = useState('0');
  const [roomsCount, setRoomsCount] = useState('0');
  const [hasElevator, setHasElevator] = useState(false);
  const [hasOwnLandLot, setHasOwnLandLot] = useState(false);
  const [hasSauna, setHasSauna] = useState(false);

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
      district: parseInt(district),
      dwellingRenovationDebt: parseFloat(dwellingRenovationDebt),
      hasElevator,
      hasOwnLandLot,
      hasSauna,
      housingCooperativeRenovationDebt: parseFloat(housingCooperativeRenovationDebt),
      maintenanceCharge: parseFloat(maintenanceCharge),
      price: parseFloat(price),
      rentEuros: parseFloat(rentEuros),
      roomsCount: parseInt(roomsCount),
      squareMeters: parseFloat(squareMeters),
      type
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
          <Col sm="6">
            <TextInput
              id={'address'}
              label={'Osoite'}
              setValue={setAddress}
              value={address}
            />
          </Col>
          <Col sm="6">
            <Select
              id={'district'}
              label={'Kaupunginosa'}
              options={districts}
              setValue={setDistrict}
              value={district}
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
          <Col md="4">
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
          <Col md="4">
            <FloatInput
              id={'square-meters'}
              label={'Neliöt, m²'}
              setValue={setSquareMeters}
              value={squareMeters}
            />
          </Col>
          <Col md="4">
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
