import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Mascot from './components/Mascot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showMascot, setShowMascot] = useState<boolean>(() => {
    const saved = localStorage.getItem('mascot_enabled');
    return saved === null ? true : saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('mascot_enabled', showMascot.toString());
  }, [showMascot]);

  return (
    <div className="min-h-screen selection:bg-indigo-600 selection:text-white overflow-x-hidden bg-[#030712] grid-bg">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-indigo-900/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/5 blur-[160px] rounded-full"></div>
      </div>
      
      <Navbar />
      
      {showMascot && <Mascot />}

      {/* Mascot Toggle Button */}
      <button 
        onClick={() => setShowMascot(!showMascot)}
        className="fixed bottom-6 right-6 z-[10000] p-3 rounded-full glass-card border border-white/10 hover:border-indigo-500/50 hover:bg-white/5 transition-all group shadow-2xl flex items-center gap-3 pr-5"
        title={showMascot ? "Disable Mascots" : "Enable Mascots"}
      >
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${showMascot ? 'bg-indigo-600 text-white' : 'bg-white/10 text-slate-400'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
          {showMascot ? 'Mascot On' : 'Mascot Off'}
        </span>
      </button>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;