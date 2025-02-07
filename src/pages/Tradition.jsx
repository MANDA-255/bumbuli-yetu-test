import React from 'react';
import { useInView } from 'react-intersection-observer';

function Tradition() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const traditions = [
    {
      title: 'Annual Giving Day',
      description: 'A day dedicated to community service and charitable giving.',
      icon: 'fa-calendar-heart'
    },
    {
      title: 'Youth Leadership Program',
      description: 'Empowering young leaders to make a difference in their communities.',
      icon: 'fa-users'
    },
    {
      title: 'Community Festivals',
      description: 'Celebrating diversity and bringing communities together.',
      icon: 'fa-star'
    }
  ];

  return (
    <div className="py-20">
      <div className="container">
        <div ref={ref} className={`max-w-4xl mx-auto ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-secondary mb-8">Our Traditions</h1>
          <p className="text-lg mb-12">
            Our traditions reflect our commitment to community service and social impact.
            These long-standing practices have helped shape our organization and its values.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <i className={`fas ${tradition.icon} text-4xl text-green mb-4`}></i>
                <h3 className="text-xl font-semibold text-secondary mb-2">{tradition.title}</h3>
                <p className="text-text-light">{tradition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tradition