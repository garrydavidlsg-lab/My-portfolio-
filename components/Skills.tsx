import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const categories: Record<Skill['category'], string> = {
    core: 'Engineering Core',
    state: 'State Architecture',
    testing: 'Quality Assurance',
    other: 'Auxiliary Tooling'
  };

  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Technical Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white heading-font tracking-tight">Systematic Mastery.</h3>
            <p className="text-slate-400 mt-6 text-lg leading-relaxed font-light">
              Deep specialized knowledge in building mission-critical frontend systems 
              that balance performance, maintainability, and user experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            {(Object.keys(categories) as Array<Skill['category']>).map((catKey) => {
              const skillsInCat = groupedSkills[catKey] || [];
              if (skillsInCat.length === 0) return null;

              return (
                <div key={catKey} className="space-y-6">
                  <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] opacity-40">
                    {categories[catKey]}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillsInCat.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-5 glass-card rounded-2xl hover:border-indigo-500/50 transition-all group flex items-center justify-between"
                      >
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4">
            <div className="p-8 bg-indigo-600/5 border border-indigo-500/20 rounded-3xl sticky top-24">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h5 className="font-bold text-2xl text-white mb-4 heading-font">Architectural Vision</h5>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                "Modern architecture isn't just about components; it's about predictable data flow, modular boundaries, and engineering resilience against the entropy of enterprise development."
              </p>
              <div className="space-y-4">
                {['Performance First', 'State Isolation', 'Scalable Patterns'].map(tag => (
                  <div key={tag} className="flex items-center gap-3 text-sm text-slate-300 font-mono">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
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