import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24">
          <div>
            <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white heading-font">Selected Works.</h3>
          </div>
          <a href="https://github.com/garry5683" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-colors group">
            <span>View GitHub Profile</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Side */}
              <div className={`lg:col-span-7 relative ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] border border-white/10 group-hover:border-indigo-500/30 transition-all shadow-2xl">
                  <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -bottom-6 ${idx % 2 === 1 ? '-left-6' : '-right-6'} w-24 h-24 bg-indigo-600/10 rounded-full blur-2xl -z-10`}></div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-indigo-500 font-mono text-xs font-bold uppercase tracking-widest">0{idx + 1}</span>
                  <div className="h-1 w-12 bg-indigo-500/30 rounded-full"></div>
                </div>
                
                <h4 className="text-3xl md:text-4xl font-black text-white mb-6 heading-font leading-tight group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-slate-300 bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center gap-3 text-white font-bold hover:text-indigo-400 transition-colors group/link"
                >
                  <span className="uppercase tracking-widest text-xs">View Case Study</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/link:border-indigo-500 group-hover/link:bg-indigo-500/10 transition-all">
                    <svg className="w-3 h-3 transform -rotate-45 group-hover/link:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
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
