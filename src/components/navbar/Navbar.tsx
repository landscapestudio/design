import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { Link } from 'react-scroll';

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

          {/* <NavItem
            to="/"
            event={handleClik}
            text="Home"
          /> */}
          <Link
          // eslint-disable-next-line react/jsx-boolean-value
            spy={true}
          // eslint-disable-next-line react/jsx-boolean-value
            smooth={true}
            offset={50}
            duration={500}
            to="home"
            className="nav__item nav__links"
          >
            Home
          </Link>

          {/* <NavItem
            to="/about"
            event={handleClik}
            text="About us"
          /> */}
          <Link
          // eslint-disable-next-line react/jsx-boolean-value
            spy={true}
          // eslint-disable-next-line react/jsx-boolean-value
            smooth={true}
            offset={50}
            duration={500}
            to="about"
            className="nav__item nav__links"
          >
            About us
          </Link>

          <Link
            // eslint-disable-next-line react/jsx-boolean-value
            spy={true}
            // eslint-disable-next-line react/jsx-boolean-value
            smooth={true}
            offset={50}
            duration={500}
            to="blog"
            className="nav__item nav__links"
          >
            Blog
          </Link>

          <Link
            // eslint-disable-next-line react/jsx-boolean-value
            spy={true}
            // eslint-disable-next-line react/jsx-boolean-value
            smooth={true}
            offset={50}
            duration={500}
            to="footer"
            className="nav__item nav__links"
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
