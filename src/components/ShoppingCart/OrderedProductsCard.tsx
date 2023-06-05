import React, { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { IOrderedProduct } from 'types/types';

interface IChangeProductCard {
  product: IOrderedProduct;
}

const OrderedProductsCard: React.FC<IChangeProductCard> = ({ product }) => {
  const [, setProductQuantity] = useState<number>(1);

  const handleRemoveProduct = () => {
    console.log('remove product with id');
  };

  const handleNumberProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductQuantity(Number(e.target.value));
  };

  return (
    <li className="relative w-full flex gap-4 items-center bg-white rounded-md overflow-hidden">
      <div className="group relative overflow-hidden h-[200px]">
        <img
          src={
            !!product.image
              ? product.image
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
          }
          alt="product"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full p-6 bg-blue-sky-80 translate-y-full group-hover:translate-y-0 transition-all">
          {product.description}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center text-center w-full p-6">
        <h3>{product.product}</h3>
        <p>Price:{product.price}</p>
        <input
          type="number"
          value={product.quantity}
          min="1"
          max="20"
          className="pl-2 py-1 border border-grey-light outline-1 outline-grey-main"
          onChange={handleNumberProducts}
        />
      </div>
      <button
        type="button"
        className="top-2 right-2 rounded-button absolute"
        onClick={handleRemoveProduct}
      >
        <HiOutlineX />
      </button>
    </li>
  );
};

export default OrderedProductsCard;
