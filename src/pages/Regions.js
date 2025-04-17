import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import './Regions.css';

const regionData = [
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    description: 'Renowned for its floral and citrus notes with a distinctive bright acidity, elegant body, and complex flavor profile. Altitude: 1,750-2,200m.',
    flavor: 'Bergamot, Jasmine, Lemon, Peach',
    processing: 'Washed, Natural',
    certifications: 'Organic, Fair Trade',
    image: '/images/products/yirgacheffe-natural.jpg',
    long_description: 'Located in the southern part of Ethiopia, Yirgacheffe is perhaps the most famous coffee region in Ethiopia. The region\'s high altitude (1,750-2,200 meters), rich soil, and ideal climate contribute to the development of the coffee\'s distinctive qualities. When processed using the washed method, Yirgacheffe coffees are known for their clean, bright profile with floral and citrus notes. Natural processed Yirgacheffe offers deep, fruity flavors with wine-like characteristics.'
  },
  {
    id: 'sidamo',
    name: 'Sidamo',
    description: 'Well-balanced coffees with sweet berry notes, medium body, and a clean finish. Known for consistent quality and versatility. Altitude: 1,550-2,200m.',
    flavor: 'Blueberry, Chocolate, Citrus, Stone fruit',
    processing: 'Washed, Natural',
    certifications: 'Organic, Rainforest Alliance',
    image: '/images/products/sidamo-washed.jpg',
    long_description: 'Sidamo (also spelled Sidama) covers a large area in southern Ethiopia. The region produces coffee at elevations between 1,550 and 2,200 meters. Sidamo coffees are known for their balanced profile, offering sweet berry notes (particularly blueberry in natural processed coffees), with medium body and pleasant acidity. The washed coffees from this region tend to have citrus and stone fruit notes with excellent clarity, while natural processed coffees exhibit deeper fruit tones and wine-like characteristics.'
  },
  {
    id: 'guji',
    name: 'Guji',
    description: 'An emerging star region with exceptionally clean and distinctive coffees. Features bright acidity and complex fruity and floral notes. Altitude: 1,850-2,200m.',
    flavor: 'Tropical fruit, Floral, Red berries, Honey',
    processing: 'Washed, Natural, Honey',
    certifications: 'Organic',
    image: '/images/products/coffee-cherries.jpg',
    long_description: 'Once considered part of Sidamo, Guji has established itself as a distinct coffee-producing region with its own unique profile. Coffees from Guji are grown at very high elevations (1,850-2,200 meters) resulting in dense beans with concentrated flavors. The region produces exceptionally clean and distinctive coffees with bright acidity and complex fruity and floral notes. Natural processed Guji coffees are particularly sought after for their intense fruit-forward profiles with notes of tropical fruit, berries, and honey sweetness.'
  },
  {
    id: 'harrar',
    name: 'Harrar',
    description: 'Historic eastern highlands region producing distinctive dry-processed coffees with wine and berry notes, heavy body and intensity. Altitude: 1,500-2,100m.',
    flavor: 'Dry red wine, Blueberry, Chocolate, Spice',
    processing: 'Natural',
    certifications: 'Organic',
    image: '/images/products/coffee-beans-roasted.jpg',
    long_description: 'Harrar is a historic coffee-producing region in eastern Ethiopia. Unlike the southern regions, Harrar coffees are exclusively natural processed due to water limitations. These coffees are known for their distinctive winey quality, intense berry notes (particularly blueberry), heavy body, and good acidity. The unique dry-processing methods used in Harrar, perfected over centuries, contribute to the coffee\'s signature wine and fruit characteristics. These coffees are often described as rustic, intense, and complex.'
  },
  {
    id: 'limu',
    name: 'Limu',
    description: 'Balanced, clean profile with mild acidity, pleasant sweetness and distinctive wine and spice notes. Altitude: 1,400-2,000m.',
    flavor: 'Red wine, Bergamot, Dark chocolate, Spice',
    processing: 'Washed',
    certifications: 'Fair Trade',
    image: '/images/products/coffee-pouring.jpg',
    long_description: 'Limu produces predominantly washed coffees known for their balanced, clean profile. These beans grow at altitudes ranging from 1,400 to 2,000 meters above sea level. Limu coffees typically feature a mild, pleasant acidity with distinctive wine and spice notes balanced by a pleasant sweetness. The body is usually medium, making these coffees versatile for various brewing methods. Limu is often considered one of the more approachable Ethiopian coffees while still maintaining the distinctive Ethiopian character.'
  },
  {
    id: 'kaffa',
    name: 'Kaffa',
    description: 'Often called the original birthplace of coffee, produces complex coffees with medium body, bright acidity and chocolate berry notes. Altitude: 1,500-2,100m.',
    flavor: 'Mixed berries, Molasses, Chocolate, Herbs',
    processing: 'Washed, Natural',
    certifications: 'Organic, Fair Trade',
    image: '/images/products/cupping-session.jpg',
    long_description: 'Kaffa (also spelled Kefa) is often cited as the original birthplace of Arabica coffee, where coffee trees have grown wild for centuries. The region\'s centuries-old forests create a perfect natural environment for coffee cultivation. Kaffa coffees exhibit a complex profile with medium body, bright acidity, and chocolate-berry notes often accompanied by subtle herbal undertones. The wild coffee varieties found in Kaffa\'s forests contribute to the region\'s unique flavor profiles, often described as having a distinctive "forest-like" quality.'
  }
];

