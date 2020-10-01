import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentCategory from './components/storefront/currentCategory';
import Products from './components/storefront/products';
import Categories from './components/storefront/categories';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/styles.scss';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
      <Categories />
      <CurrentCategory /> 
      <Products /> 
      </main>
      <Footer />
    </> 
  );
}


