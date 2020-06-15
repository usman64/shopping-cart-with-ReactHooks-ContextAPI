import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-icon.styles.scss';
import { GlobalContext } from '../../context/globalState';
import { totalCartItems } from '../../context/utils';

const CartIcon = () => {
  const { toggleCartHidden, cart } = useContext(GlobalContext);
  return (
    <div
      className='cart-icon'
      onClick={toggleCartHidden}
      // onMouseEnter={toggleCartHidden}
      // onMouseLeave={toggleCartHidden}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalCartItems(cart)}</span>
    </div>
  );
};

export default CartIcon;
