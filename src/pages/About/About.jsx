import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  // Datos de habilidades con iconos y porcentajes
  const skills = [
    { name: t('about.skills.development'), level: 95, icon: '💻' },
    { name: t('about.skills.seo'), level: 85, icon: '📈' },
    { name: t('about.skills.emailMarketing'), level: 90, icon: '📧' },
    { name: t('about.skills.automation'), level: 80, icon: '⚙️' },
    { name: t('about.skills.consulting'), level: 88, icon: '🔧' },
    { name: t('about.skills.serverManagement'), level: 75, icon: '🖥️' }
  ];

  // Servicios ofrecidos
  const services = [
    { 
      icon: '🌐', 
      title: t('about.services.webDevelopment'),
      description: 'Desarrollo y mantenimiento de sitios web responsivos y optimizados para SEO con React.js, WordPress y tecnologías modernas.'
    },
    { 
      icon: '📧', 
      title: t('about.services.emailMarketing'),
      description: 'Creación de campañas de email marketing optimizadas y automatización de flujos con Google Apps Script y otras herramientas.'
    },
    { 
      icon: '🔍', 
      title: t('about.services.seo'),
      description: 'Auditorías SEO, estrategias de contenido y técnico para mejorar el posicionamiento orgánico y la visibilidad web.'
    },
    { 
      icon: '🤖', 
      title: t('about.services.automation'),
      description: 'Automatización de procesos y conexión de herramientas digitales (Google Sheets, Meta Ads, etc.) para optimizar flujos de trabajo.'
    },
    { 
      icon: '📊', 
      title: t('about.services.analytics'),
      description: 'Configuración de análisis y reporting para seguimiento de desempeño y toma de decisiones basada en datos.'
    },
    { 
      icon: '🛒', 
      title: t('about.services.ecommerce'),
      description: 'Desarrollo de tiendas en línea con pasarelas de pago, gestión de envíos y experiencia de usuario optimizada.'
    }
  ];

  // Timeline de experiencia basada en tu perfil real
  const timeline = [
    {
      year: "2025 - Presente",
      title: "Programador Frontend - Cerebro Smart Media",
      description: "Desarrollo y mantenimiento del sitio web institucional con React.js y Tailwind CSS. Creación de campañas Rich Media Ads, asesoría en SEO técnico y automatización con Google Apps Script."
    },
    {
      year: "2024",
      title: "Programador de Sistemas - BBVA en México",
      description: "Desarrollo y mantenimiento de sitios web utilizando Python, Java, JavaScript y PHP. Administración de bases de datos."
    },
    {
      year: "2021 - 2023",
      title: "Desarrollador Web - Foodin'",
      description: "Desarrollo de sitios web en WordPress y React.js. Programación en PHP y maquetación con HTML, CSS y JavaScript."
    },
    {
      year: "2018 - 2024",
      title: "Freelance - Programador Web y Asesor de Marketing Digital",
      description: "Desarrollo de sitios web, e-commerce, landing pages, email marketing, auditorías SEO y configuración de servidores en CENTOS."
    },
    {
      year: "2016 - 2018",
      title: "Programador Web - Beker",
      description: "Desarrollo de email marketing, landing pages, revistas digitales y gestión de campañas display para Banco Santander."
    },
    {
      year: "2014 - 2015",
      title: "Programador de Sistemas - Magrico S.A. de C.V.",
      description: "Desarrollo de sistema de gestión integral con Java y PostgreSQL para administración de pagos, operadores, viajes y generación de reportes."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content-about">
            <div className="hero-text">
              <h1 className="hero-title">{t('about.title')}</h1>
              <p className="hero-subtitle">{t('about.subtitle')}</p>
              <p className="hero-description">
                {t('about.story')}
              </p>
              <div className="hero-actions-about">
                <Link to="/contact" className="btn btn-primary">
                  {t('about.ctaButton')}
                </Link>
                <Link to="/gallery" className="btn btn-outline">
                  Ver Mi Trabajo
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="profile-card">
                <div className="profile-image">
                  <div className="placeholder-avatar"><img src="/Ricardo-contreras.png" alt="Ricardo Contreras" /></div>
                </div>
                <div className="profile-info">
                  <h3>Ricardo "Rycko" Contreras</h3>
                  <p>Webmaster & Full-Stack Developer</p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span className="stat-number">9+</span>
                      <span className="stat-label">Años de Experiencia</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">100+</span>
                      <span className="stat-label">Proyectos</span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">360°</span>
                      <span className="stat-label">Soluciones Digitales</span>
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
                <h4>Innovación</h4>
                <p>Implementando las últimas tecnologías y tendencias digitales</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">💡</span>
                <h4>Soluciones Integrales</h4>
                <p>Combinando desarrollo, SEO y marketing para resultados completos</p>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🤝</span>
                <h4>Colaboración</h4>
                <p>Trabajando codo a codo con clientes para alcanzar sus objetivos</p>
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
                {t('about.ctaButtonB')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;