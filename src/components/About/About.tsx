import React from 'react';
import './About.scss';

export const About: React.FC = () => (
  <div className="about" id="about">
    <div className="about_title">Роботи</div>
    <div className="description_block">
      <div className="about_description">
        Повний цикл послуг проектування, озеленення та благоустрою.
      </div>
      <div className="about_description">
        Проводимо повне оформлення ділянки нашими дизайнерами на основі вже готових пропозицій
      </div>
      <div className="about_description">
        Індивідуальний підхід до кожного клієнта і виїзд на консультацію.
      </div>
    </div>
    <div className="about_container">
      <div className="block">
        <img
          src={require('../../img/block1.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block2.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block3.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block4.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block5.jpg')}
          alt="img"
          className="block_img position1"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block6.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block7.jpg')}
          alt="img"
          className="block_img position1"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block8.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block9.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
    </div>

    <div className="about_title">Проєкти</div>

    <div className="about_container">
      <div className="block">
        <img
          src={require('../../img/block1_1.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_2.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_3.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_4.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_5.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_6.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
    </div>
    <div className="about_company">
      Наша команда Ld studio має багаторічний досвід на ринку
      та вже успішно здійснила понад 150 проєктів.
    </div>
  </div>
);
