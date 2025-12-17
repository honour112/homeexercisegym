
import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product, Category } from '../types';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'popularity'>('popularity');

  const categories: (Category | 'All')[] = ['All', 'Cardio', 'Strength', 'Home Gym', 'Accessories', 'Deals'];

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'popularity') result.sort((a, b) => b.reviews - a.reviews);

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-12">
        {/* Page Header */}
        <div className="space-y-4">
          <h1 className="text-5xl font-heading font-black uppercase italic tracking-tighter">Full Inventory</h1>
          <p className="text-zinc-500">Explore our complete range of elite gear before diving into categories.</p>
        </div>

        {/* Filters Bar - REMOVED STICKY to ensure it moves with scrolling */}
        <div className="flex flex-col lg:flex-row gap-6 bg-black py-4 border-b border-zinc-800 relative z-30">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search complete inventory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-green-500 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto whitespace-nowrap scrollbar-hide">
              <Filter className="w-4 h-4 text-green-500 shrink-0" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                    selectedCategory === cat ? 'bg-green-500 text-black' : 'hover:text-green-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl">
              <SlidersHorizontal className="w-4 h-4 text-green-500" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-sm font-bold uppercase tracking-wider focus:outline-none cursor-pointer"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-8 text-green-500 italic">
              {selectedCategory === 'All' ? 'Complete Listing' : `${selectedCategory} Collection`}
            </h2>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border-2 border-dashed border-zinc-800 rounded-3xl">
                <p className="text-zinc-500 text-xl">No products found for this criteria.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                  className="mt-4 text-green-500 font-bold uppercase tracking-widest"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
