import React from 'react';

import Home from './components/Home';

import { Route } from 'react-router';
import { Layout } from './components/Layout';

import './style/Theme.css'
import CreateDwelling from './components/CreateDwelling';
import Dwelling from './components/Dwelling';

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/dwellings/:id' component={Dwelling} />
    </Layout>
  );
}

export default App;
