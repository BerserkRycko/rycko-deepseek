import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './Home.module.css';

const Home = () => {
  const { t } = useLanguage();

  // Datos para las tarjetas de intereses
  const interests = [
    { key: 'development', icon: '💻', color: '#13c3d9' },
    { key: 'design', icon: '🎨', color: '#016982' },
    { key: 'photography', icon: '📷', color: '#003d4b' },
    { key: 'illustration', icon: '✏️', color: '#13c3d9' },
    { key: 'animation', icon: '🎬', color: '#016982' },
    { key: 'content', icon: '📹', color: '#003d4b' }
  ];

  // Datos para las expectativas
  const expectations = ['articles', 'tutorials', 'projects', 'reviews', 'videos'];

  // Redes sociales
  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/rycko' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/rycko' },
    { name: 'YouTube', icon: '🎥', url: 'https://youtube.com/rycko' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/rycko' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t('home.heroTitle')}</h1>
              <p className="hero-description">{t('home.heroDescription')}</p>
              <div className="hero-actions">
                <button className="btn btn-primary">{t('home.ctaButton')}</button>
                <button className="btn btn-outline">View Blog</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="floating-element element-1">💻</div>
                <div className="floating-element element-2">🎨</div>
                <div className="floating-element element-3">📷</div>
                <div className="floating-element element-4">✏️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>{t('home.aboutTitle')}</h2>
              <p>{t('home.aboutDescription')}</p>
            </div>
            <div className="about-visual">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="container">
          <h2 className="section-title">{t('home.interestsTitle')}</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div 
                key={interest.key} 
                className="interest-card"
                style={{ '--accent-color': interest.color }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="interest-icon" style={{ backgroundColor: interest.color }}>
                  {interest.icon}
                </div>
                <h3>{t(`home.interests.${interest.key}.title`)}</h3>
                <p>{t(`home.interests.${interest.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="expectations-section">
        <div className="container">
          <div className="expectations-content">
            <div className="expectations-text">
              <h2>{t('home.expectationsTitle')}</h2>
              <p>{t('home.expectationsDescription')}</p>
              <ul className="expectations-list">
                {expectations.map((expectation, index) => (
                  <li key={expectation} data-aos="fade-right" data-aos-delay={index * 100}>
                    <span className="check-icon">✓</span>
                    {t(`home.expectations.${expectation}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="expectations-visual">
              <div className="floating-cards">
                <div className="floating-card card-1">📚</div>
                <div className="floating-card card-2">🎬</div>
                <div className="floating-card card-3">💡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.joinTitle')}</h2>
            <p>{t('home.joinDescription')}</p>
            
            <div className="social-section">
              <h3>{t('home.stayConnected')}</h3>
              <p>{t('home.stayConnectedDescription')}</p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="final-cta">
              <h3>{t('home.letsCreate')}</h3>
              <p>{t('home.thanks')}</p>
              <p className="signature">{t('home.signature')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;