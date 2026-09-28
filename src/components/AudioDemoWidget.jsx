import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Mic, Sliders, RefreshCw } from 'lucide-react';

export default function AudioDemoWidget({ setCursorLabel, setCursorHovered }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePreset, setActivePreset] = useState('boardroom');
  const [cadence, setCadence] = useState(135); // WPM
  const [pitchHz, setPitchHz] = useState(115); // Hz
  const [clarity, setClarity] = useState(98); // %
  const [progress, setProgress] = useState(0);

  const presets = {
    boardroom: {
      name: 'Boardroom Authority',
      desc: 'Subtle pause mechanics, deep vocal placement, heavy weight on strategic nouns.',
      quote: '"Our strategic imperative is not merely market presence—it is absolute category command."',
      sampleWpm: 128,
      sampleHz: 110,
    },
    diplomatic: {
      name: 'Diplomatic Gravitas',
      desc: 'Silk-smooth cadence, unshakeable composure under intense scrutiny.',
      quote: '"In high-stakes negotiation, the quietest voice in the room commands the highest leverage."',
      sampleWpm: 120,
      sampleHz: 105,
    },
    keynote: {
      name: 'Keynote Articulation',
      desc: 'Projective resonant timbre, dynamic pitch modulation for audience spellbinding.',
      quote: '"True eloquence converts complex vision into unforgettable conviction."',
      sampleWpm: 142,
      sampleHz: 125,
    },
  };

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const selectPreset = (key) => {
    setActivePreset(key);
    setCadence(presets[key].sampleWpm);
    setPitchHz(presets[key].sampleHz);
    setProgress(0);
    setIsPlaying(false);
  };

  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  return (
    <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0F0F0F] border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-1">
            <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
            <span>INTERACTIVE RHETORIC & TIMBRE LAB</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-white">
            Vocal Resonance & Cadence Simulator
          </h3>
        </div>

        {/* Preset Selector Pill */}
        <div className="flex items-center gap-1 bg-black/60 p-1 rounded-full border border-white/10 overflow-x-auto">
          {Object.keys(presets).map((key) => (
            <button
              key={key}
              onClick={() => selectPreset(key)}
              onMouseEnter={() => handleMouseEnter('SELECT')}
              onMouseLeave={handleMouseLeave}
              className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono transition-all whitespace-nowrap ${
                activePreset === key
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {presets[key].name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Player Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        {/* Left Column: Play Control & Waveform */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          
          {/* Active Quote Card */}
          <div className="p-4 sm:p-6 rounded-2xl bg-black/80 border border-white/10 space-y-2 sm:space-y-3 relative">
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="text-[#D4AF37] uppercase font-bold">{presets[activePreset].name} MODE</span>
              <span>VOICE ARCHIVE #RS-084</span>
            </div>
            <p className="text-base sm:text-xl font-editorial italic text-white leading-relaxed">
              {presets[activePreset].quote}
            </p>
            <p className="text-[11px] sm:text-xs font-sans-body text-neutral-400">
              {presets[activePreset].desc}
            </p>

            {/* Play Progress Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-3 sm:mt-4">
              <div
                className="h-full bg-[#D4AF37] transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controls & Waveform */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              onMouseEnter={() => handleMouseEnter(isPlaying ? 'PAUSE' : 'LISTEN')}
              onMouseLeave={handleMouseLeave}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#D4AF37] hover:bg-[#e6ca65] text-black flex items-center justify-center transition-transform hover:scale-105 shadow-[0_0_25px_rgba(212,175,55,0.4)] shrink-0"
            >
              {isPlaying ? <Pause className="w-5 h-5 sm:w-7 sm:h-7 fill-black" /> : <Play className="w-5 h-5 sm:w-7 sm:h-7 fill-black translate-x-0.5" />}
            </button>

            {/* Dynamic Waveform Visualization */}
            <div className="flex-1 h-12 sm:h-14 bg-black/60 border border-white/10 rounded-2xl px-3 sm:px-4 flex items-center justify-center gap-0.5 sm:gap-1 overflow-hidden">
              {Array.from({ length: 24 }).map((_, i) => {
                const baseHeight = Math.sin(i * 0.3) * 14 + 18;
                const animatedHeight = isPlaying ? Math.random() * 28 + 8 : baseHeight;
                return (
                  <motion.div
                    key={i}
                    animate={{ height: `${animatedHeight}px` }}
                    transition={{ duration: 0.15 }}
                    className={`w-1 rounded-full ${
                      i < (progress / 100) * 24 ? 'bg-[#D4AF37]' : 'bg-neutral-700'
                    }`}
                  />
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Acoustics Sliders */}
        <div className="lg:col-span-5 bg-black/60 border border-white/10 p-4 sm:p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37]">
            <span className="flex items-center gap-1.5 font-bold">
              <Sliders className="w-3.5 h-3.5" /> ACOUSTIC MODULATION
            </span>
            <button
              onClick={() => {
                setCadence(presets[activePreset].sampleWpm);
                setPitchHz(presets[activePreset].sampleHz);
                setClarity(98);
              }}
              className="text-neutral-500 hover:text-white flex items-center gap-1 text-[10px]"
            >
              <RefreshCw className="w-3 h-3" /> RESET
            </button>
          </div>

          {/* Cadence WPM */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] sm:text-xs font-mono">
              <span className="text-neutral-400">CADENCE VELOCITY</span>
              <span className="text-white font-bold">{cadence} WPM</span>
            </div>
            <input
              type="range"
              min="100"
              max="180"
              value={cadence}
              onChange={(e) => setCadence(Number(e.target.value))}
              className="w-full accent-[#D4AF37] cursor-pointer"
            />
          </div>

          {/* Pitch Hz */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] sm:text-xs font-mono">
              <span className="text-neutral-400">VOCAL PITCH WEIGHT</span>
              <span className="text-white font-bold">{pitchHz} Hz</span>
            </div>
            <input
              type="range"
              min="85"
              max="160"
              value={pitchHz}
              onChange={(e) => setPitchHz(Number(e.target.value))}
              className="w-full accent-[#D4AF37] cursor-pointer"
            />
          </div>

          {/* Articulation Clarity */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] sm:text-xs font-mono">
              <span className="text-neutral-400">ARTICULATION CLARITY</span>
              <span className="text-white font-bold">{clarity}%</span>
            </div>
            <input
              type="range"
              min="80"
              max="100"
              value={clarity}
              onChange={(e) => setClarity(Number(e.target.value))}
              className="w-full accent-[#D4AF37] cursor-pointer"
            />
          </div>

          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400">
            <span>RESIDUAL GRAVITAS SCORE</span>
            <span className="text-[#D4AF37] font-bold">99.4 / 100</span>
          </div>
        </div>

      </div>
    </div>
  );
}
