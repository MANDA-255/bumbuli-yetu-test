import React from 'react';

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
  };

  return (
    <footer className="bg-secondary text-white pt-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">About Bumbuli</h3>
            <p>Located in the Lushoto District of Tanzania, Bumbuli is a vibrant constituency known for its agricultural heritage, beautiful landscapes, and rich cultural traditions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/tradition" className="hover:text-primary transition-colors">Culture</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>Bumbuli, Lushoto District, Tanga Region, Tanzania</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <span>+255 27 264 0154</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>info@bumbuli.go.tz</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="w-full px-4 py-2 rounded-lg text-text-base"
              />
              <button type="submit" className="btn btn-primary w-full">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center border-t border-white/10 py-6">
          <p>&copy; 2024 Bumbuli Constituency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;