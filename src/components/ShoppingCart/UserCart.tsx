import React from 'react';
import ChangeProductCard from './ChangeProductCard';

const UserCart: React.FC = () => {
  return (
    <section className="section w-[calc(70%-10px)] h-[600px] overflow-auto">
      <ul className="flex flex-col w-full gap-7">
        <ChangeProductCard />
        <ChangeProductCard />
        <ChangeProductCard />
      </ul>
    </section>
  );
};

export default UserCart;
