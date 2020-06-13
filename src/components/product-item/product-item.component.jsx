import React, { useState } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import './product-item.styles.scss';

const ProductItem = ({ name, price, imageUrl }) => {
  const [clicked, setClicked] = useState(false);
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
        }}
        inverted
      >
        {clicked ? `Add More` : `Add To Cart`}
      </CustomButton>
    </div>
  );
};

export default ProductItem;
