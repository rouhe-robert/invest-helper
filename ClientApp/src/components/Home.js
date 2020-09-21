import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

import apiDwellings from '../api/dwellings';

import '../style/Home.css';

const Home = () => {

  const history = useHistory();
  const [dwellings, setDwellings] = useState([]);

  const createNewDwelling = () => {
    history.push("/dwellings/create");
  }

  const fetchDwellings = async () => {
    setDwellings(await apiDwellings.get());
  }

  const openDwelling = id => {
    history.push("/dwellings/" + id);
  }

  useEffect(
    () => {
      fetchDwellings()
    },
    []
  );

  return (
    <div className="dwellings-list">
      <Button onClick={createNewDwelling}>Lisää uusi</Button>
      <Table>
        <thead>
          <tr>
            <th>Osoite</th>
          </tr>
        </thead>
        <tbody>
          {dwellings.map(dwelling => (
            <tr key={'dwelling-' + dwelling.id} onClick={() => openDwelling(dwelling.id)}>
              <td>{dwelling.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Home;
