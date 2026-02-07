
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Engineering Journey</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white heading-font">Timeline.</h3>
        </div>

        <div className="relative">
          {/* Main Vertical Timeline Line */}
          <div className="absolute left-0 lg:left-[calc(25%-1px)] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent hidden lg:block z-0"></div>

          <div className="space-y-40">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                  
                  {/* LEFT: Metadata (Sticky Area) */}
                  <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-28">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-indigo-500 font-mono text-[10px] font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-[0.2em]">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-3xl font-black text-white mb-2 tracking-tight heading-font leading-tight">
                        {exp.company}
                      </h4>
                      <p className="text-indigo-400 font-bold text-lg mb-6">{exp.role}</p>
                      
                      {/* Timeline Node - Positioned on the line */}
                      <div className="absolute right-[-1px] lg:right-[-1px] top-4 hidden lg:flex items-center justify-center z-20 translate-x-1/2">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                          <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping"></div>
                          <div className="w-5 h-5 rounded-full bg-[#030712] border-[3px] border-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Main Content */}
                  <div className="lg:col-span-9">
                    {/* Contributions */}
                    <div className="mb-16">
                      <h5 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8 opacity-30 flex items-center gap-4">
                        Strategic Impact
                        <div className="h-px w-24 bg-white/10"></div>
                      </h5>
                      <ul className="space-y-8">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-slate-400 text-lg md:text-xl leading-relaxed font-light flex items-start group/item">
                            <div className="w-2 h-2 bg-indigo-600/40 rounded-full mt-3 mr-6 shrink-0 transition-all group-hover/item:scale-150 group-hover/item:bg-indigo-500 group-hover/item:shadow-[0_0_12px_rgba(79,70,229,1)]"></div>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Wide Multi-Column Project Grid */}
                    {exp.projects && exp.projects.length > 0 && (
                      <div className="mt-20 pt-16 border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-8 rounded-3xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
                          <h5 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] opacity-40">Delivered Architectures</h5>
                          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                             <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{exp.projects.length} System Nodes Built</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {exp.projects.map((proj, pIdx) => (
                            <div 
                              key={pIdx} 
                              className="group/proj p-8 glass-card border border-white/5 rounded-2xl hover:border-indigo-500/40 transition-all hover:bg-white/[0.03] flex flex-col shadow-2xl relative overflow-hidden h-full"
                            >
                              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] opacity-0 group-hover/proj:opacity-100 transition-opacity"></div>
                              
                              <div className="flex justify-between items-start mb-6">
                                <h6 className="text-white font-black text-lg tracking-tight group-hover/proj:text-indigo-400 transition-colors">{proj.name}</h6>
                                <div className="p-2 rounded-lg bg-white/5 group-hover/proj:bg-indigo-500/20 transition-colors">
                                  <svg className="w-4 h-4 text-slate-600 group-hover/proj:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
                                  </svg>
                                </div>
                              </div>
                              
                              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-light">{proj.description}</p>
                              
                              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {proj.tech.map(t => (
                                  <span 
                                    key={t} 
                                    className="text-[8px] font-mono font-bold text-indigo-300/40 uppercase tracking-tighter px-2.5 py-1 rounded bg-indigo-500/5 border border-indigo-500/10"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
