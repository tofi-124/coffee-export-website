import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../components/ImageLoader';
import './Offerings.css';

const regionData = [
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    description: 'Renowned for its floral and citrus notes with a distinctive bright acidity, elegant body, and complex flavor profile. Altitude: 1,750-2,200m.',
    flavor: 'Bergamot, Jasmine, Lemon, Peach',
    processing: 'Washed, Natural',
    certifications: 'Organic, Fair Trade',
    image: '/images/products/yirgacheffe-natural.jpg',
    long_description: 'Located in the southern part of Ethiopia, Yirgacheffe is perhaps the most famous coffee offering in Ethiopia. The offering\'s high altitude (1,750-2,200 meters), rich soil, and ideal climate contribute to the development of the coffee\'s distinctive qualities. When processed using the washed method, Yirgacheffe coffees are known for their clean, bright profile with floral and citrus notes. Natural processed Yirgacheffe offers deep, fruity flavors with wine-like characteristics.',
    altitude: '1,750-2,200m',
    harvest: 'October - January',
    soil: 'Red-brown fertile loam with volcanic origins'
  },
  {
    id: 'sidamo',
    name: 'Sidamo',
    description: 'Well-balanced coffees with sweet berry notes, medium body, and a clean finish. Known for consistent quality and versatility. Altitude: 1,550-2,200m.',
    flavor: 'Blueberry, Chocolate, Citrus, Stone fruit',
    processing: 'Washed, Natural',
    certifications: 'Organic, Rainforest Alliance',
    image: '/images/products/sidamo-washed.jpg',
    long_description: 'Sidamo (also spelled Sidama) covers a large area in southern Ethiopia. The offering produces coffee at elevations between 1,550 and 2,200 meters. Sidamo coffees are known for their balanced profile, offering sweet berry notes (particularly blueberry in natural processed coffees), with medium body and pleasant acidity. The washed coffees from this offering tend to have citrus and stone fruit notes with excellent clarity, while natural processed coffees exhibit deeper fruit tones and wine-like characteristics.',
    altitude: '1,550-2,200m',
    harvest: 'October - January',
    soil: 'Red to brownish fertile clay loam'
  },
  {
    id: 'guji',
    name: 'Guji',
    description: 'An emerging star offering with exceptionally clean and distinctive coffees. Features bright acidity and complex fruity and floral notes. Altitude: 1,850-2,200m.',
    flavor: 'Tropical fruit, Floral, Red berries, Honey',
    processing: 'Washed, Natural, Honey',
    certifications: 'Organic',
    image: '/images/products/coffee-cherries.jpg',
    long_description: 'Once considered part of Sidamo, Guji has established itself as a distinct coffee-producing offering with its own unique profile. Coffees from Guji are grown at very high elevations (1,850-2,200 meters) resulting in dense beans with concentrated flavors. The offering produces exceptionally clean and distinctive coffees with bright acidity and complex fruity and floral notes. Natural processed Guji coffees are particularly sought after for their intense fruit-forward profiles with notes of tropical fruit, berries, and honey sweetness.',
    altitude: '1,850-2,200m',
    harvest: 'November - January',
    soil: 'Fertile, red volcanic loam'
  },
  {
    id: 'harrar',
    name: 'Harrar',
    description: 'Historic eastern highlands offering producing distinctive dry-processed coffees with wine and berry notes, heavy body and intensity. Altitude: 1,500-2,100m.',
    flavor: 'Dry red wine, Blueberry, Chocolate, Spice',
    processing: 'Natural',
    certifications: 'Organic',
    image: '/images/products/coffee-beans-roasted.jpg',
    long_description: 'Harrar is a historic coffee-producing offering in eastern Ethiopia. Unlike the southern offerings, Harrar coffees are exclusively natural processed due to water limitations. These coffees are known for their distinctive winey quality, intense berry notes (particularly blueberry), heavy body, and good acidity. The unique dry-processing methods used in Harrar, perfected over centuries, contribute to the coffee\'s signature wine and fruit characteristics. These coffees are often described as rustic, intense, and complex.',
    altitude: '1,500-2,100m',
    harvest: 'October - February',
    soil: 'Rocky, sandy, dry soil'
  },
  {
    id: 'limu',
    name: 'Limu',
    description: 'Balanced, clean profile with mild acidity, pleasant sweetness and distinctive wine and spice notes. Altitude: 1,400-2,000m.',
    flavor: 'Red wine, Bergamot, Dark chocolate, Spice',
    processing: 'Washed',
    certifications: 'Fair Trade',
    image: '/images/products/coffee-pouring.jpg',
    long_description: 'Limu produces predominantly washed coffees known for their balanced, clean profile. These beans grow at altitudes ranging from 1,400 to 2,000 meters above sea level. Limu coffees typically feature a mild, pleasant acidity with distinctive wine and spice notes balanced by a pleasant sweetness. The body is usually medium, making these coffees versatile for various brewing methods. Limu is often considered one of the more approachable Ethiopian coffees while still maintaining the distinctive Ethiopian character.',
    altitude: '1,400-2,000m',
    harvest: 'September - December',
    soil: 'Red-brown clay loam'
  },
  {
    id: 'kaffa',
    name: 'Kaffa',
    description: 'Often called the original birthplace of coffee, produces complex coffees with medium body, bright acidity and chocolate berry notes. Altitude: 1,500-2,100m.',
    flavor: 'Mixed berries, Molasses, Chocolate, Herbs',
    processing: 'Washed, Natural',
    certifications: 'Organic, Fair Trade',
    image: '/images/products/cupping-session.jpg',
    long_description: 'Kaffa (also spelled Kefa) is often cited as the original birthplace of Arabica coffee, where coffee trees have grown wild for centuries. The offering\'s centuries-old forests create a perfect natural environment for coffee cultivation. Kaffa coffees exhibit a complex profile with medium body, bright acidity, and chocolate-berry notes often accompanied by subtle herbal undertones. The wild coffee varieties found in Kaffa\'s forests contribute to the offering\'s unique flavor profiles, often described as having a distinctive "forest-like" quality.',
    altitude: '1,500-2,100m',
    harvest: 'October - January',
    soil: 'Dark fertile forest soil with high organic content'
  }
];

