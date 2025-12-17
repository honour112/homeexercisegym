
import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-24 py-12 pb-24">
      {/* Intro */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase italic tracking-tighter leading-none">
            Built for <span className="text-green-500">Greatness</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Founded in Accra, Home Exercise & Gym Enterprise was born out of a simple necessity: the need for professional-grade fitness equipment that fits seamlessly into the modern Ghanaian home.
          </p>
        </div>
      </section>

      {/* Grid of mission */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-[3rem] overflow-hidden aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80" alt="Gym Mission" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="space-y-12 pl-0 md:pl-12">
            {[
              { icon: <Target className="w-10 h-10" />, title: 'Our Mission', desc: 'To make elite-level fitness accessible to every Ghanaian home through quality, durability, and expert guidance.' },
              { icon: <Heart className="w-10 h-10" />, title: 'Our Passion', desc: 'We believe health is the ultimate wealth. Every treadmill or dumbbell we sell is a brick in the wall of a healthier nation.' },
              { icon: <Award className="w-10 h-10" />, title: 'Our Promise', desc: 'We don’t just sell equipment. We provide long-term partnerships through maintenance, warranty, and professional advice.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0 text-green-500">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold uppercase italic mb-4">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-black">
            {[
              { value: '500+', label: 'Homes Transformed' },
              { value: '50+', label: 'Gym Brands' },
              { value: '16', label: 'Regions Served' },
              { value: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-5xl font-heading font-black mb-2">{stat.value}</p>
                <p className="font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
