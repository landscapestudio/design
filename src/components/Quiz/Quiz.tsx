import React from 'react';
import './Quiz.scss';

export const Quiz: React.FC = () => (
  <div className="quiz_container">
    {/* Перша сторінка квіза */}
    {/* <div className="quiz">
      <div className="">
        <div className="quiz__title">
          Розрахуйте попередню вартість та терміни на виконання ландшафтних робіт.
        </div>
        <div className="quiz__question">
          Отримайте безкоштовну консультацію відповівши на 5 питань.
        </div>
        <div className="answers gap20">
          <div>
            <input
              type="radio"
              name="need_designe"
              id="need_designe"
            />
            {' '}
            <label htmlFor="need_designe">Отримати</label>
          </div>

          <div>
            <input type="radio" name="need_designe" id="dont_need_designe" />
            {' '}
            <label htmlFor="dont_need_designe">Ні, дякую</label>
          </div>

        </div>
        <button type="button" className="quiz__button button20">
          Далі
        </button>
      </div>

    </div> */}

    {/* Друга сторінка квіза */}
    {/* <div className="quiz top-20">
      <div className="quiz_container">
        <div>
          <div className="quiz__question">
            1. Тип вашої ділянки
          </div>
          <div className="answers">
            <div>
              <div className="quiz_conrainer">
                <input type="radio" name="need_designe" id="rivnuy" />
                {' '}
                Рівнинний
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
                <input type="radio" name="need_designe" id="kruvuy" />
                {' '}
                Кривий
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
          <button type="button" className="quiz__button">
            Далі
          </button>
        </div>
      </div>

    </div> */}
    {/* Третя сторінка квіза */}
    {/* <div className="quiz quiz_top-20">
      <div className="quiz_container">
        <div>
          <div className="quiz__question padding20">
            2. Вкажіть площу вашої ділянки в м
            <sup>2</sup>
          </div>
          <input type="text" className="quiz_input" placeholder="Введіть площу" />
          <div className="padding20">
            <button type="button" className="quiz__button">
              Далі
            </button>
          </div>
        </div>
      </div>

    </div> */}

    {/* Четверта сторінка квіза */}
    {/* <div className="quiz">
      <div className="quiz_container">
        <div>
          <div className="quiz__question">
            3. Чи потрібен вам дизайн проект?
          </div>
          <div className="answers block">
            <div>
              <input type="radio" name="need_designe" id="need_designe" />
              {' '}
              <label htmlFor="need_designe">
                Так, мені потрібен дизайн проект.
              </label>
            </div>

            <div>
              <input type="radio" name="need_designe" id="isnt_need_designe" />
              {' '}
              <label htmlFor="isnt_need_designe">
                Ні, без дизайн проекту.
              </label>
            </div>

            <div>
              <input type="radio" name="need_designe" id="dont_have_designe" />
              {' '}
              <label htmlFor="dont_have_designe">
                Я маю дизайн проєкт.
              </label>
            </div>

          </div>
          <div>
            <button type="button" className="quiz__button button20">
              Далі
            </button>
          </div>
        </div>
      </div>

    </div> */}

    {/* П'ята сторінка квіза */}
    {/* <div className="quiz">
      <div className="quiz_container">
        <div>
          <div className="quiz__question">
            4. Коли потрібно почати ландшафтні роботи?
          </div>
          <div className="answers block">
            <div>
              <input type="radio" name="need_designe" id="need_designe" />
              {' '}
              <label htmlFor="need_designe">
                Як найшвидше.
              </label>
            </div>

            <div>
              <input type="radio" name="need_designe" id="isnt_need_designe" />
              {' '}
              <label htmlFor="isnt_need_designe">
                Через місяць
              </label>
            </div>

            <div>
              <input type="radio" name="need_designe" id="dont_have_designe" />
              {' '}
              <label htmlFor="dont_have_designe">
                Через 3 місяці
              </label>
            </div>

          </div>
          <div>
            <button type="button" className="quiz__button button20">
              Далі
            </button>
          </div>
        </div>
      </div>

    </div> */}

    {/* Шоста сторінка квіза */}
    {/* <div className="quiz">
      <div className="quiz_container">
        <div>
          <div className="quiz__question">
            5. Вкажіть ваш номер та ім&#039;я для
            безкоштовної консультації
          </div>
          <div className="quiz__contact">
            <div>
              <input type="text" className="quiz_input" placeholder="Ваше ім&#039;я" />
            </div>

            <div>
              <input type="tel" className="quiz_input" placeholder="+380 (**) *** ***" />
            </div>
          </div>
          <div>
            <button type="button" className="quiz__button button20">
              Відправити
            </button>
          </div>
        </div>
      </div>

    </div> */}
  </div>
);
