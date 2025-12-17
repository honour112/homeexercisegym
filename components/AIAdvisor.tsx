
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getFitnessAdvice } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hi! I am your HEG Fitness Consultant. What are your fitness goals today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const advice = await getFitnessAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: advice }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-black rounded-full shadow-lg shadow-green-500/20 hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Expert Advice
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-[350px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col h-[500px] overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-right">
          <div className="p-4 bg-zinc-800 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-sm font-bold">AI Gear Consultant</p>
                <p className="text-[10px] text-green-500 font-bold uppercase">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-red-500">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-green-500 text-black rounded-tr-none' 
                    : 'bg-zinc-800 text-white rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none animate-pulse text-xs text-zinc-400">
                  Consulting fitness database...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-800/50 border-t border-white/5 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about home gyms..."
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-green-500"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-green-500 text-black rounded-full hover:scale-105 transition-transform disabled:opacity-50"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAdvisor;
