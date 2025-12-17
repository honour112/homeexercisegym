
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import { Product, CartItem } from './types';

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-zinc-900 pt-24 pb-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center font-black text-black italic text-xl">HEG</div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl tracking-tighter uppercase italic leading-none">Enterprise</span>
              <span className="text-[10px] text-zinc-500 font-bold tracking-widest">EST. 2018 ACCRA</span>
            </div>
          </div>
          <p className="text-zinc-500 leading-relaxed text-sm">The #1 destination for elite home gym solutions in Ghana. Building a stronger nation, one home at a time.</p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-white">Navigation</h4>
          <ul className="space-y-5 text-zinc-500 text-sm font-medium">
            <li><a href="#/shop" className="hover:text-green-500 transition-colors">Cardio Machines</a></li>
            <li><a href="#/shop" className="hover:text-green-500 transition-colors">Strength Training</a></li>
            <li><a href="#/shop" className="hover:text-green-500 transition-colors">Home Gym Sets</a></li>
            <li><a href="#/shop" className="hover:text-green-500 transition-colors">Exclusive Deals</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-8 text-white">Customer Care</h4>
          <ul className="space-y-5 text-zinc-500 text-sm font-medium">
            <li><a href="#/contact" className="hover:text-green-500 transition-colors">Support Center</a></li>
            <li><a href="#/about" className="hover:text-green-500 transition-colors">Shipping Policy</a></li>
            <li><a href="#/about" className="hover:text-green-500 transition-colors">Refund Policy</a></li>
            <li><a href="#/about" className="hover:text-green-500 transition-colors">Warranty Terms</a></li>
          </ul>
        </div>
        <div className="space-y-8">
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs mb-6 text-white">Join the Elite</h4>
            <p className="text-zinc-500 text-sm mb-6">Weekly training tips and gear alerts.</p>
            <div className="flex gap-3">
              <input type="email" placeholder="Email" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm flex-1 focus:outline-none focus:border-green-500 transition-all" />
              <button className="bg-white text-black px-6 py-3 rounded-xl font-black text-xs uppercase hover:bg-green-500 transition-all">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 gap-6 text-[10px] text-zinc-600 uppercase font-black tracking-[0.3em]">
        <p>&copy; 2024 Home Exercise & Gym Enterprise.</p>
        <div className="flex gap-8">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
        <p>Crafted for Champions</p>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
        <main className="flex-1 pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Persistent WhatsApp Plugin */}
        <a 
          href="https://wa.me/233596099783" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-[60] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center border-4 border-black/20"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
        </a>
      </div>
    </Router>
  );
};

export default App;
