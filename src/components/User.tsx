import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div className="user">
      <div className="user__title title">Профиль</div>
      <div className="user__container">
        <div className="user__flex-container">
          <div className="user__preview">
            <div className="user__preview-item">{user.name[0]}</div>
          </div>
          <div className="user__name">{user.name}</div>
        </div>
        <div className="user__flex-container">
          <div className="user__item">
            <div className="user__item-title">E-mail</div>
            <div className="user__item-text">{user.email}</div>
          </div>
          <div className="user__item user__phone">
            <div className="user__item-title">Телефон</div>
            <div className="user__item-text">{user.phone}</div>
          </div>
        </div>
        <div className="user__item user__address">
          <div className="user__item-title">Адрес</div>
          <div className="user__item-text">{user.address}</div>
        </div>
      </div>
      <div className="user__button-container">
        <div className="user__flex-container">
          <div className="user__button">
            <button className="button">Редактировать</button>
          </div>
          <div className="user__button">
            <button className="button">Изменить пароль</button>
          </div>
          <div className="user__button">
            <button className="button">Выйти</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
