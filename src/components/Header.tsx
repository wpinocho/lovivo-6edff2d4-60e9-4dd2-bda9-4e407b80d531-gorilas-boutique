import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Cart } from './Cart';

export const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log('Header rendered, total items:', getTotalItems());

  return (
    <>
      <header className="bg-green-800 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🦍</span>
              <h1 className="text-2xl font-bold">Gorilla Store</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-green-200 transition-colors">Inicio</a>
              <a href="#" className="hover:text-green-200 transition-colors">Productos</a>
              <a href="#" className="hover:text-green-200 transition-colors">Sobre Nosotros</a>
              <a href="#" className="hover:text-green-200 transition-colors">Contacto</a>
            </nav>

            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-green-700 rounded-lg transition-colors"
              >
                <ShoppingCart size={24} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-green-700 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-green-700 pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-green-200 transition-colors py-2">Inicio</a>
                <a href="#" className="hover:text-green-200 transition-colors py-2">Productos</a>
                <a href="#" className="hover:text-green-200 transition-colors py-2">Sobre Nosotros</a>
                <a href="#" className="hover:text-green-200 transition-colors py-2">Contacto</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};