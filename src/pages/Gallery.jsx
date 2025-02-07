import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Gallery() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
      title: 'Community Support',
      description: 'Volunteers helping local communities',
    },
    {
      url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
      title: 'Education Initiative',
      description: 'Providing education resources',
    },
    {
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d',
      title: 'Clean Water Project',
      description: 'Ensuring access to clean water',
    },
    {
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d',
      title: 'Clean Water Project',
      description: 'Ensuring access to clean water',
    },
    {
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d',
      title: 'Clean Water Project',
      description: 'Ensuring access to clean water',
    },
    {
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d',
      title: 'Clean Water Project',
      description: 'Ensuring access to clean water',
    },
  ];

  return (
    <div className="py-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-secondary mb-8">Our Gallery</h1>
        <div
          ref={ref}
          className={`grid md:grid-cols-3 sm:cols-1 gap-8 ${
            inView ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {image.title}
                </h3>
                <p className="text-text-light">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Popup */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
