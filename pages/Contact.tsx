
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-heading font-black uppercase italic tracking-tighter">Get In Touch</h1>
          <p className="text-zinc-500 max-w-xl mx-auto">Have questions about our equipment or prices? Our team of fitness experts is ready to assist you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                <Phone className="w-8 h-8 text-green-500" />
                <h3 className="font-bold uppercase tracking-widest">Call Us</h3>
                <p className="text-zinc-500">+233 59 609 9783</p>
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.1em]">Direct Hotline</p>
              </div>
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                <MessageCircle className="w-8 h-8 text-green-500" />
                <h3 className="font-bold uppercase tracking-widest">WhatsApp</h3>
                <a href="https://wa.me/233596099783" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-green-500 transition-colors block">
                  Chat with Expert
                </a>
              </div>
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                <Mail className="w-8 h-8 text-green-500" />
                <h3 className="font-bold uppercase tracking-widest">Email</h3>
                <p className="text-zinc-500">sales@heg.com.gh</p>
                <p className="text-zinc-500">info@heg.com.gh</p>
              </div>
              <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800 space-y-4">
                <MapPin className="w-8 h-8 text-green-500" />
                <h3 className="font-bold uppercase tracking-widest">Showroom</h3>
                <p className="text-zinc-500">Spintex Road, Accra</p>
                <p className="text-zinc-500">Opposite Palace Mall</p>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <p className="font-bold uppercase tracking-widest">Follow The Movement:</p>
              {[<Instagram className="w-5 h-5" />, <Facebook className="w-5 h-5" />, <Twitter className="w-5 h-5" />].map((icon, i) => (
                <button key={i} className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-black transition-all">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-black p-10 rounded-[3rem] shadow-2xl space-y-8">
            <h2 className="text-3xl font-heading font-black uppercase italic">Send a Message</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-zinc-100 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-green-500" />
                <input type="email" placeholder="Email Address" className="w-full bg-zinc-100 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-green-500" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-zinc-100 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-green-500" />
              <textarea placeholder="Tell us about your fitness project..." rows={5} className="w-full bg-zinc-100 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-green-500 resize-none"></textarea>
              <button className="w-full bg-black text-white py-5 font-black uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all shadow-xl">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
