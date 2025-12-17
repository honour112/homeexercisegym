
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Dumbbell, Search } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop Gear', path: '/shop' },
    { name: 'Our Legacy', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-transform">
            <Dumbbell className="w-6 h-6 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl leading-none tracking-tighter uppercase italic italic">HEG</span>
            <span className="text-[10px] text-green-500 font-black tracking-[0.3em] uppercase leading-none mt-0.5">Enterprise</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-black uppercase tracking-[0.2em] transition-all relative group ${
                isActive(link.path) ? 'text-green-500' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-green-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-3 text-zinc-400 hover:text-green-500 transition-colors hidden sm:block">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" className="relative p-3 group">
            <ShoppingCart className={`w-6 h-6 transition-colors ${cartCount > 0 ? 'text-green-500' : 'text-white'}`} />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-white text-black text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg">
                {cartCount}
              </span>
            )}
          </Link>
          <button 
            className="md:hidden p-3 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] md:hidden bg-black/95 backdrop-blur-3xl z-[90] p-8 animate-in fade-in slide-in-from-top-10 duration-500">
          <div className="space-y-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-5xl font-heading font-black uppercase italic tracking-tighter hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-10 border-t border-white/10 flex flex-col gap-6">
              <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest text-green-500">View Bag ({cartCount})</Link>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center"><Search className="w-5 h-5" /></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
