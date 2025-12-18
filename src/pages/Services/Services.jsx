// src/pages/Services/Services.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import ServiceCard from '../../components/shared/Services/ServiceCard';
import ProcessStep from '../../components/shared/Services/ProcessStep';
import './ServicesPages.css';

const ServicesPage = () => {
  const { t, language } = useLanguage();
  
  // Datos de servicios organizados por categoría
  const serviceCategories = [
    {
      id: 'webDevelopment',
      services: ['webDev', 'landingPages', 'ecommerce']
    },
    {
      id: 'seoAnalytics',
      services: ['seo', 'analytics']
    },
    {
      id: 'integrations',
      services: ['integrations', 'hosting']
    },
    {
      id: 'platforms',
      services: ['wordpress', 'emailMarketing']
    },
    {
      id: 'marketing',
      services: ['maintenance']
    }
  ];
  
  // Proceso de trabajo
  const processSteps = t("servicesPage.process.steps", { returnObjects: true }) || [];
  
  // Efecto para SEO
  useEffect(() => {
    // Cambiar título
    document.title = `${t("servicesPage.title")} | Rycko`;
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("servicesPage.metaDescription");
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = t("servicesPage.metaKeywords");
    
    // Agregar structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": t("servicesPage.title"),
      "description": t("servicesPage.metaDescription"),
      "serviceType": [
        "Web Development",
        "SEO Services",
        "Digital Marketing",
        "E-commerce Development"
      ],
      "provider": {
        "@type": "Organization",
        "name": "Rycko"
      }
    };
    
    const structuredScript = document.createElement('script');
    structuredScript.type = 'application/ld+json';
    structuredScript.textContent = JSON.stringify(structuredData);
    structuredScript.id = 'services-structured-data';
    
    // Agregar breadcrumb data
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": language === 'en' ? "Home" : "Inicio",
          "item": window.location.origin + '/'
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": t("servicesPage.title")
        }
      ]
    };
    
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    breadcrumbScript.id = 'services-breadcrumb-data';
    
    // Remover scripts existentes
    const existingStructured = document.getElementById('services-structured-data');
    const existingBreadcrumb = document.getElementById('services-breadcrumb-data');
    
    if (existingStructured) existingStructured.remove();
    if (existingBreadcrumb) existingBreadcrumb.remove();
    
    // Agregar nuevos scripts
    document.head.appendChild(structuredScript);
    document.head.appendChild(breadcrumbScript);
    
    // Cleanup
    return () => {
      document.title = 'Rycko';
      if (structuredScript.parentNode) structuredScript.remove();
      if (breadcrumbScript.parentNode) breadcrumbScript.remove();
    };
  }, [t, language]);
  
  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="hero-title-service">
            {t("servicesPage.title")}
          </h1>
          <p className="hero-subtitle-services">
            {t("servicesPage.subtitle")}
          </p>
          
          {/* Breadcrumb for SEO */}
          <nav className="breadcrumb" aria-label="breadcrumb">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{t("servicesPage.title")}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>
        </div>
      </section>
      
      {/* Services by Category */}
      {serviceCategories.map((category) => (
        <section key={category.id} className="services-category">
          <div className="container">
            <h2 className="category-title">
              {t(`servicesPage.categories.${category.id}`)}
            </h2>
            <div className="services-grid">
              {category.services.map((serviceKey) => (
                <ServiceCard 
                  key={serviceKey}
                  serviceKey={serviceKey}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">{t("servicesPage.process.title")}</h2>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                stepNumber={index + 1}
                title={step?.title || ''}
                description={step?.description || ''}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section for SEO */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">
            {t("faq.title")}
          </h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>{t("faq.webDevTime")}</h3>
              <p>{t("faq.webDevAnswer")}</p>
            </div>
            <div className="faq-item">
              <h3>{t("faq.maintenance")}</h3>
              <p>{t("faq.maintenanceAnswer")}</p>
            </div>
            <div className="faq-item">
              <h3>{t("faq.migration")}</h3>
              <p>{t("faq.migrationAnswer")}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="services-cta-page">
        <div className="container">
          <h2>{t("servicesPage.cta.title")}</h2>
          <p>{t("servicesPage.cta.description")}</p>
          <Link to="/contact" className="cta-button">
            {t("servicesPage.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;