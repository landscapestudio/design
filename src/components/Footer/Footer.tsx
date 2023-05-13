import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer: React.FC = () => (
  <footer id="footer" className="footer">
    <div className="footer_container">
      <div className="network">
        <Link to="https://www.instagram.com/sophiya_ld/" className="link">
          <i className="bx bxl-instagram" />
          &nbsp;
          Instagram
        </Link>
        <Link to="https://www.facebook.com/SophiaKrupaLD" className="link">
          <i className="bx bxl-facebook-square" />
          &nbsp;
          Facebook
        </Link>
        <Link to="tel:+380673909427" className="link">
          <i className="bx bxs-phone-call" />
          &nbsp;+380673909427

        </Link>
      </div>

    </div>
    <div className="copyriting">
      <i className="bx bx-copyright" />
      {' '}
      Copyright 2023 Protect My Work Limited. All Rights Reserved.
    </div>
  </footer>
);
