import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const categories: Record<Skill['category'], string> = {
    core: 'Core Engineering',
    state: 'AI & Backend',
    testing: 'Quality & Security',
    other: 'Ecosystem'
  };

  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
          <div>
            <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">Technical Proficiency</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white heading-font tracking-tight">System Capabilities.</h3>
          </div>
          <div className="hidden md:block">
             <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
               <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
               <span>All Systems Nominal</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(Object.keys(categories) as Array<Skill['category']>).map((catKey, idx) => {
            const skillsInCat = groupedSkills[catKey] || [];
            if (skillsInCat.length === 0) return null;

            return (
              <div 
                key={catKey} 
                className={`p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-900/10 to-transparent' : 'col-span-1'
                }`}
              >
                {idx === 0 && (
                  <div className="absolute top-0 right-0 p-8 opacity-20">
                    <svg className="w-32 h-32 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${idx === 0 ? 'bg-indigo-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                    <span className="font-bold text-sm">{idx + 1}</span>
                  </div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                    {categories[catKey]}
                  </h4>
                </div>

                <div className={`grid ${idx === 0 ? 'grid-cols-2 gap-4' : 'grid-cols-1 gap-3'}`}>
                  {skillsInCat.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between group/skill"
                    >
                      <span className="text-slate-400 text-sm font-medium group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      {idx === 0 && (
                        <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 w-full"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          
          {/* Architectural Vision Card */}
          <div className="p-8 rounded-[2rem] border border-indigo-500/30 bg-indigo-600/5 md:col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
            <h4 className="text-2xl font-bold text-white mb-4 heading-font relative z-10">Architectural Vision</h4>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              "Modern architecture isn't just about components; it's about predictable data flow, modular boundaries, and engineering resilience against the entropy of enterprise development."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
