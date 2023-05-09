import React from 'react';
import './Home.scss';
import { Footer } from '../../components/Footer/Footer';

export const Home: React.FC = () => (
  <>
    <div className="content">

      <div className="info">
        <div className="info__title">
          Хочете персональну пропозицію з ланшафтного дизайну?
        </div>
        <div className="weDo">
          <div className="list">
            <div className="list_b">
              <li className="list_item">
                <i className="bx bxs-florist" />
                &nbsp;&nbsp;
                Сучасний ландафтний дизайн &quot;Під ключ&quot;.
              </li>
              <li className="list_item">
                <i className="bx bxs-florist" />
                &nbsp;&nbsp;
                З поетапною оплатою та терміном прописанним в договорі.
              </li>
              <li className="list_item">
                <i className="bx bxs-florist" />
                &nbsp;&nbsp;
                Працюємо по західній Україні.
              </li>
            </div>

            <div className="ofer">
              <li>
                <i className="bx bx-cube" />
              &nbsp;&nbsp;Комп’ютерна 3D візуалізація усієї території
              </li>
              <li>
                <i className="bx bx-cube" />
              &nbsp;&nbsp;2 варіанти ескізів
              </li>
              <li>
                <i className="bx bx-cube" />
              &nbsp;&nbsp;Дендроплан з асортиментною відомістю рослин
              </li>
            </div>
          </div>
        </div>

        <button type="button" className="button">
          Розрахувати вартість дизайну
        </button>

      </div>
    </div>
    <Footer />
  </>
);
