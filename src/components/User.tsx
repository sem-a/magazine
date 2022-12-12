import React, {useEffect, useState} from 'react';

function User(props: any) {

  const exitAcc = () => {
    console.log(props.user)
    localStorage.removeItem('user');
    props.setIsAuth(false);
  }

  return (
    <div>
      <div className="personal__date-title">
        <h2 className="title">Личные данные</h2>
      </div>
      <div className="personal__data-block">
        <div className="personal__data-container">
          <div className="user">
            <div className="user__avatar">
              <p>{props.user.name[0]}</p>
            </div>
            <div className="user__name">
              <p>{props.user.name}</p>
            </div>
          </div>
          <div className="user__date">
            <div className="user__date-item">
              <div className="item__title">
                <p>E-mail:</p>
              </div>
              <div className="item__user">
                <p>{props.user.email}</p>
              </div>
            </div>

            <div className="user__date-item">
              <div className="item__title">
                <p>Телефон:</p>
              </div>
              <div className="item__user">
                <p>{props.user.phone}</p>
              </div>
            </div>

            <div className="user__date-item">
              <div className="item__title">
                <p>Пол:</p>
              </div>
              <div className="item__user">
                <p>{props.user.gender}</p>
              </div>
            </div>

            <div className="user__date-item">
              <div className="item__title">
                <p>Сумма выкупа:</p>
              </div>
              <div className="item__user">
                <p>{props.user.amount}</p>
              </div>
            </div>

            <div className="user__date-item">
              <div className="edit__button">
                <div className="button">Изменить</div>
              </div>
            </div>
            <div className="user__date-item">
              <div className="exit__button">
                <div onClick={exitAcc} className="button">ВЫЙТИ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
