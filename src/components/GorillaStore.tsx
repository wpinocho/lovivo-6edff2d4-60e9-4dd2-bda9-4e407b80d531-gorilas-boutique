import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { gorillaProducts } from '../data/products';

export const GorillaStore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');

  console.log('GorillaStore rendered with', gorillaProducts.length, 'products');

  const filteredProducts = gorillaProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = selectedSpecies === '' || product.species === selectedSpecies;
    return matchesSearch && matchesSpecies;
  });

  const uniqueSpecies = [...new Set(gorillaProducts.map(product => product.species))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🦍 Gorilla Store
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Los mejores gorilas del mundo, directamente a tu hogar
          </p>
          <p className="text-lg opacity-90">
            Encuentra tu compañero perfecto entre nuestra selección premium de gorilas
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar gorilas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Species Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedSpecies}
                onChange={(e) => setSelectedSpecies(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white min-w-48"
              >
                <option value="">Todas las especies</option>
                {uniqueSpecies.map(species => (
                  <option key={species} value={species}>{species}</option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-600">
              {filteredProducts.length} gorila{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No se encontraron gorilas
            </h3>
            <p className="text-gray-500">
              Intenta ajustar tus filtros de búsqueda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🦍 Gorilla Store</h3>
              <p className="text-green-200">
                La tienda de gorilas más confiable del mundo. 
                Ofrecemos gorilas de la más alta calidad con garantía de satisfacción.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Productos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-green-200">
                <p>📧 info@gorillastore.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 Selva Amazónica, Brasil</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Gorilla Store. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};