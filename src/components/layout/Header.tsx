import React from 'react';
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';
import { useAppSelector } from 'hooks/redux-hooks';

import Container from './Container';
import Navigation from './Navigation';
import { getCurrentOrder } from 'store/order';

const Header: React.FC = () => {
  const currentOrder = useAppSelector(getCurrentOrder);
  const isShoppingCartEmpty = currentOrder.length === 0;

  return (
    <header className="bg-grey-light text-md">
      <Container className="items-center">
        <Navigation />
        <div className="text-blue-main">
          {isShoppingCartEmpty ? <HiOutlineShoppingCart /> : <HiShoppingCart size="42px" />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
