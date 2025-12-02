import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './Contact.css';


const Contact = () => {
  
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '12d2ac0b-b833-427f-a09c-975f818e14f4',
          ...formData,
          from_name: formData.name,
          reply_to: formData.email
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Mostrar popup de éxito
        setShowSuccessPopup(true);
        // Resetear formulario
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Mostrar error (puedes agregar un popup de error también)
        alert(t('contact.error'));
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rycko.arcr@gmail.com',
      link: 'mailto:rycko.arcr@gmail.com'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/rycko',
      link: 'https://linkedin.com/in/rycko'
    },
    {
      icon: 'X',
      title: 'X',
      value: '@_rycko',
      link: 'https://x.com/_rycko'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+52 272 265 3873',
      link: 'https://wa.me/522722653873'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">{t('contact.title')}</h1>
          <p className="contact-subtitle">{t('contact.subtitle')}</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>{t('contact.contactInfo')}</h2>
            <p className="contact-description">
              {t('contact.availability')}. {t('contact.responseTime')}
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    <p>{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="location-info">
              <div className="location-icon">📍</div>
              <div>
                <h4>{t('contact.location')}</h4>
                <p>Open to remote work worldwide</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contact.name')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.name')}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.email')} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.email')}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration, Question, etc."
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project, questions, or how I can help you..."
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <input type="hidden" name="access_key" value="12d2ac0b-b833-427f-a09c-975f818e14f4" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    {t('contact.sending')}
                  </>
                ) : (
                  t('contact.send')
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Popup de éxito */}
      {showSuccessPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="success-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">✅</div>
            <h3 className="popup-title">{t('contact.success')}</h3>
            <p className="popup-message">{t('contact.successMessage')}</p>
            <button className="popup-close-btn" onClick={closePopup}>
              {t('contact.close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;