import React from 'react';
import menuBg from 'images/menu-bg.jpg';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

import ProductCard from './ProductCard';
import { IProduct } from 'types/types';
import { getCurrentShop } from 'store/current-shop';
import { getCurrentOrder } from 'store/order';
import { addToOrder } from 'store/order/order-slice';

interface IProductsList {
  products: IProduct[];
}

const ProductsList: React.FC<IProductsList> = ({ products }) => {
  const dispatch = useAppDispatch();

  const { shopTitle: currentShopTitle } = useAppSelector(getCurrentShop);
  const currentOrder = useAppSelector(getCurrentOrder);

  const currendOrderIds = currentOrder.map(product => product._id);

  const filteredProducts = products.filter(product => product.shop_title === currentShopTitle);

  const handleAddToCartBtnClick = (product: IProduct) => {
    const orderedProduct: IProduct = { ...product, quantity: 1 };
    dispatch(addToOrder(orderedProduct));
  };

  const bgClasses = classNames('absolute inset-0 w-full h-full object-cover rounded-md -z-50', {
    'mix-blend-overlay': currentShopTitle,
    'mix-blend-screen': !currentShopTitle,
  });

  return (
    <section className="relative section h-[600px] bg-cover bg-blend-multiply bg-gradient-to-tr from-grey-light to-blue-sky w-[calc(70%-10px)] overflow-auto z-10">
      <img src={menuBg} alt="choose a shop to watch a menu" className={bgClasses} />

      {!currentShopTitle ? (
        <div className="w-full h-full flex justify-center items-center">
          <h2>
            Choose a shop <br />
            to start <span className="text-olive-main font-normal">selecting food</span>
          </h2>
        </div>
      ) : (
        <ul className="flex flex-wrap gap-7">
          {filteredProducts?.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              addToCart={() => handleAddToCartBtnClick(product)}
              isAlreadyInOrder={currendOrderIds.includes(product._id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductsList;
