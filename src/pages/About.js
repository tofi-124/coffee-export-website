import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../components/ImageLoader';
import './About.css';

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);

    // Add fade-in animations for all sections
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-on-scroll').forEach(el => sectionObserver.observe(el));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <ImageLoader src="images/products/hero-coffee-farm.jpg" alt="Ethiopian Coffee Farm" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tagline">OUR STORY</span>
            <h1>From Ethiopian Highlands to Your Cup</h1>
            <p>Connecting premium coffee growers with discerning international markets since 2010</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content fade-on-scroll">
              <h2 className="line-after">Our Journey</h2>
              <p className="lead-text">
                Our story began in the fertile highlands of Ethiopia – in the very communities where coffee was first discovered.
              </p>
              <p>
                Founded by Ethiopian coffee professionals who grew up among the terraced coffee fields, we set out to bridge the gap between exceptional coffee producers and international buyers seeking Ethiopia's finest offerings.
              </p>
              <p>
                From a modest start with a single washing station and a small warehouse in Addis Ababa, we've grown into a respected exporter connecting Ethiopia's finest coffees with specialty roasters worldwide. Our focus remains unchanged: <strong>to showcase Ethiopia's exceptional coffees while empowering the communities that grow them</strong>.
              </p>
            </div>
            <div className="intro-image fade-on-scroll">
              <div className="image-frame">
                <ImageLoader src="images/products/coffee-plantation.jpg" alt="Ethiopian Coffee Farm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header fade-on-scroll">
            <h2 className="section-title line-after text-center">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide our operations and relationships</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card fade-on-scroll">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Quality Excellence</h3>
              <p>We meticulously select only the highest quality Ethiopian coffees, typically Grade 1 and Grade 2 specialty beans with 85+ cupping scores. Our quality control extends from farm level through milling, sorting, and multiple cupping sessions.</p>
            </div>
            
            <div className="value-card fade-on-scroll">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Transparent Relationships</h3>
              <p>We believe in building trust through transparency in every transaction. For us, this means full traceability to origin, honest pricing, and open communication with both producers and buyers to create sustainable, long-term partnerships.</p>
            </div>

            <div className="value-card fade-on-scroll">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Environmental Stewardship</h3>
              <p>We promote sustainable farming practices that protect Ethiopia's unique coffee forest ecosystems while supporting biodiversity and ensuring the long-term health of coffee-producing regions for future generations.</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">{isVisible && <CountUp end={15} />}+</div>
              <div className="stat-label">Years in Export</div>
            </div>
            
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">{isVisible && <CountUp end={6500} />}</div>
              <div className="stat-label">Tons Exported Annually</div>
            </div>
            
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">{isVisible && <CountUp end={30} />}+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            
            <div className="stat-item fade-on-scroll">
              <div className="stat-number">{isVisible && <CountUp end={1500} />}+</div>
              <div className="stat-label">Partner Farmers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header fade-on-scroll">
            <h2 className="section-title line-after text-center">Our Export Process</h2>
            <p className="section-subtitle">A commitment to quality at every stage</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step fade-on-scroll">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Sourcing & Partnerships</h3>
                <p>We partner directly with smallholder farmers and cooperatives across Ethiopia's premier coffee regions. Our team regularly visits farms during growing season, providing support on best agricultural practices.</p>
              </div>
            </div>
            
            <div className="process-step fade-on-scroll">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Processing</h3>
                <p>We oversee meticulous processing at our washing stations, ensuring precision in both washed and natural methods. Our close supervision maintains lot separation and quality standards throughout the crucial drying period.</p>
              </div>
            </div>
            
            <div className="process-step fade-on-scroll">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Quality Control</h3>
                <p>Our Q-graders evaluate every lot multiple times, assessing beans for flavor profiles, consistency, and defects. Sample roasts are prepared and pre-shipment samples are sent to clients for approval.</p>
              </div>
            </div>
            
            <div className="process-step fade-on-scroll">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Export Logistics</h3>
                <p>We handle all export procedures, including documentation and certifications. Coffees are packaged in GrainPro-lined jute bags to preserve freshness, and we coordinate with reliable freight forwarders for timely delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section with modern layout */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-header fade-on-scroll">
            <h2 className="section-title line-after text-center">Our Certifications</h2>
            <p className="section-subtitle">Meeting international standards for quality and sustainability</p>
          </div>
          
          <div className="certifications-flex">
            <div className="certification-item fade-on-scroll">
              <div className="certification-icon">
                <span>ECX</span>
              </div>
              <h3>ECX Licensed Exporter</h3>
              <p>Registered member of Ethiopian Commodity Exchange</p>
            </div>
            
            <div className="certification-item fade-on-scroll">
              <div className="certification-icon">
                <span>FT</span>
              </div>
              <h3>Fair Trade Certified</h3>
              <p>Meeting social, economic, and environmental standards</p>
            </div>
            
            <div className="certification-item fade-on-scroll">
              <div className="certification-icon">
                <span>ORG</span>
              </div>
              <h3>USDA & EU Organic</h3>
              <p>Certified organic production and processing methods</p>
            </div>
            
            <div className="certification-item fade-on-scroll">
              <div className="certification-icon">
                <span>RA</span>
              </div>
              <h3>Rainforest Alliance</h3>
              <p>Promoting biodiversity conservation and sustainable livelihoods</p>
            </div>
            
            <div className="certification-item fade-on-scroll">
              <div className="certification-icon">
                <span>ISO</span>
              </div>
              <h3>ISO 9001:2015</h3>
              <p>Quality Management System Certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title text-light">Trusted by Specialty Roasters</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card fade-on-scroll">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
                <p>Their Yirgacheffe lots consistently showcase the floral and citrus notes we look for in our single-origin offerings. Ethio Coffee's commitment to quality is evident in every shipment.</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">Oakwood Coffee Roasters</p>
                <p className="author-company">Toronto, Canada</p>
              </div>
            </div>
            
            <div className="testimonial-card fade-on-scroll">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
                <p>Working directly with Ethio Coffee has transformed our Ethiopian offerings. The traceability they provide adds tremendous value to our brand story, and the coffee quality speaks for itself.</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">Archer's Specialty Coffee</p>
                <p className="author-company">Melbourne, Australia</p>
              </div>
            </div>
            
            <div className="testimonial-card fade-on-scroll">
              <div className="testimonial-quote">
                <i className="fas fa-quote-left"></i>
                <p>The natural processed Sidamo we source through Ethio Coffee has become our fastest-selling single origin. Their export logistics are smooth and professional, making them a reliable partner.</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">Greenway Coffee Co.</p>
                <p className="author-company">Berlin, Germany</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <div className="section-header fade-on-scroll">
            <h2 className="section-title line-after text-center">Awards & Recognition</h2>
            <p className="section-subtitle">Our commitment to quality has earned recognition across the industry</p>
          </div>
          
          <div className="awards-grid">
            <div className="award-item fade-on-scroll">
              <div className="award-year">2024</div>
              <h3>Excellence in Ethiopian Coffee Exports</h3>
              <p>Ethiopian Coffee Exporters Association</p>
            </div>
            
            <div className="award-item fade-on-scroll">
              <div className="award-year">2023</div>
              <h3>Sustainability Initiative Award</h3>
              <p>Specialty Coffee Association</p>
            </div>
            
            <div className="award-item fade-on-scroll">
              <div className="award-year">2022</div>
              <h3>Best Ethiopian Specialty Coffee Exporter</h3>
              <p>African Fine Coffees Association</p>
            </div>
            
            <div className="award-item fade-on-scroll">
              <div className="award-year">2021</div>
              <h3>Cup of Excellence - Ethiopia</h3>
              <p>Alliance for Coffee Excellence</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <ImageLoader src="images/products/coffee-cherries.jpg" alt="Coffee Cherries" />
        </div>
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="cta-content">
            <h2>Partner with Us</h2>
            <p>Connect with our team to discuss your Ethiopian coffee sourcing needs</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
