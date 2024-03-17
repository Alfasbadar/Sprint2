import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Home/Home.css';

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'}`}>
      <div className="sidebar">
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/home/shop" activeClassName="active">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/home/items" activeClassName="active">Items</NavLink>
            </li>
            <li>
              <NavLink to="/home/billing" activeClassName="active">Billing</NavLink>
            </li>
            <li>
              <NavLink to="/home/analytics" activeClassName="active">Analytics</NavLink>
            </li>
            <li>
              <NavLink to="/home/about" activeClassName="active">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
