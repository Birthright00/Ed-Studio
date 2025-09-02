import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'tang.edward.business@gmail.com'
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Header */}
      <section className="section" style={{paddingTop: '8rem'}}>
        <div className="container">
          <div className="text-center">
            <h1 className="fade-in mb-4">
              Contact
            </h1>
            <p className="fade-in fade-in-delay-1" style={{
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '1.2rem',
              lineHeight: '1.6'
            }}>
              Ready to create something extraordinary together? 
              Let's discuss your vision and bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="image-grid grid-two" style={{gap: '4rem', alignItems: 'start'}}>
            
            {/* Contact Information */}
            <div className="fade-in fade-in-delay-2">
              <h2 className="mb-4">
                Studio Information
              </h2>
              <div style={{marginBottom: '2rem'}}>
                <h3 className="mb-2">Services</h3>
                <p>Physique Photography</p>
                <p>Modeling Sessions</p>
                <p>Cosplay Photography</p>
                <p>Portrait Work</p>
              </div>
              
              <div style={{marginBottom: '2rem'}}>
                <h3 className="mb-2">Session Types</h3>
                <p>Studio Sessions</p>
                <p>Location Photography</p>
                <p>Event Coverage</p>
                <p>Creative Collaborations</p>
              </div>
              
              <div>
                <h3 className="mb-2">Response Time</h3>
                <p>Within 24 hours</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="fade-in fade-in-delay-3" onSubmit={handleSubmit} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '3rem',
              border: '1px solid #333'
            }}>
              <div style={{marginBottom: '2rem'}}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#cccccc',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'transparent',
                    border: '1px solid #444',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#666'}
                  onBlur={(e) => e.target.style.borderColor = '#444'}
                />
              </div>
              
              <div style={{marginBottom: '2rem'}}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#cccccc',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'transparent',
                    border: '1px solid #444',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#666'}
                  onBlur={(e) => e.target.style.borderColor = '#444'}
                />
              </div>
              
              <div style={{marginBottom: '2rem'}}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#cccccc',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Message
                </label>
                <textarea
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, vision, and what you'd like to create together..."
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'transparent',
                    border: '1px solid #444',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    minHeight: '120px',
                    lineHeight: '1.5',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#666'}
                  onBlur={(e) => e.target.style.borderColor = '#444'}
                />
              </div>
              
              <button type="submit" className="btn-atmospheric" disabled={isSubmitting} style={{
                width: '100%',
                padding: '1.25rem',
                opacity: isSubmitting ? 0.7 : 1
              }}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  textAlign: 'center',
                  color: submitStatus.includes('successfully') ? '#4ade80' : '#f87171',
                  fontSize: '0.9rem'
                }}>
                  {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;