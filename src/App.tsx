import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen printer-bug-theme">
      <Header />
      <Hero />
      <Services />
      <About />
      <Experts />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;