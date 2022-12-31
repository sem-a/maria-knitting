import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts } from '../store/features/product/productsSlice';

function CategoryList() {
  const categoriesState = useSelector((state: any) => state.categories.categories);
  const [categories, setCategories] = useState<any>([]);
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
    setCategories(categoriesState);
  }, [categoriesState]);

  const categoriesList = categories.map((category: any) => {
    if (category.id == 1) {
      return (
        <div key={category.id} className="category">
          <p
            className="category__name checked-category"
            id={category.id}
            onClick={(e) => {
              changeCategory(e);
            }}
          >
            {category.name}
          </p>
        </div>
      );
    } else {
      return (
        <div key={category.id} className="category">
          <p
            className="category__name"
            id={category.id}
            onClick={(e) => {
              changeCategory(e);
            }}
          >
            {category.name}
          </p>
        </div>
      );
    }
  });
  return <div className="categories__list">{categoriesList}</div>;
}

function Categories() {
  return (
    <div className="categories">
      <CategoryList />
    </div>
  );
}

export default Categories;
