
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Grid & Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
        {/* Technical Grid Lines */}
        <div className="absolute top-0 left-10 w-px h-full bg-white/5 hidden md:block"></div>
        <div className="absolute top-0 right-10 w-px h-full bg-white/5 hidden md:block"></div>
        <div className="absolute top-32 left-0 w-full h-px bg-white/5"></div>
        <div className="absolute bottom-32 left-0 w-full h-px bg-white/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 z-10 w-full relative">
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-12 opacity-60">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-indigo-400">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
            System Online
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 hidden md:block">
            Loc: Asia-Southeast1 // Lat: 1.3521 // Lon: 103.8198
          </div>
        </div>

        {/* Main Typography */}
        <div className="relative">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] heading-font mb-8">
            GARRY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white/50">DAVID</span>
          </h1>
          
          <div className="md:absolute md:top-4 md:right-0 max-w-md text-right md:text-left">
            <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl mb-6 md:mb-0">
              <p className="font-mono text-xs text-indigo-300 mb-2">ROLE_DEFINITION</p>
              <p className="text-base font-bold text-white">Senior Frontend Engineer</p>
              <p className="text-xs text-slate-400">AI-Driven Development // 10 YOE</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 items-end">
          <div className="md:col-span-7">
            <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-light max-w-2xl">
              Architecting <span className="text-white font-medium">next-gen</span> frontend systems. 
              Bridging the gap between <span className="text-white font-medium">traditional engineering</span> and 
              <span className="text-white font-medium"> AI-driven</span> development.
            </p>
          </div>
          
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 justify-end">
            <a 
              href="#projects"
              className="group relative px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-indigo-500 transition-all overflow-hidden shadow-lg shadow-indigo-600/20"
            >
              <span className="relative z-10">View Case Studies</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-center"
            >
              Initiate Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-10 left-6 flex items-center gap-4 opacity-40">
        <div className="w-12 h-px bg-white"></div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;
