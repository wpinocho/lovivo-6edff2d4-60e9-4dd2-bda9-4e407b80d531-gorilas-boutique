import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { GorillaStore } from '../components/GorillaStore';

const Index = () => {
  console.log('Index page rendered');
  
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <GorillaStore />
      </div>
    </CartProvider>
  );
};

export default Index;