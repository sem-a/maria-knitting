import React, { useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Cart () {

  const [isCart, setIsCart] = useState('');

  return(
    <div>
      <Header />
      <div className="header__padding">
        
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;