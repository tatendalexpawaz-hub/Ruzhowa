
import React from 'react';
import { CORE_SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { COLORS } from '../constants';

interface ServicesSectionProps {
  onDeepDive?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onDeepDive }) => {
  return (
    <section id="services" className="py-32 bg-[#f8f9f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center mb-32">
          <h2 className={`text-[${COLORS.accent}] font-bold uppercase tracking-[0.5em] text-[10px] mb-6`}>Commercial Ecosystem</h2>
          <h3 className={`text-5xl md:text-7xl font-bold text-[${COLORS.primary}] serif mb-8`}>Integrated Excellence.</h3>
          <div className={`w-32 h-1.5 bg-[${COLORS.accent}] mx-auto opacity-20 rounded-full`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div 
              key={service.id} 
              onClick={onDeepDive}
              className={`bg-white cursor-pointer rounded-[3rem] overflow-hidden border border-stone-100 hover:border-[${COLORS.accent}]/30 transition-all duration-700 group flex flex-col shadow-sm hover:shadow-2xl translate-y-0 hover:-translate-y-4`}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className={`absolute top-8 left-8 bg-[${COLORS.accent}] text-white p-5 rounded-[2rem] shadow-2xl border border-white/20`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-12 flex-1 flex flex-col">
                <h4 className={`text-2xl font-bold text-[${COLORS.primary}] mb-6 group-hover:text-[${COLORS.accent}] transition-colors leading-tight`}>
                  {service.title}
                </h4>
                <p className="text-slate-500 leading-relaxed mb-10 text-sm font-light">
                  {service.description}
                </p>
                <div className="mt-auto pt-8 border-t border-stone-50 flex items-center justify-between">
                  <span className={`text-[${COLORS.primary}] font-bold text-[10px] uppercase tracking-[0.3em] group-hover:text-[${COLORS.accent}] transition-colors`}>Explore Operation</span>
                  <div className={`w-10 h-10 rounded-xl border border-stone-100 flex items-center justify-center group-hover:bg-[${COLORS.accent}] group-hover:border-[${COLORS.accent}] transition-all`}>
                    <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;