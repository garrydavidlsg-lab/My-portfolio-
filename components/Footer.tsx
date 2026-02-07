
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
    <footer id="contact" className="py-32 border-t border-white/5 bg-[#030712] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Brand & Social Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white heading-font tracking-tighter">
                Let's Build <br />
                <span className="gradient-text">The Future.</span>
              </h2>
              <p className="text-slate-400 max-w-md text-lg font-light leading-relaxed">
                Open for architectural consulting, senior engineering roles, or 
                technical deep-dives on large-scale Angular systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'GitHub', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' }
              ].map((social) => (
                <a 
                  key={social.name} 
                  href="#" 
                  className="flex items-center gap-3 text-slate-500 hover:text-indigo-400 transition-all font-bold text-sm tracking-[0.2em] uppercase group"
                >
                  <svg className="w-5 h-5 fill-current opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 relative shadow-2xl">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
              Secure Channel
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Electronic Mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Transmission Data</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your architectural needs..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center gap-4 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-500 transition-all hover:scale-[1.01] active:scale-[0.98] shadow-2xl shadow-indigo-600/20 group"
              >
                Establish Connection
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 font-mono tracking-widest uppercase font-bold">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
             <span>System Status: Online & Accepting Requests</span>
          </div>
          <span className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} Alex Dev. Engineering Scalable Solutions.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
