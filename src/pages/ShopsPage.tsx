import React, { useState, useEffect } from 'react';
import { useAppSelector } from 'hooks/redux-hooks';
import { useThunk } from 'hooks/use-thunk';
import { fetchProducts, getProducts } from 'store/products';
import { ShopsList, ProductsList } from 'components/Shops';

const ShopsPage: React.FC = () => {
  const [currentShop] = useState<string>('');

  const [doFetchProducts, isLoadingProducts, loadingProductsError] = useThunk(fetchProducts);

  const { data: products } = useAppSelector(getProducts);

  const shops = products.map(item => item.shop_title);
  const uniqueShops = shops.filter((value, index, array) => array.indexOf(value) === index);

  useEffect(() => {
    doFetchProducts();
  }, [doFetchProducts]);

  return (
    <>
      <ShopsList shops={uniqueShops} />
      <ProductsList products={products} isShopChoosen={!!currentShop} />
    </>
  );
};

export default ShopsPage;
