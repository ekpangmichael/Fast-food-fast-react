import React from 'react';
import { withRouter } from 'react-router-dom';
export const Footer = ({ location }) => {
  return (
    <footer className={!/\/(cart)?$/.test(location.pathname) ? 'sticky' : ''}>
      <p> Chops - Fast Food Delivery App | copyright © 2019</p>
    </footer>
  );
};

export default withRouter(Footer);
