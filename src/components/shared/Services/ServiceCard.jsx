// src/components/services/ServiceCard.jsx
import { useLanguage } from '../../../hooks/useLanguage';
import './ServiceCard.css';

const ServiceCard = ({ serviceKey }) => {
  const { t } = useLanguage();
  
  // Iconos para cada servicio
  const serviceIcons = {
    webDev: '💻',
    landingPages: '🚀',
    ecommerce: '🛒',
    seo: '🔍',
    analytics: '📊',
    integrations: '🔗',
    hosting: '☁️',
    wordpress: '⚙️',
    emailMarketing: '✉️',
    maintenance: '🛠️'
  };
  
  // Colores para cada servicio
  const serviceColors = {
    webDev: '#2563eb',
    landingPages: '#7c3aed',
    ecommerce: '#059669',
    seo: '#f59e0b',
    analytics: '#3b82f6',
    integrations: '#8b5cf6',
    hosting: '#10b981',
    wordpress: '#21759b',
    emailMarketing: '#ec4899',
    maintenance: '#6b7280'
  };
  
  const features = t(`servicesPage.servicesList.${serviceKey}.features`, { returnObjects: true }) || [];
  
  return (
    <article className="service-card" itemScope itemType="https://schema.org/Service">
      <div 
        className="service-icon"
        style={{ backgroundColor: serviceColors[serviceKey] || '#2563eb' }}
        aria-hidden="true"
      >
        {serviceIcons[serviceKey] || '✨'}
      </div>
      
      <h3 className="service-title" itemProp="name">
        {t(`servicesPage.servicesList.${serviceKey}.title`)}
      </h3>
      
      <p className="service-description" itemProp="description">
        {t(`servicesPage.servicesList.${serviceKey}.description`)}
      </p>
      
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <meta itemProp="serviceType" content={t(`servicesPage.servicesList.${serviceKey}.title`)} />
    </article>
  );
};

export default ServiceCard;