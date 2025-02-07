import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div className="bg-green-dark py-2 text-sm">
        <div className="container flex justify-between items-center">
          <div className="hidden md:flex gap-5">
            <a href="tel:+255272640154" className="text-white flex items-center gap-2">
              <i className="fas fa-phone"></i> +255 27 264 0154
            </a>
            <a href="mailto:info@bumbuli.go.tz" className="text-white flex items-center gap-2">
              <i className="fas fa-envelope"></i> info@bumbuli.go.tz
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-green-light transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-green-light transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-green-light transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <nav className={`bg-white sticky top-0 z-50 shadow-md transition-all ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="container flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-green-dark">BUMBULI</a>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
          <ul className={`md:flex items-center gap-8 ${isMobileMenuOpen ? 'absolute top-full left-0 right-0 bg-white p-5 shadow-md' : 'hidden'} md:static`}>
            <li><a href="/" className="text-text-base hover:text-green transition-colors">Home</a></li>
            <li><a href="/about" className="text-text-base hover:text-green transition-colors">About</a></li>
            <li><a href="/gallery" className="text-text-base hover:text-green transition-colors">Gallery</a></li>
            <li><a href="/news" className="text-text-base hover:text-green transition-colors">News</a></li>
            <li><a href="/contact" className="text-text-base hover:text-green transition-colors">Contact</a></li>
            <li><a href="/tradition" className="text-text-base hover:text-green transition-colors">Culture</a></li>
            <li><a href="/contact" className="btn btn-primary">Connect With Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar