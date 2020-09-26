import React from 'react';

import '../../../../style/dwellings/dwelling/src/Header.css';

const getWebLink = (dwelling) => {
  if (dwelling.webLink === null) {
    return null;
  }

  if (dwelling.webLink === '') {
    return null;
  }

  return (
    <span className="dwelling-link">
      {' '}
      (
        <a href={dwelling.webLink} target="_blank">Linkki</a>
      )
    </span>
  );
};

const Header = ({dwelling}) => (
  <h3>
    {dwelling.address},
    {' '}
    {dwelling.district.name},
    {' '}
    {dwelling.district.city.name}
    {getWebLink(dwelling)}
  </h3>
);

export default Header;
