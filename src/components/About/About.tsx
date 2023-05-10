import React from 'react';
import './About.scss';

export const About: React.FC = () => (
  <div className="about" id="about">
    <div className="about_title">Приклади Робіт</div>
    <div className="container">
      <div className="block">
        <img
          src={require('../../img/block1.jpg')}
          alt="img"
          className="block_img"
        />
        <div className="description">
          Повний цикл послуг проектування, озеленення та благоустрою.
        </div>
      </div>
      <div className="block">
        <img
          src={require('../../img/block2.jpg')}
          alt="img"
          className="block_img"
        />
        <div className="description">
          Проводимо повне оформлення ділянки нашими дизайнерами на основі вже готових пропозицій
        </div>
      </div>
      <div className="block">
        <img
          src={require('../../img/block3.jpg')}
          alt="img"
          className="block_img"
        />
        <div className="description">
          Індивідуальний підхід до кожного клієнта і виїзд на консультацію.
        </div>
      </div>
    </div>
    <div className="about_company">
      Наша компанія на ринку більше 15 років, ми гарантуємо якість усіх робіт
    </div>
  </div>
);
