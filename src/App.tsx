import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Contribua from './components/Contribua';
import AdminPanel from './components/AdminPanel';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={
          <ThemeProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <Header />
              <main>
                <Hero />
                <Projects />
                <Team />
                <Services />
                <Contact />
                <Contribua />
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;