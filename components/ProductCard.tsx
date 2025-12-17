
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative glass-card rounded-[2.5rem] overflow-hidden hover:border-green-500/40 transition-all duration-500 flex flex-col h-full">
      {product.isOffer && (
        <div className="absolute top-6 left-6 z-20 bg-green-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
          Special Offer
        </div>
      )}
      
      <div className="relative aspect-square overflow-hidden bg-zinc-900 group-hover:bg-black transition-colors">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-70 transition-all duration-700 ease-out"
        />
        
        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <Link 
            to={`/product/${product.id}`}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs hover:bg-green-500 transition-colors"
          >
            Details <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white transition-colors"
          >
            Quick Add <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em]">{product.category}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-green-500 fill-current" />
            <span className="text-xs font-bold text-white">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="mb-4">
          <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-tight line-clamp-2 group-hover:text-green-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest leading-none mb-1">Price</span>
            <span className="text-2xl font-heading font-black text-white">
              <span className="text-xs font-bold text-zinc-500 mr-1">GH₵</span>
              {product.price.toLocaleString()}
            </span>
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-green-500 hover:text-black hover:scale-110 transition-all duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
