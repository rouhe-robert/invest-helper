import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import dwellingTabTypes from '../../../../services/enums/dwellingTabTypes';

import '../../../../style/dwellings/dwelling/src/Tabs.css';

const Tabs = ({activeTab, setActiveTab}) => {
  const getNavItem = (type, name) => (
    <NavItem>
      <NavLink
        className={activeTab === type ? 'active' : ''}
        onClick={() => setActiveTab(type)}
      >
        {name}
      </NavLink>
    </NavItem>
  );

  return (
    <Nav className="dwelling-tabs" tabs>
      {getNavItem(dwellingTabTypes.BASIC_INFORMATION, 'Perustiedot')}
      {getNavItem(dwellingTabTypes.DEBT, 'Velka')}
      {getNavItem(dwellingTabTypes.ANALYTICS, 'Analytiikka')}
      {getNavItem(dwellingTabTypes.SETTINGS, 'Asetukset')}
    </Nav>
  );
}

export default Tabs;
