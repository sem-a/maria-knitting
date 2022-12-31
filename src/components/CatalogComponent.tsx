import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategory } from '../store/features/product/categorySlice';
import { getCategoryProducts } from '../store/features/product/productsSlice';
import CardList from './CardList';
import Categories from './Categories';

function CatalogComponent() {

  const dispatch = useDispatch<any>();

  useEffect( () => {
    dispatch(getCategory());
    dispatch(getCategoryProducts(1));
  }, [dispatch]);


  return (
    <div className="catalog">
      <div className="container">
        <Categories />
        <CardList />
      </div>
    </div>
  );
}

export default CatalogComponent;
