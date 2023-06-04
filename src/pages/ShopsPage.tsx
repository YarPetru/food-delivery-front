import React, { useState } from 'react';

import { ShopsList, ProductsList } from 'components/Shops';

const ShopsPage: React.FC = () => {
  const [currentShop, setCurrentShop] = useState<string>('');
  return (
    <>
      <ShopsList />
      <ProductsList isShopChoosen={!!currentShop} />
    </>
  );
};

export default ShopsPage;
