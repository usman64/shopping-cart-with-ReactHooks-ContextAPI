import React, { useState, useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './product-item.styles.scss';
import { GlobalContext } from '../../context/globalState';

const ProductItem = ({ item }) => {
  const [clicked, setClicked] = useState(false);
  const { name, price, imageUrl } = item;
  const { addItem, toggleSnackbar } = useContext(GlobalContext);
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='price'>Rs {price}</div>
      </div>
      <CustomButton
        onClick={() => {
          setClicked(true);
          addItem(item);
          toggleSnackbar();
        }}
        inverted
      >
        {clicked ? `Add More` : `Add To Cart`}
      </CustomButton>
    </div>
  );
};

export default ProductItem;
