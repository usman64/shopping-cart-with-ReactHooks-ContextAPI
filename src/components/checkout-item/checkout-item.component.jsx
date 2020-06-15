import React from 'react';

import './checkout-item.styles.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalState';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItem, deleteItem, clearItem } = useContext(GlobalContext);
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => deleteItem(cartItem.id)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem.id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
