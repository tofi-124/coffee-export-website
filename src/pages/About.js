import React, { useState, useEffect } from 'react';
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>Bringing Ethiopia's Finest Coffee to the World</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="story-section">
            <div className="story-text">
              <h2>From Ethiopian Roots to Global Markets</h2>
              <p>Our journey began in the fertile highlands of Ethiopia – in the very communities where coffee was first discovered. Our company was founded by Ethiopian coffee professionals who grew up among the terraced coffee fields and learned the art of coffee from their parents and grandparents.</p>
              <p>Seeing how beloved Ethiopian coffee was at home, yet how many farmers struggled to reach international buyers, our founders set out to bridge that gap. We established our company with a simple belief: <strong>the world deserves to experience truly great Ethiopian coffee, and Ethiopian farmers deserve a partner who will champion their quality</strong>.</p>
              <p>From a modest start – a single washing station and a small warehouse in Addis Ababa – we have grown into a full-fledged export enterprise connecting Ethiopia's finest coffees with specialty roasters and importers across North America and beyond.</p>
            </div>
            <div className="story-image">
              <ImageLoader src="/images/hero/coffee-plantation.jpg" alt="Ethiopian Coffee Farm" />
            </div>
          </div>

          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>At the heart of our company is a clear mission: <strong>to showcase Ethiopia's exceptional coffees to the world while empowering the communities that grow them</strong>. We pursue this mission through a focus on quality, transparency, and sustainability at every step.</p>
          </div>

          <div className="values-section">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card hover-lift">
                <h3>Quality</h3>
                <p>We are dedicated to delivering only the highest quality Ethiopian coffee to our clients. We selectively source beans that meet strict standards – typically Grade 1 and Grade 2 specialty coffee. We oversee quality from farm level through milling, sorting, and cupping.</p>
              </div>
              <div className="value-card hover-lift">
                <h3>Transparency</h3>
                <p>We believe in building trust through transparency. For us, transparency means traceability – knowing exactly which cooperative, estate, or village a coffee comes from and sharing that information with our buyers. We maintain lot separation and detailed record-keeping.</p>
              </div>
              <div className="value-card hover-lift">
                <h3>Sustainability</h3>
                <p>Sustainability is woven into everything we do. We invest in environmental sustainability by supporting organic farming practices, biodiversity conservation, and training farmers in climate-resilient techniques. We also champion social sustainability through reinvestment in farmer communities.</p>
              </div>
              <div className="value-card hover-lift">
                <h3>Radical Transparency</h3>
                <p>We provide end-to-end visibility on our coffees with rich descriptions of origins, processing methods, and the people behind each lot. We maintain meticulous records to trace any bag of coffee back to the exact harvest and lot.</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-card hover-lift">
              <h3>{isVisible && <CountUp end={15} />}+</h3>
              <p>Years in Export</p>
            </div>
            <div className="stat-card hover-lift">
              <h3>{isVisible && <CountUp end={6500} />}</h3>
              <p>Tons Exported Annually</p>
            </div>
            <div className="stat-card hover-lift">
              <h3>{isVisible && <CountUp end={30} />}+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-card hover-lift">
              <h3>{isVisible && <CountUp end={1000} />}+</h3>
              <p>Partner Farmers</p>
            </div>
          </div>

          <div className="certifications-section">
            <h2>Our Certifications</h2>
            <div className="certifications-grid">
              <div className="certification-card">
                <h3>ECX Licensed</h3>
                <p>Registered member of Ethiopian Commodity Exchange</p>
              </div>
              <div className="certification-card">
                <h3>Fair Trade</h3>
                <p>Fair Trade Certified Exporter</p>
              </div>
              <div className="certification-card">
                <h3>Organic</h3>
                <p>USDA and EU Organic Certified</p>
              </div>
              <div className="certification-card">
                <h3>ISO 9001:2015</h3>
                <p>Quality Management System Certification</p>
              </div>
              <div className="certification-card">
                <h3>Rainforest Alliance</h3>
                <p>Rainforest Alliance Certified</p>
              </div>
            </div>
          </div>

          <div className="export-process-section">
            <h2>Our Export Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Sourcing and Farmer Partnerships</h3>
                  <p>We partner directly with smallholder farmers and cooperatives in major coffee regions. We visit farms during the growing season, providing support on best agricultural practices.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Processing and Milling</h3>
                  <p>We assist or oversee the processing, ensuring meticulous wet processing and careful natural processing methods. After drying, coffee is taken to our dry mill for hulling, cleaning, and grading.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Quality Control and Cupping</h3>
                  <p>Our quality team cups samples from every lot multiple times. Licensed Q-graders evaluate each batch for flavor, aroma, and defects. We prepare sample roasts and send pre-shipment samples to clients.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Export Logistics</h3>
                  <p>We manage all export procedures, including necessary licenses and certificates. We package coffee in bulk bags or 60kg jute sacks, lined with GrainPro for freshness, and coordinate with reliable freight forwarders.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Client Support</h3>
                  <p>We continue to engage with our buyers to ensure the coffee's safe arrival and satisfaction. We schedule cupping sessions with clients and address any concerns immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Our Commitment</h2>
            <p>Our company's focus on quality, transparency, and sustainability is not a mere marketing slogan – it's the foundation of how we operate daily. By holding ourselves to these high standards, we aim to build lasting relationships with discerning coffee buyers and conscientious partners.</p>
            <p>We want our customers to feel as good about doing business with us as they do about brewing our coffee. Whether you're a micro-roaster looking for a standout Yirgacheffe, or a specialty importer seeking a reliable Ethiopian supplier, you can trust that our coffees – and our business practices – represent the very best of Ethiopia.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
