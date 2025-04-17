import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    volume: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
        volume: ''
      });

      // Reset submission state after a delay
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Connect with our export team for inquiries, quotes, and information</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-form-section">
          <h2 className="section-title">Business Inquiries</h2>
          <p className="section-subtitle">Fill out the form below to discuss your Ethiopian coffee import requirements.</p>

          <div className="contact-grid">
            <div className="info-items">
              <div className="info-item">
                <h3>Export Office</h3>
                <p><strong>Address:</strong> Bole Road, Airport Area <br />Addis Ababa, Ethiopia</p>
                <p><strong>Phone:</strong> +251 11 667 8901</p>
                <p><strong>Email:</strong> exports@ethiocoffee-export.com</p>
                <p><strong>Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM (EAT)</p>
              </div>
              
              <div className="info-item">
                <h3>North American Office</h3>
                <p><strong>Phone:</strong> +1 (647) 555-1234</p>
                <p><strong>Email:</strong> northamerica@ethiocoffee-export.com</p>
                <p>For clients in USA and Canada</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="companyName">Company Name*</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="inquiryType">Type of Inquiry*</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  <option value="exportQuote">Export Quote Request</option>
                  <option value="samples">Sample Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="information">General Information</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="volume">Annual Volume Interest</label>
                <select
                  id="volume"
                  name="volume"
                  value={formData.volume}
                  onChange={handleChange}
                >
                  <option value="">Select volume</option>
                  <option value="small">Small (1-10 tons)</option>
                  <option value="medium">Medium (10-50 tons)</option>
                  <option value="large">Large (50+ tons)</option>
                  <option value="notSure">Not sure yet</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Please let us know any specific requirements, questions, or details about your business and coffee needs"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${loading ? 'loading' : ''}`} 
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Submit Inquiry'}
              </button>

              {submitted && (
                <div className="success-message">
                  Thank you for your inquiry. We'll respond within 1 business day.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