function Offerings() {
  const [activeRegion, setActiveRegion] = useState('yirgacheffe');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    // Check for mobile screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-on-scroll').forEach(el => observer.observe(el));
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRegionClick = (regionId) => {
    setActiveRegion(regionId);
    
    // Immediate scroll on mobile to avoid double-click issue
    if (isMobile) {
      const detailsElement = document.getElementById('offering-details');
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    
    // Use setTimeout for desktop to ensure state update completes before scrolling
    setTimeout(() => {
      const detailsElement = document.getElementById('offering-details');
      if (detailsElement) {
        detailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  };

  const selectedRegion = regionData.find(offering => offering.id === activeRegion);

  return (
    <div className="offerings-page">
      {/* Hero Section */}
      <section className="offerings-hero">
        <div className="hero-background">
          <ImageLoader src="/images/products/coffee-plantation.jpg" alt="Ethiopian Coffee Plantation" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tagline">TERROIR & TRADITION</span>
            <h1>Ethiopian Coffee Regions</h1>
            <p>Discover the diverse origins and distinctive profiles of the world's finest coffee terroirs</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section fade-on-scroll">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title line-after text-center">The Birthplace of Coffee</h2>
            <p className="intro-text">
              Ethiopia, the ancestral home of Arabica coffee, offers an unparalleled diversity of flavor profiles thanks to its varied microclimates, altitudes, and processing traditions. Unlike coffees from other origins, Ethiopian beans are still largely produced from indigenous heirloom varieties growing in their native environment, resulting in unmatched complexity and distinction. Each offering imparts its own unique characteristics to the coffee, creating a rich tapestry of flavors that has captivated coffee connoisseurs worldwide for centuries.
            </p>
          </div>
        </div>
      </section>

      {/* Regions Gallery */}
      <section className="offerings-gallery">
        <div className="container">
          <div className="offerings-grid">
            {regionData.map(offering => (
              <div 
                key={offering.id} 
                className={`offering-card fade-on-scroll ${activeRegion === offering.id ? 'active' : ''}`}
                onClick={() => handleRegionClick(offering.id)}
                onTouchStart={() => isMobile && handleRegionClick(offering.id)}
              >
                <div className="offering-image">
                  <ImageLoader src={offering.image} alt={`${offering.name} Coffee`} />
                  <div className="offering-image-name">{offering.name}</div>
                </div>
                <div className="offering-overlay">
                  <div className="offering-preview-content">
                    <h3>{offering.name}</h3>
                    <div className="offering-badge">{offering.altitude}</div>
                    <p className="offering-preview-desc">{offering.description}</p>
                    <button className="offering-view-btn">
                      {activeRegion === offering.id ? 'Currently Viewing' : 'View Region'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Details Section */}
      <section id="offering-details" className="offering-details">
        <div className="container">
          <div className="offering-content fade-on-scroll">
            <div className="offering-info">
              <div className="offering-title-area">
                <span className="offering-subtitle">REGION PROFILE</span>
                <h2>{selectedRegion.name}</h2>
                <div className="offering-divider"></div>
              </div>
              
              <p className="offering-description">{selectedRegion.long_description}</p>
              
              <div className="offering-specs">
                <div className="spec-grid">
                  <div className="spec-item">
                    <h4>Flavor Notes</h4>
                    <p>{selectedRegion.flavor}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Processing Methods</h4>
                    <p>{selectedRegion.processing}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Altitude</h4>
                    <p>{selectedRegion.altitude}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Harvest Period</h4>
                    <p>{selectedRegion.harvest}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Soil Type</h4>
                    <p>{selectedRegion.soil}</p>
                  </div>
                  <div className="spec-item">
                    <h4>Available Certifications</h4>
                    <p>{selectedRegion.certifications}</p>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="offering-image-large">
              <ImageLoader src={selectedRegion.image} alt={`${selectedRegion.name} Coffee Region`} />
              <div className="offering-image-caption">
                <p>{selectedRegion.name} coffee offering, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="offerings-map-section">
        <div className="container">
          <div className="section-header fade-on-scroll">
            <h2 className="section-title line-after text-center">Geography of Flavor</h2>
            <p className="section-subtitle">Ethiopia's varied landscapes and climates create distinct coffee characteristics across offerings</p>
          </div>
          
          <div className="map-container fade-on-scroll">
            <ImageLoader 
              src="/images/products/coffee-plantation.jpg" 
              alt="Ethiopian Coffee Regions Map" 
            />
            <div className="map-caption">
              <p>Ethiopia's main coffee growing offerings span diverse altitudes and climates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card fade-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-mountain"></i>
              </div>
              <h3>High Altitude Growing</h3>
              <p>Ethiopia's coffee grows at elevations between 1,400-2,200 meters, resulting in dense, flavor-rich beans with complex acidity.</p>
            </div>
            
            <div className="feature-card fade-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Indigenous Varieties</h3>
              <p>Over 10,000 heirloom coffee varieties exist across Ethiopia, offering an unmatched genetic diversity not found anywhere else.</p>
            </div>
            
            <div className="feature-card fade-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-cloud-sun"></i>
              </div>
              <h3>Perfect Microclimate</h3>
              <p>Consistent temperatures, seasonal rainfall, and optimal sun exposure create ideal coffee growing conditions.</p>
            </div>
            
            <div className="feature-card fade-on-scroll">
              <div className="feature-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Traditional Methods</h3>
              <p>Centuries of coffee farming expertise, with traditional processing methods passed down through generations.</p>
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
          <div className="cta-content">
            <h2>Ready to Source Ethiopian Coffee?</h2>
            <p>Connect with our export specialists to discuss your specific requirements, volume needs, and shipping logistics</p>
            <div className="cta-buttons">
              <Link to="/wholesale" className="btn btn-primary">Request Export Quote</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offerings;