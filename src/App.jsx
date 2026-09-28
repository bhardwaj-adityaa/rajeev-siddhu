import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import BookingModal from './components/BookingModal';
import BookOpening from './components/BookOpening';

// Sections
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activePage, setActivePage] = useState('prologue');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [defaultBookingTrack, setDefaultBookingTrack] = useState('Spoken English & Daily Fluency');
  
  // Custom Cursor States
  const [cursorLabel, setCursorLabel] = useState('');
  const [cursorHovered, setCursorHovered] = useState(false);

  // Background Mesh Shift State
  const [bgShiftClass, setBgShiftClass] = useState('mesh-gradient-bg');

  const lenisRef = useRef(null);

  // Initialize Lenis 144Hz-grade responsive smooth scrolling (touch-optimized for iOS/Android)
  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));
    const lenis = new Lenis({
      duration: isTouch ? 0.7 : 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: isTouch ? 0 : 1.0, // Retain silky native 120Hz momentum scrolling on mobile touch
    });

    lenisRef.current = lenis;
    window.lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenisInstance = null;
    };
  }, []);

  // IntersectionObserver to auto-update active page tab on scroll
  useEffect(() => {
    const sectionIds = ['prologue', 'about', 'courses', 'reviews', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActivePage(id);
          if (id === 'courses') {
            setBgShiftClass('mesh-gradient-bg mesh-gradient-shifted');
          } else {
            setBgShiftClass('mesh-gradient-bg');
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll to target section when clicked from navbar or CTA
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    
    // Background tint adjustment
    if (pageId === 'courses') {
      setBgShiftClass('mesh-gradient-bg mesh-gradient-shifted');
    } else {
      setBgShiftClass('mesh-gradient-bg');
    }

    const targetElement = document.getElementById(pageId);
    if (targetElement) {
      if (lenisRef.current) {
        if (pageId === 'prologue') {
          lenisRef.current.scrollTo(0);
        } else {
          lenisRef.current.scrollTo(targetElement, { offset: -85 });
        }
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenBooking = (track = 'Spoken English & Daily Fluency') => {
    if (typeof track === 'string') {
      setDefaultBookingTrack(track);
    }
    setBookingModalOpen(true);
  };

  const handleCourseSelectFromBook = (courseType) => {
    if (courseType) {
      setDefaultBookingTrack(courseType);
    }
    handlePageChange('courses');
  };

  return (
    <div className="relative min-h-screen bg-black text-[#F3F3F3] selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* 1. Custom Dot Cursor */}
      <Cursor cursorLabel={cursorLabel} cursorHovered={cursorHovered} />

      {/* 2. Ambient Shifting Mesh Gradient Background */}
      <div className={bgShiftClass} />

      {/* 3. Filmic Noise Grain Overlay */}
      <div className="noise-overlay" />

      {/* 4. Glassmorphic Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenBooking={() => handleOpenBooking('Spoken English & Daily Fluency')}
        setCursorLabel={setCursorLabel}
        setCursorHovered={setCursorHovered}
      />

      {/* 5. Main Continuous Multi-Section Layout */}
      <main className="relative z-10 pt-16 sm:pt-20 lg:pt-22 space-y-16 sm:space-y-28">
        
        {/* SECTION 00: PROLOGUE (3D EXECUTIVE CHARTER BOOK) */}
        <section id="prologue" className="relative scroll-mt-20 min-h-[calc(100vh-4.5rem)] flex flex-col justify-center items-center">
          <BookOpening
            onEnterAtelier={() => handlePageChange('about')}
            onSelectCourse={handleCourseSelectFromBook}
            setCursorLabel={setCursorLabel}
            setCursorHovered={setCursorHovered}
          />
        </section>

        {/* SECTION 01: ABOUT RAJIV */}
        <section id="about" className="relative scroll-mt-28 sm:scroll-mt-36">
          <AboutSection
            onBookClass={() => handleOpenBooking('Spoken English & Daily Fluency')}
            setCursorLabel={setCursorLabel}
            setCursorHovered={setCursorHovered}
          />
        </section>

        {/* SECTION 02: COURSES & PROGRAMS */}
        <section id="courses" className="relative scroll-mt-28 sm:scroll-mt-36">
          <CoursesSection
            onSelectCourse={(track) => handleOpenBooking(track)}
            setCursorLabel={setCursorLabel}
            setCursorHovered={setCursorHovered}
          />
        </section>

        {/* SECTION 03: STUDENT REVIEWS */}
        <section id="reviews" className="relative scroll-mt-28 sm:scroll-mt-36">
          <ReviewsSection />
        </section>

        {/* SECTION 04: CONTACT & BOOKING */}
        <section id="contact" className="relative scroll-mt-28 sm:scroll-mt-36">
          <ContactSection
            selectedTrack={defaultBookingTrack}
            setCursorLabel={setCursorLabel}
            setCursorHovered={setCursorHovered}
          />
        </section>
      </main>

      {/* 6. Footer */}
      <Footer
        setActivePage={handlePageChange}
        onOpenBooking={() => handleOpenBooking('Spoken English Mastery')}
        setCursorLabel={setCursorLabel}
        setCursorHovered={setCursorHovered}
      />

      {/* 7. VIP Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultTrack={defaultBookingTrack}
      />
    </div>
  );
}
