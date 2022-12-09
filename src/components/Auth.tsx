import React from 'react';

function Auth() {
  return (
    <div>
      <div className="auth">
        <div className="auth__flex">
          <div className="auth__content">
            <div className="auth__title">
              <h2 className="title">Войти</h2>
            </div>
            <form method='post' id="authForm" className="auth__form">
              <div className="auth__form-wrap">
                <div className="form__item">
                  <label htmlFor="emailAuth" className="form__label">
                    E-mail:
                  </label>
                  <input type="text" name="emailAuth" id="emailAuth" className="form__input" />
                </div>
                <div className="form__item">
                  <label htmlFor="passwordAuth" className="form__label">
                    Пароль:
                  </label>
                  <input
                    type="text"
                    name="passwordAuth"
                    id="passwordAuth"
                    className="form__input"
                  />
                </div>
                <div className="form__item">
                  <button className="button">ВОЙТИ</button>
                </div>
              </div>
            </form>
          </div>
          <div className="auth__content">
            <div className="registration__title">
              <h2 className="title">Зарегистрироваться</h2>
            </div>
            <form method='post' id="regForm" className="reg__form">
              <div className="auth__form-wrap">
                <div className="form__item">
                  <label htmlFor="nameReg" className="form__label">
                    Имя:
                  </label>
                  <input type="text" name="nameReg" id="nameReg" className="form__input" />
                </div>
                <div className="form__item">
                  <label htmlFor="emailReg" className="form__label">
                    E-mail:
                  </label>
                  <input type="text" name="emailReg" id="emailReg" className="form__input" />
                </div>
                <div className="form__item">
                  <label htmlFor="phoneReg" className="form__label">
                    Телефон:
                  </label>
                  <input type="text" name="phoneReg" id="phoneReg" className="form__input" />
                </div>
                <div className="form__item radio">
                  <label htmlFor="genderReg" className="form__label">
                    Пол:
                  </label>
                  <div className="form__radio">
                    <input type="radio" name="gender" id="genderMale" value="Муж." checked />
                    <label htmlFor="genderMale">Муж.</label>
                  </div>
                  <div className="form__radio">
                    <input type="radio" name="gender" id="genderFemale" value="Жен." />
                    <label htmlFor="genderFemale">Жен.</label>
                  </div>
                </div>
                <div className="form__item">
                  <label htmlFor="passwordReg" className="form__label">
                    Пароль:
                  </label>
                  <input type="text" name="passwordReg" id="passwordReg" className="form__input" />
                </div>
                <div className="form__item">
                  <label htmlFor="replayPasswordReg" className="form__label">
                    Повторите пароль:
                  </label>
                  <input
                    type="text"
                    name="replayPasswordReg"
                    id="replayPasswordReg"
                    className="form__input"
                  />
                </div>
                <div className="form__item">
                  <button className="button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
