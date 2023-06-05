import React from 'react';
import ChangeProductCard from './ChangeProductCard';
import { useAppSelector } from 'hooks/redux-hooks';

import { getCurrentOrder } from 'store/order';

const UserCart: React.FC = () => {
  const { data: currentOrder } = useAppSelector(getCurrentOrder);

  return (
    <section className="section w-[calc(70%-10px)] h-[600px] overflow-auto">
      <ul className="flex flex-col w-full gap-7">
        {currentOrder?.map(product => (
          <ChangeProductCard key={product._id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default UserCart;
