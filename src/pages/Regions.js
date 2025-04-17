import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from '../components/ImageLoader';
import './Regions.css';

const regions = [
  {
    name: 'Yirgacheffe',
    description: 'Grown in the Yirgacheffe woreda (district) of the Gedeo Zone in southern Ethiopia. Renowned for floral and citrus profiles with jasmine-like aroma, sweet citrus notes, and tea-like qualities. Bright acidity with medium/light body and complex flavor layers.',
    image: '/images/products/yirgacheffe-natural.jpg',
    specs: '1,700 - 2,200 meters | Washed, Natural',
    altitude: '1,700 - 2,200 meters',
    processing: 'Washed, Natural',
    flavors: ['Floral', 'Jasmine', 'Citrus', 'Lemon', 'Tea-like'],
    exportDetails: 'Annual Export Capacity: 2,000+ tons'
  },
  {
    name: 'Sidamo (Sidama)',
    description: 'Grown across the Sidama region of southern Ethiopia, this highland area is considered one of coffee\'s birthplaces. Features well-balanced and complex flavor with bright yet balanced acidity and sweet berry and citrus notes. Often has hints of lemon or bergamot with a rich, full body.',
    image: '/images/products/sidamo-washed.jpg',
    specs: '1,500 - 2,200 meters | Washed, Natural',
    altitude: '1,500 - 2,200 meters',
    processing: 'Washed, Natural',
    flavors: ['Citrus', 'Berry', 'Lemon', 'Balanced', 'Clean Finish'],
    exportDetails: 'Annual Export Capacity: 3,000+ tons'
  },
  {
    name: 'Harrar',
    description: 'From the Harar region in Eastern Ethiopia\'s highlands, one of the oldest coffee-producing areas in the world. Known for intense and fruity profiles with distinctive wine-like flavor and notes of blueberry or jammy berry fruit. Features medium acidity with a heavy body and chocolate or "mocha" notes.',
    image: '/images/hero/coffee-plantation.jpg',
    specs: '1,400 - 2,000 meters | Natural',
    altitude: '1,400 - 2,000 meters',
    processing: 'Natural (dry process)',
    flavors: ['Blueberry', 'Wine-like', 'Mocha', 'Spicy', 'Bold'],
    exportDetails: 'Annual Export Capacity: 1,500+ tons'
  },
  {
    name: 'Limu (Limmu)',
    description: 'From the Limu area in western Ethiopia, primarily in the Oromia region. Prized for its well-balanced cup with medium acidity and body and clear wine-like notes. Features pleasantly sweet tones, with a clean cup that includes hints of spice or cocoa and subtle fruitiness.',
    image: '/images/products/coffee-pouring.jpg',
    specs: '1,400 - 2,100 meters | Washed, Natural',
    altitude: '1,400 - 2,100 meters',
    processing: 'Washed (primarily), Natural',
    flavors: ['Sweet', 'Wine-like', 'Spice', 'Cocoa', 'Balanced'],
    exportDetails: 'Annual Export Capacity: 1,200+ tons'
  },
  {
    name: 'Guji',
    description: 'Grown in the Guji Zone of southern Ethiopia, a distinct coffee region with its own identity. Features vibrant and nuanced flavor with smooth, balanced profiles and floral notes with a honey-like sweetness. Offers a beautiful mix of fruit and floral characteristics with silky body and refined acidity.',
    image: '/images/products/coffee-beans-roasted.jpg',
    specs: '1,500 - 2,350 meters | Washed, Natural',
    altitude: '1,500 - 2,350 meters',
    processing: 'Washed, Natural',
    flavors: ['Floral', 'Honey', 'Stone Fruit', 'Berry', 'Silky Body'],
    exportDetails: 'Annual Export Capacity: 800+ tons'
  },
  {
    name: 'Jimma (Djimma)',
    description: 'From the Jimma zone in western Ethiopia around the city of Jimma. When properly processed, especially as washed coffee, it offers smooth flavor with mild acidity and distinct spicy or herbal notes. Features pleasant sweetness, heavier body, and flavors of spice, nuts, woody hints, and mild fruitiness.',
    image: '/images/products/coffee-cherries.jpg',
    specs: '1,300 - 2,100 meters | Washed, Natural',
    altitude: '1,300 - 2,100 meters',
    processing: 'Natural (traditional), Washed (specialty)',
    flavors: ['Spice', 'Herbal', 'Nuts', 'Woody', 'Mild Fruit'],
    exportDetails: 'Annual Export Capacity: 2,500+ tons'
  }
];

