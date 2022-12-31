import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

function CardList() {

  const productsState = useSelector( (state: any) => state.products.products );
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    setProducts(productsState);
  }, [productsState]);

  if (products != undefined) {
    const productList = products.map((product: any) => {
      return <Card key={product.id} product={product} />;
    });
    return <div className='product__list'>{productList}</div>;
  } else {
    return <div className="clean__products">Каталог товаров пуст</div>;
  }
}

export default CardList;
