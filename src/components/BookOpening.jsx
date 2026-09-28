import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';

export default function BookOpening({ onEnterAtelier, onSelectCourse, setCursorLabel, setCursorHovered }) {
  const [isOpen, setIsOpen] = useState(false);
  const durationMs = 3000; // 3.0s majestic, deliberate glide

  useEffect(() => {
    // Auto-open with smooth slow glide after short initial pause
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 450);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleMouseEnter = (label) => {
    if (setCursorHovered) setCursorHovered(true);
    if (setCursorLabel) setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    if (setCursorHovered) setCursorHovered(false);
    if (setCursorLabel) setCursorLabel('');
  };

  const toggleBook = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-1 sm:pt-2 pb-2 sm:pb-4 px-2 sm:px-4 select-none">
      
      {/* Background Ambient Glow & Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] bg-gradient-radial from-[#D4AF37]/15 via-blue-950/20 to-transparent rounded-full filter blur-[50px] sm:blur-[90px] pointer-events-none" />

      {/* Top Controls & Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="z-20 mb-3 sm:mb-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center max-w-full px-2"
      >
        <div className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/80 backdrop-blur-md text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.2)]">
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">MASTERPIECE CHARTER • RAJIV SINGH SIDHU</span>
        </div>

        <button
          onClick={toggleBook}
          onMouseEnter={() => handleMouseEnter(isOpen ? 'CLOSE' : 'OPEN')}
          onMouseLeave={handleMouseLeave}
          className="px-4 py-1.5 rounded-full border border-white/20 hover:border-[#D4AF37] bg-black/70 text-[10px] sm:text-xs font-mono text-neutral-200 hover:text-[#D4AF37] transition-all flex items-center gap-2 font-semibold shadow-sm active:scale-95"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{isOpen ? 'CLOSE EXECUTIVE CHARTER' : 'OPEN EXECUTIVE CHARTER'}</span>
        </button>
      </motion.div>

      {/* 3D BOOK VIEWPORT STAGE (Responsive & 100% Mobile/Tablet Smooth) */}
      <div className="book-stage relative w-full max-w-6xl h-[470px] sm:h-[530px] lg:h-[560px] flex items-center justify-center z-10">
        
        {/* THE 3D HARDCOVER BOOK OBJECT (GPU COMPOSITED) */}
        <div
          className="book-object relative w-[min(94vw,370px)] sm:w-[620px] lg:w-[840px] h-[450px] sm:h-[500px] lg:h-[530px]"
          style={{
            transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-25%, 0, 0)',
            WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-25%, 0, 0)',
            transition: `transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`,
            WebkitTransition: `-webkit-transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`,
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          
          {/* HARDCOVER BASE (BACK COVER UNDERNEATH) */}
          <div
            className="absolute inset-0 bg-[#070D1E] rounded-xl sm:rounded-2xl border-2 sm:border-4 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            style={{
              transform: 'translateZ(-10px)',
              WebkitTransform: 'translateZ(-10px)',
            }}
          />
          
          {/* DUAL-PAGE SPREAD BLOCK (LEFT & RIGHT PAGES) */}
          <div
            className="absolute inset-y-1.5 sm:inset-y-2 inset-x-1.5 sm:inset-x-2 bg-[#FAF7F0] rounded-lg sm:rounded-xl border border-neutral-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex overflow-hidden"
            style={{
              transform: 'translateZ(-2px)',
              WebkitTransform: 'translateZ(-2px)',
            }}
          >
            
            {/* CENTER SPINDLE GUTTER SHADOW */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 sm:w-10 bg-gradient-to-r from-black/20 via-black/35 to-transparent pointer-events-none z-10" />

            {/* INSIDE LEFT PAGE (PROLOGUE) */}
            <div
              className={`w-1/2 h-full p-2.5 sm:p-5 lg:p-7 bg-gradient-to-r from-[#F3EEE3] via-[#FAF7F0] to-[#FFFDF9] text-black flex flex-col justify-between border-r border-neutral-300 relative transition-opacity duration-700 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Top Bar */}
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center justify-between border-b border-black/10 pb-1 sm:pb-1.5">
                  <span className="text-[7.5px] sm:text-[10px] lg:text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    PROLOGUE • I
                  </span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif-title font-bold text-[9px] sm:text-xs bg-black">
                    RS
                  </div>
                </div>

                <h2 className="text-sm sm:text-2xl lg:text-3xl font-serif-title font-bold text-neutral-900 leading-tight">
                  Master The <br />
                  <span className="text-[#8B6B1B] italic font-editorial">English Language.</span>
                </h2>

                <p className="text-[6.5px] sm:text-[9.5px] lg:text-[11px] font-mono font-bold text-[#8B6B1B] tracking-wider uppercase leading-snug">
                  ELEVATE YOUR FLUENCY AND CONFIDENCE.
                </p>

                <p className="text-[7.5px] sm:text-xs lg:text-[13px] font-sans-body text-neutral-700 leading-tight sm:leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                  15+ years mentoring students, professionals, and international leaders to speak with effortless clarity, natural rhythm, and conviction.
                </p>

                {/* Editorial Quote */}
                <div className="pt-1.5 sm:pt-3 pb-0.5 sm:pb-1 border-l sm:border-l-2 border-[#8B6B1B]/40 pl-2 sm:pl-3 italic text-neutral-800 font-editorial text-[8px] sm:text-sm lg:text-base leading-tight sm:leading-snug">
                  "Deliberate cadence commands absolute conviction."
                </div>
              </div>

              {/* Master Signature Stamp */}
              <div className="pt-1.5 sm:pt-2 border-t border-black/10 space-y-0.5">
                <div className="flex items-center justify-between text-[7px] sm:text-xs">
                  <span className="font-serif-title font-bold text-neutral-900 tracking-wider">
                    RAJIV SINGH SIDHU
                  </span>
                  <span className="font-mono text-neutral-500 uppercase font-semibold text-[6.5px] sm:text-[9px]">
                    OXFORD FELLOW
                  </span>
                </div>
              </div>
            </div>

            {/* INSIDE RIGHT PAGE (CURRICULA & OFFERINGS) */}
            <div
              className={`w-1/2 h-full p-2.5 sm:p-5 lg:p-7 bg-gradient-to-l from-[#F3EEE3] via-[#FAF7F0] to-[#FFFDF9] text-black flex flex-col justify-between relative transition-opacity duration-700 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-1 sm:pb-1.5 mb-1.5 sm:mb-2">
                  <span className="text-[7.5px] sm:text-[10px] lg:text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    CURRICULA • II
                  </span>
                  <span className="text-[7.5px] sm:text-[10px] font-mono text-[#8B6B1B] font-bold">
                    3 TRACKS
                  </span>
                </div>

                <h3 className="text-[7.5px] sm:text-[11px] lg:text-xs font-mono tracking-widest text-[#8B6B1B] uppercase font-bold mb-1.5 sm:mb-2">
                  SPEAKING PROGRAMS
                </h3>

                {/* Course Track Offerings */}
                <div className="space-y-1 sm:space-y-2">
                  
                  {/* Track 1 */}
                  <button
                    onClick={() => onSelectCourse('Spoken English & Daily Fluency')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-1.5 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[8.5px] sm:text-xs lg:text-sm font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B] block">
                          01. Spoken Fluency
                        </span>
                        <span className="text-[7px] sm:text-[10px] font-sans-body text-neutral-500 block truncate max-w-[110px] sm:max-w-none">
                          Accent & Natural Flow
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] shrink-0" />
                    </div>
                  </button>

                  {/* Track 2 */}
                  <button
                    onClick={() => onSelectCourse('Business & Workplace English')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-1.5 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[8.5px] sm:text-xs lg:text-sm font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B] block">
                          02. Business English
                        </span>
                        <span className="text-[7px] sm:text-[10px] font-sans-body text-neutral-500 block truncate max-w-[110px] sm:max-w-none">
                          Meetings & Workplace Pitch
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] shrink-0" />
                    </div>
                  </button>

                  {/* Track 3 */}
                  <button
                    onClick={() => onSelectCourse('IELTS & Interview Speaking Prep')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-1.5 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[8.5px] sm:text-xs lg:text-sm font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B] block">
                          03. IELTS & Interview
                        </span>
                        <span className="text-[7px] sm:text-[10px] font-sans-body text-neutral-500 block truncate max-w-[110px] sm:max-w-none">
                          Band 7.5–9.0 Precision
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] shrink-0" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-1.5 sm:pt-2 border-t border-black/10">
                <button
                  onClick={onEnterAtelier}
                  onMouseEnter={() => handleMouseEnter('ENTER')}
                  onMouseLeave={handleMouseLeave}
                  className="btn-liquid w-full py-1.5 sm:py-2.5 bg-[#0A1226] text-[#FAF7F0] font-mono text-[8px] sm:text-[10px] lg:text-xs tracking-wider uppercase font-bold rounded-lg sm:rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 group border border-[#D4AF37]"
                >
                  <span className="relative z-10">ENTER ATELIER</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-all relative z-10" />
                </button>
              </div>

            </div>

          </div>

          {/* 3D HARDCOVER FRONT COVER (SWINGS OVER SPINE ON LEFT: 50%) */}
          <div
            className="book-cover-wrapper absolute top-0 bottom-0 left-1/2 w-1/2"
            style={{
              transform: isOpen ? 'rotateY(-180deg) translate3d(0, 0, 0)' : 'rotateY(0deg) translate3d(0, 0, 0)',
              WebkitTransform: isOpen ? 'rotateY(-180deg) translate3d(0, 0, 0)' : 'rotateY(0deg) translate3d(0, 0, 0)',
              transition: `transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`,
              WebkitTransition: `-webkit-transform ${durationMs}ms cubic-bezier(0.16, 1, 0.3, 1)`,
              transformOrigin: 'left center',
              WebkitTransformOrigin: 'left center',
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* FRONT OF HARDCOVER */}
            <div
              className="book-cover-front absolute inset-0 bg-gradient-to-br from-[#0E1E45] via-[#09122B] to-[#040816] rounded-r-xl sm:rounded-r-2xl border-2 sm:border-4 border-[#D4AF37] p-3 sm:p-6 lg:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.95)] cursor-pointer"
              onClick={toggleBook}
              style={{
                transform: 'translateZ(1px)',
                WebkitTransform: 'translateZ(1px)',
              }}
            >
              {/* Outer Golden Decorative Frame */}
              <div className="absolute inset-1.5 sm:inset-3 border sm:border-2 border-[#D4AF37]/60 pointer-events-none rounded-md sm:rounded-lg" />
              <div className="absolute inset-3 sm:inset-5 border border-[#D4AF37]/30 pointer-events-none rounded-md sm:rounded-lg" />

              {/* Header Crest */}
              <div className="text-center pt-1 sm:pt-2 space-y-1">
                <div className="w-9 h-9 sm:w-14 sm:h-14 border sm:border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto bg-black/60 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <span className="font-serif-title font-bold text-sm sm:text-xl text-[#D4AF37]">RS</span>
                </div>
                <span className="text-[7.5px] sm:text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase block font-semibold">
                  RAJIV SINGH SIDHU
                </span>
              </div>

              {/* Book Title */}
              <div className="text-center space-y-1 sm:space-y-2 px-1">
                <h1 className="text-base sm:text-2xl lg:text-3xl font-serif-title font-bold text-[#F3E5AB] tracking-wider leading-tight shadow-gold-foil">
                  EXECUTIVE CHARTER
                </h1>
                <div className="w-8 sm:w-16 h-0.5 bg-[#D4AF37] mx-auto rounded-full" />
                <p className="text-[7px] sm:text-[9px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                  MASTER ENGLISH RHETORIC
                </p>
              </div>

              {/* Footer Stamp & Instructions */}
              <div className="text-center pb-1 sm:pb-2 space-y-1 sm:space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[7.5px] sm:text-[10px] font-mono text-[#D4AF37] font-semibold">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                  <span>TAP OR CLICK TO OPEN</span>
                </div>
                <p className="text-[6.5px] sm:text-[8.5px] font-mono text-neutral-400 tracking-widest uppercase">
                  EST. 2010 • MAYFAIR • ZÜRICH
                </p>
              </div>
            </div>

            {/* BACK OF COVER (INSIDE LEFT LINING WHEN OPEN) */}
            <div
              className="book-cover-back absolute inset-0 bg-[#070D1E] rounded-l-xl sm:rounded-l-2xl border-2 sm:border-4 border-[#D4AF37]/50 p-4 flex flex-col justify-center items-center text-center"
              style={{
                transform: 'rotateY(180deg) translateZ(1px)',
                WebkitTransform: 'rotateY(180deg) translateZ(1px)',
              }}
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 border border-[#D4AF37]/50 rounded-full flex items-center justify-center text-[#D4AF37] mb-2 bg-black">
                <BookOpen className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[7.5px] sm:text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                RAJIV SINGH SIDHU ATELIER
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down Indicator to Explore Section 01 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onEnterAtelier}
        className="mt-2 sm:mt-3 text-center text-xs font-mono text-neutral-400 flex flex-col items-center gap-1 cursor-pointer hover:text-[#D4AF37] transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="tracking-widest uppercase font-semibold text-[8px] sm:text-[10px]">
            SCROLL DOWN TO EXPLORE 01 ABOUT
          </span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
      </motion.div>
    </div>
  );
}
