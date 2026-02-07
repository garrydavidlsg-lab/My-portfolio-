
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Engineering', href: '#skills', id: 'skills' },
    { label: 'Works', href: '#projects', id: 'projects' },
    { label: 'Timeline', href: '#experience', id: 'experience' }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = ['hero', 'skills', 'projects', 'experience'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#030712]/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold flex items-center gap-3 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-black transition-transform group-hover:rotate-12">G</div>
            <span className="tracking-tight heading-font text-white uppercase">GARRY<span className="text-indigo-500">DAVID</span></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white bg-white/5' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2"></div>
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              Connect
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-64 bg-[#030712] border-l border-white/5 p-8 flex flex-col gap-8 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="text-xs font-mono text-indigo-500 uppercase tracking-widest mt-12">Navigation</div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-bold heading-font transition-all ${
                activeSection === item.id ? 'text-indigo-500 translate-x-2' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-4 bg-indigo-600 text-white rounded-xl font-bold text-center shadow-xl shadow-indigo-600/20"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
