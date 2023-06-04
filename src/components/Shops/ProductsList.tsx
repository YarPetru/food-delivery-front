import React from 'react';
import menuBg from 'images/menu-bg.jpg';
import classNames from 'classnames';

import ProductCard from './ProductCard';

interface IProductsList {
  isShopChoosen: boolean;
}

let products: React.ReactNode;

const ProductsList: React.FC<IProductsList> = ({ isShopChoosen = false }) => {
  const bgClasses = classNames('absolute inset-0 w-full h-full object-cover rounded-md -z-50', {
    'mix-blend-overlay': !isShopChoosen,
    'mix-blend-screen': isShopChoosen,
  });

  return (
    <section className="relative section h-[600px] bg-cover bg-blend-multiply bg-gradient-to-tr from-grey-light to-blue-sky w-[calc(70%-10px)] overflow-auto z-10">
      {!!isShopChoosen ? (
        <img src={menuBg} alt="choose a shop to watch a menu" className={bgClasses} />
      ) : (
        <ul className="flex flex-wrap gap-7 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      )}
    </section>
  );
};

export default ProductsList;
