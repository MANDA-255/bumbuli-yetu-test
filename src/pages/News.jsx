import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

function News() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedNews, setSelectedNews] = useState(null);

  const news = [
    {
      title: 'New Community Center Opening',
      date: '2024-02-15',
      excerpt: 'We are excited to announce the opening of our new community center...',
      category: 'Announcements',
      content: 'We are excited to announce the opening of our new community center in Bumbuli. This state-of-the-art facility will serve as a hub for community activities, educational programs, and social gatherings. The center features multiple meeting rooms, a computer lab, and a large multipurpose hall. This project has been made possible through the generous support of our community members and partners. We look forward to seeing this space bring our community closer together and provide valuable resources for all residents.We are excited to announce the opening of our new community center in Bumbuli. This state-of-the-art facility will serve as a hub for community activities, educational programs, and social gatherings. The center features multiple meeting rooms, a computer lab, and a large multipurpose hall. This project has been made possible through the generous support of our community members and partners. We look forward to seeing this space bring our community closer together and provide valuable resources for all residents.'
    },
    {
      title: 'Annual Charity Drive Results',
      date: '2024-02-10',
      excerpt: 'Thanks to your generous support, we raised over $100,000 for local initiatives...',
      category: 'Events',
      content: 'We are thrilled to announce the incredible success of our annual charity drive. Through the overwhelming support of our community, we have raised over $100,000 for local initiatives. These funds will be distributed to various projects including educational scholarships, healthcare services, and infrastructure improvements. The success of this drive demonstrates the strong spirit of giving and unity in our community. We extend our heartfelt gratitude to all who contributed to this remarkable achievement.'
    },
    {
      title: 'Volunteer Recognition Program',
      date: '2024-02-05',
      excerpt: 'Celebrating our dedicated volunteers and their incredible contributions...',
      category: 'Community',
      content: 'Today we launched our new Volunteer Recognition Program to celebrate the outstanding contributions of our community volunteers. These dedicated individuals have given countless hours to various projects and initiatives that have significantly improved life in Bumbuli. The program includes monthly spotlight features, special appreciation events, and an annual awards ceremony. We believe it\'s crucial to acknowledge and celebrate those who selflessly give their time and energy to make our community a better place.'
    }
  ];

  return (
    <div className="py-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-secondary mb-8">Latest News</h1>
        <div ref={ref} className={`space-y-8 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green font-semibold">{item.category}</span>
                  <span className="text-text-light">{item.date}</span>
                </div>
                <h2 className="text-2xl font-semibold text-secondary mb-4">{item.title}</h2>
                <p className="text-text-light mb-4">{item.excerpt}</p>
                <button 
                  onClick={() => setSelectedNews(item)}
                  className="text-primary hover:text-secondary transition-colors"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* News Popup */}
        {selectedNews && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedNews(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-green font-semibold">{selectedNews.category}</span>
                <span className="text-text-light">{selectedNews.date}</span>
              </div>
              <h2 className="text-3xl font-semibold text-secondary mb-6">{selectedNews.title}</h2>
              <p className="text-text-base leading-relaxed">{selectedNews.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default News;