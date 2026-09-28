import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Shield, ChevronRight, Globe, Lock, Play } from 'lucide-react';
import AudioDemoWidget from '../components/AudioDemoWidget';

export default function HomePage({ setActivePage, onOpenBooking, setCursorLabel, setCursorHovered }) {
  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  const stats = [
    { value: '1,500+', label: 'Executives & Diplomats Mentored' },
    { value: '99.9%', label: 'Executive Mastery & Pass Rate' },
    { value: '15+', label: 'Years Oxford & Global Atelier' },
    { value: '52', label: 'Global Fortune 500 C-Suites' },
  ];

  const principles = [
    {
      number: '01',
      title: 'Weight Over Velocity',
      subtitle: 'Fluency is measured not by how fast you speak, but by the gravitational weight of every syllable.',
      quote: '"Fast speech invites doubt; deliberate cadence commands absolute conviction."',
    },
    {
      number: '02',
      title: 'Strategic Silence & Pause',
      subtitle: 'The pause before a strategic noun is where authority resides in boardroom negotiations.',
      quote: '"Silence in rhetoric is not empty space—it is the acoustic anchor of authority."',
    },
    {
      number: '03',
      title: 'Timbre & Vocal Resonance',
      subtitle: 'Transforming throat-based speaking into deep chest resonance that commands room attention.',
      quote: '"Your voice is a refined instrument; resonance determines how deeply your words resonate."',
    },
  ];

  return (
    <div className="relative min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-between items-center text-center px-4 sm:px-6 relative py-8 sm:py-12">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#D4AF37]/40 bg-black/80 backdrop-blur-md text-[11px] sm:text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-4 sm:mb-6 font-bold shadow-[0_0_25px_rgba(212,175,55,0.2)] max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="truncate">OXFORD FELLOW • RAJIV SINGH SIDHU</span>
        </motion.div>

        {/* Center Headline & Subtitle */}
        <div className="max-w-6xl mx-auto my-auto space-y-6 sm:space-y-8 px-2">
          
          {/* Massive Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-serif-title font-bold text-white tracking-tight leading-[1.0] sm:leading-[0.92] selection:bg-[#D4AF37]"
          >
            Master The <br />
            <span className="text-gold-gradient italic font-editorial">Language.</span>
          </motion.h1>

          {/* Clean Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-2xl md:text-3xl font-sans-body font-light text-neutral-200 tracking-wide max-w-3xl mx-auto uppercase font-medium"
          >
            Elevate your fluency. <span className="text-[#D4AF37] font-bold">Command the room.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm sm:text-lg font-sans-body text-neutral-300 max-w-2xl mx-auto leading-relaxed"
          >
            Rajiv Singh Sidhu leads an exclusive private atelier for Fortune 500 CEOs, diplomats, and international leaders seeking elite acoustic gravitas.
          </motion.p>

          {/* Liquid Fill CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-4 sm:pt-6"
          >
            <button
              onClick={() => setActivePage('expertise')}
              onMouseEnter={() => handleMouseEnter('BEGIN')}
              onMouseLeave={handleMouseLeave}
              className="btn-liquid w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-[#D4AF37] text-white font-mono text-xs sm:text-base tracking-[0.2em] font-bold uppercase shadow-[0_0_35px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] transition-all duration-500 inline-flex items-center justify-center gap-3"
            >
              <span>Begin Journey</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:text-black transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="pt-6 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => setActivePage('expertise')}
          onMouseEnter={() => handleMouseEnter('SCROLL')}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase font-bold">
            SCROLL TO DISCOVER
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neutral-700 rounded-full flex justify-center p-1"
          >
            <div className="w-1 sm:w-1.5 h-2.5 sm:h-3 bg-[#D4AF37] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* LUXURY STATS TICKER */}
      <section className="py-12 sm:py-20 border-y border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center px-2 sm:px-4 space-y-1.5"
              >
                <div className="text-3xl sm:text-5xl md:text-6xl font-serif-title font-bold text-white tracking-tight">
                  <span className="text-gold-pure">{stat.value}</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-mono tracking-wider text-neutral-300 uppercase font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ETHOS & PHILOSOPHY SECTION */}
      <section className="py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-start">
          
          {/* Sticky Left Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32 space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>THE RAJIV SINGH SIDHU METHODOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-title font-bold text-white leading-tight">
              Fluency is not speed—it is <span className="text-gold-gradient italic font-editorial">gravitas.</span>
            </h2>

            <p className="text-sm sm:text-lg font-sans-body text-neutral-300 leading-relaxed">
              Standard language courses teach vocabulary and grammar. Rajiv Singh Sidhu trains executive presence, vocal acoustics, and strategic speech cadence so that every word you utter carries maximum leverage in high-stakes environments.
            </p>

            <div className="pt-2 sm:pt-4">
              <button
                onClick={onOpenBooking}
                onMouseEnter={() => handleMouseEnter('APPLY')}
                onMouseLeave={handleMouseLeave}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-mono text-xs sm:text-sm tracking-widest uppercase rounded-full transition-all duration-300 font-extrabold"
              >
                APPLY FOR PRIVATE MENTORSHIP
              </button>
            </div>
          </motion.div>

          {/* Right Principles Stack */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => handleMouseEnter('PRINCIPLE')}
                onMouseLeave={handleMouseLeave}
                className="group p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0B0B0B] border border-white/15 hover:border-[#D4AF37]/60 transition-all duration-500 space-y-3 sm:space-y-4 hover:shadow-[0_0_35px_rgba(212,175,55,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37] font-bold tracking-widest">
                    PRINCIPLE // {item.number}
                  </span>
                  <Award className="w-5 h-5 text-neutral-500 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-3xl font-serif-title font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-lg font-sans-body text-neutral-200 leading-relaxed font-medium">
                  {item.subtitle}
                </p>

                <div className="p-3.5 sm:p-5 rounded-xl bg-black/80 border border-white/10 text-xs sm:text-base font-editorial italic text-neutral-300">
                  {item.quote}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* INTERACTIVE AUDIO TIMBRE WIDGET SECTION */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AudioDemoWidget setCursorLabel={setCursorLabel} setCursorHovered={setCursorHovered} />
        </motion.div>
      </section>

      {/* MID-PAGE CALL TO ACTION */}
      <section className="py-16 sm:py-24 text-center px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 p-8 sm:p-16 rounded-3xl bg-gradient-to-b from-[#0F0F0F] to-black border border-white/15 shadow-[0_0_90px_rgba(0,0,0,0.95)]">
          <span className="text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold block">
            YOUR TRANSFORMATION AWAITS
          </span>

          <h2 className="text-3xl sm:text-6xl md:text-7xl font-serif-title font-bold text-white leading-tight">
            Ready to command the room with <br className="hidden sm:inline" />
            <span className="text-gold-gradient italic font-editorial">unshakable eloquence?</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-2 sm:pt-4">
            <button
              onClick={() => setActivePage('expertise')}
              onMouseEnter={() => handleMouseEnter('EXPLORE')}
              onMouseLeave={handleMouseLeave}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#D4AF37] hover:bg-[#e6ca65] text-black font-mono font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              EXPLORE THE 3 CURRICULA
            </button>

            <button
              onClick={onOpenBooking}
              onMouseEnter={() => handleMouseEnter('APPLY')}
              onMouseLeave={handleMouseLeave}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-black border-2 border-white/30 hover:border-white/60 text-white font-mono text-xs sm:text-sm tracking-widest uppercase rounded-full transition-all font-bold"
            >
              BOOK DIRECT CONSULTATION
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
