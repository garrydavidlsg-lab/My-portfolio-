
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="text-center px-6 z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
          Senior Angular Architect & Engineer
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-[1.05] heading-font">
          Engineering <br />
          <span className="gradient-text">Scalable Precision.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12 font-light">
          Crafting high-performance enterprise systems with Angular 18+, 
          reactive architecture, and mission-critical reliability.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-500 transition-all hover:scale-[1.02] shadow-xl shadow-indigo-600/20"
          >
            Explore Projects
          </a>
          <a 
            href="#experience"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            Review Timeline
          </a>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
