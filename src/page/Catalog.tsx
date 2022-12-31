import React, { useEffect } from 'react';
import CatalogComponent from '../components/CatalogComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Catalog () {


  return (
    <div>
      <Header />
      <div className="header__padding">
        <CatalogComponent />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Catalog;
