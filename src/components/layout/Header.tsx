import React from 'react';
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi';

import Container from './Container';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-grey-light text-md">
      <Container className="items-center">
        <Navigation />
        <div>
          <HiOutlineShoppingCart />
          <HiShoppingCart />
        </div>
      </Container>
    </header>
  );
};

export default Header;
