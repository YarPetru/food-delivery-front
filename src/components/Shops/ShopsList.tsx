import React from 'react';
import classNames from 'classnames';
import { setCurrentShop } from 'store/current-shop/current-shop-slice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { getCurrentShop } from 'store/current-shop';
import { getCurrentOrder } from 'store/order';

interface IShopsList {
  shops: string[];
}

const ShopsList: React.FC<IShopsList> = ({ shops }) => {
  const dispatch = useAppDispatch();
  const { shopTitle: currentShopTitle } = useAppSelector(getCurrentShop);
  const currentOrder = useAppSelector(getCurrentOrder);

  const currentOrderShops = currentOrder.map(product => product.shop_title);

  const filterBtnClasses = classNames('btn w-full', {});

  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentShopTitle === e.currentTarget?.value) {
      dispatch(setCurrentShop(''));
    } else {
      setCurrentShop(e.currentTarget?.value);
      dispatch(setCurrentShop(e.currentTarget?.value));
    }
  };

  return (
    <section className="section w-[calc(30%-10px)]">
      <ul className="flex flex-col gap-8 w-full">
        {shops?.map(shop => (
          <li key={shop}>
            <button
              type="button"
              value={shop}
              disabled={!currentOrderShops.includes(shop) && currentOrderShops.length !== 0}
              className={
                currentShopTitle === shop ? `${filterBtnClasses} bg-blue-main` : filterBtnClasses
              }
              onClick={handleFilterClick}
            >
              {shop}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShopsList;
