
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { IMAGE_ASSETS, COLORS } from '../constants';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: string) => {
    const pageMap: Record<string, string> = {
      '#home': 'home',
      '#genetics': 'genetics',
      '#services': 'services',
      '#training': 'training',
      '#contact': 'contact'
    };
    onNavigate?.(pageMap[id] || 'home');
    window.scrollTo(0,0);
  };

  return (
    <footer className={`bg-[${COLORS.primary}] text-white pt-24 pb-12 rounded-t-[4rem]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex flex-col bg-white p-6 rounded-[2rem] shadow-inner border border-white/10 group overflow-hidden w-fit">
              <img 
                src={IMAGE_ASSETS.logo} 
                alt="RuZhoWa logo" 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('span');
                    fallback.className = `text-[12px] font-bold text-[${COLORS.primary}] px-2 whitespace-nowrap`;
                    fallback.innerText = 'RuZhoWa';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-light">
              Pioneering elite livestock genetics from Beatrice to the rest of the SADC region. Building a resilient legacy for Zimbabwean agriculture.
            </p>
            <div className="flex space-x-6">
              <a href="#" className={`text-stone-400 hover:text-[${COLORS.accent}] transition-colors`}><Facebook className="w-5 h-5" /></a>
              <a href="#" className={`text-stone-400 hover:text-[${COLORS.accent}] transition-colors`}><Instagram className="w-5 h-5" /></a>
              <a href="#" className={`text-stone-400 hover:text-[${COLORS.accent}] transition-colors`}><Twitter className="w-5 h-5" /></a>
              <a href="#" className={`text-stone-400 hover:text-[${COLORS.accent}] transition-colors`}><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className={`font-bold text-[11px] uppercase tracking-[0.3em] mb-8 text-[${COLORS.accent}]`}>Navigation</h4>
            <ul className="space-y-4 text-stone-400 text-sm font-light">
              <li><button onClick={() => handleNav('#home')} className="hover:text-white transition-colors">Farm Portal</button></li>
              <li><button onClick={() => handleNav('#genetics')} className="hover:text-white transition-colors">Genetic Standards</button></li>
              <li><button onClick={() => handleNav('#services')} className="hover:text-white transition-colors">Operations</button></li>
              <li><button onClick={() => handleNav('#training')} className="hover:text-white transition-colors">RuZhoWa Academy</button></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-[11px] uppercase tracking-[0.3em] mb-8 text-[${COLORS.accent}]`}>The Studs</h4>
            <ul className="space-y-4 text-stone-400 text-sm font-light">
              <li><button onClick={() => handleNav('#genetics')} className="hover:text-white transition-colors">RuZhoWa Boran</button></li>
              <li><button onClick={() => handleNav('#genetics')} className="hover:text-white transition-colors">RuZhoWa Tuli</button></li>
              <li><button onClick={() => handleNav('#services')} className="hover:text-white transition-colors">Dorper Mutton</button></li>
              <li><button onClick={() => handleNav('#services')} className="hover:text-white transition-colors">Beef Management</button></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-bold text-[11px] uppercase tracking-[0.3em] mb-8 text-[${COLORS.accent}]`}>Stay Briefed</h4>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed font-light">
              Receive sire reports and auction updates directly from the Beatrice farm.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className={`bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm w-full focus:outline-none focus:border-[${COLORS.accent}] transition-all`} 
              />
              <button className={`bg-[${COLORS.accent}] text-white px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#94d82d] transition-all shadow-lg`}>Join</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-stone-600 font-bold uppercase tracking-[0.3em]">
          <p>© 2024 RuZhoWa Boran & Tuli Stud Farms. Mashonaland East, Zimbabwe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;