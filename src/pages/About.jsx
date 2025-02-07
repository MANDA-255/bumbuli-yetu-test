import React from 'react';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="py-20">
      <div className="container">
        <div ref={ref} className={`max-w-4xl mx-auto ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-secondary mb-8">About Bumbuli</h1>
          <p className="text-lg mb-8">
            Bumbuli is a vibrant constituency located in the Lushoto District of Tanzania's Tanga Region. 
            Nestled in the beautiful Usambara Mountains, our community is known for its rich agricultural heritage, 
            stunning landscapes, and warm, welcoming people.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Our Location</h2>
              <p>Situated in the Western Usambara Mountains, Bumbuli enjoys a temperate climate perfect for agriculture 
                and is surrounded by lush forests and scenic mountain views. Our location in the Lushoto District 
                makes us an integral part of Tanzania's agricultural heartland.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Our Community</h2>
              <p>Our community is primarily composed of hardworking farmers and small business owners who contribute 
                to the region's agricultural success. We take pride in our cultural heritage and sustainable farming practices.</p>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-secondary mb-4">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Agriculture</h3>
                <p>Known for producing high-quality vegetables, fruits, and tea in the fertile mountain soil.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <p>Home to several primary and secondary schools, focusing on quality education for our youth.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Culture</h3>
                <p>Rich in traditional Wasambaa culture, with vibrant local customs and traditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;