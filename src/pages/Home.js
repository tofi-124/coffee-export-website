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
      <section className="hero full-width-section">
        <div className="hero-background parallax" data-speed="0.5">
          <ImageLoader src="/images/hero/coffee-plantation.jpg" alt="Ethiopian Coffee Plantation" />
        </div>
        <div className="hero-content">
          <h1>Bringing Ethiopia's Finest Coffee to the World</h1>
          <p>Quality, Transparency, Sustainability - Direct export of premium Ethiopian coffee from the birthplace of Arabica</p>
          <div className="hero-buttons">
            <Link to="/wholesale" className="btn btn-primary">Request Export Quote</Link>
            <Link to="/regions" className="btn btn-outline">Explore Coffee Origins</Link>
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
