import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Sparkles, CheckCircle2, User, Mail, Building, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitStudentInquiry } from '../services/contactService';

export default function BookingModal({ isOpen, onClose, defaultTrack = 'Spoken English Mastery' }) {
  const [track, setTrack] = useState(defaultTrack);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    preferredDate: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const tracks = [
    'Spoken English & Daily Fluency',
    'Business & Workplace English',
    'IELTS & Interview Speaking Prep',
    'Personalized 1-on-1 Mentorship',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await submitStudentInquiry({
        name: formData.name,
        email: formData.email,
        track: track,
        organization: formData.organization,
        role: formData.role,
        preferredDate: formData.preferredDate,
        message: formData.notes,
      });

      setSubmitted(true);

      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#FFF', '#F5D77F'],
        });
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative z-10 w-full max-w-3xl bg-[#0A0A0A] border-2 border-[#D4AF37]/50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-[0_0_60px_rgba(212,175,55,0.2)] my-3 sm:my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#D4AF37] tracking-widest uppercase mb-2 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>PRIVATE ATELIER APPLICATION • RAJIV SINGH SIDHU</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
                  Reserve Your Private Consultation
                </h3>
                <p className="text-base sm:text-lg font-sans-body text-neutral-300 mt-2 font-medium">
                  Rajiv Singh Sidhu personally conducts a 30-minute diagnostic session with prospective fellows to evaluate vocal gravitas, cadence, and strategic rhetoric needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Track Selection */}
                <div>
                  <label className="block text-xs sm:text-sm font-mono text-neutral-300 uppercase tracking-wider mb-2 font-bold">
                    SELECT MASTERY TRACK
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tracks.map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setTrack(item)}
                        className={`px-4 py-3.5 rounded-xl text-xs sm:text-sm font-mono text-left transition-all ${
                          track === item
                            ? 'bg-[#D4AF37]/20 border-2 border-[#D4AF37] text-[#D4AF37] font-bold'
                            : 'bg-black/60 border border-white/15 text-neutral-300 hover:border-white/40'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-neutral-300 uppercase mb-2 font-bold">Full Name *</label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3 top-3.5 text-neutral-400" />
                      <input
                        required
                        type="text"
                        placeholder="e.g. Lord Alexander Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="gold-input w-full pl-10 pr-4 py-3.5 text-base sm:text-lg font-sans-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-neutral-300 uppercase mb-2 font-bold">Corporate Email *</label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-3 top-3.5 text-neutral-400" />
                      <input
                        required
                        type="email"
                        placeholder="alexander@firm.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="gold-input w-full pl-10 pr-4 py-3.5 text-base sm:text-lg font-sans-body"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-neutral-300 uppercase mb-2 font-bold">Organization / Title</label>
                    <div className="relative">
                      <Building className="w-5 h-5 absolute left-3 top-3.5 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="e.g. Managing Partner, Sequoia"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="gold-input w-full pl-10 pr-4 py-3.5 text-base sm:text-lg font-sans-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-neutral-300 uppercase mb-2 font-bold">Target Consultation Date *</label>
                    <div className="relative">
                      <Calendar className="w-5 h-5 absolute left-3 top-3.5 text-neutral-400" />
                      <input
                        required
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="gold-input w-full pl-10 pr-4 py-3.5 text-base sm:text-lg font-sans-body text-neutral-200"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-mono text-neutral-300 uppercase mb-2 font-bold">Key Objectives / Speech Challenges</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your upcoming keynotes, boardroom presentations, or accent refinement goals..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="gold-input w-full px-4 py-3.5 text-base sm:text-lg font-sans-body resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-400">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>Strict NDA applies. Your details are never shared with third parties.</span>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-xs sm:text-sm text-red-300">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#e6ca65] text-black font-mono font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>CONFIRM VIP APPLICATION</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6"
            >
              <div className="w-20 h-20 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs sm:text-sm font-mono text-[#D4AF37] tracking-widest uppercase font-bold">APPLICATION RECEIVED</span>
                <h3 className="text-3xl sm:text-4xl font-serif-title font-bold text-white mt-1">
                  Welcome to Rajiv Singh Sidhu Atelier
                </h3>
                <p className="text-base sm:text-xl font-sans-body text-neutral-200 max-w-lg mx-auto mt-3 font-medium">
                  Thank you, <span className="text-[#D4AF37] font-bold">{formData.name || 'Fellow'}</span>. Rajiv’s private concierge team has received your application for <span className="text-white font-bold">{track}</span>.
                </p>
              </div>

              <div className="p-5 bg-black/80 border border-white/15 rounded-2xl max-w-lg mx-auto text-left text-xs sm:text-sm font-mono space-y-2.5">
                <div className="flex justify-between text-neutral-400">
                  <span>CONFIRMATION CODE:</span>
                  <span className="text-[#D4AF37] font-bold">RS-2026-X{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>CONCIERGE RESPONSE:</span>
                  <span className="text-white font-bold">WITHIN 4 HOURS</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>DIAGNOSTIC TRACK:</span>
                  <span className="text-white font-bold truncate max-w-[240px]">{track}</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="px-10 py-4 bg-[#D4AF37] text-black font-mono text-xs sm:text-sm tracking-widest uppercase font-bold rounded-xl shadow-lg"
              >
                RETURN TO ATELIER
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
