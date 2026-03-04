import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Career Trajectory</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white heading-font">Professional Timeline.</h3>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-12 space-y-20">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-indigo-600 rounded-full ring-4 ring-[#030712]"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-indigo-400 mb-4">
                    {exp.period}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.company}</h4>
                  <p className="text-lg text-slate-400 font-medium">{exp.role}</p>
                </div>

                <div className="lg:col-span-8 space-y-8">
                  <ul className="space-y-4">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-4 text-slate-400 leading-relaxed font-light">
                        <span className="mt-2 w-1.5 h-1.5 bg-indigo-500/50 rounded-full shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.projects && exp.projects.length > 0 && (
                    <div className="pt-8 border-t border-white/5">
                      <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-6 opacity-60">Key Deliverables</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                            <h6 className="text-white font-bold mb-2 text-sm">{proj.name}</h6>
                            <p className="text-slate-500 text-xs leading-relaxed mb-4">{proj.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {proj.tech.map(t => (
                                <span key={t} className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
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
    </section>
  );
};

export default Experience;
