import React, { useState, useEffect, useRef } from 'react';
import ImageLoader from '../components/ImageLoader';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    country: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  // References for scroll animations
  const formRef = useRef(null);
  
  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-on-scroll');
          entry.target.style.setProperty('--scroll-index', entry.target.dataset.index || 0);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe form container
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your server
    // Simulating form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message. We will get back to you shortly.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      country: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-background">
          <ImageLoader src="/images/hero/coffee-plantation.jpg" alt="Ethiopian Coffee Plantation" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-tagline">GET IN TOUCH</span>
            <h1>Contact Us</h1>
            <p>Whether you're a coffee roaster looking to source Ethiopian beans or have questions about our offerings, we're here to help.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title line-after">How Can We Help You?</h2>
            <p className="section-subtitle">
              Our team is ready to answer any questions about Ethiopian coffee, sourcing, and export procedures.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-container" ref={formRef}>
              {formStatus.submitted ? (
                <div className="form-success-message">
                  <p>{formStatus.message}</p>
                  <button 
                    className="btn btn-primary" 
                    onClick={() => setFormStatus({ submitted: false, error: false, message: '' })}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="example@domain.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">Your Role</label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your role</option>
                        <option value="Roaster">Coffee Roaster</option>
                        <option value="Buyer">Coffee Buyer</option>
                        <option value="Importer">Coffee Importer</option>
                        <option value="Cafe Owner">Café Owner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      placeholder="Your country"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="info-card">
                <div className="info-header">
                  <h3>Head Office</h3>
                </div>
                <div className="info-body">
                  <p>
                    <strong>Address:</strong> Bole Road, Business District<br />
                    Addis Ababa, Ethiopia
                  </p>
                  <p>
                    <strong>Phone:</strong> +251 11 234 5678<br />
                    <strong>Email:</strong> info@ethiopiancoffeeexporters.com
                  </p>
                  <p>
                    <strong>Hours:</strong> Monday – Friday: 8:30am – 5:00pm<br />
                    Saturday: 9:00am – 1:00pm
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <h3>Export Inquiries</h3>
                </div>
                <div className="info-body">
                  <p>
                    <strong>Contact:</strong> Alem Bekele, Export Director<br />
                    <strong>Email:</strong> exports@ethiopiancoffeeexporters.com<br />
                    <strong>Phone:</strong> +251 11 234 5680
                  </p>
                  <p>For inquiries about bulk orders, shipping, and logistics.</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-header">
                  <h3>Sample Requests</h3>
                </div>
                <div className="info-body">
                  <p>
                    <strong>Contact:</strong> Sara Haile, Quality Control<br />
                    <strong>Email:</strong> samples@ethiopiancoffeeexporters.com<br />
                    <strong>Phone:</strong> +251 11 234 5681
                  </p>
                  <p>Request samples of our specialty coffee offerings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <iframe 
            title="Ethiopian Coffee Exporters Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5468615015785!2d38.79979601478475!3d9.012854593532141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sBole%20Rd%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1649946825800!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
