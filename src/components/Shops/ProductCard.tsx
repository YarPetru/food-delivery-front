import React from 'react';

import { IProduct } from 'types/types';

interface IProductCard {
  product: IProduct;
  addToCart: () => void;
  isAlreadyInOrder?: boolean;
}

const ProductCard: React.FC<IProductCard> = ({ product, addToCart, isAlreadyInOrder }) => {
  return (
    <li className="w-[calc(33%-16px)] flex flex-col gap-4 items-center bg-white rounded-md overflow-hidden">
      <div className="group relative overflow-hidden h-[200px]">
        <img
          src={
            !!product.image
              ? product.image
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png'
          }
          alt="product"
          className="w-full object-cover"
        />
        <div className="absolute top-0 w-full h-full p-6 bg-blue-sky-80 translate-y-full group-hover:translate-y-0 transition-all">
          {product.description}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center text-center w-full p-6">
        <h3>{product.product}</h3>
        <button
          type="button"
          className="btn self-center disabled:bg-grey-main disabled:text-grey-light"
          onClick={addToCart}
          disabled={isAlreadyInOrder}
        >
          {!isAlreadyInOrder ? 'Add to cart' : 'Added'}
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
