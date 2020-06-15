import React from 'react';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={ShopPage} />
        <Route path='/checkout' component={CheckoutPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
