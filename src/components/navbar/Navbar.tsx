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
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="home"
            className="nav__item nav__links"
          >
            Головна
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="about"
            className="nav__item nav__links"
          >
            Роботи
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="blog"
            className="nav__item nav__links"
          >
            Проєкти
          </Link>

          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="footer"
            className="nav__item nav__links"
          >
            Контакти
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
