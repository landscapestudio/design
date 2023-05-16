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
        Підбираємо найкращі рослини та матеріали для Вашого саду
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
          src={require('../../img/block9.jpg')}
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
          src={require('../../img/block15.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block10.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block bwww">
        <img
          src={require('../../img/block11.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block12.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
    </div>

    <div className="about_title" id="blog">Проєкти</div>

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
      <div className="block">
        <img
          src={require('../../img/block1_7.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_8.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_9.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_11.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_10.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
      <div className="block">
        <img
          src={require('../../img/block1_12.jpg')}
          alt="img"
          className="block_img"
        />
      </div>
    </div>
  </div>
);
