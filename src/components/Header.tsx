import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { ReactComponent as UserIcon } from '../img/user.svg';
import { ReactComponent as CartIcon } from '../img/cart.svg';
import { ReactComponent as Menu } from '../img/menu.svg';

function Header() {
  const openMenuMobile = () => {
    const navbar = document.querySelector('.nav__item');
    navbar?.classList.toggle('nav-active');
  };
  const closeMenuMobile = () => {
    const navbar = document.querySelector('.nav__item');
    navbar?.classList.toggle('nav-active');
  };

  if (isMobile) {
    return (
      <div className="header">
        <div className="container">
          <ul className="menu-mobile">
            <div className="menu__item-burger">
              <Menu className="icon" onClick={openMenuMobile} />
            </div>
            <Link to="/cart">
              <div className="menu__item-cart">
                <CartIcon className="icon" />
              </div>
            </Link>
          </ul>
          <div className="nav__item">
            <div className="container">
              <div className="menu-close" onClick={closeMenuMobile}></div>
              <Link to="/">
                <div className="menu__item">Главная</div>
              </Link>
              <Link to="/catalog">
                <div className="menu__item">Каталог</div>
              </Link>
              <div className="menu__item">Оплата</div>
              <div className="menu__item">Доставка</div>
              <div className="menu__item">Возврат</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <div className="container">
          <ul className="menu">
            <Link to="/">
              <li className="menu__item">Главная</li>
            </Link>
            <Link to="/catalog">
              <li className="menu__item">Каталог</li>
            </Link>
            <li className="menu__item">Покупателям</li>
            <li className="menu__item-icons">
              <Link to="/profile">
                <div className="menu-icon">
                  <UserIcon className="icon" />
                </div>
              </Link>
              <Link to="/cart">
                <div className="menu-icon">
                  <CartIcon className="icon" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
