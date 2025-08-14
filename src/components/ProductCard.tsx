import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import { Product, useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log('Adding product to cart:', product.name);
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
          ${product.price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Especie:</span>
            <span className="font-medium">{product.species}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Edad:</span>
            <span className="font-medium">{product.age}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Peso:</span>
            <span className="font-medium">{product.weight}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={18} />
            <span>Agregar al Carrito</span>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-lg transition-colors duration-200">
            <Info size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};