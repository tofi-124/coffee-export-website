import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../components/ImageLoader';
import PageTransition from '../components/PageTransition';
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
    image: '/images/products/yirgacheffe-natural.jpg',
    flavorProfile: ['Floral', 'Citrus', 'Bergamot', 'Stone Fruit']
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
    image: '/images/products/sidamo-washed.jpg',
    flavorProfile: ['Blueberry', 'Dark Chocolate', 'Wine', 'Sweet']
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
    image: '/images/products/coffee-cherries.jpg',
    flavorProfile: ['Floral', 'Tropical Fruit', 'Honey', 'Complex']
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
    image: '/images/products/coffee-beans-roasted.jpg',
    flavorProfile: ['Berry', 'Mocha', 'Spice', 'Exotic']
  },
  {
    id: 5,
    name: 'Limu Classic',
    category: 'Specialty Grade',
    type: 'Washed',
    region: 'Limu',
    cupping: '84-86',
    altitude: '1,400-2,000m',
    certification: ['Fair Trade'],
    cropYear: '2024/25',
    description: 'Balanced profile with subtle wine and spice notes complemented by smooth body and sweet finish.',
    specs: {
      moisture: '10-12%',
      defects: '0-4 full defects/300g',
      screen: '13+',
      processing: 'Eco-washed'
    },
    image: '/images/products/coffee-pouring.jpg',
    flavorProfile: ['Red Wine', 'Spice', 'Chocolate', 'Sweet']
  },
  {
    id: 6,
    name: 'Kaffa Heritage',
    category: 'Specialty Grade',
    type: 'Natural',
    region: 'Kaffa',
    cupping: '85-88',
    altitude: '1,500-2,100m',
    certification: ['Organic'],
    cropYear: '2024/25',
    description: 'Complex herbal and berry character with medium body and bright acidity, highlighting Kaffa’s wild origins.',
    specs: {
      moisture: '10-12%',
      defects: '0-3 full defects/300g',
      screen: '15+',
      processing: 'Traditional natural process'
    },
    image: '/images/products/cupping-session.jpg',
    flavorProfile: ['Herbal', 'Berry', 'Chocolate', 'Bright']
  }
];

