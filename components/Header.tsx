
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, IMAGE_ASSETS, COLORS } from '../constants';

interface HeaderProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    const pageMap: Record<string, string> = {
      '#home': 'home',
      '#genetics': 'genetics',
      '#services': 'services',
      '#training': 'training',
      '#contact': 'contact'
    };
    onNavigate(pageMap[id] || 'home');
    setIsOpen(false);
  };

  const isLightHero = !scrolled && activePage === 'home';

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-6">
      <nav className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 border border-transparent ${scrolled ? 'glass shadow-2xl py-3 px-6 sm:px-10 border-white/20 translate-y-2' : 'bg-transparent py-4 px-4'}`}>
        <div className="flex justify-between items-center">
          <div onClick={() => handleNav('#home')} className="flex-shrink-0 flex items-center group cursor-pointer">
            <div className="relative h-12 w-auto bg-white p-2 rounded-xl shadow-sm flex items-center transition-all group-hover:scale-105">
              <img 
                src={IMAGE_ASSETS.logo} 
                alt="RuZhoWa Boran & Tuli" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('span');
                    fallback.className = `text-[10px] font-bold text-[${COLORS.primary}] px-2 whitespace-nowrap`;
                    fallback.innerText = 'RuZhoWa';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[${COLORS.accent}] ${isLightHero ? 'text-white' : 'text-slate-700'} ${activePage === (link.href.replace('#','')) ? `text-[${COLORS.accent}]` : ''}`}
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNav('#contact')} 
                className={`px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 ${isLightHero ? `bg-[${COLORS.accent}] text-white shadow-xl` : `bg-[${COLORS.primary}] text-white shadow-lg`}`}
              >
                Inquire
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isLightHero ? 'text-white' : `text-[${COLORS.primary}]`} hover:text-[${COLORS.accent}] focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 glass rounded-[2rem] overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            <div className="px-6 py-8 space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-slate-800 block w-full text-left text-lg font-bold uppercase tracking-widest border-b border-black/5 pb-4 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => handleNav('#contact')}
                className={`block w-full text-center bg-[${COLORS.primary}] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs`}
              >
                Book Visit
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;