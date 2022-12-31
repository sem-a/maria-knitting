import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from './components/Card';
import CatalogComponent from './components/CatalogComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import './css/null.css';
import './css/style.css';

function App() {

  return (
    <div>
      <Header />
      <div className="header__padding">
        <div className="container">
          <NewProduct />
          <div className="how__order">
            <div className="how__order-title">Как сделать заказ?</div>
            <div className="how__order-contant">
              <div className="how__order-text">
                <p>
                  Вы можете заказать любую из представленных в каталоге моделей в желаемом размере и
                  цвете. Срок изготовления составляет 7-20 дней в зависимости от модели.
                </p>
              </div>
              <div className="how__order-text">
                <p>Также мы можем обсудить возможность исполнения вашего изделия на заказ.</p>
              </div>
              <div className="how__order-text">
                <p>Все детали можно уточнить по телефону, WhatsApp, в телеграм или по почте.</p>
              </div>
              <div className="how__order-steps"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
