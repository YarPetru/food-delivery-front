import React, { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';

const ChangeProductCard: React.FC = () => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

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
          src="https://img.freepik.com/free-photo/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table-top-view-flat-lay_2829-6482.jpg"
          alt="product"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full p-6 bg-blue-sky-80 translate-y-full group-hover:translate-y-0 transition-all">
          description
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center text-center w-full p-6">
        <h3>Lon long long Tdasdasdasdasdasditle</h3>
        <p>Price:</p>
        <input
          type="number"
          value={productQuantity}
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

export default ChangeProductCard;
