import React from 'react';

import { Route } from 'react-router';

import Dwelling from './components/dwellings/dwelling/Dwelling';
import Home from './components/Home';
import { Layout } from './components/Layout';

import './style/Theme.css';

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/dwellings/:id' component={Dwelling} />
    </Layout>
  );
}

export default App;
