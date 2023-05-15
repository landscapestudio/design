/* eslint-disable no-template-curly-in-string */
/* eslint-disable prefer-template */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import './Home.scss';
import { Footer } from '../../components/Footer/Footer';
import { About } from '../../components/About/About';

export const Home: React.FC = () => {
  // visibility quiz pages
  const [first, togleFirst] = useState<boolean>(false);
  const [second, togleSecond] = useState<boolean>(false);
  const [third, togleThird] = useState<boolean>(false);
  const [fourth, togleFourth] = useState<boolean>(false);
  const [fifth, togleFifth] = useState<boolean>(false);
  const [sixth, togleSixth] = useState<boolean>(false);

  // quiz answers
  const [advice, setAdvice] = useState<string>('');
  const [typeLandspace, setTypeLandspace] = useState<string>('Не вказано ');
  const [area, setArea] = useState<string>('');
  const [designe, setDesigne] = useState<string>('');
  const [work, setWork] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // send to telegram
  const [result, setResult] = useState<string>('');
  const token = '6027165435:AAHKRyzQluvDXwBqStlbP_J0LCjRlPJm3n4';
  const chatId = '-983553882';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${result}`;

  const clear = () => {
    setAdvice('');
    setTypeLandspace('');
    setArea('');
    setDesigne('');
    setWork('');
    setName('');
    setPhone('');
    setResult('');
    console.log(advice);
    console.log(typeLandspace);
    console.log(designe);
    console.log(work);
    console.log(name);
    console.log(phone);
    console.log(result);
  };

  const togle = (callback:any, quizNumver:boolean) => {
    callback(!quizNumver);
  };

  const setValue = (callvack: any, value:string) => {
    callvack(value);
  };

  useEffect(() => {
  }, [result, typeLandspace, area, designe, work, name, phone]);

  const send = () => {
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
  };

  return (
    <>
      <div className="quiz_container">

        {/* Друга сторінка квіза */}
        {second && (
          <div className="quiz top-20">
            <div className="quiz_container">

              <div>
                <div className="quiz__title">
                  Хочете персональну пропозицію з ландшафтного дизайну?
                </div>
                <div className="quiz__question">
                  1. Тип вашої ділянки
                </div>
                <div className="answers">
                  <div>
                    <div className="quiz_conrainer">
                      <input
                        required
                        type="radio"
                        name="need_designe"
                        id="rivnuy"
                        value="Рівнинний"
                        checked={typeLandspace === 'Рівнинний'}
                        onChange={(event) => setValue(setTypeLandspace, event.target.value)}
                      />
                      <label htmlFor="rivnuy">
                        {' '}
                        Рівнинний

                      </label>
                    </div>
                    <label htmlFor="rivnuy">
                      <img
                        src={require('../../img/landspace-rivnuy.jpg')}
                        alt="img"
                        className="quiz_block_img"
                      />
                    </label>
                  </div>

                  <div>
                    <div className="quiz_conrainer">
                      <input
                        required
                        type="radio"
                        name="need_designe"
                        id="kruvuy"
                        value="Кривий"
                        checked={typeLandspace === 'Кривий'}
                        onChange={(event) => setValue(setTypeLandspace, event?.target.value)}
                      />
                      <label htmlFor="kruvuy">
                        {' '}
                        Кривий
                      </label>
                    </div>
                    <label htmlFor="kruvuy">
                      <img
                        src={require('../../img/landspace-kruvuy.jpg')}
                        alt="img"
                        className="quiz_block_img"
                      />
                    </label>
                  </div>

                </div>
                <button
                  type="button"
                  className="quiz__button"
                  disabled={!(typeLandspace === 'Кривий' || typeLandspace === 'Рівнинний')}
                  onClick={() => {
                    togle(togleSecond, second);
                    togle(togleThird, third);
                    setResult((result) => result + 'Тип ділянки: ' + typeLandspace);
                  }}
                >
                  Далі
                </button>
              </div>
            </div>

          </div>
        )}
        {/* Третя сторінка квіза */}
        {third && (
          <div className="quiz quiz_top-20">
            <div className="quiz_container">
              <div>
                <div className="quiz__question padding20">
                  2. Вкажіть площу вашої ділянки в м
                  <sup>2</sup>
                </div>
                <input
                  required
                  type="number"
                  className="quiz_input required"
                  placeholder="Введіть площу"
                  onChange={(event) => setArea(event.target.value.trim())}
                />
                <div className="padding20">
                  <button
                    type="button"
                    disabled={area.length < 1}
                    className="quiz__button button20"
                    onClick={() => {
                      togle(togleThird, third);
                      togle(togleFourth, fourth);
                      setResult(result + '  |  Площа ділянки: ' + area + 'м2');
                    }}
                  >
                    Далі
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Четверта сторінка квіза */}
        { fourth && (
          <div className="quiz">
            <div className="quiz_container">
              <div>
                <div className="quiz__question">
                  3. Чи потрібен вам дизайн проект?
                </div>
                <div className="answers block">
                  <div>
                    <input
                      required
                      type="radio"
                      name="need_designe"
                      id="need_designe"
                      value="Потрібен дизайн"
                      checked={designe === 'Потрібен дизайн'}
                      onChange={(event) => setValue(setDesigne, event.target.value)}
                    />
                    {' '}
                    <label htmlFor="need_designe">
                      Так, мені потрібен дизайн проект.
                    </label>
                  </div>

                  <div>
                    <input
                      required
                      type="radio"
                      name="need_designe"
                      id="isnt_need_designe"
                      value="Без дизайну проект"
                      checked={designe === 'Без дизайну проект'}
                      onChange={(event) => setValue(setDesigne, event.target.value)}
                    />
                    {' '}
                    <label htmlFor="isnt_need_designe">
                      Ні, без дизайн проекту.
                    </label>
                  </div>

                  <div>
                    <input
                      required
                      type="radio"
                      name="need_designe"
                      id="dont_need_designe"
                      value="Маю власний дизайн"
                      checked={designe === 'Маю власний дизайн'}
                      onChange={(event) => setValue(setDesigne, event.target.value)}
                    />
                    {' '}
                    <label htmlFor="dont_need_designe">
                      Я маю дизайн проєкт.
                    </label>
                  </div>

                </div>
                <div>
                  <button
                    type="button"
                    disabled={designe.length < 1}
                    className="quiz__button button20"
                    onClick={() => {
                      togle(togleFourth, fourth);
                      togle(togleFifth, fifth);
                      setResult((result) => result + '  |  Дизайн: ' + designe);
                    }}
                  >
                    Далі
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* П'ята сторінка квіза */}
        { fifth && (
          <div className="quiz">
            <div className="quiz_container">
              <div>
                <div className="quiz__question">
                  4. Коли потрібно почати ландшафтні роботи?
                </div>
                <div className="answers block">
                  <div>
                    <input
                      required
                      type="radio"
                      name="start_work"
                      id="quick_work"
                      value="Як найшвидше"
                      checked={work === 'Як найшвидше'}
                      onChange={(event) => setValue(setWork, event.target.value)}
                    />
                    {' '}
                    <label htmlFor="quick_work">
                      Як найшвидше.
                    </label>
                  </div>

                  <div>
                    <input
                      required
                      type="radio"
                      name="start_work"
                      id="one_month"
                      value="Через місяць"
                      checked={work === 'Через місяць'}
                      onChange={(event) => setValue(setWork, event.target.value)}
                    />
                    {' '}
                    <label htmlFor="one_month">
                      Через місяць
                    </label>
                  </div>

                  <div>
                    <input
                      required
                      type="radio"
                      name="start_work"
                      id="three_months"
                      value="Через 3 місяці"
                      checked={work === 'Через 3 місяці'}
                      onChange={(event) => setValue(setWork, event.target.value)}
                    />
                    {' '}
                    <label htmlFor="three_months">
                      Через 3 місяці
                    </label>
                  </div>

                </div>
                <div>
                  <button
                    type="button"
                    disabled={work.length < 1}
                    className="quiz__button button20"
                    onClick={() => {
                      togle(togleFifth, fifth);
                      togle(togleSixth, sixth);
                      setResult((result) => result + '  |  Коли потрібно почати роботу: ' + work);
                    }}
                  >
                    Далі
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Шоста сторінка квіза */}
        { sixth && (
          <div className="quiz">
            <div className="quiz_container">
              <div>
                <div className="quiz__question">
                  5. Вкажіть ваш номер та ім&#039;я для
                  безкоштовної консультації
                </div>
                <div className="quiz__contact">
                  <div>
                    <input
                      required
                      type="text"
                      className="quiz_input"
                      placeholder="Ваше ім&#039;я"
                      onChange={(event) => setName(event.target.value.trim())}
                    />
                  </div>

                  <div>
                    <input
                      required
                      type="tel"
                      className="quiz_input"
                      placeholder="+380 (**) *** ***"
                      onChange={(event) => setPhone(event.target.value.trim())}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  disabled={phone.length < 1 || name.length < 1}
                  className="quiz__button button20"
                  onClick={() => {
                    togle(togleFirst, false);
                    setResult((result) => result + '  |  Телефон: ' + phone);
                    setResult((result) => result + '  |  Імя: ' + name);
                  }}
                >
                  Далі
                </button>
                <div />
              </div>
            </div>
          </div>
        )}

        {/* Перша(шоста) сторінка квіза */}
        { first
        && (
        <div className="quiz">
          <div>
            <div className="quiz__title">
              Розрахунок попередньої вартості та терміни на виконання ландшафтних робіт.
            </div>
            <div className="quiz__question">
              Бажаєте отримайте безкоштовну консультацію?
            </div>
            <div className="answers gap20">
              <div>
                <input
                  required
                  type="radio"
                  name="need_designe"
                  id="need_designe"
                  value="Так"
                  checked={advice === 'Так'}
                  onChange={(event) => setValue(setAdvice, event.target.value)}
                />
                {' '}
                <label htmlFor="need_designe">Отримати</label>
              </div>

              <div>
                <input
                  required
                  type="radio"
                  name="need_designe"
                  id="dont_need_designe"
                  value="Ні"
                  checked={advice === 'Ні'}
                  onChange={(event) => setValue(setAdvice, event.target.value)}
                />
                {' '}
                <label htmlFor="dont_need_designe">Ні, дякую</label>
              </div>

            </div>
            <button
              type="button"
              disabled={advice.length < 1}
              className="quiz__button button20"
              onClick={() => {
                togle(togleFirst, first);
                if (advice === 'Так') {
                  togle(togleSixth, sixth);
                  togle(togleFirst, first);

                  setResult((result) => result + advice);
                  send();
                  clear();
                }
                togle(togleSixth, sixth);
                togle(togleFirst, first);
                clear();
              }}

            >
              Відправити
            </button>

          </div>

        </div>
        )}

      </div>
      <div className="content" id="home">
        <div className="info">
          <div className="info__title">
            Ландшафтний
            {' '}
            {window.innerWidth < 650 && <br />}
            дизайн
          </div>
          <div className="info__description">
            Проектування, реалізація, підтримка. Баланс гармонії і комфорту в вашому саду.
          </div>
          <button
            type="button"
            className="button"
            onClick={() => {
              togle(togleSecond, second);
            }}
          >
            Розрахувати вартість дизайну
          </button>

        </div>
      </div>
      <div className="weDo">
        <div className="list">
          <div className="list_b">
            <li className="list_item">
              <i className="bx bx-check" />
              &nbsp;
              Сучасний ландафтний дизайн &quot;Під ключ&quot;.
            </li>
            <li className="list_item">
              <i className="bx bx-check" />
              &nbsp;
              З поетапною оплатою та терміном прописанним у договорі.
            </li>
            <li className="list_item">
              <i className="bx bx-check" />
              &nbsp;
              Працюємо по західній Україні.
            </li>
          </div>

          <div className="ofer">
            <li>
              <i className="bx bx-check" />
              &nbsp;Комп’ютерна 3D візуалізація усієї території
            </li>
            <li>
              <i className="bx bx-check" />
              &nbsp;2 варіанти ескізів
            </li>
            <li>
              <i className="bx bx-check" />
              &nbsp;&nbsp;Дендроплан з асортиментною відомістю рослин
            </li>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};
