import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Engineering', href: '#skills' },
    { label: 'Works', href: '#projects' },
    { label: 'Timeline', href: '#experience' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm font-black">A</div>
          <span className="tracking-tight heading-font">ALEX<span className="text-indigo-500">DEV</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-tight"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-indigo-500/20"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;