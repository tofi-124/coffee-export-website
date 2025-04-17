import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../components/ImageLoader';
import './Home.css';

const exportGrades = [
  {
    name: 'Premium Specialty Coffee',
    description: 'High-grade specialty coffees (Grade 1 & 2) with exceptional flavor profiles, direct from partner farms',
    specs: 'Screen size 15+, 85+ cupping points, 0-3 defects',
    image: '/images/products/coffee-beans-roasted.jpg'
  },
  {
    name: 'Single Origin Varieties',
    description: 'Traceable coffee from specific regions like Yirgacheffe, Sidamo, Harrar, Guji and more',
    specs: 'Full traceability and origin documentation',
    image: '/images/products/coffee-cherries.jpg'
  },
  {
    name: 'Sustainable Partnerships',
    description: 'Long-term relationships with quality-focused roasters through transparent and ethical sourcing',
    specs: 'Customizable specifications and certifications',
    image: '/images/products/sidamo-washed.jpg'
  }
];

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });

      const fadeElements = document.querySelectorAll('.fade-on-scroll');
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* New elegant intro section */}
      <section className="intro-section">
        <div className="intro-background parallax" data-speed="0.3">
          <ImageLoader src="/images/hero/coffee-plantation.jpg" alt="Ethiopian Coffee Farm" />
        </div>
        <div className="intro-content">
          <div className="intro-text-container">
            <h1 className="intro-title">Elevating Ethiopian Coffee</h1>
            <p className="intro-subtitle">Direct trade with reliable supply chain</p>
          </div>
        </div>
      </section>
      
      {/* Minimal About Intro Section */}
      <section className="about-intro-section section">
        <div className="container">
          <div className="about-intro-content">
            <p className="intro-paragraph">
              It all started with a passion for Ethiopian coffee and sustainable farming. Now Ethio Coffee Import and Export is a major coffee exporting company in Ethiopia, exporting premium green coffee directly from our partner farms and affiliated farmers. We export various coffee from all major growing regions, from conventional to specialty with years of experience in the coffee business.
            </p>
            <Link to="/about" className="btn-text-link">Get To Know Us More <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      <section className="export-grades section">
        <div className="container">
          <h2 className="section-title">Available For Export</h2>
          <p className="section-subtitle">Premium Ethiopian Coffee</p>
          <div className="grades-grid">
            {exportGrades.map((grade) => (
              <div key={grade.name} className="grade-card fade-on-scroll">
                <div className="grade-image">
                  <ImageLoader src={grade.image} alt={grade.name} />
                  <div className="grade-overlay">
                    <Link to="/wholesale" className="btn btn-primary">Request Quote</Link>
                  </div>
                </div>
                <div className="grade-info">
                  <span className="grade-specs">{grade.specs}</span>
                  <h3>{grade.name}</h3>
                  <p>{grade.description}</p>
                  <div className="grade-hover">
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

      <section className="features-grid section">
        <div className="container">
          <div className="features">
            <div className="feature fade-on-scroll">
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control at every stage, from cherry selection to export</p>
            </div>
            <div className="feature fade-on-scroll">
              <h3>Transparency</h3>
              <p>Full traceability from farm to cup with detailed documentation</p>
            </div>
            <div className="feature fade-on-scroll">
              <h3>Sustainability</h3>
              <p>Supporting sustainable farming practices and farmer communities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="feature-grid">
            <div className="feature fade-on-scroll">
              <h3>Quality</h3>
              <p>Specialty grade coffee with cupping scores of 85+ points</p>
            </div>
            <div className="feature fade-on-scroll">
              <h3>Traceability</h3>
              <p>Full traceability from farm to cup with detailed documentation</p>
            </div>
            <div className="feature fade-on-scroll">
              <h3>Sustainability</h3>
              <p>Supporting sustainable farming practices and farmer communities</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section section">
        <div className="container">
          <h2 className="section-title">Our Impact by Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">35+</div>
              <div className="stat-label">Washing Stations</div>
            </div>
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">1,500+</div>
              <div className="stat-label">Partner Farmers</div>
            </div>
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">8</div>
              <div className="stat-label">Coffee Regions</div>
            </div>
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">6</div>
              <div className="stat-label">Processing Mills</div>
            </div>
          </div>
        </div>
      </section>

      {/* New Video Section */}
      <section className="video-section section light-section">
        <div className="container">
          <h2 className="section-title">Experience Our Coffee Journey</h2>
          <p className="section-subtitle">From Ethiopia's highlands to your roastery</p>
          
          <div className="video-container fade-on-scroll">
            {/* Replace with your actual video embed code or use a video player component */}
            <div className="video-placeholder">
              <div className="placeholder-overlay">
                <button className="play-button">
                  <i className="fas fa-play"></i>
                </button>
                <p>Our Coffee Story</p>
              </div>
              <ImageLoader src="/images/products/coffee-plantation.jpg" alt="Coffee Plantation Video Thumbnail" />
            </div>
            {/* When implementing the actual video, you can use:
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
              title="Ethiopian Coffee Journey" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe> */}
          </div>
        </div>
      </section>

      <section className="cta-section full-width-section">
        <ImageLoader src="/images/products/coffee-beans-roasted.jpg" alt="Export Quality Coffee" />
        <div className="content">
          <h2>Ready to Import Ethiopian Coffee?</h2>
          <p>Connect with our export team to discuss your requirements</p>
          <Link to="/wholesale" className="btn btn-primary">Get Export Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
