import React, { useContext } from 'react';
import ProductCollection from '../../components/product-collection/product-collection.component';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { GlobalContext } from '../../context/globalState';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const ShopPage = () => {
  const { isSnackbarHidden, toggleSnackbar } = useContext(GlobalContext);
  return (
    <div className='shop-page'>
      <ProductCollection />
      <Snackbar
        open={isSnackbarHidden}
        autoHideDuration={3000}
        onClose={toggleSnackbar}
      >
        <Alert severity='success'>Added to Cart</Alert>
      </Snackbar>
    </div>
  );
};

export default ShopPage;
