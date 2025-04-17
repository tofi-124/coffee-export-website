import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../components/ImageLoader';
import './Offerings.css';

const offerings = [
  {
    id: 1,
    name: 'Yirgacheffe Premium',
    category: 'Specialty Grade',
    type: 'Washed',
    region: 'Yirgacheffe',
    cupping: '86-88',
    altitude: '1,750-2,200m',
    certification: ['Organic', 'Fair Trade'],
    cropYear: '2024/25',
    description: 'Distinct floral and citrus notes with elegant acidity and complex flavor profile. Jasmine, bergamot, and stone fruit notes.',
    specs: {
      moisture: '10-12%',
      defects: '0-3 full defects/300g',
      screen: '15+',
      processing: 'Eco-washed, 12-24hr fermentation'
    },
    image: '/images/products/yirgacheffe-natural.jpg'
  },
  {
    id: 2,
    name: 'Sidamo Natural',
    category: 'Specialty Grade',
    type: 'Natural',
    region: 'Sidamo',
    cupping: '85-87',
    altitude: '1,850-2,100m',
    certification: ['Rainforest Alliance'],
    cropYear: '2024/25',
    description: 'Rich body with distinct blueberry and dark chocolate notes. Wine-like acidity with a sweet finish.',
    specs: {
      moisture: '10-12%',
      defects: '0-3 full defects/300g',
      screen: '15+',
      processing: 'Natural sun-dried, 15-21 days'
    },
    image: '/images/products/sidamo-washed.jpg'
  },
  {
    id: 3,
    name: 'Guji Heirloom',
    category: 'Specialty Grade',
    type: 'Natural',
    region: 'Guji',
    cupping: '87-89',
    altitude: '1,900-2,300m',
    certification: ['Organic', 'Fair Trade'],
    cropYear: '2024/25',
    description: 'Complex and vibrant with pronounced florals, tropical fruit notes, and honey sweetness.',
    specs: {
      moisture: '10-12%',
      defects: '0-2 full defects/300g',
      screen: '16+',
      processing: 'Natural sun-dried, 18-21 days'
    },
    image: '/images/products/coffee-cherries.jpg'
  },
  {
    id: 4,
    name: 'Harrar Wild Forest',
    category: 'Specialty Grade',
    type: 'Natural',
    region: 'Harrar',
    cupping: '85-87',
    altitude: '1,750-2,100m',
    certification: ['Wild Harvested'],
    cropYear: '2024/25',
    description: 'Wild and exotic profile with distinctive berry notes, rich mocha, and complex spice undertones.',
    specs: {
      moisture: '10-12%',
      defects: '0-3 full defects/300g',
      screen: '15+',
      processing: 'Traditional natural process'
    },
    image: '/images/products/coffee-beans-roasted.jpg'
  }
];

function Offerings() {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const fadeElements = document.querySelectorAll('.fade-on-scroll:not(.visible)');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const isVisible = elementTop < window.innerHeight - 100;
      if (isVisible) {
        element.classList.add('visible');
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredOfferings = activeFilter === 'all' 
    ? offerings 
    : offerings.filter(offering => offering.type.toLowerCase() === activeFilter);

  return (
    <div className="offerings-page">
      <section className="offerings-hero">
        <div className="container">
          <h1>Current Offerings</h1>
          <p>Premium Ethiopian Coffee Available for Export</p>
        </div>
      </section>

      <section className="offerings-content section">
        <div className="container">
          <h2 className="section-title">Available Coffee</h2>
          <p className="section-subtitle">Premium Ethiopian Coffee For Export</p>
          
          <div className="filters">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Origins
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'washed' ? 'active' : ''}`}
              onClick={() => handleFilterClick('washed')}
            >
              Washed Process
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'natural' ? 'active' : ''}`}
              onClick={() => handleFilterClick('natural')}
            >
              Natural Process
            </button>
          </div>

          <div className="offerings-grid">
            {filteredOfferings.map((offering, index) => (
              <div key={offering.id} className="offering-card fade-on-scroll">
                <div className="offering-image">
                  <ImageLoader src={offering.image} alt={offering.name} />
                  <div className="offering-overlay">
                    <Link to="/wholesale" className="btn btn-primary">Request Quote</Link>
                  </div>
                </div>
                <div className="offering-info">
                  <span className="offering-specs">
                    {offering.altitude} | {offering.type} | Score: {offering.cupping}
                  </span>
                  <h3>{offering.name}</h3>
                  <p>{offering.description}</p>
                  <div className="certification-tags">
                    {offering.certification.map(cert => (
                      <span key={cert} className="cert-tag">{cert}</span>
                    ))}
                  </div>
                  <div className="offering-hover">
                    <Link to="/wholesale" className="view-details">
                      View Export Details
                      <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="export-cta">
        <div className="container">
          <h2>Ready to Import?</h2>
          <p>Contact our export team to discuss volume requirements and shipping terms</p>
          <Link to="/wholesale" className="btn btn-primary">Get Export Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default Offerings;