import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <li className="w-[calc(33%-16px)] flex flex-col gap-4 items-center bg-white rounded-md overflow-hidden">
      <div className="group relative overflow-hidden h-2/3">
        <img
          src="https://assets.bonappetit.com/photos/5e8cdb60a7a01c00083b08a9/1:1/w_2560%2Cc_limit/HMONG-Potluck-Chopped-Salad.jpg"
          alt="product"
          className="w-full object-cover"
        />
        <div className="absolute top-0 w-full h-full p-6 bg-blue-sky-80 translate-y-full group-hover:translate-y-0 transition-all">
          description
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center text-center w-full p-6">
        <h3>Lon long long Tdasdasdasdasdasditle</h3>
        <button type="button" className="btn self-center">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
