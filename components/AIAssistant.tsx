
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { askAgriculturalExpert } from '../services/gemini';
import { IMAGE_ASSETS, COLORS } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const botResponse = await askAgriculturalExpert(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    setIsTyping(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className={`bg-[${COLORS.primary}] text-white p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-[${COLORS.accent}] transition-all group relative animate-bounce`}
        >
          <MessageSquare className="w-6 h-6" />
          <span className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[${COLORS.primary}] text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all shadow-xl`}>
            Ask RuZhoWa Consultant
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[420px] h-[550px] rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-stone-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className={`bg-[${COLORS.primary}] p-6 text-white flex justify-between items-center`}>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-xl">
                <img 
                  src={IMAGE_ASSETS.logo} 
                  className="h-6 w-auto object-contain" 
                  alt="RuZhoWa Mini" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('span');
                      fallback.className = `text-[9px] font-bold text-[${COLORS.primary}] px-1 whitespace-nowrap`;
                      fallback.innerText = 'RuZhoWa';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">Expert Consultant</p>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 bg-[${COLORS.accent}] rounded-full animate-pulse`}></span>
                  <p className="text-[9px] text-stone-400 uppercase tracking-widest">RuZhoWa AI Active</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
              <X className="w-5 h-5 text-stone-300" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fcfcfc]">
            {messages.length === 0 && (
              <div className="text-center py-12 px-8">
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-stone-100 mb-6 mx-auto w-fit">
                  <Bot className={`w-10 h-10 text-[${COLORS.accent}]/30`} />
                </div>
                <h4 className={`text-[${COLORS.primary}] font-bold serif text-xl mb-4`}>How can we help?</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">Inquire about elite Boran/Tuli genetics, sheep, or our academic programs in Beatrice.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-3xl text-xs leading-relaxed font-light ${
                  m.role === 'user' 
                    ? `bg-[${COLORS.primary}] text-white rounded-tr-none shadow-lg` 
                    : 'bg-white text-slate-700 border border-stone-100 rounded-tl-none shadow-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl border border-stone-100 rounded-tl-none shadow-sm">
                  <Loader2 className={`w-4 h-4 text-[${COLORS.accent}] animate-spin`} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-6 bg-white border-t border-stone-50 flex gap-3">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your inquiry..."
              className={`flex-1 bg-stone-50 border border-stone-200 rounded-2xl px-5 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[${COLORS.accent}]/10 transition-all`}
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className={`bg-[${COLORS.primary}] text-white p-3.5 rounded-2xl hover:bg-[${COLORS.accent}] transition-all disabled:opacity-50 shadow-lg`}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;