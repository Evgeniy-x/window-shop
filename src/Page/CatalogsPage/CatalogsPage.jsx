import css from './CatalogsPage.module.css';
import { useState } from 'react';

const categories = ['Категорія 1', 'Категорія 2', 'Категорія 3', 'Категорія 4'];

const products = {
  'Категорія 1': [
    { id: 1, name: 'Товар 1-1', price: 100 },
    { id: 2, name: 'Товар 1-2', price: 150 },
  ],
  'Категорія 2': [
    { id: 3, name: 'Товар 2-1', price: 200 },
    { id: 4, name: 'Товар 2-2', price: 250 },
  ],
  'Категорія 3': [
    { id: 5, name: 'Товар 3-1', price: 300 },
    { id: 6, name: 'Товар 3-2', price: 350 },
  ],
  'Категорія 4': [
    { id: 7, name: 'Товар 4-1', price: 400 },
    { id: 8, name: 'Товар 4-2', price: 450 },
  ],
};

const Catalogs = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <div className={css.App}>
      <h1>Товарний каталог</h1>
      <div className={css.categories}>
        <h2>Категорії</h2>
        <ul>
          {categories.map(category => (
            <li
              key={category}
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={css.categories}>
        <h2>{selectedCategory}</h2>
        <ul>
          {products[selectedCategory].map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.price} грн
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Catalogs;
