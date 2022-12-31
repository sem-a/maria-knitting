import React from "react";

function Footer() {
  return(
    <div className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__column">
            <div className="column__title">услуги</div>
            <div className="column__item">популярные услуги</div>
            <div className="column__item">новинки</div>
            <div className="column__item">игрушки</div>
            <div className="column__item">носки</div>
          </div>
          <div className="footer__column">
            <div className="column__title">покупателям</div>
            <div className="column__item">оплата</div>
            <div className="column__item">доставка</div>
            <div className="column__item">возврат</div>
          </div>
          <div className="footer__column">
            <div className="column__politic">политика конфинденциальности</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;