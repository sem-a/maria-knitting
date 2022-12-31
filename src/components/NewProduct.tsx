import React, {useEffect} from 'react';
import CardList from './CardList';
import { useDispatch } from 'react-redux';
import { getCategoryProducts} from '../store/features/product/productsSlice';


function NewProduct() {
  const dispatch = useDispatch<any>();

  const changeCategory = (e: any) => {
    const categories = document.querySelectorAll('.category__name');

    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove('checked-category');
    }
    const categoryActive = e.target;
    categoryActive.classList.add('checked-category');
    dispatch(getCategoryProducts(e.target.id));
  };

  useEffect(() => {
    dispatch(getCategoryProducts(1));
  });

  return (
    <div className="catalog">
      <div className="categories">
        <div className="categories__list">
          <div className="category">
            <p
              className="category__name checked-category" id='1'
              onClick={(e) => {
                changeCategory(e);
              }}
            >
              Популярные услуги
            </p>
          </div>
          <div className="category">
            <p
              className="category__name" id='2'
              onClick={(e) => {
                changeCategory(e);
              }}
            >
              Новинки
            </p>
          </div>
        </div>
      </div>
      <CardList />
    </div>
  );
}

export default NewProduct;
