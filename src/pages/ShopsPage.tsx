import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { useThunk } from 'hooks/use-thunk';
import { fetchProducts, getProducts } from 'store/products';
import { ShopsList, ProductsList } from 'components/Shops';
import { setProducts } from 'store/products/products-slice';

const ShopsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [doFetchProducts, isLoading, error] = useThunk(fetchProducts);

  const { data: products } = useAppSelector(getProducts);
  console.log(products);

  const shops = products.map(item => item.shop_title);
  const uniqueShops = shops.filter((value, index, array) => array.indexOf(value) === index);

  useEffect(() => {
    if (products.length !== 0) {
      dispatch(setProducts(products));
    } else {
      doFetchProducts();
    }
  }, [doFetchProducts, dispatch, products]);

  return isLoading ? (
    <h2>Loading... </h2>
  ) : error ? (
    <h2>
      Something went wrong... <br /> {error}
    </h2>
  ) : (
    <>
      <ShopsList shops={uniqueShops} />
      <ProductsList products={products} />
    </>
  );
};
export default ShopsPage;
