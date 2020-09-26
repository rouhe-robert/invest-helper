import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import '../../../../style/dwellings/dwelling/src/Tabs.css';

const Tabs = ({activeTab, setActiveTab}) => (
  <Nav className="dwelling-tabs" tabs>
    <NavItem>
      <NavLink
        className={activeTab === 'basic-information' ? 'active' : ''}
        onClick={() => setActiveTab('basic-information')}
      >
        Perustiedot
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === 'analytics' ? 'active' : ''}
        onClick={() => setActiveTab('analytics')}
      >
        Analytiikka
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className={activeTab === 'settings' ? 'active' : ''}
        onClick={() => setActiveTab('settings')}
      >
        Asetukset
      </NavLink>
    </NavItem>
  </Nav>
);

export default Tabs;
