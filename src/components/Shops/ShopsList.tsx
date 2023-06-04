import React, { useState } from 'react';

import classNames from 'classnames';

const ShopsList: React.FC = () => {
  const [currentShop, setCurrentShop] = useState<string>('');

  const filterBtnClasses = classNames('btn w-full', {
    'bg-blue-main': currentShop === 'Mfc2',
  });

  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentShop === e.currentTarget?.value) {
      setCurrentShop('');
    } else {
      setCurrentShop(e.currentTarget?.value);
    }
  };

  return (
    <section className="section w-[calc(30%-10px)]">
      <ul className="flex flex-col gap-8 w-full">
        <li>
          <button
            type="button"
            value="Mfc"
            className={filterBtnClasses}
            onClick={handleFilterClick}
          >
            Mfc
          </button>
        </li>
        <li>
          <button
            type="button"
            value="Mfc2"
            className={filterBtnClasses}
            onClick={handleFilterClick}
          >
            Mfc2
          </button>
        </li>
        <li>
          <button
            type="button"
            value="Mfc3"
            className={filterBtnClasses}
            onClick={handleFilterClick}
          >
            Mfc3
          </button>
        </li>
        <li>
          <button type="button" value="Mfc4" className="btn w-full" onClick={handleFilterClick}>
            Mfc4
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ShopsList;
