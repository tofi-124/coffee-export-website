import React, { useState } from 'react';
import ImageLoader from '../components/ImageLoader';
import FormFeedback from '../components/FormFeedback';
import './Wholesale.css';

function Wholesale() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: 'importer',
    volume: '',
    destination: '',
    inquiryType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    type: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.companyName.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Company name is required'
      });
      return false;
    }
    if (!formData.contactName.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Contact name is required'
      });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return false;
    }
    if (!formData.phone.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Phone number is required'
      });
      return false;
    }
    if (!formData.inquiryType) {
      setFormStatus({
        type: 'error',
        message: 'Please select the type of inquiry'
      });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Message is required'
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success response
      setFormStatus({
        type: 'success',
        message: 'Thank you for your inquiry! We will contact you within 24 hours.'
      });
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: 'importer',
        volume: '',
        destination: '',
        inquiryType: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'There was an error submitting your form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error message when user starts typing
    if (formStatus.type === 'error') {
      setFormStatus({ type: '', message: '' });
    }
  };

  return (
    <div className="wholesale-page">
      <section className="wholesale-hero full-width-section">
        <ImageLoader src="/images/process/coffee-processing.jpg" alt="Coffee Processing Facility" />
        <div className="content">
          <h1>Export & Business Inquiries</h1>
          <p>Premium Ethiopian coffee beans for international markets</p>
        </div>
      </section>

      <section className="contact-offices section">
        <div className="container">
          <h2 className="section-title">Our Offices</h2>
          <div className="offices-grid">
            <div className="office-card">
              <h3>Export Office</h3>
              <p><strong>Address:</strong> Bole Road, Airport Area <br />Addis Ababa, Ethiopia</p>
              <p><strong>Phone:</strong> +251 11 667 8901</p>
              <p><strong>Email:</strong> exports@ethiocoffee-export.com</p>
              <p><strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM (EAT)</p>
            </div>
            
            <div className="office-card">
              <h3>North American Office</h3>
              <p><strong>Phone:</strong> +1 (647) 555-1234</p>
              <p><strong>Email:</strong> northamerica@ethiocoffee-export.com</p>
              <p>For clients in USA and Canada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wholesale-intro section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>International Export Services</h2>
              <p>As a licensed Ethiopian Commodity Exchange (ECX) member and authorized exporter, we provide comprehensive export solutions for coffee importers worldwide.</p>
              <ul className="benefits-list">
                <li>Direct container (FCL) and consolidated (LCL) shipments</li>
                <li>Minimum order quantity: 5-40 tons</li>
                <li>Pre-shipment samples available</li>
                <li>Full export documentation support</li>
                <li>Quality certificates and lab reports</li>
                <li>International logistics coordination</li>
                <li>FOB Djibouti and CIF terms available</li>
                <li>Letters of Credit (L/C) accepted</li>
              </ul>
            </div>
            <div className="intro-image">
              <ImageLoader src="/images/products/coffee-beans-roasted.jpg" alt="Export Grade Coffee" />
            </div>
          </div>
        </div>
      </section>

      <section className="quality-standards section">
        <div className="container">
          <h2 className="section-title">Export Standards</h2>
          <div className="standards-grid">
            <div className="standard-card">
              <h3>Quality Standards</h3>
              <p>Specialty Grade: 85+ points, 0-3 defects/300g</p>
              <p>Commercial Grade: ECX standards compliant</p>
            </div>
            <div className="standard-card">
              <h3>Documentation</h3>
              <p>ECX Contract, Certificate of Origin, Phytosanitary Certificate, ICO Certificate of Origin</p>
            </div>
            <div className="standard-card">
              <h3>Packaging Options</h3>
              <p>60kg GrainPro lined jute bags, Vacuum-sealed options available</p>
            </div>
            <div className="standard-card">
              <h3>Export Markets</h3>
              <p>EU, USA, Middle East, Asia Pacific and custom market requirements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wholesale-form section">
        <div className="container">
          <h2 className="section-title">Business Inquiry</h2>
          <p className="section-subtitle">Complete the form below to discuss your requirements</p>
          
          {formStatus.message && (
            <FormFeedback type={formStatus.type} message={formStatus.message} />
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactName">Contact Name *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">Type of Inquiry *</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select an option</option>
                  <option value="exportQuote">Export Quote Request</option>
                  <option value="samples">Sample Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="information">General Information</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="businessType">Business Type *</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="importer">Coffee Importer</option>
                  <option value="roaster">Large Scale Roaster</option>
                  <option value="distributor">Coffee Distributor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="volume">Required Volume</label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option value="">Select Volume</option>
                  <option value="small">Small (1-10 tons)</option>
                  <option value="medium">Medium (10-50 tons)</option>
                  <option value="large">Large (50+ tons)</option>
                  <option value="notSure">Not sure yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="destination">Destination Country</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder="Please specify your requirements, questions, or details about your business needs"
                  disabled={isSubmitting}
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Wholesale;