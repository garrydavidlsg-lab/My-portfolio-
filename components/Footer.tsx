import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:garrydavid77492@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="py-20 bg-[#030712] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white heading-font tracking-tighter mb-8">
                Let's <br />
                <span className="text-indigo-500">Connect.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                Open for architectural consulting, senior engineering roles, or technical deep-dives on large-scale Angular systems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email</p>
                  <a href="mailto:garrydavid77492@gmail.com" className="text-white font-bold hover:text-indigo-400 transition-colors">garrydavid77492@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-bold">Remote / Hybrid</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com/in/garry-david-1561a2194' },
                { name: 'GitHub', href: 'https://github.com/garry5683' }
              ].map(social => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-white/10 text-sm font-bold text-white hover:bg-white/5 hover:border-indigo-500/50 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-[#0f172a] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
            <div className="font-mono text-xs text-indigo-400 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              SECURE_TRANSMISSION_CHANNEL
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Identity</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#030712] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all font-mono text-sm"
                  placeholder="ENTER_NAME"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coordinates</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#030712] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all font-mono text-sm"
                  placeholder="ENTER_EMAIL"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Payload</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#030712] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all font-mono text-sm resize-none"
                  placeholder="ENTER_MESSAGE_DATA..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-600/20 uppercase tracking-widest text-sm"
              >
                Transmit Data
              </button>
            </form>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-mono">
            &copy; {new Date().getFullYear()} Garry David. All systems operational.
          </p>
          <div className="flex items-center gap-6 text-slate-600 text-xs font-mono uppercase tracking-widest">
            <span>v2.4.0</span>
            <span>React 19</span>
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
