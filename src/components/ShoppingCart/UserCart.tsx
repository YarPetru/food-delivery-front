import React from 'react';
import { Link } from 'react-router-dom';
import OrderedProductsCard from './OrderedProductsCard';
import { useAppSelector } from 'hooks/redux-hooks';
import { getCurrentOrder } from 'store/order';

const UserCart: React.FC = () => {
  const { data: currentOrder } = useAppSelector(getCurrentOrder);
  const total = currentOrder.reduce((total, product) => {
    return +(total + product.price * product.quantity!).toFixed(2);
  }, 0);

  return (
    <section className="section w-[calc(70%-10px)] h-[600px] bg-gradient-to-tr from-grey-light to-blue-sky-70 overflow-auto">
      {!total ? (
        <div className="w-full h-full flex justify-center items-center">
          <h2>
            Your shopping cart is empty. Choose food on the{' '}
            <Link
              className="text-olive-main font-normal underline hover:text-grey-dark transition-all"
              to="/"
            >
              Shops page
            </Link>
          </h2>
        </div>
      ) : (
        <>
          <div className="h-[450px] w-full overflow-auto">
            <ul className="flex flex-col w-full gap-7">
              {currentOrder?.map(product => (
                <OrderedProductsCard key={product._id} product={product} />
              ))}
            </ul>
          </div>
          <div className="mt-8 flex items-baseline gap-8">
            <p>Total price:</p>
            <h3>{total} UAH</h3>
          </div>
        </>
      )}
    </section>
  );
};

export default UserCart;
