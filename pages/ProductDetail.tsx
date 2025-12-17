
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Shield, Truck, RefreshCcw, ShoppingCart, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
        <button onClick={() => navigate('/shop')} className="text-green-500 font-bold uppercase tracking-widest">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-zinc-500 hover:text-green-500 transition-colors mb-12 uppercase font-bold text-sm tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
             <p className="text-xs text-zinc-500 uppercase tracking-widest text-center font-bold">Authentic Product Image Provided by HEG Enterprise</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-green-500 fill-green-500" />
              <span className="text-sm font-bold">{product.rating}</span>
              <span className="text-xs text-zinc-500">({product.reviews} customer reviews)</span>
            </div>
          </div>

          <h1 className="text-5xl font-heading font-black uppercase italic tracking-tighter mb-4 leading-none">
            {product.name}
          </h1>
          
          <p className="text-3xl font-heading font-black text-white mb-8">
            GH₵ {product.price.toLocaleString()}
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10 pb-10 border-b border-zinc-800">
            {product.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Truck className="w-5 h-5 text-green-500" />, title: 'Fast Delivery', sub: 'Across Ghana' },
              { icon: <Shield className="w-5 h-5 text-green-500" />, title: '2 Year Warranty', sub: 'Official Support' },
              { icon: <RefreshCcw className="w-5 h-5 text-green-500" />, title: 'Easy Returns', sub: '14 Day Period' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                {item.icon}
                <p className="font-bold text-sm uppercase tracking-wide">{item.title}</p>
                <p className="text-xs text-zinc-500">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-auto">
            <button 
              onClick={() => onAddToCart(product)}
              className="flex-1 min-w-[200px] bg-green-500 text-black py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-colors"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <a 
              href={`https://wa.me/233596099783?text=Hello, I am interested in the ${product.name} (GH₵ ${product.price.toLocaleString()})`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] border border-zinc-700 py-5 font-black uppercase tracking-widest hover:border-green-500 transition-colors text-center"
            >
              Enquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
