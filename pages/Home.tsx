
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
            src="data:image/jpeg;base64,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" 
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
