import React from 'react';

import Home from './components/Home';

import { Route } from 'react-router';
import { Layout } from './components/Layout';

import './custom.css'
import CreateDwelling from './components/CreateDwelling';

const App = () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/dwellings/create' component={CreateDwelling} />
    </Layout>
  );
}

export default App;
