
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GeneticsSection from './components/GeneticsSection';
import ServicesSection from './components/ServicesSection';
import TrainingSection from './components/TrainingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { IMAGE_ASSETS, COLORS } from './constants';

// Mock Pages for deep dives
import GeneticsPage from './pages/GeneticsPage';
import OperationsPage from './pages/OperationsPage';
import AcademyPage from './pages/AcademyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle back to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'genetics':
        return <GeneticsPage />;
      case 'services':
        return <OperationsPage />;
      case 'training':
        return <AcademyPage />;
      case 'contact':
        return (
          <div className="pt-32">
            <ContactSection />
          </div>
        );
      case 'home':
      default:
        return (
          <>
            <Hero onExplore={() => setCurrentPage('genetics')} />
            
            {/* Heritage Summary */}
            <div className="px-4 sm:px-8 lg:px-12 -mt-20 relative z-20">
              <div className={`max-w-7xl mx-auto bg-[${COLORS.primary}] rounded-[3rem] py-24 lg:py-40 relative overflow-hidden shadow-2xl border border-white/5`}>
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-[${COLORS.accent}] rounded-full blur-[150px]`}></div>
                </div>
                <div className="max-w-4xl mx-auto px-8 lg:px-20 text-center relative z-10">
                  <p className={`text-[${COLORS.accent}] font-bold uppercase tracking-[0.6em] text-[10px] mb-12`}>Established 1984</p>
                  <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-[1.2] font-light mb-12">
                    Nurturing a <span className={`text-[${COLORS.accent}]`}>legacy of resilience</span> for the future of Zimbabwe.
                  </h2>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    className={`border border-white/20 text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[${COLORS.primary}] transition-all`}
                  >
                    Our History
                  </button>
                </div>
              </div>
            </div>

            <GeneticsSection onDeepDive={() => setCurrentPage('genetics')} />
            
            {/* Visual Break */}
            <div className="py-24 px-4 sm:px-8">
               <div className="max-w-7xl mx-auto h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl group">
                  <img src={IMAGE_ASSETS.visualBreak} className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center text-center">
                    <div className="max-w-2xl px-6">
                       <h3 className="text-white text-5xl font-serif mb-6 italic">Precision Finishing</h3>
                       <p className="text-stone-200 font-light text-lg mb-8">Our commercial feedlots utilize scientific nutritional balancing to produce export-grade beef consistently.</p>
                       <button onClick={() => setCurrentPage('services')} className={`bg-[${COLORS.accent}] text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest`}>View Operations</button>
                    </div>
                  </div>
               </div>
            </div>

            <ServicesSection onDeepDive={() => setCurrentPage('services')} />
            <TrainingSection onDeepDive={() => setCurrentPage('training')} />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9]">
      <Header onNavigate={setCurrentPage} activePage={currentPage} />
      <main>
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <AIAssistant />
    </div>
  );
}

export default App;