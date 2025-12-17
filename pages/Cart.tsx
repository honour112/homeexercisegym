
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onUpdateQuantity, onRemove }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = subtotal > 10000 ? 0 : 500;
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="w-24 h-24 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag className="w-10 h-10 text-zinc-500" />
        </div>
        <h1 className="text-4xl font-heading font-black uppercase italic mb-4">Your bag is empty</h1>
        <p className="text-zinc-500 mb-8">Ready to crush your fitness goals? Let's add some gear.</p>
        <Link to="/shop" className="inline-block bg-green-500 text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-white transition-all">
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-heading font-black uppercase italic tracking-tighter mb-12">Your Selection</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          {cart.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl group hover:border-zinc-700 transition-colors">
              <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-zinc-800 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="p-2 text-zinc-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">{item.category}</p>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="hover:text-green-500 disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="hover:text-green-500"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xl font-heading font-black">
                    GH₵ {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-8">
          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl sticky top-24">
            <h2 className="text-2xl font-bold uppercase mb-8 pb-4 border-b border-white/5">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="text-white font-bold">GH₵ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Estimated Delivery</span>
                <span className="text-white font-bold">{delivery === 0 ? 'FREE' : `GH₵ ${delivery}`}</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-heading font-black mb-10">
              <span>Total</span>
              <span className="text-green-500">GH₵ {total.toLocaleString()}</span>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-green-500 text-black py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-colors"
            >
              Checkout <ArrowRight className="w-5 h-5" />
            </button>

            <p className="mt-6 text-center text-xs text-zinc-500 uppercase tracking-widest">
              Secure payments powered by Paystack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
