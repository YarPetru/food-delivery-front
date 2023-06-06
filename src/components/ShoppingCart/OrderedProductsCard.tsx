import React from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useAppDispatch } from 'hooks/redux-hooks';
import { removeFromOrder, changeQuantity } from 'store/order/order-slice';
import { IProduct } from 'types/types';

interface IOrderedProductsCard {
  product: IProduct;
}

const OrderedProductsCard: React.FC<IOrderedProductsCard> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleRemoveProduct = (product: IProduct) => {
    dispatch(removeFromOrder(product));
  };

  const handleNumberProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = Number(e.target.value);
    dispatch(changeQuantity({ productId: product._id, quantity }));
  };

  return (
    <li className="relative h-1/3 flex gap-8 items-center bg-white rounded-md overflow-hidden">
      <div className="group relative overflow-hidden h-[210px] w-4/5">
        <img
          src={
            !!product.image
              ? product.image
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
          }
          alt="product"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full p-6 text-xs bg-blue-sky-80 translate-y-full group-hover:translate-y-0 transition-all">
          {product.description}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start text-center w-full h-full py-6 pr-10 pl-2">
        <h2>{product.product}</h2>
        <div className="w-full flex items-center gap-8">
          <p>Price:{` ${product.price} UAH`}</p>
          <input
            type="number"
            value={product.quantity}
            min="1"
            max="20"
            className="pl-2 py-1 border border-grey-light outline-1 outline-grey-main"
            onChange={handleNumberProducts}
          />
        </div>
      </div>
      <button
        type="button"
        className="top-2 right-2 rounded-button absolute"
        onClick={() => handleRemoveProduct(product)}
      >
        <HiOutlineX />
      </button>
    </li>
  );
};

export default OrderedProductsCard;
