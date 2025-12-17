
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck, Dumbbell, Play, Star, ChevronRight } from 'lucide-react';
import { PRODUCTS, BLOG_POSTS, TESTIMONIALS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const bestsellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="space-y-32 pb-24">
      {/* Cinematic Hero */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=90&w=2000" 
            alt="Gym" 
            className="w-full h-full object-cover animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-green-500 text-xs font-black uppercase tracking-[0.3em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Now Shipping Nationwide
            </div>
            
            <h1 className="text-7xl md:text-9xl font-heading font-black leading-[0.9] uppercase tracking-tighter italic">
              Elite <br />
              <span className="text-outline">Strength</span> <br />
              <span className="text-green-500 italic green-glow">Begins At Home</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-medium">
              Transform your lifestyle with commercial-grade fitness technology. Engineered for performance, designed for the modern home.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/shop" 
                className="group px-10 py-5 bg-green-500 text-black font-black uppercase tracking-widest hover:bg-white transition-all flex items-center gap-3 shadow-2xl shadow-green-500/20"
              >
                Shop Collection <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="px-10 py-5 glass border border-white/20 hover:bg-white hover:text-black transition-all font-black uppercase tracking-widest flex items-center gap-3"
              >
                Our Legacy <Play className="w-4 h-4 fill-current" />
              </Link>
            </div>
            
            <div className="flex items-center gap-8 pt-10 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-3xl font-heading font-black">500+</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Active Homes</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <p className="text-3xl font-heading font-black">16</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Regions Served</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-black" alt="user" />
                ))}
                <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[10px] font-bold">+5k</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands / Categories */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              title: 'Cardio Elite', 
              image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
              link: '/shop?cat=Cardio'
            },
            { 
              title: 'Power Strength', 
              image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80',
              link: '/shop?cat=Strength'
            },
            { 
              title: 'Total Home Gym', 
              image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80',
              link: '/shop?cat=Home Gym'
            }
          ].map((cat, i) => (
            <Link key={i} to={cat.link} className="group relative h-[450px] overflow-hidden rounded-[3rem] bg-zinc-900">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-4xl font-heading font-black uppercase italic tracking-tighter mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.title}</h3>
                <div className="flex items-center gap-2 text-green-500 font-bold uppercase tracking-[0.2em] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Explore Gear <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: <Truck className="w-8 h-8" />, title: 'Expedited Delivery', desc: 'Secure transit with professional handling to any location in Ghana.' },
            { icon: <Shield className="w-8 h-8" />, title: 'Lifetime Support', desc: 'Our relationship begins at delivery. Dedicated maintenance team for your gear.' },
            { icon: <Dumbbell className="w-8 h-8" />, title: 'Elite Standards', desc: 'Each machine is inspected and certified to exceed commercial safety ratings.' }
          ].map((f, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="w-16 h-16 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
                {f.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight italic">{f.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Bestsellers */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter italic">Bestsellers</h2>
            <p className="text-zinc-500 text-lg">Tested and approved by Ghana's top fitness professionals.</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-4 bg-white/5 hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all font-black uppercase tracking-widest text-xs">
            View All Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Promo Banner / Exclusive */}
      <section className="container mx-auto px-6">
        <div className="relative rounded-[4rem] overflow-hidden h-[500px] flex items-center group">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80" 
              alt="Promo" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-green-500/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-transparent"></div>
          </div>
          <div className="relative z-10 p-12 md:p-24 max-w-3xl space-y-8">
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase italic tracking-tighter text-black leading-none">
              Build Your <br />
              Legacy Now
            </h2>
            <p className="text-xl text-black/80 font-bold max-w-md">
              Start your complete home gym journey today and get 10% off your first professional setup.
            </p>
            <button className="px-12 py-6 bg-black text-white font-black uppercase tracking-[0.2em] hover:bg-zinc-900 transition-all shadow-2xl">
              Claim VIP Offer
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials - Refined */}
      <section className="bg-[#0a0a0a] py-32 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-24">
            <h2 className="text-5xl font-heading font-black uppercase italic tracking-tighter">Voice of Performance</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">From professional athletes to busy entrepreneurs, we empower their journey.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="glass-card p-12 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-green-500/30 transition-all">
                <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="flex-1 space-y-6">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-green-500 fill-current" />)}
                  </div>
                  <p className="text-2xl font-medium leading-relaxed italic text-zinc-300">"{t.comment}"</p>
                  <div>
                    <p className="text-xl font-heading font-black uppercase tracking-tight">{t.name}</p>
                    <p className="text-green-500 text-xs font-black uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-heading font-black uppercase italic tracking-tighter">Fitness Insights</h2>
          <p className="text-zinc-500">Expert knowledge for the serious trainee.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="group cursor-pointer space-y-6">
              <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem] relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white">
                  {post.date}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-black group-hover:text-green-500 transition-colors uppercase leading-tight italic">{post.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">{post.excerpt}</p>
                <button className="text-green-500 text-sm font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all pt-2">
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
