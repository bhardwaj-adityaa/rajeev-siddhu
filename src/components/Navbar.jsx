import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Globe, BookOpen } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenBooking, setCursorLabel, setCursorHovered }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Live clock logic
    const updateTime = () => {
      const options = { timeZone: 'GMT', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      const timeStr = new Intl.DateTimeFormat([], options).format(new Date());
      setTimeString(timeStr + ' GMT');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Prevent background scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'prologue', label: '00 / BOOK' },
    { id: 'about', label: '01 / ABOUT' },
    { id: 'courses', label: '02 / COURSES' },
    { id: 'reviews', label: '03 / REVIEWS' },
    { id: 'contact', label: '04 / CONTACT' },
  ];

  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
          : 'py-3 sm:py-5 bg-black/85 backdrop-blur-md border-b border-white/5 shadow-md'
      }`}
      style={{
        paddingTop: `calc(${scrolled ? '0.6rem' : '0.85rem'} + env(safe-area-inset-top, 0px))`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Monogram: RS • RAJIV SINGH SIDHU */}
        <button
          onClick={() => setActivePage('prologue')}
          onMouseEnter={() => handleMouseEnter('PROLOGUE')}
          onMouseLeave={handleMouseLeave}
          className="text-left group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center bg-black group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 shrink-0">
            <span className="font-serif-title text-[#D4AF37] font-bold text-base sm:text-lg tracking-tighter">RS</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-title font-bold text-base sm:text-xl tracking-wider text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                RAJIV SINGH SIDHU
              </span>
              <span className="hidden xl:inline-block px-2 py-0.5 text-[9px] font-mono tracking-widest text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded font-bold uppercase">
                EXECUTIVE RHETORIC
              </span>
            </div>
            <p className="text-[10px] sm:text-xs font-mono text-neutral-300 tracking-widest uppercase font-semibold">
              Master Language Trainer
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0A0A0A]/90 p-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-lg">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                onMouseEnter={() => handleMouseEnter('NAVIGATE')}
                onMouseLeave={handleMouseLeave}
                className={`relative px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-mono tracking-widest font-bold transition-all duration-300 ${
                  isActive ? 'text-black font-extrabold' : 'text-neutral-200 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#D4AF37] rounded-full shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.id === 'prologue' && <BookOpen className="w-3.5 h-3.5" />}
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Live Status & Clock */}
          <div className="text-right flex flex-col items-end">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="tracking-wider">ACCEPTING FELLOWS</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-mono text-neutral-300 font-medium">
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>{timeString}</span>
            </div>
          </div>

          {/* Reserve CTA */}
          <button
            onClick={onOpenBooking}
            onMouseEnter={() => handleMouseEnter('BOOK')}
            onMouseLeave={handleMouseLeave}
            className="btn-liquid px-6 py-2.5 border-2 border-[#D4AF37] rounded-full text-xs font-mono tracking-widest text-[#D4AF37] font-bold transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>RESERVE SEAT</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl border border-white/20 text-white bg-black/60"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 backdrop-blur-2xl px-5 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-serif-title py-3 border-b border-white/5 flex items-center justify-between ${
                    activePage === item.id ? 'text-[#D4AF37] font-bold' : 'text-neutral-200'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {item.id === 'prologue' && <BookOpen className="w-4 h-4 text-[#D4AF37]" />}
                    {item.label}
                  </span>
                  {activePage === item.id && <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>}
                </button>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="mt-3 w-full py-3.5 bg-[#D4AF37] text-black font-mono text-xs tracking-widest font-bold rounded-xl shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                RESERVE VIP CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
