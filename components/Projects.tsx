import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Case Studies</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white heading-font">Selected Works.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-[#0f172a]/50 border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all flex flex-col h-full shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 text-slate-400 border border-white/10 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors heading-font">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {project.description}
                </p>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-sm font-bold text-indigo-400 hover:text-white transition-all group/link"
                >
                  View System Architecture
                  <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;