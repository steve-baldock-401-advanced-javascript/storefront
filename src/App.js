import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentCategory from './components/storefront/currentCategory';
import Products from './components/storefront/products';
import Categories from './components/storefront/categories';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Categories />
      <CurrentCategory /> 
      <Products /> 
      <Footer />
    </> 
  );
}

export default App;
