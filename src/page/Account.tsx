import React from 'react';

function Account() {
  return (
    <div className="account">
      <div className="personal__date">
        <div className="personal__date-title">
          <h2 className="">Личные данные</h2>
        </div>
        <div className="personal__data-block">
          <div className="user">
            <div className="user__avatar">
              <p>A</p>
            </div>
            <div className="user__name">
              <p>Алексей</p>
            </div>
          </div>
          <div className="user__date">
            
            <div className="user__date-item">
              <div className="item__title">
                <p>E-mail:</p>
              </div>
              <div className="item__user">
                <p>aleksey.i99@mail.ru</p>
              </div>
            </div>

            <div className="user__date-item">
              <div className="item__title">
                <p>Телефон:</p>
              </div>
              <div className="item__user">
                <p>+7 (952) 789-99-89</p>
              </div>
            </div>

            <div className="user__date-item">
              <div className="item__title">
                <p>Пол:</p>
              </div>
              <div className="item__user">
                <p>Муж.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
