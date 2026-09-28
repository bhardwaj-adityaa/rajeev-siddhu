import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import BookingModal from './components/BookingModal';
import BookOpening from './components/BookOpening';

// Pages
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import MasterPage from './pages/MasterPage';

export default function App() {
  const [activePage, setActivePage] = useState('prologue');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [defaultBookingTrack, setDefaultBookingTrack] = useState('Spoken English Mastery');
  
  // Custom Cursor States
  const [cursorLabel, setCursorLabel] = useState('');
  const [cursorHovered, setCursorHovered] = useState(false);

  // Background Mesh Shift State
  const [bgShiftClass, setBgShiftClass] = useState('mesh-gradient-bg');

  const lenisRef = useRef(null);

  // Initialize Lenis 144Hz-grade responsive smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
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
    const sectionIds = ['prologue', 'home', 'expertise', 'master'];
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
          if (id === 'expertise') {
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
    if (pageId === 'expertise') {
      setBgShiftClass('mesh-gradient-bg mesh-gradient-shifted');
    } else {
      setBgShiftClass('mesh-gradient-bg');
    }

    const targetElement = document.getElementById(pageId);
    if (targetElement) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetElement, { offset: -95 });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenBooking = (track = 'Spoken English Mastery') => {
    if (typeof track === 'string') {
      setDefaultBookingTrack(track);
    }
    setBookingModalOpen(true);
  };

  const handleCourseSelectFromBook = (courseType) => {
    handlePageChange('expertise');
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
        onOpenBooking={() => handleOpenBooking('Spoken English Mastery')}
        setCursorLabel={setCursorLabel}
        setCursorHovered={setCursorHovered}
      />

      {/* 5. Main Continuous Multi-Section Layout */}
      <main className="relative z-10 pt-28 sm:pt-36 lg:pt-40 space-y-16 sm:space-y-28">
        
        {/* SECTION 00: PROLOGUE (3D EXECUTIVE CHARTER BOOK) */}
        <section id="prologue" className="relative scroll-mt-28 sm:scroll-mt-36 min-h-[85vh] flex flex-col justify-start sm:justify-center">
          <BookOpening
            onEnterAtelier={() => handlePageChange('home')}
            onSelectCourse={handleCourseSelectFromBook}
            setCursorLabel={setCursorLabel}
            setCursorHovered={setCursorHovered}
          />
        </section>

        {/* SECTION 01: HOME & ETHOS */}
        <section id="home" className="relative scroll-mt-28 sm:scroll-mt-36">
          <HomePage
            setActivePage={handlePageChange}
            onOpenBooking={() => handleOpenBooking('Spoken English Mastery')}
            setCursorLabel={setCursorLabel}
            setCursorHovered={setCursorHovered}
          />
        </section>

        {/* SECTION 02: EXPERTISE & CURRICULA */}
        <section id="expertise" className="relative scroll-mt-28 sm:scroll-mt-36">
          <ExpertisePage
            onOpenBooking={(track) => handleOpenBooking(track)}
            setCursorLabel={setCursorLabel}
            setCursorHovered={setCursorHovered}
            onBackgroundShift={(shift) => setBgShiftClass(`mesh-gradient-bg ${shift}`)}
          />
        </section>

        {/* SECTION 03: THE MASTER & CONNECT */}
        <section id="master" className="relative scroll-mt-28 sm:scroll-mt-36">
          <MasterPage
            onOpenBooking={() => handleOpenBooking('Spoken English Mastery')}
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
