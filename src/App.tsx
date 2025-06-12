import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickySupportLabel from './components/StickySupportLabel';
import PrinterSupportSystem from './components/PrinterSupportSystem';

function HomeContent() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Experts />
      <Testimonials />
      <Contact />
      <Footer />
      <StickySupportLabel />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/printer-support-system" element={<PrinterSupportSystem />} />
      </Routes>
    </Router>
  );
}

export default App;