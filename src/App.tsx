import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ZennArticles from './components/ZennArticles';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <ZennArticles />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;