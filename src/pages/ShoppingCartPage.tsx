import React from 'react';

import { UserCart, UserDataForm } from 'components/ShoppingCart';

const ShoppingCartPage: React.FC = () => {
  return (
    <>
      <UserDataForm />
      <UserCart />
    </>
  );
};

export default ShoppingCartPage;
