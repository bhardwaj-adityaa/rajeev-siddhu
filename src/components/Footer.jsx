import React from 'react';
import { Shield, Award, Mail, ArrowUpRight, Globe } from 'lucide-react';

export default function Footer({ setActivePage, onOpenBooking: _onOpenBooking, setCursorLabel, setCursorHovered }) {
  const handleMouseEnter = (label) => {
    setCursorHovered(true);
    setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    setCursorHovered(false);
    setCursorLabel('');
  };

  return (
    <footer className="relative bg-[#040404] border-t border-white/15 pt-24 pb-12 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[14vw] font-serif-title font-bold text-white/[0.02] tracking-tighter whitespace-nowrap">
        RAJIV SINGH SIDHU
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-[#D4AF37] rounded-full flex items-center justify-center bg-black shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <span className="font-serif-title text-[#D4AF37] font-bold text-xl">RS</span>
              </div>
              <span className="font-serif-title font-bold text-3xl text-white tracking-wide">
                RAJIV SINGH SIDHU
              </span>
            </div>

            <p className="text-neutral-300 text-base font-sans-body leading-relaxed max-w-md font-medium">
              Exclusive English language mastery, executive voice timbre, and high-stakes corporate rhetoric for CEOs, diplomats, founders, and international decision-makers.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-mono text-neutral-200 font-bold">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>NON-DISCLOSURE GUARANTEED</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 text-xs font-mono text-neutral-200 font-bold">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>OXFORD RHETORIC FELLOW</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-3 font-sans-body text-sm sm:text-base text-neutral-300 font-medium">
              <li>
                <button
                  onClick={() => setActivePage('prologue')}
                  onMouseEnter={() => handleMouseEnter('VIEW')}
                  onMouseLeave={handleMouseLeave}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span>00. The Book (Prologue)</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('about')}
                  onMouseEnter={() => handleMouseEnter('VIEW')}
                  onMouseLeave={handleMouseLeave}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span>01. About Rajiv</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('courses')}
                  onMouseEnter={() => handleMouseEnter('VIEW')}
                  onMouseLeave={handleMouseLeave}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span>02. Speaking Programs</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('reviews')}
                  onMouseEnter={() => handleMouseEnter('VIEW')}
                  onMouseLeave={handleMouseLeave}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span>03. Student Reviews</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePage('contact')}
                  onMouseEnter={() => handleMouseEnter('VIEW')}
                  onMouseLeave={handleMouseLeave}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span>04. Book a Trial Lesson</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4AF37]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Locations & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs sm:text-sm font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
              LESSON FORMATS & CONTACT
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm font-mono text-neutral-300">
              <div>
                <span className="text-white font-bold block">ONLINE LIVE</span>
                <span>Zoom & Google Meet (Global)</span>
              </div>
              <div>
                <span className="text-white font-bold block">IN-PERSON</span>
                <span>Mayfair, London & Zürich</span>
              </div>
              <div>
                <span className="text-white font-bold block">SESSION TYPES</span>
                <span>Private 1-on-1 & Small Groups</span>
              </div>
              <div>
                <span className="text-white font-bold block">AVAILABILITY</span>
                <span>Weekdays & Weekend Slots</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="mailto:concierge@rajivsinghsidhu.com"
                onMouseEnter={() => handleMouseEnter('EMAIL')}
                onMouseLeave={handleMouseLeave}
                className="text-xs sm:text-sm font-mono text-neutral-200 hover:text-[#D4AF37] transition-colors flex items-center gap-2 font-bold"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>concierge@rajivsinghsidhu.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400 font-medium">
          <p>© {new Date().getFullYear()} RAJIV SINGH SIDHU RHETORIC ATELIER. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-200 cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-neutral-200 cursor-pointer">EXECUTIVE CHARTER</span>
            <span className="text-[#D4AF37] flex items-center gap-1.5 font-bold">
              <Globe className="w-4 h-4" />
              <span>GLOBAL PRACTICE</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
