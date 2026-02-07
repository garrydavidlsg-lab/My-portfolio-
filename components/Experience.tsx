import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Engineering Journey</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white heading-font">Timeline.</h3>
        </div>

        <div className="space-y-20">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
                <div className="md:col-span-3">
                  <span className="text-indigo-500 font-mono text-sm font-bold">{exp.period}</span>
                  <h4 className="text-xl font-bold text-white mt-1 heading-font uppercase tracking-tight">{exp.company}</h4>
                </div>
                <div className="md:col-span-9">
                  <h5 className="text-2xl font-bold text-indigo-400 mb-6 heading-font">{exp.role}</h5>
                  <ul className="space-y-6">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-slate-400 text-lg leading-relaxed font-light flex items-start">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-3 mr-4 shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {exp.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-indigo-500/20 transition-all">
                          <h6 className="text-white font-bold mb-2 tracking-tight">{proj.name}</h6>
                          <p className="text-slate-500 text-sm leading-relaxed mb-4">{proj.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {proj.tech.map(t => (
                              <span key={t} className="text-[10px] font-mono text-slate-400 uppercase">{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
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