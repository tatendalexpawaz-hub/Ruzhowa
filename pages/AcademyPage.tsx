
import React from 'react';
import { GraduationCap, BookOpen, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';
import { COLORS } from '../constants';

const AcademyPage: React.FC = () => {
  return (
    <div className="bg-[#fcfcf9] min-h-screen pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
          <div className="flex-1">
             <h1 className={`text-6xl md:text-8xl font-bold text-[${COLORS.primary}] serif leading-[0.9] mb-12`}>RuZhoWa <br /><span className={`text-[${COLORS.accent}]`}>Academy.</span></h1>
             <p className="text-2xl text-slate-500 font-light leading-relaxed mb-12">
               Empowering the next generation of Zimbabwean agriculturalists through a curriculum that balances ancestral wisdom with modern genetic science.
             </p>
             <div className="flex flex-wrap gap-4">
               <span className={`bg-[${COLORS.primary}] text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest`}>Enrolling for 2025</span>
               <span className="border border-stone-200 px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest">Certified Program</span>
             </div>
          </div>
          <div className="flex-1 relative">
             <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=90&w=1200" className="rounded-[4rem] shadow-2xl h-[600px] w-full object-cover" />
             <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[3rem] shadow-2xl max-w-xs border border-stone-50">
                <BookOpen className={`w-10 h-10 text-[${COLORS.accent}] mb-6`} />
                <p className="text-slate-800 font-serif italic text-lg leading-relaxed">"The best fertilizer for a farm is the farmer's footprint—and their knowledge."</p>
             </div>
          </div>
        </div>

        <h3 className={`text-center text-[${COLORS.accent}] font-bold uppercase tracking-[0.6em] text-[10px] mb-16`}>The Curriculum</h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Genetics 101', desc: 'Selection criteria, EBVs, and lineage tracking for stud breeders.' },
            { title: 'Animal Health', desc: 'Veterinary basics, preventative health, and Highveld disease profiles.' },
            { title: 'Business Ag', desc: 'Farm economics, export logistics, and herd value optimization.' }
          ].map(course => (
            <div key={course.title} className="bg-white p-12 rounded-[3rem] shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
              <h4 className={`text-2xl font-bold text-[${COLORS.primary}] mb-6 serif group-hover:text-[${COLORS.accent}] transition-colors`}>{course.title}</h4>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{course.desc}</p>
            </div>
          ))}
        </div>

        <div className={`bg-[${COLORS.primary}] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden`}>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10 max-w-3xl">
              <h3 className="text-5xl font-bold serif mb-10">Join the Next Intake</h3>
              <div className="space-y-8 mb-16">
                 <div className="flex items-center gap-6">
                    <Calendar className={`w-6 h-6 text-[${COLORS.accent}]`} />
                    <span className="text-sm font-bold uppercase tracking-widest">March 15th - May 10th, 2025</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <MapPin className={`w-6 h-6 text-[${COLORS.accent}]`} />
                    <span className="text-sm font-bold uppercase tracking-widest">Beatrice Training Facility, Zimbabwe</span>
                 </div>
                 <div className="flex items-center gap-6">
                    <Clock className={`w-6 h-6 text-[${COLORS.accent}]`} />
                    <span className="text-sm font-bold uppercase tracking-widest">Full-Time Intensive (8 Weeks)</span>
                 </div>
              </div>
              <button className={`bg-[${COLORS.accent}] text-white px-12 py-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[${COLORS.primary}] transition-all shadow-2xl`}>
                Apply for Enrollment
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyPage;