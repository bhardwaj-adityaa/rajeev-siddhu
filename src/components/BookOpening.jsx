import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, ArrowRight, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';

export default function BookOpening({ onEnterAtelier, onSelectCourse, setCursorLabel, setCursorHovered }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobilePage, setActiveMobilePage] = useState('prologue'); // 'prologue' | 'curricula'
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
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  const toggleBook = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-1 sm:pt-2 pb-2 sm:pb-4 px-2 sm:px-4 select-none">
      
      {/* Background Ambient Glow & Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] bg-gradient-radial from-[#D4AF37]/15 via-blue-950/20 to-transparent rounded-full filter blur-[50px] sm:blur-[90px] pointer-events-none" />

      {/* Top Controls & Status Bar (Cleaned - pace selector row removed) */}
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

      {/* Mobile Page Navigator Tabs (Visible only on mobile when book is open) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="sm:hidden z-20 mb-2.5 flex items-center p-1 rounded-full bg-black/80 border border-[#D4AF37]/40 shadow-lg"
        >
          <button
            onClick={() => setActiveMobilePage('prologue')}
            className={`px-3.5 py-1 rounded-full text-[11px] font-mono tracking-wider font-bold transition-all ${
              activeMobilePage === 'prologue'
                ? 'bg-[#D4AF37] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            PAGE I: PROLOGUE
          </button>
          <button
            onClick={() => setActiveMobilePage('curricula')}
            className={`px-3.5 py-1 rounded-full text-[11px] font-mono tracking-wider font-bold transition-all ${
              activeMobilePage === 'curricula'
                ? 'bg-[#D4AF37] text-black shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            PAGE II: CURRICULA
          </button>
        </motion.div>
      )}

      {/* 3D BOOK VIEWPORT CONTAINER (Height-optimized to eliminate bottom clipping) */}
      <div className="book-stage relative w-full max-w-6xl h-[520px] sm:h-[560px] lg:h-[580px] flex items-center justify-center z-10 overflow-hidden sm:overflow-visible">
        
        {/* THE 3D HARDCOVER BOOK (3.0s MAJESTIC SLOW-MOTION GLIDE) */}
        <div
          className={`book-object relative w-[min(92vw,350px)] sm:w-[480px] lg:w-[500px] h-[510px] sm:h-[550px] lg:h-[570px] transition-transform cubic-bezier(0.16,1,0.3,1) ${
            isOpen ? 'translate-x-0 sm:translate-x-[240px] lg:translate-x-[250px]' : 'translate-x-0'
          }`}
          style={{
            transitionDuration: `${durationMs}ms`,
            transformStyle: 'preserve-3d',
            WebkitTransformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          
          {/* BACK COVER & BINDING */}
          <div
            className="absolute inset-0 bg-[#070D1E] rounded-r-2xl border-r-4 border-y-2 border-[#D4AF37]/70 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            style={{
              transform: 'translateZ(-14px)',
              WebkitTransform: 'translateZ(-14px)',
            }}
          />
          
          {/* BOOK PAGES BLOCK */}
          <div
            className={`absolute inset-y-2 right-2 left-2 bg-[#FAF7F0] rounded-r-xl border border-neutral-300 shadow-[10px_0_30px_rgba(0,0,0,0.5)] flex overflow-hidden transition-opacity ${
              isOpen ? 'opacity-100' : 'opacity-90'
            }`}
            style={{
              transitionDuration: `${Math.round(durationMs * 0.7)}ms`,
              transform: 'translateZ(-2px)',
              WebkitTransform: 'translateZ(-2px)',
            }}
          >
            
            {/* ======================================================== */}
            {/* DESKTOP VIEW: DUAL-PAGE SPREAD (Side by Side)           */}
            {/* ======================================================== */}
            
            {/* INSIDE LEFT PAGE (Prologue) */}
            <div
              className={`hidden sm:flex w-1/2 h-full p-5 lg:p-7 bg-gradient-to-r from-[#F3EEE3] via-[#FAF7F0] to-[#FFFDF9] text-black flex-col justify-between border-r border-neutral-300 shadow-inner relative transition-opacity ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDuration: `${Math.round(durationMs * 0.7)}ms`,
              }}
            >
              {/* Page Binding Shadow */}
              <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/15 to-transparent pointer-events-none" />

              {/* Header & Titles */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    PROLOGUE • PAGE I
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif-title font-bold text-xs bg-black">
                    RS
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-serif-title font-bold text-neutral-900 leading-tight">
                  Master The <br />
                  <span className="text-[#8B6B1B] italic font-editorial">English Language.</span>
                </h2>

                <p className="text-[10px] lg:text-[11px] font-sans-body font-bold text-[#8B6B1B] tracking-wider uppercase leading-snug">
                  ELEVATE YOUR FLUENCY AND COMMAND THE ROOM.
                </p>

                <p className="text-[11px] lg:text-xs font-sans-body text-neutral-700 leading-relaxed font-medium">
                  A bespoke atelier for C-Suite executives, diplomats, and international leaders. Transform your vocal acoustics with unshakeable authority.
                </p>

                {/* Classical Editorial Quote */}
                <div className="pt-3 pb-1 border-l-2 border-[#8B6B1B]/40 pl-3 italic text-neutral-800 font-editorial text-sm lg:text-base leading-snug">
                  "Deliberate cadence commands absolute conviction. Elevate your presence beyond standard fluency."
                </div>
              </div>

              {/* Master Ethos Stamp */}
              <div className="pt-2 border-t border-black/10 space-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif-title font-bold text-neutral-900 tracking-wider">
                    RAJIV SINGH SIDHU
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">MAYFAIR • ZÜRICH</span>
                </div>
              </div>
            </div>

            {/* INSIDE RIGHT PAGE (Curricula) */}
            <div
              className={`hidden sm:flex w-1/2 h-full p-5 lg:p-7 bg-gradient-to-l from-[#F3EEE3] via-[#FAF7F0] to-[#FFFDF9] text-black flex-col justify-between relative transition-opacity ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDuration: `${Math.round(durationMs * 0.7)}ms`,
              }}
            >
              {/* Page Binding Shadow */}
              <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/15 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-1.5 mb-2">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    CURRICULA • PAGE II
                  </span>
                  <span className="text-[11px] font-mono text-[#8B6B1B] font-bold">
                    3 PILLARS
                  </span>
                </div>

                <h3 className="text-[11px] lg:text-xs font-mono tracking-widest text-[#8B6B1B] uppercase font-bold mb-2">
                  PREMIUM OFFERINGS
                </h3>

                {/* Offerings Stack */}
                <div className="space-y-1.5 lg:space-y-2">
                  
                  {/* Offering 1 */}
                  <button
                    onClick={() => onSelectCourse('spoken')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-2.5 lg:p-3 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs lg:text-sm font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B] block">
                          01. Spoken English Mastery
                        </span>
                        <span className="text-[10px] font-sans-body text-neutral-500">
                          Acoustics & Accent Refinement
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </button>

                  {/* Offering 2 */}
                  <button
                    onClick={() => onSelectCourse('corporate')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-2.5 lg:p-3 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs lg:text-sm font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B] block">
                          02. Corporate Business English
                        </span>
                        <span className="text-[10px] font-sans-body text-neutral-500">
                          Boardroom Rhetoric & Negotiation
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </button>

                  {/* Offering 3 */}
                  <button
                    onClick={() => onSelectCourse('exam')}
                    onMouseEnter={() => handleMouseEnter('SELECT')}
                    onMouseLeave={handleMouseLeave}
                    className="w-full text-left p-2.5 lg:p-3 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs lg:text-sm font-serif-title font-bold text-neutral-900 group-hover:text-[#8B6B1B] block">
                          03. Advanced Exam Prep (IELTS)
                        </span>
                        <span className="text-[10px] font-sans-body text-neutral-500">
                          Band 9.0 Academic Precision
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#8B6B1B] group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Bottom Enter Action Button with Liquid Gold */}
              <div className="pt-2 border-t border-black/10">
                <button
                  onClick={onEnterAtelier}
                  onMouseEnter={() => handleMouseEnter('ENTER')}
                  onMouseLeave={handleMouseLeave}
                  className="btn-liquid w-full py-2.5 bg-[#0A1226] text-[#FAF7F0] font-mono text-[11px] lg:text-xs tracking-[0.2em] uppercase font-bold rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group border border-[#D4AF37]"
                >
                  <span className="relative z-10">ENTER FULL ATELIER</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black group-hover:translate-x-1 transition-all relative z-10" />
                </button>
              </div>

            </div>


            {/* ======================================================== */}
            {/* MOBILE VIEW: FULL-PAGE CLEAN PARCHMENT FOLIO (No overlap) */}
            {/* ======================================================== */}
            <div className="sm:hidden w-full h-full p-4 bg-gradient-to-b from-[#FAF7F0] via-[#F5EFE3] to-[#FAF7F0] text-black flex flex-col justify-between overflow-y-auto">
              
              {activeMobilePage === 'prologue' ? (
                /* MOBILE PAGE I: PROLOGUE */
                <div className="flex flex-col justify-between h-full space-y-3">
                  {/* Header */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                        PROLOGUE • PAGE I
                      </span>
                      <div className="w-5 h-5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif-title font-bold text-[10px] bg-black">
                        RS
                      </div>
                    </div>

                    <h2 className="text-xl font-serif-title font-bold text-neutral-900 leading-tight">
                      Master The <span className="text-[#8B6B1B] italic font-editorial">Language.</span>
                    </h2>

                    <p className="text-[10px] font-sans-body font-bold text-[#8B6B1B] tracking-wider uppercase">
                      ELEVATE YOUR FLUENCY AND COMMAND THE ROOM.
                    </p>

                    <p className="text-[11px] font-sans-body text-neutral-700 leading-relaxed font-medium">
                      A bespoke atelier for C-Suite executives, diplomats, and international leaders. Transform your vocal acoustics with unshakeable authority.
                    </p>

                    <div className="pt-2 pb-0.5 border-l-2 border-[#8B6B1B]/40 pl-2.5 italic text-neutral-800 font-editorial text-xs leading-snug">
                      "Deliberate cadence commands absolute conviction."
                    </div>
                  </div>

                  {/* Bottom Navigation on Mobile */}
                  <div className="pt-1.5 border-t border-black/10 space-y-1.5">
                    <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500">
                      <span className="font-bold text-neutral-800">RAJIV SINGH SIDHU</span>
                      <span>MAYFAIR • ZÜRICH</span>
                    </div>

                    <button
                      onClick={() => setActiveMobilePage('curricula')}
                      className="w-full py-2 bg-[#8B6B1B]/15 hover:bg-[#8B6B1B]/25 text-[#8B6B1B] font-mono text-[10px] font-bold uppercase rounded-xl border border-[#8B6B1B]/40 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>VIEW CURRICULA & COURSES (PAGE II)</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                /* MOBILE PAGE II: CURRICULA */
                <div className="flex flex-col justify-between h-full space-y-2.5">
                  <div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-1.5 mb-1.5">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                        CURRICULA • PAGE II
                      </span>
                      <span className="text-[10px] font-mono text-[#8B6B1B] font-bold">
                        3 PILLARS
                      </span>
                    </div>

                    <h3 className="text-[11px] font-mono tracking-widest text-[#8B6B1B] uppercase font-bold mb-1.5">
                      PREMIUM OFFERINGS
                    </h3>

                    {/* 3 Offerings Buttons */}
                    <div className="space-y-1.5">
                      <button
                        onClick={() => onSelectCourse('spoken')}
                        className="w-full text-left p-2 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] shadow-sm active:bg-neutral-50 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[11px] font-serif-title font-bold text-neutral-900 block">
                              01. Spoken English Mastery
                            </span>
                            <span className="text-[9px] font-sans-body text-neutral-500">
                              Accent & Diaphragm Resonance
                            </span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-neutral-400" />
                        </div>
                      </button>

                      <button
                        onClick={() => onSelectCourse('corporate')}
                        className="w-full text-left p-2 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] shadow-sm active:bg-neutral-50 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[11px] font-serif-title font-bold text-neutral-900 block">
                              02. Corporate Business English
                            </span>
                            <span className="text-[9px] font-sans-body text-neutral-500">
                              Boardroom Negotiation & Rhetoric
                            </span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-neutral-400" />
                        </div>
                      </button>

                      <button
                        onClick={() => onSelectCourse('exam')}
                        className="w-full text-left p-2 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37] shadow-sm active:bg-neutral-50 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[11px] font-serif-title font-bold text-neutral-900 block">
                              03. Advanced Exam Prep (IELTS)
                            </span>
                            <span className="text-[9px] font-sans-body text-neutral-500">
                              Band 9.0 Academic Precision
                            </span>
                          </div>
                          <ChevronRight className="w-3 h-3 text-neutral-400" />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Mobile Actions */}
                  <div className="pt-1.5 border-t border-black/10 space-y-1.5">
                    <button
                      onClick={onEnterAtelier}
                      className="w-full py-2.5 bg-[#0A1226] text-[#FAF7F0] font-mono text-[11px] tracking-wider uppercase font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 border border-[#D4AF37]"
                    >
                      <span>ENTER FULL ATELIER</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </button>

                    <button
                      onClick={() => setActiveMobilePage('prologue')}
                      className="w-full py-1 text-neutral-600 hover:text-black font-mono text-[9px] font-semibold uppercase flex items-center justify-center gap-1"
                    >
                      <ChevronLeft className="w-3 h-3" />
                      <span>BACK TO PROLOGUE (PAGE I)</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* 3D HARDCOVER FRONT COVER (MAJESTIC 3.0s GLIDE FLIP) */}
          <div
            className={`book-cover-wrapper absolute inset-0 transition-transform cubic-bezier(0.16,1,0.3,1) origin-left ${
              isOpen ? 'rotate-y-[-180deg]' : 'rotate-y-0'
            }`}
            style={{
              transitionDuration: `${durationMs}ms`,
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* FRONT OF COVER */}
            <div
              className="book-cover-front absolute inset-0 bg-gradient-to-br from-[#0E1E45] via-[#09122B] to-[#040816] rounded-r-2xl border-4 border-[#D4AF37] p-5 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.95)] backface-hidden z-20 cursor-pointer"
              onClick={toggleBook}
              style={{
                transform: 'translateZ(1px)',
                WebkitTransform: 'translateZ(1px)',
              }}
            >
              
              {/* Outer Golden Decorative Frame */}
              <div className="absolute inset-2 sm:inset-3 border-2 border-[#D4AF37]/60 pointer-events-none rounded-lg" />
              <div className="absolute inset-4 sm:inset-5 border border-[#D4AF37]/30 pointer-events-none rounded-lg" />

              {/* Header Crest */}
              <div className="text-center pt-1.5 sm:pt-3 space-y-1.5">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto bg-black/60 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <span className="font-serif-title font-bold text-lg sm:text-2xl text-[#D4AF37]">RS</span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase block font-semibold">
                  RAJIV SINGH SIDHU
                </span>
              </div>

              {/* Book Title */}
              <div className="text-center space-y-2 sm:space-y-3 px-2">
                <h1 className="text-2xl sm:text-4xl font-serif-title font-bold text-[#F3E5AB] tracking-wider leading-tight shadow-gold-foil">
                  EXECUTIVE CHARTER
                </h1>
                <div className="w-14 sm:w-18 h-0.5 bg-[#D4AF37] mx-auto rounded-full" />
                <p className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                  MASTER ENGLISH RHETORIC ATELIER
                </p>
              </div>

              {/* Footer Stamp & Instructions */}
              <div className="text-center pb-1.5 sm:pb-3 space-y-1.5 sm:space-y-2">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[10px] sm:text-xs font-mono text-[#D4AF37] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>TAP OR CLICK TO OPEN</span>
                </div>
                <p className="text-[9px] sm:text-[10px] font-mono text-neutral-400 tracking-widest uppercase">
                  EST. 2010 • MAYFAIR • ZÜRICH
                </p>
              </div>
            </div>

            {/* BACK OF COVER */}
            <div
              className="book-cover-back absolute inset-0 bg-[#070D1E] rounded-l-2xl border-4 border-[#D4AF37]/40 p-6 rotate-y-180 backface-hidden z-10 flex flex-col justify-center text-center"
              style={{
                transform: 'rotateY(180deg) translateZ(1px)',
                WebkitTransform: 'rotateY(180deg) translateZ(1px)',
              }}
            >
              <div className="w-12 h-12 border border-[#D4AF37]/50 rounded-full flex items-center justify-center mx-auto text-[#D4AF37] mb-3 bg-black">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                RAJIV SINGH SIDHU ATELIER
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down Indicator to Home */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onEnterAtelier}
        className="mt-2 sm:mt-3 text-center text-xs font-mono text-neutral-400 flex flex-col items-center gap-1 cursor-pointer hover:text-[#D4AF37] transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="tracking-widest uppercase font-semibold text-[9px] sm:text-[10px]">
            SCROLL DOWN TO EXPLORE 01 HOME
          </span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
      </motion.div>
    </div>
  );
}
