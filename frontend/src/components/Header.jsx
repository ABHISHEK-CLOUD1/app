import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);

    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    tick();
    const timer = setInterval(tick, 60000);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = ['about', 'services', 'projects', 'contact'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
        }`}
      >
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-3"
        >
          <span
            className="font-display text-xl tracking-[0.15em] text-white uppercase"
          >
            AM
          </span>
          <span className="hidden md:block w-px h-4 bg-white/20" />
          <span className="hidden md:block font-mono text-[10px] tracking-[0.2em] text-white/30 uppercase">
            {time} IST
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="link-underline font-mono text-xs tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 group"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          />
        </button>
      </header>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10"
          style={{ animation: 'fadeIn 0.3s ease' }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-display text-5xl tracking-widest text-white uppercase hover:text-white/60 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
