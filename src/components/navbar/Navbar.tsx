import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { Link } from 'react-scroll';
import { NavItem } from './navItem/NavItem';

export const Navbar: React.FC = () => {
  const [clik, setClick] = useState(false);

  const handleClik = () => setClick(!clik);

  return (
    <nav className="nav">
      <div className="nav__container">
        <NavLink to="/" className="nav__logo">
          <img src={require('../../img/logo.png')} alt="logo" className="nav_logo_img" />
        </NavLink>

        <ul className={clik ? 'nav__menu active' : 'nav__menu'}>

          <NavItem
            to="/"
            event={handleClik}
            text="Home"
          />

          <NavItem
            to="/about"
            event={handleClik}
            text="About us"
          />

          <NavItem
            to="/blog"
            event={handleClik}
            text="Blog"
          />

          <Link
            // eslint-disable-next-line react/jsx-boolean-value
            spy={true}
            // eslint-disable-next-line react/jsx-boolean-value
            smooth={true}
            offset={50}
            duration={500}
            to="footer"
            className="nav__item"
          >
            Contact us
          </Link>
        </ul>

        <div
          className="nav__icon"
          onClick={handleClik}
        >
          <i className={clik ? 'bx bx-window-close' : 'bx bx-menu'} />
        </div>
      </div>
    </nav>
  );
};
