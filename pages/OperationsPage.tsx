
import React from 'react';
import { Settings, BarChart3, Users, Droplets, Zap } from 'lucide-react';
import { IMAGE_ASSETS, COLORS } from '../constants';

const OperationsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h2 className={`text-[${COLORS.accent}] font-bold uppercase tracking-[0.6em] text-[10px] mb-6`}>Commercial Ecosystem</h2>
          <h1 className={`text-6xl md:text-8xl font-bold text-[${COLORS.primary}] serif mb-10 leading-tight`}>Scale Through <br />Precision.</h1>
          <div className="w-24 h-[1px] bg-stone-200 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
           {/* Feedlots */}
           <div className="bg-[#fcfcf9] p-16 rounded-[4rem] border border-stone-100 group hover:shadow-2xl transition-all duration-700">
             <div className="bg-white w-16 h-16 rounded-3xl flex items-center justify-center mb-10 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform">
               <Zap className={`w-8 h-8 text-[${COLORS.accent}]`} />
             </div>
             <h3 className="text-4xl font-bold text-slate-900 serif mb-8">Beef & Sheep Feedlots</h3>
             <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
               Our finishing facilities in Beatrice utilize high-energy grain-based rations, meticulously balanced by animal nutritionists to ensure rapid weight gain and premium marbling. 
             </p>
             <ul className="space-y-4 mb-12">
               <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-700">
                 <Droplets className={`w-4 h-4 text-[${COLORS.accent}]`} /> Automated Hydration Systems
               </li>
               <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-700">
                 <BarChart3 className={`w-4 h-4 text-[${COLORS.accent}]`} /> Precision Weight Monitoring
               </li>
             </ul>
             <img src={IMAGE_ASSETS.feedlot} className="w-full h-80 object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" />
           </div>

           {/* Herd Management */}
           <div className={`bg-[${COLORS.primary}] p-16 rounded-[4rem] text-white group hover:shadow-2xl transition-all duration-700`}>
             <div className="bg-white/10 w-16 h-16 rounded-3xl flex items-center justify-center mb-10 shadow-sm border border-white/10 group-hover:scale-110 transition-transform">
               <Settings className={`w-8 h-8 text-[${COLORS.accent}]`} />
             </div>
             <h3 className="text-4xl font-bold serif mb-8">Herd Consulting</h3>
             <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
               We offer strategic management for commercial breeders looking to improve their bottom line through genetic introduction and modern husbandry practices.
             </p>
             <div className="grid grid-cols-2 gap-8 mb-12">
               <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                 <span className={`text-3xl font-serif text-[${COLORS.accent}] block mb-2`}>25%</span>
                 <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">Avg. Yield Increase</span>
               </div>
               <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                 <span className={`text-3xl font-serif text-[${COLORS.accent}] block mb-2`}>12+</span>
                 <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">Consulted Farms</span>
               </div>
             </div>
             <img src={IMAGE_ASSETS.commercialHerd} className="w-full h-80 object-cover rounded-[2.5rem] opacity-50 group-hover:opacity-100 transition-all duration-1000" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsPage;