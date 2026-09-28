import React from 'react';

export default function RajivPortrait({ className = "w-full h-full", aspect = "square" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#D4AF37]/40 shadow-2xl ${className}`}>
      {/* Background Studio Lighting & Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-[#0D1836] to-[#12224A] flex items-center justify-center">
        {/* Soft Warm Studio Rim Light */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#D4AF37]/20 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-2xl pointer-events-none" />

        {/* Artistic Portrait Canvas / Silhouette Visual of Rajiv Singh Sidhu */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
          
          {/* Executive Emblem & Portrait Frame */}
          <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-[#D4AF37] p-1.5 shadow-[0_0_35px_rgba(212,175,55,0.3)] mb-4 bg-black/40 backdrop-blur-sm">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1A2E5A] to-[#0A1226] flex items-center justify-center overflow-hidden relative border border-[#D4AF37]/30">
              
              {/* Executive Silhouette / Portrait Visual */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]">
                <defs>
                  <linearGradient id="rajivGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3E5AB" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#8B6B1B" />
                  </linearGradient>
                </defs>

                {/* Background Rays */}
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" strokeDasharray="2 2" />

                {/* Head & Shoulders Silhouette */}
                <path d="M 50 20 C 40 20, 36 28, 36 38 C 36 48, 41 54, 50 54 C 59 54, 64 48, 64 38 C 64 28, 60 20, 50 20 Z" fill="url(#rajivGrad)" opacity="0.9" />
                <path d="M 20 88 C 20 72, 32 64, 50 64 C 68 64, 80 72, 80 88 Z" fill="url(#rajivGrad)" opacity="0.8" />
                
                {/* Suit Lapel & Tie Detail */}
                <polygon points="50,65 44,88 56,88" fill="#0A1226" />
                <polygon points="50,66 48,78 52,78" fill="#D4AF37" />
              </svg>

              {/* Gold Monogram Badge overlay */}
              <div className="absolute bottom-2 inset-x-0 text-center">
                <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] bg-black/80 px-2 py-0.5 rounded border border-[#D4AF37]/40 uppercase font-bold">
                  RAJIV SINGH SIDHU
                </span>
              </div>
            </div>
          </div>

          {/* Name & Title Plate */}
          <div className="space-y-1 relative z-10">
            <h4 className="text-lg sm:text-xl font-serif-title font-bold text-white tracking-wide">
              RAJIV SINGH SIDHU
            </h4>
            <p className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-semibold">
              Master Language Trainer & Rhetoric Fellow
            </p>
            <p className="text-[11px] font-sans-body text-neutral-400 max-w-xs mx-auto pt-1">
              15+ Years Mentoring Fortune 500 CEOs, Diplomats & Global Keynote Speakers.
            </p>
          </div>

          {/* Subtle Grain Texture Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        </div>
      </div>

      {/* Frame Gold Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />
    </div>
  );
}
