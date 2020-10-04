import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";

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

  useEffect(
    () => {
      fetchDwellings()
    },
    []
  );

  const sortedDwellings = [...dwellings].sort((a, b) => {
    if (a.address === b.address) {
      return 0;
    }

    return a.address.toLowerCase() < b.address.toLowerCase() ? -1 : 1;
  });

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
          {sortedDwellings.map(dwelling => (
            <tr key={'dwelling-' + dwelling.id}>
              <td>
                <Link to={"/dwellings/" + dwelling.id}>
                  {dwelling.address}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Home;
