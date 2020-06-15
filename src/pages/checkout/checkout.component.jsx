import React, { useContext } from 'react';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { GlobalContext } from '../../context/globalState';
import { totalBill } from '../../context/utils';

const CheckoutPage = ({ cartItems, total }) => {
  const { cart } = useContext(GlobalContext);
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Products</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cart.map((cartItem) => (
        <CheckoutItem id={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>Total: Rs {totalBill(cart)}</span>
      </div>
    </div>
  );
};
export default CheckoutPage;
