import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';

function Home() {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [causeRef, causeInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <Parallax speed={-20}>
        <section className="relative h-[600px] flex items-center text-white text-center">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://i.postimg.cc/RZCLLrRY/mambo-viewpoint.jpg')`,
            }}
          ></div>
          <div className="container relative z-20">
            <div className="max-w-3xl mx-auto animate-fadeInUp">
              <h1 className="text-5xl md:text-6xl sd:text-1xl font-bold mb-6">
                Welcome to Bumbuli
              </h1>
              <p className="text-lg mb-8">
                Discover the beauty of our constituency in the heart of the
                Usambara Mountains, where tradition meets progress in the
                Lushoto District of Tanzania.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a href="/about" className="btn btn-primary">
                  Explore Bumbuli
                </a>
                <a href="/contact" className="btn btn-secondary">
                  Connect With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-mountain',
                title: 'Beautiful Landscapes',
                description:
                  'Experience the breathtaking views of the Usambara Mountains and our pristine natural environment.',
              },
              {
                icon: 'fa-leaf',
                title: 'Agricultural Heritage',
                description:
                  'Known for our rich agricultural traditions, producing high-quality tea, vegetables, and fruits.',
              },
              {
                icon: 'fa-users',
                title: 'Vibrant Community',
                description:
                  'Join our warm and welcoming community, rich in Wasambaa culture and traditions.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                <i
                  className={`fas ${feature.icon} text-4xl text-green mb-6`}
                ></i>
                <h3 className="text-xl font-semibold text-green-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-20">
        <div className="container">
          <div
            className={`grid md:grid-cols-2 gap-12 items-center ${
              aboutInView ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            <div>
              <h2 className="section-title">About Bumbuli</h2>
              <p className="section-subtitle">
                A Thriving Constituency in Lushoto District
              </p>
              <p className="mb-8">
                Bumbuli is a dynamic constituency located in the Lushoto
                District of Tanzania's Tanga Region. Nestled in the Western
                Usambara Mountains, we are known for our agricultural
                excellence, rich cultural heritage, and commitment to
                sustainable development.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="lg:text-3xl md:text-2xl font-bold text-green">1,500+</h3>
                  <p>Farmers</p>
                </div>
                <div>
                  <h3 className="lg:text-3xl md:text-2xl font-bold text-green">30+</h3>
                  <p>Villages</p>
                </div>
                <div>
                  <h3 className="lg:text-3xl md:text-2xl font-bold text-green">5+</h3>
                  <p>Tea Factories</p>
                </div>
              </div>
              <a href="/about" className="btn btn-primary">
                Learn More
              </a>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/rmwBBYMZ/mambo-viewpoint.jpg"
                alt="Bumbuli Landscape"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={causeRef} className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Development Initiatives</h2>
            <p className="text-text-light">
              Supporting our community's growth and prosperity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                causeInView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1592323360850-e317605f0526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Agricultural Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-dark mb-4">
                  Agricultural Development
                </h3>
                <div className="bg-gray-200 h-2 rounded-full mb-4">
                  <div className="bg-green h-full w-[70%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm text-text-light mb-4">
                  <span>Progress: 70%</span>
                  <span>Target: 100%</span>
                </div>
                <p className="mb-6">
                  Supporting local farmers with modern agricultural practices
                  and equipment to enhance tea and vegetable production.
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary w-full text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div
              className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                causeInView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Education Initiative"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-dark mb-4">
                  Education Initiative
                </h3>
                <div className="bg-gray-200 h-2 rounded-full mb-4">
                  <div className="bg-green h-full w-[85%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm text-text-light mb-4">
                  <span>Progress: 85%</span>
                  <span>Target: 100%</span>
                </div>
                <p className="mb-6">
                  Improving educational facilities and resources across schools
                  in the Bumbuli constituency.
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary w-full text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div
              className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                causeInView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd59c5bc3f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Infrastructure Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-dark mb-4">
                  Infrastructure Development
                </h3>
                <div className="bg-gray-200 h-2 rounded-full mb-4">
                  <div className="bg-green h-full w-[60%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm text-text-light mb-4">
                  <span>Progress: 60%</span>
                  <span>Target: 100%</span>
                </div>
                <p className="mb-6">
                  Enhancing road networks and public facilities to improve
                  connectivity and living standards.
                </p>
                <a
                  href="/contact"
                  className="btn btn-primary w-full text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="relative py-20 text-white text-center">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.postimg.cc/RZCLLrRY/mambo-viewpoint.jpg')`,
          }}
        ></div>
        <div className="container relative z-20">
          <div
            className={`max-w-3xl mx-auto ${
              ctaInView ? 'animate-scaleIn' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">Visit Bumbuli Today</h2>
            <p className="text-lg mb-8">
              Experience the natural beauty, rich culture, and warm hospitality
              of our community in the Usambara Mountains.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/gallery" className="btn btn-primary">
                View Gallery
              </a>
              <a href="/contact" className="btn btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
