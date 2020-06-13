import React from 'react';
import SHOP_DATA from '../../mock-data/shop.data';
import ProductItem from '../product-item/product-item.component';

import Grid from '@material-ui/core/Grid';

import './product-collection.styles.scss';

const ProductCollection = () => (
  <div className='collections-overview'>
    <Grid container spacing={3}>
      {SHOP_DATA.map(({ id, ...otherDataProps }) => (
        <Grid xs={6} sm={4} md={3} lg={3} item>
          <ProductItem key={id} {...otherDataProps} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default ProductCollection;