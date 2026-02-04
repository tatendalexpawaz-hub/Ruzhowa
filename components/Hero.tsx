
import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { IMAGE_ASSETS, COLORS } from '../constants';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <div id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with Brand Filter */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          // FIX: Replaced non-existent 'homeHero' with 'boranMain' from IMAGE_ASSETS.
          backgroundImage: `url("${IMAGE_ASSETS.boranMain}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className={`absolute inset-0 bg-gradient-to-b from-[${COLORS.primary}]/40 via-transparent to-[${COLORS.primary}]/70`}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
           <div className="bg-white p-8 rounded-[3rem] inline-block shadow-2xl border border-white/20 mb-8 transition-transform hover:scale-105">
              <img 
                src={IMAGE_ASSETS.logo} 
                className="h-24 md:h-32 w-auto object-contain mx-auto" 
                alt="RuZhoWa Boran & Tuli Stud Farms" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const fallback = document.createElement('span');
                    fallback.className = `text-3xl md:text-5xl font-bold text-[${COLORS.primary}] px-4 py-2 whitespace-nowrap`;
                    fallback.innerText = 'RuZhoWa';
                    parent.appendChild(fallback);
                  }
                }}
              />
           </div>
        </div>

        <h1 className="text-5xl md:text-[8rem] text-white font-bold leading-[0.9] mb-12 tracking-tight">
          Elite <span className={`text-[${COLORS.accent}] italic font-serif font-light`}>Genetics.</span><br />
          Zim Pride.
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-200 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Redefining African agriculture through the high-performance lineage of 
          <span className={`text-[${COLORS.accent}] font-normal italic mx-2 uppercase tracking-widest`}>RuZhoWa</span> 
          Boran and Tuli breeds.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={onExplore}
            className={`bg-[${COLORS.accent}] hover:bg-[#94d82d] text-white px-12 py-6 rounded-xl font-bold tracking-widest uppercase text-[11px] transition-all transform hover:-translate-y-1 shadow-[0_20px_50px_rgba(130,201,30,0.4)]`}
          >
            Discover the Herd
          </button>
          <a 
            href="#contact" 
            className="glass hover:bg-white text-slate-900 px-12 py-6 rounded-xl font-bold tracking-widest uppercase text-[11px] transition-all shadow-xl flex items-center gap-3"
          >
            Visit Beatrice Farm <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 text-white/40 animate-bounce cursor-pointer">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Explore Legacy</span>
        <ArrowDown className={`w-5 h-5 text-[${COLORS.accent}]`} />
      </div>
    </div>
  );
};

export default Hero;
