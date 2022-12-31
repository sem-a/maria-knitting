import React from 'react';
import useCookies from 'react-cookie/cjs/useCookies';
import { registration, auth } from '../server/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/features/user/userSlice';

function Auth() {
  const dispatch = useDispatch<any>();

  return (
    <div>
      <div className="auth">
        <div className="container">
          <div className="auth__block">
            <div className="auth__title">
              <h2>Войти</h2>
            </div>
            <div className="auth__form">
              <form
                method="post"
                onSubmit={(e) => {
                  auth(e, dispatch);
                }}
                className="form"
              >
                <div className="form__item">
                  <label htmlFor="email" className="form__label">
                    E-mail
                  </label>
                  <input type="text" id="email" name="email" className="form__input" />
                </div>
                <div className="form__item">
                  <label htmlFor="password" className="form__label">
                    Пароль
                  </label>
                  <input type="password" id="password" name="password" className="form__input" />
                </div>
                <div className="form__item">
                  <button className="button">Войти</button>
                </div>
              </form>
              <div className="auth__link">
                <p>
                  Нет аккаунта? <span className="auth__span">Зарегистрируйся!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
