
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = subtotal > 10000 ? 0 : 500;
  const total = subtotal + delivery;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-32 text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
          <CheckCircle2 className="w-12 h-12 text-black" />
        </div>
        <h1 className="text-5xl font-heading font-black uppercase italic mb-4">Order Confirmed!</h1>
        <p className="text-zinc-400 text-lg mb-12 max-w-md mx-auto">Your elite gear is being prepared for shipment. You'll receive a confirmation email shortly.</p>
        <Link to="/" className="inline-block bg-white text-black px-10 py-4 font-black uppercase tracking-widest hover:bg-green-500 transition-all">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-zinc-500 hover:text-green-500 transition-colors mb-12 uppercase font-bold text-sm tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <h1 className="text-5xl font-heading font-black uppercase italic tracking-tighter">Secure Checkout</h1>
          
          <form onSubmit={handlePlaceOrder} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <Truck className="w-5 h-5 text-green-500" /> Shipping Details
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name" className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-1 focus:ring-green-500 outline-none w-full" />
                <input required type="text" placeholder="Last Name" className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-1 focus:ring-green-500 outline-none w-full" />
              </div>
              <input required type="email" placeholder="Email Address" className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-1 focus:ring-green-500 outline-none w-full" />
              <input required type="text" placeholder="Phone Number (Ghana)" className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-1 focus:ring-green-500 outline-none w-full" />
              <input required type="text" placeholder="Delivery Address" className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-1 focus:ring-green-500 outline-none w-full" />
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="City / Region" className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-1 focus:ring-green-500 outline-none w-full" />
                <input required type="text" placeholder="Ghana Post GPS" className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:ring-1 focus:ring-green-500 outline-none w-full" />
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-zinc-800">
              <h2 className="text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-green-500" /> Payment Method
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="p-6 border-2 border-green-500 bg-green-500/5 rounded-2xl text-left">
                  <p className="font-bold uppercase tracking-tight">Mobile Money / Card</p>
                  <p className="text-xs text-zinc-500 mt-1">Pay via Paystack Secure</p>
                </button>
                <button type="button" className="p-6 border-2 border-zinc-800 hover:border-zinc-700 rounded-2xl text-left transition-colors">
                  <p className="font-bold uppercase tracking-tight">Bank Transfer</p>
                  <p className="text-xs text-zinc-500 mt-1">Manual Verification</p>
                </button>
              </div>
            </div>

            <button 
              disabled={isProcessing}
              className="w-full bg-green-500 text-black py-6 font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-green-500/10 flex items-center justify-center gap-3"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Authorizing...
                </>
              ) : (
                <>Complete Purchase • GH₵ {total.toLocaleString()}</>
              )}
            </button>
            <p className="text-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <ShieldCheck className="w-3 h-3" /> Secure SSL Encrypted Checkout
            </p>
          </form>
        </div>

        <div className="space-y-8">
          <div className="p-10 bg-zinc-900 border border-zinc-800 rounded-[3rem] sticky top-24">
            <h2 className="text-2xl font-heading font-black uppercase italic mb-8 pb-4 border-b border-white/5">Order Items</h2>
            <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-4 scrollbar-hide">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-800 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm uppercase leading-tight line-clamp-1">{item.name}</p>
                    <p className="text-xs text-zinc-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-sm">GH₵ {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="flex justify-between text-zinc-500 uppercase text-xs font-bold tracking-widest">
                <span>Subtotal</span>
                <span className="text-white">GH₵ {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-zinc-500 uppercase text-xs font-bold tracking-widest">
                <span>Delivery</span>
                <span className="text-white">{delivery === 0 ? 'FREE' : `GH₵ ${delivery}`}</span>
              </div>
              <div className="flex justify-between text-2xl font-heading font-black pt-4">
                <span className="uppercase">Total</span>
                <span className="text-green-500">GH₵ {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
