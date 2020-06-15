import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { GlobalContext } from '../../context/globalState';

const CartDropdown = ({ history }) => {
  const { toggleCartHidden, cart } = useContext(GlobalContext);
  return (
    <div
      className='cart-dropdown'
      // onMouseEnter={toggleCartHidden}
      // onMouseLeave={toggleCartHidden}
    >
      {cart.length ? (
        <div className='cart-items'>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

//withRouter passes the match and history props
export default withRouter(CartDropdown);