function Offerings() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [animateCard, setAnimateCard] = useState(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: Unobserve after visible
        }
      });
    }, { threshold: 0.1 });
    
    // Observe elements directly without setTimeout
    document.querySelectorAll('.fade-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  const handleFilterClick = (filter) => {
    if (activeFilter !== filter) {
      setAnimateCard('filter-change');
      setActiveFilter(filter);
      
      setTimeout(() => {
        setAnimateCard(null);
      }, 600);
    }
  };

  const toggleCoffeeDetails = (coffeeId) => {
    setSelectedCoffee(selectedCoffee === coffeeId ? null : coffeeId);
  };

  const filteredOfferings = activeFilter === 'all' 
    ? offerings 
    : offerings.filter(offering => offering.type.toLowerCase() === activeFilter.toLowerCase());

  return (
    <PageTransition>
      <div className="offerings-page">
        {/* Hero Section */}
        <section className="offerings-hero">
          <div className="hero-background">
            <ImageLoader src="/images/products/coffee-plantation.jpg" alt="Ethiopian Coffee Plantation" />
          </div>
          <div className="container">
            <div className="hero-content">
              <span className="hero-tagline">PREMIUM SELECTIONS</span>
              <h1>Current Coffee Offerings</h1>
              <p>Exceptional Ethiopian specialty coffee available for export</p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <div className="container">
            <div className="section-header fade-on-scroll">
              <h2 className="section-title line-after text-center">Ethiopian Excellence</h2>
              <p className="section-subtitle">Our coffee selections represent the finest that Ethiopia has to offer, carefully selected for exceptional quality and character.</p>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="offerings-content">
          <div className="container">
            <div className="filters fade-on-scroll">
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

            <div className={`offerings-grid ${animateCard ? animateCard : ''}`}>
              {filteredOfferings.map((offering) => (
                <div 
                  key={offering.id} 
                  className={`offering-card fade-on-scroll ${selectedCoffee === offering.id ? 'expanded' : ''}`}
                >
                  <div className="offering-image">
                    <ImageLoader src={offering.image} alt={offering.name} />
                    <div className="offering-region">{offering.region}</div>
                    {offering.certification.length > 0 && (
                      <div className="certification-badges">
                        {offering.certification.map((cert, idx) => (
                          <span key={idx} className="certification-badge">{cert}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="offering-info">
                    <div className="offering-meta">
                      <div className="offering-score">{offering.cupping}<span>SCA</span></div>
                      <div className="offering-specs">
                        <span className="spec-item">{offering.type}</span>
                        <span className="spec-item">{offering.altitude}</span>
                      </div>
                    </div>
                    <h3>{offering.name}</h3>
                    <p className="offering-description">{offering.description}</p>
                    
                    <div className="flavor-profile">
                      <h4>Flavor Profile</h4>
                      <div className="flavor-tags">
                        {offering.flavorProfile.map((flavor, index) => (
                          <span key={index} className="flavor-tag">{flavor}</span>
                        ))}
                      </div>
                    </div>
                    
                    {selectedCoffee === offering.id ? (
                      <>
                        <div className="offering-details">
                          <h4>Specifications</h4>
                          <div className="details-grid">
                            <div className="detail-item">
                              <span className="detail-label">Moisture</span>
                              <span className="detail-value">{offering.specs.moisture}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Defects</span>
                              <span className="detail-value">{offering.specs.defects}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Screen Size</span>
                              <span className="detail-value">{offering.specs.screen}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Processing</span>
                              <span className="detail-value">{offering.specs.processing}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Crop Year</span>
                              <span className="detail-value">{offering.cropYear}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="offering-actions">
                          <Link to="/wholesale" className="btn-primary">
                            Request Export Quote
                          </Link>
                          <button 
                            className="btn-secondary"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCoffeeDetails(offering.id);
                            }}
                          >
                            Show Less
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="offering-actions">
                        <button 
                          className="btn-view-details"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCoffeeDetails(offering.id);
                          }}
                        >
                          View Specifications
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <div className="section-header fade-on-scroll">
              <h2 className="section-title line-after text-center">Export Specifications</h2>
              <p className="section-subtitle">Our commitment to quality extends through every step of the export process</p>
            </div>
            
            <div className="specs-grid">
              <div className="spec-card fade-on-scroll">
                <div className="spec-icon">
                  <i className="fas fa-box"></i>
                </div>
                <h3>Packaging</h3>
                <p>60kg jute bags with GrainPro liners to preserve freshness throughout transit. Vacuum packaging available upon request.</p>
              </div>
              
              <div className="spec-card fade-on-scroll">
                <div className="spec-icon">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h3>Shipping</h3>
                <p>FCL (Full Container Load) and LCL (Less than Container Load) options available from Djibouti port. Airfreight available for smaller quantities.</p>
              </div>
              
              <div className="spec-card fade-on-scroll">
                <div className="spec-icon">
                  <i className="fas fa-file-contract"></i>
                </div>
                <h3>Documentation</h3>
                <p>Full export documentation including Certificate of Origin, Phytosanitary Certificate, ICO Certificate, and Weight Certificate.</p>
              </div>
              
              <div className="spec-card fade-on-scroll">
                <div className="spec-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <h3>Quality Control</h3>
                <p>Each lot cupped multiple times by Q-graders. Pre-shipment samples available upon request. Full cupping reports provided.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Image Gallery Section */}
        <section className="image-gallery-section">
          <div className="container">
            <div className="section-header fade-on-scroll">
              <h2 className="section-title line-after text-center">Processing Excellence</h2>
              <p className="section-subtitle">Our processing facilities combine traditional methods with modern technology to ensure consistent quality</p>
            </div>
            
            <div className="gallery-grid fade-on-scroll">
              <div className="gallery-item large">
                <ImageLoader src="/images/process/coffee-processing.jpg" alt="Coffee Processing" />
                <div className="gallery-caption">
                  <h3>Drying Process</h3>
                  <p>Carefully controlled natural sun-drying on raised beds</p>
                </div>
              </div>
              <div className="gallery-item">
                <ImageLoader src="/images/process/coffee-cupping.jpg" alt="Coffee Cupping" />
                <div className="gallery-caption">
                  <h3>Quality Control</h3>
                  <p>Daily cupping sessions ensure consistent quality</p>
                </div>
              </div>
              <div className="gallery-item">
                <ImageLoader src="/images/process/coffee-packaging.jpg" alt="Coffee Packaging" />
                <div className="gallery-caption">
                  <h3>Export Packaging</h3>
                  <p>GrainPro-lined jute bags preserve coffee freshness</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-background">
            <ImageLoader src="/images/products/coffee-pouring.jpg" alt="Coffee Pouring" />
          </div>
          <div className="cta-overlay"></div>
          <div className="container">
            <div className="cta-content fade-on-scroll">
              <h2>Ready to Source Premium Ethiopian Coffee?</h2>
              <p>Connect with our export specialists to discuss your specific requirements, volume needs, and shipping logistics</p>
              <div className="cta-buttons">
                <Link to="/wholesale" className="btn-primary">Get Export Quote</Link>
                <Link to="/contact" className="btn-secondary">Contact Our Team</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Offerings;