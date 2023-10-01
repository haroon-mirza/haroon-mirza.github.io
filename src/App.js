import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const header = document.querySelector('.header');
      if (header) {
        header.style.opacity = Math.min(offset / 100, 1); // Adjust the divisor for faster/slower appearance
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <WelcomeSection />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