function Regions() {
  useEffect(() => {
    // Make initial items visible immediately
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const isVisible = elementTop < window.innerHeight - 100;
      if (isVisible) {
        element.classList.add('visible');
      }
    });

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="regions-page">
      <section className="regions-hero">
        <div className="container">
          <h1>Coffee Growing Regions</h1>
          <p>Ethiopia's Premier Coffee Origins</p>
        </div>
      </section>

      <section className="unique-qualities section">
        <div className="container">
          <h2 className="section-title">What Makes Ethiopian Coffee Unique</h2>
          <div className="qualities-grid">
            <div className="quality-card fade-on-scroll">
              <h3>Birthplace of Coffee</h3>
              <p>Ethiopia is widely celebrated as the birthplace of Coffea arabica. Coffee plants have been growing wild in Ethiopian forests for millennia, with greater natural diversity of coffee genetic material than any other country.</p>
            </div>
            <div className="quality-card fade-on-scroll">
              <h3>Heirloom Varieties</h3>
              <p>Unlike many coffee-producing countries that grow a handful of modern cultivars, Ethiopia has thousands of indigenous varieties of Arabica, often referred to as "heirloom" or "landrace" varieties.</p>
            </div>
            <div className="quality-card fade-on-scroll">
              <h3>Diverse Microclimates</h3>
              <p>Ethiopia's topography and climate are highly diverse, from lush, rainy highlands of Sidama/Yirgacheffe, to drier mountains of Harrar, to tropical forests of Kaffa, each imparting unique characteristics to the coffee.</p>
            </div>
            <div className="quality-card fade-on-scroll">
              <h3>Traditional Cultivation</h3>
              <p>Ethiopian coffee is grown in traditional, sustainable ways – often in garden plots or semi-forest settings, intercropped with other plants, using organic compost as fertilizer. Much of it is effectively organic by default.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="regions-content section">
        <div className="container">
          <h2 className="section-title">Available Growing Regions</h2>
          <p className="section-subtitle">Explore the unique flavors of Ethiopia's diverse coffee regions</p>
          <div className="regions-grid">
            {regions.map((region) => (
              <div key={region.name} className="region-card fade-on-scroll">
                <div className="region-image">
                  <ImageLoader src={region.image} alt={region.name} />
                  <div className="region-overlay">
                    <Link to="/wholesale" className="btn btn-primary">Request Quote</Link>
                  </div>
                </div>
                <div className="region-info">
                  <span className="region-specs">{region.specs}</span>
                  <h3>{region.name}</h3>
                  <p>{region.description}</p>
                  <div className="flavor-tags">
                    {region.flavors.map((flavor) => (
                      <span key={flavor} className="flavor-tag">{flavor}</span>
                    ))}
                  </div>
                  <div className="region-hover">
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

      <section className="processing-methods section">
        <div className="container">
          <h2 className="section-title">Processing Methods</h2>
          <div className="methods-grid">
            <div className="method-card fade-on-scroll">
              <h3>Natural (Dry) Process</h3>
              <p>The traditional Ethiopian process where whole coffee cherries are sun-dried, imparting sweet, fruity, and wine-like characteristics to the beans. This method originated in Ethiopia and is still widely practiced, especially in Harrar and much of the south.</p>
            </div>
            <div className="method-card fade-on-scroll">
              <h3>Washed (Wet) Process</h3>
              <p>Coffee cherries are depulped, fermented, washed in clean water, and then dried on raised beds. This method yields cleaner, brighter flavor profiles and is common in regions like Yirgacheffe, Sidama, and Limu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Import Ethiopian Coffee?</h2>
          <p>Connect with our export team to discuss your requirements</p>
          <Link to="/wholesale" className="btn btn-primary">Get Export Quote</Link>
        </div>
      </section>
    </div>
  );
}

export default Regions;