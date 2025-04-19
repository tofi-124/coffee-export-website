import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../components/ImageLoader';
import './Home.css';

const coffeeOfferings = [
  {
    id: 1,
    name: 'Specialty Grade Coffee',
    description: 'Ethiopian coffees with 85+ cupping scores, exceptional flavor complexity, and direct traceability',
    specs: 'Grades 1 & 2 | 85+ SCA points',
    image: 'images/products/coffee-beans-roasted.jpg'
  },
  {
    id: 2,
    name: 'Regional Varieties',
    description: 'Distinct coffees from Ethiopia\'s premier growing regions with unique flavor profiles',
    specs: 'Yirgacheffe | Sidamo | Guji | Harrar',
    image: 'images/products/coffee-cherries.jpg'
  },
  {
    id: 3,
    name: 'Processing Methods',
    description: 'Natural, washed, and honey processed coffees available to suit your specific requirements',
    specs: 'Natural | Washed | Honey | Experimental',
    image: 'images/products/sidamo-washed.jpg'
  }
];

const stats = [
  { number: '35+', label: 'Washing Stations' },
  { number: '1,500+', label: 'Partner Farmers' },
  { number: '12', label: 'Export Markets' },
  { number: '8', label: 'Growing Regions' }
];

const testimonials = [
  {
    quote: "Consistently delivers exceptional quality coffees with a level of traceability that our customers value. A trusted partner for our premium coffee program.",
    author: "James Hoffman",
    company: "Nordic Coffee Roasters",
    location: "Stockholm"
  },
  {
    quote: "Their natural Sidamo has become our bestselling single origin. The export logistics are smooth and professional.",
    author: "Sarah Chen",
    company: "Greenway Coffee Co.",
    location: "Melbourne"
  }
];

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-on-scroll').forEach(el => observer.observe(el));
    
    // Cleanup
    return () => observer.disconnect();
  }, []);

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <ImageLoader src="images/hero/coffee-plantation.jpg" alt="Ethiopian Coffee Plantation" />
        </div>
        <div className="hero-content">
          <h1>Ethiopian Coffee<br />Excellence</h1>
          <p>Premium specialty coffee from the birthplace of Arabica</p>
          <div className="hero-buttons">
            <Link to="/wholesale" className="btn btn-primary">Export Inquiry</Link>
            <Link to="/regions" className="btn btn-outline">Explore Origins</Link>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content fade-on-scroll">
              <h2 className="line-after">Direct Trade with Reliable Supply Chain</h2>
              <p className="lead-text">
                We connect international buyers with Ethiopia's finest coffees, while supporting the communities that grow them.
              </p>
              <p>
                From our beginnings in the fertile highlands of Ethiopia – the very birthplace of coffee – we've grown into a trusted exporter providing premium Ethiopian coffee to specialty roasters worldwide. Our coffees are carefully selected from Ethiopia's diverse growing regions, processed with precision, and exported with complete traceability.
              </p>
              <Link to="/about" className="text-link">Learn our story <i className="fas fa-long-arrow-alt-right"></i></Link>
            </div>
            <div className="story-image fade-on-scroll">
              <div className="image-frame">
                <ImageLoader src="images/products/coffee-plantation.jpg" alt="Coffee Farm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item fade-on-scroll" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coffee Offerings Section */}
      <section className="offerings-section">
        <div className="container">
          <h2 className="section-title line-after text-center">Premium Coffee Selections</h2>
          <p className="section-subtitle">Carefully curated coffees from Ethiopia's finest producing regions</p>
          
          <div className="offerings-grid">
            {coffeeOfferings.map((offering) => (
              <div key={offering.id} className="offering-card fade-on-scroll">
                <div className="offering-image image-zoom">
                  <ImageLoader src={offering.image} alt={offering.name} />
                </div>
                <div className="offering-content">
                  <div className="offering-tag">{offering.specs}</div>
                  <h3>{offering.name}</h3>
                  <p>{offering.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-large">
            <Link to="/wholesale" className="btn btn-primary">Request Export Pricing</Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-item fade-on-scroll">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Quality Excellence</h3>
              <p>Rigorous quality control at every step, with SCA-certified grading and meticulous selection</p>
            </div>
            
            <div className="value-item fade-on-scroll">
              <div className="value-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Full Traceability</h3>
              <p>Complete documentation from farm to export, honoring the regions and farmers behind each coffee</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-light">Trusted by Specialty Roasters</h2>
          
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-slide ${index === activeTestimonial ? 'active' : ''}`}>
                <div className="testimonial-quote">
                  <i className="fas fa-quote-left"></i>
                  <p>{testimonial.quote}</p>
                </div>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-company">{testimonial.company}, {testimonial.location}</p>
                </div>
              </div>
            ))}
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Export Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <h2 className="section-title line-after">Our Export Process</h2>
            <p className="section-subtitle">A transparent journey from farm to your roastery</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step fade-on-scroll">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Sourcing</h3>
                <p>We select only the finest coffees from our partner farms and cooperatives in Ethiopia's premier growing regions.</p>
              </div>
            </div>
            
            <div className="process-step fade-on-scroll">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Processing</h3>
                <p>Each coffee is processed using methods that best highlight its inherent qualities, whether natural, washed, or honey.</p>
              </div>
            </div>
            
            <div className="process-step fade-on-scroll">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Quality Control</h3>
                <p>Our team of Q-graders evaluates each lot for quality, with multiple cupping sessions to ensure consistency.</p>
              </div>
            </div>
            
            <div className="process-step fade-on-scroll">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Export</h3>
                <p>We handle all export logistics, including documentation, certification, and reliable shipping arrangements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <ImageLoader src="images/products/coffee-beans-roasted.jpg" alt="Coffee Beans" />
        </div>
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Source Ethiopian Coffee?</h2>
            <p>Connect with our export specialists to discuss your specific requirements</p>
            <div className="cta-buttons">
              <Link to="/wholesale" className="btn btn-primary">Get Export Quote</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
