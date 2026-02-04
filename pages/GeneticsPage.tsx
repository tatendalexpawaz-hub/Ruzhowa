
import React from 'react';
import { Award, ShieldCheck, Microscope, Database, ArrowRight, CheckCircle2, Leaf } from 'lucide-react';
import { COLORS } from '../constants';

const GeneticsPage: React.FC = () => {
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      {/* Editorial Header */}
      <section className="pt-48 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div>
            <h1 className={`text-7xl md:text-9xl font-bold text-[${COLORS.primary}] serif leading-[0.9] mb-12`}>The Genetic <br />Standard.</h1>
            <p className="text-2xl text-slate-500 font-light leading-relaxed max-w-xl">
              At RuZhoWa, we don't just breed for appearance; we breed for the data-backed profitability of the African cattleman.
            </p>
          </div>
          <div className={`bg-[${COLORS.primary}] p-12 rounded-[3rem] text-white space-y-8`}>
            <Microscope className={`w-12 h-12 text-[${COLORS.accent}]`} />
            <h3 className="text-3xl font-serif italic">The Scientific Edge</h3>
            <p className="text-white/70 font-light">
              Utilizing the latest in genomics and performance indexing, we ensure every bull and heifer released from our Beatrice stud is a proven asset.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Breed Breakdowns */}
      <section className="py-24 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-40">
          {/* Boran Detailed */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] h-[800px] group">
               <img 
                 src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=90&w=1600" 
                 className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                 alt="Elite Boran Stud Bull" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               
               {/* Technical Specs Overlay */}
               <div className="absolute top-10 right-10 flex flex-col gap-3">
                 <div className="glass-dark px-6 py-3 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 text-[${COLORS.accent}]`} /> Superior Conformation
                 </div>
                 <div className="glass-dark px-6 py-3 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 text-[${COLORS.accent}]`} /> Elite Musculature
                 </div>
               </div>

               <div className="absolute bottom-12 left-12 text-white">
                 <div className={`bg-[${COLORS.accent}] p-5 rounded-2xl w-fit mb-6 shadow-2xl`}>
                    <Award className="w-10 h-10 text-white" />
                 </div>
                 <h2 className="text-5xl font-bold serif mb-4">Elite Boran Stud</h2>
                 <p className={`text-[${COLORS.accent}] font-bold tracking-[0.4em] text-xs uppercase`}>Precision Breeding • High Yield</p>
               </div>
             </div>
             <div className="space-y-12">
               <h3 className={`text-4xl font-bold text-[${COLORS.primary}] serif`}>Elite Conformation Specialist</h3>
               <p className="text-slate-600 text-lg font-light leading-relaxed">
                 Our Boran line is recognized across Zimbabwe for its thick musculature, robust bone structure, and impeccable structural correctness. We select for animals that maintain their condition in the harshest dry seasons while producing high-quality beef that meets international export standards.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className={`p-8 border border-stone-100 rounded-3xl bg-stone-50 group hover:bg-[${COLORS.primary}] transition-all duration-500`}>
                    <Database className={`w-8 h-8 text-[${COLORS.accent}] mb-4 group-hover:text-white transition-colors`} />
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Musculature</h4>
                    <p className="text-xs text-slate-500 group-hover:text-white/60 transition-colors">Deep quarters, broad loins, and heavy muscle coverage for maximum carcass yield.</p>
                 </div>
                 <div className={`p-8 border border-stone-100 rounded-3xl bg-stone-50 group hover:bg-[${COLORS.primary}] transition-all duration-500`}>
                    <ShieldCheck className={`w-8 h-8 text-[${COLORS.accent}] mb-4 group-hover:text-white transition-colors`} />
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-2 group-hover:text-white transition-colors">Hardiness</h4>
                    <p className="text-xs text-slate-500 group-hover:text-white/60 transition-colors">Superior tick resistance and heat tolerance optimized for the Highveld region.</p>
                 </div>
               </div>
               <div className="pt-6">
                 <button className={`bg-[${COLORS.primary}] text-white px-12 py-6 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#025a2c] transition-all transform hover:-translate-y-1 shadow-xl flex items-center gap-4`}>
                   Download Genetic Portfolio <ArrowRight className={`w-4 h-4 text-[${COLORS.accent}]`} />
                 </button>
               </div>
             </div>
          </div>

          {/* Tuli Detailed */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="lg:order-2 relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] h-[800px] group">
               <img 
                 src="https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&q=90&w=1600" 
                 className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                 alt="Elite Tuli Stud Stock" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               
               {/* Tuli Traits Overlay */}
               <div className="absolute top-10 right-10 flex flex-col gap-3">
                 <div className="glass-dark px-6 py-3 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 text-[${COLORS.accent}]`} /> Naturally Polled
                 </div>
                 <div className="glass-dark px-6 py-3 rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 text-[${COLORS.accent}]`} /> Indigenous Hardiness
                 </div>
               </div>

               <div className="absolute bottom-12 left-12 text-white">
                 <div className={`bg-[${COLORS.accent}] p-5 rounded-2xl w-fit mb-6 shadow-2xl`}>
                    <Leaf className="w-10 h-10 text-white" />
                 </div>
                 <h2 className="text-5xl font-bold serif mb-4">The Indigenous Tuli</h2>
                 <p className={`text-[${COLORS.accent}] font-bold tracking-[0.4em] text-xs uppercase`}>Zimbabwe's Heritage • Extreme Fertility</p>
               </div>
             </div>
             <div className="lg:order-1 space-y-12">
               <h3 className={`text-4xl font-bold text-[${COLORS.primary}] serif`}>The Tuli Resilience Pride</h3>
               <p className="text-slate-600 text-lg font-light leading-relaxed">
                 The Tuli is Zimbabwe's ultimate answer to sustainable beef production. At RuZhoWa, we preserve the purity of this indigenous breed, focusing on its remarkable ability to produce a calf every year under natural veld conditions. Our Tuli cattle exemplify a hardy build, docility, and the unique naturally polled characteristic that reduces farm maintenance.
               </p>
               <div className="space-y-6">
                 {[
                   { label: 'Fertility Record', value: 'Inter-calving Period (ICP) < 370 days' },
                   { label: 'Genetic Marker', value: 'Naturally Polled (Clean Head Lineage)' },
                   { label: 'Adaptability', value: 'Highly resistant to endemic Zimbabwean diseases' },
                   { label: 'Meat Quality', value: 'Exceptional marbling in grass-fed systems' }
                 ].map(stat => (
                   <div key={stat.label} className={`border-l-4 border-[${COLORS.accent}] pl-6 py-2`}>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
                     <p className={`text-xl font-bold text-[${COLORS.primary}] serif`}>{stat.value}</p>
                   </div>
                 ))}
               </div>
               <div className="pt-6">
                  <button className={`border-2 border-[${COLORS.primary}] text-[${COLORS.primary}] px-12 py-6 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[${COLORS.primary}] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-4`}>
                    Explore Tuli Bloodlines <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneticsPage;