
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

        <div className="relative space-y-32">
          {/* Central Timeline Line (Visible on Desktop) */}
          <div className="absolute left-[calc(25%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block"></div>

          {expEntries}
        </div>
      </div>
    </section>
  );
};

const expEntries = EXPERIENCES.map((exp, idx) => (
  <div key={idx} className="relative">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      {/* LEFT: Metadata (Sticky) */}
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
          
          {/* Visual indicator for timeline node */}
          <div className="absolute right-[-13px] top-2 w-6 h-6 rounded-full bg-[#030712] border-4 border-indigo-600/50 hidden lg:flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="lg:col-span-9">
        {/* Highlights */}
        <div className="mb-12">
          <h5 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-8 opacity-30">Key Strategic Impact</h5>
          <ul className="space-y-6">
            {exp.highlights.map((h, hIdx) => (
              <li key={hIdx} className="text-slate-400 text-lg leading-relaxed font-light flex items-start group/item">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-3 mr-5 shrink-0 transition-transform group-hover/item:scale-150 shadow-[0_0_8px_rgba(79,70,229,0.5)]"></span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects (Wider Grid) */}
        {exp.projects && exp.projects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h5 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] opacity-30">Technical Deliverables</h5>
              <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{exp.projects.length} System Nodes</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {exp.projects.map((proj, pIdx) => (
                <div 
                  key={pIdx} 
                  className="group/proj p-6 glass-card border border-white/5 rounded-2xl hover:border-indigo-500/30 transition-all hover:bg-white/[0.02] flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h6 className="text-white font-bold text-base tracking-tight group-hover/proj:text-indigo-400 transition-colors">{proj.name}</h6>
                    <svg className="w-4 h-4 text-slate-700 group-hover/proj:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => (
                      <span 
                        key={t} 
                        className="text-[8px] font-mono font-bold text-indigo-300/40 uppercase tracking-tighter px-2 py-0.5 rounded bg-indigo-500/5 border border-indigo-500/10"
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
));

export default Experience;
