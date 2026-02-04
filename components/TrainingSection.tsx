
import React from 'react';
import { BookOpen, MapPin, Calendar, ArrowRight, Users, GraduationCap } from 'lucide-react';
import { COLORS } from '../constants';

interface TrainingSectionProps {
  onDeepDive?: () => void;
}

const TrainingSection: React.FC<TrainingSectionProps> = ({ onDeepDive }) => {
  return (
    <section id="training" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className={`inline-flex items-center gap-2 px-6 py-2 bg-[${COLORS.accent}]/10 text-[${COLORS.accent}] rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8`}>
              <GraduationCap className="w-4 h-4" />
              <span>RuZhoWa Academy</span>
            </div>
            <h3 className={`text-5xl md:text-6xl font-bold text-[${COLORS.primary}] serif mb-8 leading-tight`}>Empowering the <br />Next Generation.</h3>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light">
              Knowledge is the ultimate differentiator. Our Beatrice-based training facility bridges ancestral farming wisdom with modern genetic sciences.
            </p>
            
            <div className="grid gap-8">
              {[
                { title: 'Genetic Mastery', desc: 'Precision selection, progeny analytics, and stud registry management.' },
                { title: 'Operations Design', desc: 'Modern nutrition programs and finishing logic for maximum efficiency.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 p-8 rounded-[2.5rem] border border-stone-50 hover:bg-stone-50 transition-all group">
                  <div className={`w-12 h-12 rounded-2xl bg-[${COLORS.primary}] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[${COLORS.accent}] transition-all duration-500`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={onDeepDive}
              className={`mt-12 text-[${COLORS.primary}] font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-4 hover:gap-6 transition-all`}
            >
              Academic Curriculum <ArrowRight className={`w-5 h-5 text-[${COLORS.accent}]`} />
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className={`absolute -inset-6 bg-[${COLORS.accent}]/5 rounded-[4rem] -z-10 transition-transform group-hover:scale-105`}></div>
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=90&w=1200" 
                  alt="Agricultural Training" 
                  className="w-full h-[700px] object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[${COLORS.primary}]/80 via-transparent to-transparent`}></div>
                
                <div className="absolute bottom-10 left-10 right-10 glass rounded-[3rem] p-10 shadow-2xl">
                   <div className="flex items-center justify-between mb-6">
                     <span className={`bg-[${COLORS.accent}] text-white px-6 py-2.5 rounded-xl text-[9px] font-bold uppercase tracking-widest`}>Enrollment Open</span>
                   </div>
                   <h4 className={`text-3xl font-bold text-[${COLORS.primary}] mb-6 serif`}>Genetic Selection 2025</h4>
                   <div className={`flex items-center gap-3 mb-8 text-[${COLORS.primary}]/60`}>
                     <Calendar className={`w-4 h-4 text-[${COLORS.accent}]`} />
                     <span className="text-[11px] font-bold uppercase tracking-widest">March 15th Intake</span>
                   </div>
                   <button 
                     onClick={onDeepDive}
                     className={`w-full bg-[${COLORS.primary}] text-white py-6 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[${COLORS.accent}] transition-all shadow-xl`}
                   >
                     Apply for Admission
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;