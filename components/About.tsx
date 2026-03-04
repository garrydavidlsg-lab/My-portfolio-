import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/20 rounded-[3rem] blur-xl"></div>
            <div className="relative bg-[#0f172a] border border-white/10 rounded-[3rem] p-10 md:p-14 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="font-mono text-xs text-indigo-400 mb-6 tracking-widest uppercase">
                // System Architecture
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 heading-font leading-tight">
                Building the <br />
                <span className="text-indigo-400">Digital Backbone.</span>
              </h3>
              
              <div className="space-y-6 text-slate-400 font-light leading-relaxed">
                <p>
                  With over <strong>10 years of experience</strong> in frontend engineering, I've evolved from building static pages to architecting complex, data-driven applications. My journey is now focused on the intersection of <strong>Frontend Development</strong> and <strong>Artificial Intelligence</strong>.
                </p>
                <p>
                  I am actively expanding my expertise into <strong>Backend Development</strong> and <strong>AI-Driven Development</strong>, leveraging LLMs and modern AI tools to build smarter, more adaptive user interfaces.
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">10+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Exp.</span>
                </div>
                <div className="w-px h-12 bg-white/10 mx-4"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">50+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-indigo-500 font-mono text-xs uppercase tracking-widest mb-4">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white heading-font tracking-tight mb-6">
                Evolving with <br />
                Technology.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Transitioning from a pure Frontend Specialist to a <strong>Full-Stack AI Engineer</strong>. I combine deep frontend knowledge with emerging AI capabilities to create next-generation web experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Frontend Expert', desc: '10 years of mastery in Angular, React, & Vue.' },
                { title: 'AI Integration', desc: 'Leveraging LLMs for smarter UI/UX.' },
                { title: 'Backend Learning', desc: 'Expanding into Node.js, Python, & Cloud.' },
                { title: 'Future Focused', desc: 'Building adaptive, AI-first applications.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors group">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
