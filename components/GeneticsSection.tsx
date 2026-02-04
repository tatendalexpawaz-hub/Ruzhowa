
import React from 'react';
import { BREED_DETAILS, COLORS } from '../constants';
import { Award, ChevronRight, CheckCircle2 } from 'lucide-react';

interface GeneticsSectionProps {
  onDeepDive?: () => void;
}

const GeneticsSection: React.FC<GeneticsSectionProps> = ({ onDeepDive }) => {
  return (
    <section id="genetics" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-10">
          <div className="max-w-3xl">
            <div className={`flex items-center gap-4 mb-6`}>
              <div className={`w-12 h-1.5 bg-[${COLORS.accent}]`}></div>
              <h2 className={`text-[${COLORS.accent}] font-bold uppercase tracking-[0.4em] text-[10px]`}>Genetic Excellence</h2>
            </div>
            <h3 className={`text-5xl md:text-7xl font-bold text-[${COLORS.primary}] serif leading-tight`}>Elite Breeding <br />Architecture.</h3>
          </div>
          <div className="lg:max-w-md">
            <p className="text-slate-500 text-lg leading-relaxed font-light mb-8 border-l-2 border-stone-100 pl-8 italic">
              "Building resilience into every lineage. Our Beatrice operation is the engine of profitability for the modern African cattleman."
            </p>
            <button 
              onClick={onDeepDive}
              className={`flex items-center gap-2 text-[${COLORS.primary}] font-bold text-[10px] uppercase tracking-widest hover:gap-4 transition-all`}
            >
              Full Breeding Standards 
              <ChevronRight className={`w-4 h-4 text-[${COLORS.accent}]`} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-48">
          {BREED_DETAILS.map((breed, index) => (
            <div 
              key={breed.name} 
              className={`flex flex-col lg:items-center gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="flex-1">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group border border-stone-100">
                  <img 
                    src={breed.imageUrl} 
                    alt={breed.name} 
                    className="w-full h-[700px] object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-[${COLORS.primary}]/80 via-transparent to-transparent opacity-60`}></div>
                  
                  <div className="absolute top-10 right-10 flex flex-col gap-3">
                    <div className="glass-dark px-4 py-2 rounded-full text-white text-[9px] font-bold uppercase tracking-widest border border-white/10 flex items-center gap-2">
                       <CheckCircle2 className={`w-3 h-3 text-[${COLORS.accent}]`} /> RuZhoWa Verified
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-12 text-white">
                    <div className={`bg-[${COLORS.accent}] p-5 rounded-[2rem] w-fit mb-6 shadow-2xl`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <p className={`text-[10px] font-bold uppercase tracking-[0.5em] text-[${COLORS.accent}] mb-2`}>Stud Grade Selection</p>
                    <h5 className="text-3xl font-serif font-light italic">Superior Conformation & Vigor</h5>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-12 px-4 lg:px-12">
                <div className="space-y-4">
                  <span className={`text-[${COLORS.accent}] font-bold tracking-[0.3em] text-[10px] uppercase block border-l-2 border-[${COLORS.accent}] pl-4`}>{breed.tagline}</span>
                  <h4 className={`text-5xl md:text-6xl font-bold text-[${COLORS.primary}] serif leading-tight`}>{breed.name}</h4>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-xl font-light">
                  {breed.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-4 border-t border-stone-50">
                  {breed.traits.map((trait) => (
                    <div key={trait} className="flex flex-col space-y-2 group">
                      <div className="flex items-center space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-[${COLORS.accent}] group-hover:scale-150 transition-transform`}></div>
                        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase text-[${COLORS.primary}]`}>{trait}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-10 flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={onDeepDive}
                    className={`bg-[${COLORS.primary}] text-white px-12 py-6 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#025a2c] transition-all transform hover:-translate-y-1 shadow-2xl`}
                  >
                    View Registry Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeneticsSection;