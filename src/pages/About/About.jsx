import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  // Datos de habilidades con iconos y porcentajes
  const skills = [
    { name: t('about.skills.development'), level: 90, icon: '💻' },
    { name: t('about.skills.design'), level: 85, icon: '🎨' },
    { name: t('about.skills.photography'), level: 80, icon: '📷' },
    { name: t('about.skills.marketing'), level: 75, icon: '📈' },
    { name: t('about.skills.consulting'), level: 88, icon: '🔧' },
    { name: t('about.skills.illustration'), level: 70, icon: '✏️' }
  ];

  // Servicios ofrecidos
  const services = [
    { 
      icon: '🌐', 
      title: t('about.services.webDevelopment'),
      description: 'Custom websites built with modern technologies for optimal performance and user experience.'
    },
    { 
      icon: '📧', 
      title: t('about.services.marketing'),
      description: 'Strategic email campaigns and engaging rich media advertisements that convert.'
    },
    { 
      icon: '⚙️', 
      title: t('about.services.technical'),
      description: 'Comprehensive technical support and problem-solving for your digital challenges.'
    },
    { 
      icon: '🖥️', 
      title: t('about.services.hosting'),
      description: 'Professional hosting setup and configuration for reliable online presence.'
    },
    { 
      icon: '📊', 
      title: t('about.services.analytics'),
      description: 'Data-driven insights with proper analytics setup to track and improve performance.'
    },
    { 
      icon: '🛠️', 
      title: t('about.services.tools'),
      description: 'Seamless integration of business tools and systems for operational efficiency.'
    }
  ];

  // Timeline de experiencia
  const timeline = [
    {
      year: "2024",
      title: "Full-Stack Developer & Tech Lead",
      description: "Leading web development projects and mentoring teams while expanding creative services."
    },
    {
      year: "2022-2023",
      title: "Senior Web Developer",
      description: "Specialized in React.js and WordPress development for various clients and industries."
    },
    {
      year: "2020-2021",
      title: "Web Developer & Digital Marketer",
      description: "Combined development skills with digital marketing strategies for comprehensive solutions."
    },
    {
      year: "2018-2019",
      title: "Junior Developer & Designer",
      description: "Started professional journey focusing on frontend development and UI/UX design."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t('about.title')}</h1>
              <p className="hero-subtitle">{t('about.subtitle')}</p>
              <p className="hero-description">
                {t('about.story')}
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  {t('about.ctaButton')}
                </Link>
                <Link to="/gallery" className="btn btn-outline">
                  View My Work
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="profile-card">
                <div className="profile-image">
                  {/* Reemplaza con tu foto */}
                  <div className="placeholder-avatar">👨‍💻</div>
                </div>
                <div className="profile-info">
                  <h3>Ricardo "Rycko"</h3>
                  <p>Full-Stack Developer</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">4+</span>
                      <span className="stat-label">Years</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">{t('about.missionTitle')}</h2>
            <p className="mission-text">
              {t('about.mission')}
            </p>
            <div className="mission-highlights">
              <div className="highlight">
                <span className="highlight-icon">🚀</span>
                <h4>Innovation</h4>
                <p>Staying updated with the latest technologies and trends</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">💡</span>
                <h4>Creativity</h4>
                <p>Combining technical skills with artistic vision</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🤝</span>
                <h4>Collaboration</h4>
                <p>Working closely with clients to achieve their goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">{t('about.skillsTitle')}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">{t('about.servicesTitle')}</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">{t('about.experienceTitle')}</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('about.contactTitle')}</h2>
            <p>{t('about.cta')}</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-large btn-primary">
                {t('about.ctaButton')}
              </Link>
              <Link to="/blog" className="btn btn-large btn-outline">
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;