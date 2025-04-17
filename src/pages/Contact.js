import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    country: '',
    message: '',
    coffeeType: []
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, coffeeType: [...formData.coffeeType, value] });
    } else {
      setFormData({
        ...formData,
        coffeeType: formData.coffeeType.filter((type) => type !== value)
      });
    }
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
      message: '',
      coffeeType: []
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Whether you're a coffee roaster looking to source Ethiopian beans, a distributor interested in partnership, or simply have questions about Ethiopian coffee, we're here to help.
              </p>

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
                        <option value="Importer">Coffee Importer</option>
                        <option value="Distributor">Coffee Distributor</option>
                        <option value="Cafe Owner">Cafe Owner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="country">Country *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Interested in:</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id="specialty"
                          name="coffeeType"
                          value="Specialty"
                          onChange={handleCheckboxChange}
                          checked={formData.coffeeType.includes('Specialty')}
                        />
                        <label htmlFor="specialty">Specialty Coffee</label>
                      </div>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id="commercial"
                          name="coffeeType"
                          value="Commercial"
                          onChange={handleCheckboxChange}
                          checked={formData.coffeeType.includes('Commercial')}
                        />
                        <label htmlFor="commercial">Commercial Grade</label>
                      </div>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id="organic"
                          name="coffeeType"
                          value="Organic"
                          onChange={handleCheckboxChange}
                          checked={formData.coffeeType.includes('Organic')}
                        />
                        <label htmlFor="organic">Organic Certified</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
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
                  <h3>Export Office</h3>
                </div>
                <div className="info-body">
                  <p>
                    <strong>Address:</strong><br />
                    Gudumale Building, Floor 3<br />
                    Bole Road, Jakros Area<br />
                    Addis Ababa, Ethiopia
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    +251 911 234 567
                  </p>
                  <p>
                    <strong>Email:</strong><br />
                    exports@ethiocoffeeimportexport.com
                  </p>
                  <p>
                    <strong>Business Hours:</strong><br />
                    Monday–Friday: 9:00am – 5:30pm<br />
                    Saturday: 9:00am – 1:00pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-header">
                  <h3>Coffee Questions?</h3>
                </div>
                <div className="info-body">
                  <p>Our coffee specialists are available to answer your questions about Ethiopian coffee, processing methods, and export procedures.</p>
                  <p>
                    <strong>WhatsApp:</strong> +251 911 234 567<br />
                    <strong>Skype:</strong> ethiocoffee.export
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125759.82373549152!2d38.68164995612014!3d9.010774465653578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1649673726417!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
