import React from 'react';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="py-20">
      <div className="container">
        <div ref={ref} className={`max-w-4xl mx-auto ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-secondary mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  Bumbuli Constituency Office, Lushoto District, Tanga Region, Tanzania
                </p>
                <p className="flex items-center gap-3">
                  <i className="fas fa-phone text-primary"></i>
                  +255 27 264 0154
                </p>
                <p className="flex items-center gap-3">
                  <i className="fas fa-envelope text-primary"></i>
                  info@bumbuli.go.tz
                </p>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-base mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-base mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-base mb-1">Message</label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;