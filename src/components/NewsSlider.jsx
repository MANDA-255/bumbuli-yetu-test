import React, { useState, useEffect } from 'react';

function NewsSlider() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const news = [
    "🌱 New agricultural training program launched for local farmers",
    "📚 Bumbuli schools receive new educational resources",
    "🛣️ Road improvement project begins in central Bumbuli"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === news.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [news.length]);

  return (
    <div className="bg-green text-white py-2 overflow-hidden">
      <div className="container">
        <div className="flex items-center gap-4">
          <span className="font-semibold whitespace-nowrap">Latest News:</span>
          <div className="relative overflow-hidden flex-1">
            {news.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute w-full ${
                  index === currentNewsIndex
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-full opacity-0'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsSlider;