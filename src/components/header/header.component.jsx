import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className={`options`}>
          <Link className='option' to='/'>
            SHOP
          </Link>
          <span className='option'>
            <CartIcon />
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
