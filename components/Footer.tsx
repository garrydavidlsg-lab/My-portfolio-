import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-white heading-font tracking-tighter">Let's build together.</h2>
        <p className="text-slate-400 mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Open for architectural consulting, senior engineering roles, or 
          technical deep-dives on large-scale Angular systems.
        </p>
        
        <div className="flex justify-center flex-wrap gap-12 mb-20">
          {['LinkedIn', 'GitHub', 'Medium', 'CV'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-slate-500 hover:text-indigo-400 transition-all font-bold text-sm tracking-[0.2em] uppercase"
            >
              {social}
            </a>
          ))}
        </div>

        <a 
          href="mailto:alex@architect.dev"
          className="inline-flex items-center gap-6 px-10 py-6 bg-indigo-600 text-white rounded-full font-bold text-xl hover:bg-indigo-500 transition-all hover:scale-105 shadow-2xl shadow-indigo-600/30"
        >
          Send Inquiry
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 font-mono tracking-widest uppercase font-bold">
          <span>&copy; {new Date().getFullYear()} Alex Dev. Engineering Systems.</span>
          <span className="mt-4 md:mt-0">Built for precision & scale.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;