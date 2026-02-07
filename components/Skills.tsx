
import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const categories: Record<Skill['category'], string> = {
    core: 'Engineering Core',
    state: 'State Architecture',
    testing: 'Quality Assurance',
    other: 'Ecosystem & Tooling'
  };

  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24">
          <div className="max-w-2xl">
            <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Technical Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white heading-font tracking-tight">Systematic Mastery.</h3>
            <p className="text-slate-400 mt-6 text-lg leading-relaxed font-light">
              Deep specialized knowledge in building mission-critical frontend systems 
              that balance performance, maintainability, and user experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            {(Object.keys(categories) as Array<Skill['category']>).map((catKey) => {
              const skillsInCat = groupedSkills[catKey] || [];
              if (skillsInCat.length === 0) return null;

              return (
                <div key={catKey} className="space-y-8">
                  <div className="flex items-center gap-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] opacity-40 shrink-0">
                      {categories[catKey]}
                    </h4>
                    <div className="h-px w-full bg-white/5"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillsInCat.map((skill) => (
                      <div 
                        key={skill.name}
                        className="px-5 py-3 glass-card rounded-xl border border-white/5 hover:border-indigo-500/40 hover:bg-white/5 transition-all group cursor-default"
                      >
                        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4">
            <div className="p-10 bg-indigo-600/5 border border-indigo-500/20 rounded-3xl lg:sticky lg:top-24">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-indigo-600/30">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h5 className="font-bold text-2xl text-white mb-6 heading-font">Architectural Vision</h5>
              <p className="text-slate-400 text-base leading-relaxed mb-10">
                "Modern architecture isn't just about components; it's about predictable data flow, modular boundaries, and engineering resilience against the entropy of enterprise development."
              </p>
              <div className="space-y-5">
                {[
                  'Declarative Reactive Patterns',
                  'Predictable State Isolation',
                  'Modular Core Boundaries',
                  'Atomic Design Systems'
                ].map(tag => (
                  <div key={tag} className="flex items-center gap-4 text-sm text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