function Regions() {
  const [activeRegion, setActiveRegion] = useState('yirgacheffe');

  const handleRegionClick = (regionId) => {
    setActiveRegion(regionId);
    
    // Scroll to details section
    const detailsElement = document.getElementById('region-details');
    if (detailsElement) {
      detailsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedRegion = regionData.find(region => region.id === activeRegion);

  return (
    <div className="regions-page">
      <section className="regions-hero">
        <div className="container">
          <h1>Ethiopian Coffee Regions</h1>
          <p>Discover the diverse origins of Ethiopia's exceptional coffees</p>
        </div>
      </section>

      <section className="regions-intro">
        <div className="container">
          <p className="intro-text">
            Ethiopia, the birthplace of coffee, features diverse growing regions each yielding distinctly different flavor profiles. The country's various microclimates, altitudes, and processing traditions contribute to an unparalleled range of coffee characteristics. Explore our offerings from Ethiopia's primary coffee regions below.
          </p>
        </div>
      </section>

      {/* Visual Region Gallery */}
      <section className="regions-gallery">
        <div className="container">
          <div className="regions-grid">
            {regionData.map(region => (
              <div 
                key={region.id} 
                className={`region-card ${activeRegion === region.id ? 'active' : ''}`}
                onClick={() => handleRegionClick(region.id)}
              >
                <div className="region-image">
                  <ImageLoader src={region.image} alt={`${region.name} Coffee`} />
                  <div className="region-overlay">
                    <h3>{region.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Details Section */}
      <section id="region-details" className="region-details">
        <div className="container">
          <div className="region-content">
            <div className="region-info">
              <h2>{selectedRegion.name}</h2>
              <p className="region-description">{selectedRegion.long_description}</p>
              
              <div className="region-specs">
                <div className="spec-item">
                  <h4>Flavor Notes</h4>
                  <p>{selectedRegion.flavor}</p>
                </div>
                <div className="spec-item">
                  <h4>Processing Methods</h4>
                  <p>{selectedRegion.processing}</p>
                </div>
                <div className="spec-item">
                  <h4>Available Certifications</h4>
                  <p>{selectedRegion.certifications}</p>
                </div>
              </div>
            </div>
            
            <div className="region-image-large">
              <ImageLoader src={selectedRegion.image} alt={`${selectedRegion.name} Coffee Region`} />
            </div>
          </div>
        </div>
      </section>

      <section className="regions-map-section">
        <div className="container">
          <h2>Coffee Growing Regions Map</h2>
          <p className="section-subtitle">Ethiopia's diverse coffee terroirs create unique flavor profiles</p>
          
          <div className="map-container fade-on-scroll">
            <img 
              src="/images/regions/ethiopia-coffee-map.jpg" 
              alt="Ethiopian Coffee Regions Map" 
              onError={(e) => {e.target.src = '/images/products/coffee-plantation.jpg'; e.target.alt = "Coffee Regions Placeholder"}}
            />
            <div className="map-caption">
              <p>Ethiopia's main coffee growing regions highlighted by production areas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to source from these regions?</h2>
          <p>Connect with our export specialists to discuss your specific requirements.</p>
          <div className="cta-buttons">
            <a href="/wholesale" className="btn btn-primary">Request Export Quote</a>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Regions;