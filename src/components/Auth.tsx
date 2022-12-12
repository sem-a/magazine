import React, { useState, useEffect } from 'react';
import { isPropertySignature } from 'typescript';
import User from './User';

function Auth() {
  interface User {
    name: string;
    email: string;
    password: string;
    phone: string;
    amount: number;
    gender: string;
  }

  const [user, setUser] = useState<User>();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const handleRegButton = async (e: any) => {
    e.preventDefault();
    try {
      const userTemp = {
        name: e.target.nameReg.value,
        email: e.target.emailReg.value,
        password: e.target.passwordReg.value,
        phone: e.target.phoneReg.value,
        amount: 0,
        gender: e.target.gender.value,
      }
      setUser(userTemp);
      await fetch(
        `http://localhost:3001/users/add?name=${user?.name}&email=${user?.email}&password=${user?.password}&phone=${user?.phone}&amount=0&gender=${user?.gender}`,
      );
      localStorage.setItem('user', JSON.stringify(userTemp));
      setIsAuth(true);
      console.log('Пользователь успешно добавлен'); 
    } catch {
      console.log('Что-то пошло не так')
    }
  };

  const handleAuthButton = async (e: any) => {
    e.preventDefault();

    const email = e.target.emailAuth.value;
    const userData = await fetch(`http://localhost:3001/users/auth?email=${email}`);
    const userTemp = await userData.json();

    if(userTemp["values"][0].password == e.target.passwordAuth.value){
      console.log('Пользователь авторизован');
      setIsAuth(true);
      setUser(userTemp["values"][0]);
      localStorage.setItem('user', JSON.stringify(userTemp['values'][0]));
    } else {
      console.log('Ошибка авторизации');
    }
  };

  useEffect( () => {
    const user = localStorage.getItem('user');
    if(user != undefined) {
      setIsAuth(true);
      setUser(JSON.parse(user));
    } else {
      setIsAuth(false);
    }
  }, []);

  if (isAuth) {
    return(
      <div>
        <User user={user} setIsAuth={setIsAuth} />
      </div>
    )
  } else {
    return (
      <div>
        <div className="auth">
          <div className="auth__flex">
            <div className="auth__content">
              <div className="auth__title">
                <h2 className="title">Войти</h2>
              </div>
              <form onSubmit={handleAuthButton} id="authForm" className="auth__form">
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
              <form onSubmit={handleRegButton} id="regForm" className="reg__form">
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
                      <input type="radio" name="gender" id="genderMale" value="Муж." />
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
                    <input
                      type="password"
                      name="passwordReg"
                      id="passwordReg"
                      className="form__input"
                    />
                  </div>
                  <div className="form__item">
                    <label htmlFor="replayPasswordReg" className="form__label">
                      Повторите пароль:
                    </label>
                    <input
                      type="password"
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
}

export default Auth;
