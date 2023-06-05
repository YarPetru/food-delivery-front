import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Navigation: React.FC = () => {
  const linkClasses = classNames(
    'py-8 border-b-4 border-transparent hover:border-olive-main hover:text-olive-main transition-all easy-in-out'
  );

  const activeLinkClasses = classNames(
    'py-8 border-b-4 text-black border-black hover:border-olive-main hover:text-olive-main transition-all easy-in-out'
  );

  return (
    <>
      <nav className="ml-8 flex gap-20">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)}>
          Shops
        </NavLink>
        <NavLink
          to="/shopping-cart"
          className={({ isActive }) => (isActive ? activeLinkClasses : linkClasses)}
        >
          Shopping Cart
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
