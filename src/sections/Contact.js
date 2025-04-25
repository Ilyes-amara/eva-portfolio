import React, { useState, forwardRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const sendEmail = (templateParams, setFormStatus, resetForm) => {
    setFormStatus({ submitting: true, submitted: false, error: false, message: 'Transmitting message to NERV headquarters...' });
    emailjs.send(
      'service_a0uqo1o',
      'template_iraxo9j',
      templateParams,
      'ZvYpzmENcNoVtIEDu'
    )
    .then(() => {
      setFormStatus({ submitting: false, submitted: true, error: false, message: 'Message received. A NERV representative will contact you shortly.' });
      resetForm();
    })
    .catch(() => {
      setFormStatus({ submitting: false, submitted: false, error: true, message: 'Transmission error. Please try again later.' });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS expects these keys to match the template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    sendEmail(templateParams, setFormStatus, () => setFormData({ name: '', email: '', subject: '', message: '' }));
  };
  
  return (
    <section className="contact-section section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="nerv-id">Contact</span>
            Communication Terminal
          </h2>
          <p className="section-subtitle">Get in touch with me</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="nerv-logo-container">
              <div className="nerv-logo-large">Ilyes Amara</div>
              <div className="nerv-slogan">Software Engineer & Web Developer</div>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.8 4.48 4.48 0 0 0-7.6 0 8.38 8.38 0 0 1-1.9-.8 9 9 0 1 0 11.4 0z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email:</span>
                  <a className="contact-link" href="mailto:ilyesamara.me@gmail.com">ilyesamara.me@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4"/><rect x="7" y="2" width="10" height="4" rx="2"/></svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">LinkedIn:</span>
                  <a className="contact-link" href="https://www.linkedin.com/in/ilyes-amara-850852361" target="_blank" rel="noopener noreferrer">ilyes-amara-850852361</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 0 12.63 16 4 4 0 0 0 16 11.37Zm1.5-2.87h.01"/></svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Instagram:</span>
                  <a className="contact-link" href="https://instagram.com/ilyesamara.me" target="_blank" rel="noopener noreferrer">@ilyesamara.me</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 1 0-12 0c0 7 6 13 6 13s6-6 6-13z"/><circle cx="8" cy="8" r="2"/></svg>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location:</span>
                  <span className="contact-link">Algeria</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container nerv-panel">
            <div className="terminal-header">
              <div className="terminal-title">SECURE TRANSMISSION</div>
              <div className="terminal-controls">
                <span className="control"></span>
                <span className="control"></span>
                <span className="control"></span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              <button type="submit" disabled={formStatus.submitting} className="submit-button eva-button">
                {formStatus.submitting ? 'Transmitting...' : 'Send Message'}
                <span className="button-icon">►</span>
              </button>
              {formStatus.message && (
                <div className={`form-status ${formStatus.error ? 'error' : formStatus.submitted ? 'success' : ''}`}>{formStatus.message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <div className="contact-bg-pattern"></div>
    </section>
  );
});

export default Contact;
