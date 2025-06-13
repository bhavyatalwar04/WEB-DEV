import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarField from './components/StarField';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      <StarField />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;