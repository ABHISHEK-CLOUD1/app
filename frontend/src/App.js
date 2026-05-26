import React, { useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      raf = requestAnimationFrame(animateRing);
    };

    const onMouseEnterLink = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(2)';
    };
    const onMouseLeaveLink = () => {
      if (ring) ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    raf = requestAnimationFrame(animateRing);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="App">
      {/* Custom Cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Vertical grid lines (eDesign style) */}
      <div className="v-line" style={{ left: '12.5%' }} />
      <div className="v-line" style={{ left: '25%' }} />
      <div className="v-line" style={{ left: '37.5%' }} />
      <div className="v-line" style={{ left: '50%' }} />
      <div className="v-line" style={{ left: '62.5%' }} />
      <div className="v-line" style={{ left: '75%' }} />
      <div className="v-line" style={{ left: '87.5%' }} />

      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
