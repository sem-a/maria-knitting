import React, { useState } from 'react';
import { ReactComponent as Cart } from '../img/cart.svg';
import productsSlice from '../store/features/product/productsSlice';

function Card(props: any) {
  const [isCart, setIsCart] = useState<boolean>(false);
  const [countCart, setCountCart] = useState<number>(1);

  let productName;
  if (props.product.name.length > 14) {
    productName = props.product.name.slice(0, 14);
    productName += '...';
  } else productName = props.product.name;

  const plusCount = () => {
    setCountCart(countCart + 1);
  };
  const minusCount = () => {
    const countCartTemp = countCart - 1;
    if (countCartTemp < 0) {
      setCountCart(0);
      return;
    }
    setCountCart(countCartTemp);
  };

  if (isCart) {
    return (
      <div className="cart__card">
        <img src={require('../img/card-img.png')} alt="card-img" className="cart__card-img" />
        <div className="cart__card-content">
          <div className="cart__card-title">
            <p>{props.product.name}</p>
          </div>
          <div className="cart__card-price">
            <p>{props.product.price}</p>
          </div>
          <div className="cart__card-count">
            <div className="count__minus" onClick={minusCount}>
              <p className="count__position">-</p>
            </div>
            <div className="count__number">
              <p className="count__position">{countCart}</p>
            </div>
            <div className="count__plus" onClick={plusCount}>
              <p className="count__position">+</p>
            </div>
          </div>
        </div>
        <div className="cart__card-button">
          <button className="button">Купить</button>
        </div>
        <div className="cart__card-delete">
          <div className="delete__product"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card__img">
          <img src={require('../img/card-img.png')} alt="card-img" />
        </div>
        <div className="card__wrapp">
          <div className="card__title">
            <p>{productName}</p>
          </div>
          <div className="card__content">
            <div className="card__price">
              <p>{props.product.price} руб.</p>
            </div>
            <div className="card__button">
              <Cart className="icon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
