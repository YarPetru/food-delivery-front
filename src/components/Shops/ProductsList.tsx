import React from 'react';
import menuBg from 'images/menu-bg.jpg';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';

import ProductCard from './ProductCard';
import { IProduct, IOrderedProduct } from 'types/types';
import { getCurrentShop } from 'store/current-shop';
import { getCurrentOrder } from 'store/order';
import { setOrder } from 'store/order/order-slice';

interface IProductsList {
  products: IProduct[];
  isShopChoosen: boolean;
}

const ProductsList: React.FC<IProductsList> = ({ products, isShopChoosen = false }) => {
  const bgClasses = classNames('absolute inset-0 w-full h-full object-cover rounded-md -z-50', {
    'mix-blend-overlay': !isShopChoosen,
    'mix-blend-screen': isShopChoosen,
  });

  const dispatch = useAppDispatch();

  const { shopTitle: currentShopTitle } = useAppSelector(getCurrentShop);
  const { data: currentOrder } = useAppSelector(getCurrentOrder);
  const currendOrderIds = currentOrder.map(product => product._id);

  const filteredProducts = products.filter(product => product.shop_title === currentShopTitle);

  const handleAddToCartBtnClick = (product: IProduct) => {
    const orderedProduct: IOrderedProduct = { ...product, quantity: 1 };
    dispatch(setOrder(orderedProduct));
  };

  return (
    <section className="relative section h-[600px] bg-cover bg-blend-multiply bg-gradient-to-tr from-grey-light to-blue-sky w-[calc(70%-10px)] overflow-auto z-10">
      {!!isShopChoosen ? (
        <img src={menuBg} alt="choose a shop to watch a menu" className={bgClasses} />
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
