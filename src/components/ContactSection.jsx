import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitStudentInquiry } from '../services/contactService';

export default function ContactSection({ selectedTrack = '', setCursorLabel, setCursorHovered }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    track: selectedTrack || 'Spoken English & Daily Fluency',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitStudentInquiry(formData);
      setSubmissionResult(res);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#FFF', '#F5D77F'],
        });
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Something went wrong submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMouseEnter = (label) => {
    if (setCursorHovered) setCursorHovered(true);
    if (setCursorLabel) setCursorLabel(label);
  };

  const handleMouseLeave = () => {
    if (setCursorHovered) setCursorHovered(false);
    if (setCursorLabel) setCursorLabel('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[10px] sm:text-xs font-mono text-[#D4AF37] tracking-widest uppercase font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR SPEAKING JOURNEY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight">
          Book Your <span className="text-gold-gradient italic font-editorial">Free Assessment.</span>
        </h2>

        <p className="text-sm sm:text-base font-sans-body text-neutral-300 leading-relaxed font-medium">
          Get a free 20-minute diagnostic session with Rajiv Singh Sidhu to evaluate your current pronunciation, fluency level, and personal speaking roadmap.
        </p>
      </div>

      {/* Form Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#0B0B0B] border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-neutral-300 uppercase font-bold">
                  Your Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="gold-input w-full py-3 text-base font-sans-body"
                />
              </div>

              {/* Contact (Email or WhatsApp) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-neutral-300 uppercase font-bold">
                  Email or WhatsApp Number *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. rahul@gmail.com / +91 98765..."
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="gold-input w-full py-3 text-base font-sans-body"
                />
              </div>
            </div>

            {/* Target Program Dropdown */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-neutral-300 uppercase font-bold">
                Select Your Goal / Training Track *
              </label>
              <select
                value={formData.track}
                onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                className="w-full py-3 px-3 rounded-xl bg-black border border-white/20 text-white text-sm font-sans-body focus:border-[#D4AF37] outline-none"
              >
                <option value="Spoken English & Daily Fluency">Spoken English & Daily Fluency</option>
                <option value="Business & Workplace English">Business & Workplace English</option>
                <option value="IELTS & Interview Speaking Prep">IELTS & Interview Speaking Prep</option>
                <option value="Personalized 1-on-1 Mentorship">Personalized 1-on-1 Mentorship</option>
              </select>
            </div>

            {/* Short note */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono text-neutral-300 uppercase font-bold">
                What is your biggest challenge when speaking English?
              </label>
              <textarea
                rows={3}
                placeholder="e.g. I get nervous in meetings, I struggle with pronunciation, or I translate in my head..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="gold-input w-full py-3 text-base font-sans-body resize-none"
              />
            </div>

            {/* Error Message if any */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-xs sm:text-sm text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              onMouseEnter={() => handleMouseEnter('SEND')}
              onMouseLeave={handleMouseLeave}
              className="btn-liquid w-full py-4 rounded-xl bg-[#D4AF37] text-black font-mono font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 hover:bg-[#e6ca65]"
            >
              {isSubmitting ? (
                <span>SENDING INQUIRY TO INBOX...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>REQUEST FREE TRIAL LESSON</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-title font-bold text-white">
              Trial Request Received!
            </h3>
            <p className="text-sm font-sans-body text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. Rajiv Singh Sidhu’s office will contact you on <strong className="text-[#D4AF37]">{formData.contact}</strong> within 24 hours to schedule your free speaking assessment.
            </p>

            {submissionResult?.demoMode && (
              <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200/90 text-left max-w-md mx-auto space-y-2">
                <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>How to receive this in your real email inbox:</span>
                </p>
                <p className="text-[11px] text-neutral-300 leading-relaxed">
                  Enter your free Web3Forms Access Key in <code className="bg-black/80 px-1.5 py-0.5 rounded text-amber-300 font-mono text-[10px]">src/config/contactConfig.js</code>. You can generate a free key in 15 seconds at <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-[#D4AF37] underline hover:text-white">web3forms.com</a>.
                </p>
              </div>
            )}

            <button
              onClick={() => {
                setSubmitted(false);
                setSubmissionResult(null);
                setErrorMsg('');
                setFormData({ name: '', contact: '', track: 'Spoken English & Daily Fluency', message: '' });
              }}
              className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </div>

    </div>
  );
}
