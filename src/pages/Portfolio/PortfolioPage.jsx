// src/pages/Portfolio/Portfolio.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import PortfolioCard from '../../components/shared/Portfolio/PortfolioCard/PortfolioCard';
import PortfolioFilter from '../../components/shared/Portfolio/PortfolioFilter/PortfolioFilter';
import PortfolioStats from '../../components/shared/Portfolio/PortfolioStats/PortfolioStats';
import './Portfolio.css';

const PortfolioPage = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // Datos de proyectos - Esto podría venir de una API o base de datos
  const projects = [
    {
      id: 1,
      title: language === 'en' ? 'Foodin' : 'Foodin',
      category: 'webDevelopment',
      description: language === 'en' 
        ? 'Complete online store with custom features and payment integration'
        : 'Tienda online completa con funciones personalizadas e integración de pagos',
      longDescription: language === 'en'
        ? 'Developed a responsive e-commerce platform with product management, secure checkout, and order tracking system. Implemented custom features based on client requirements.'
        : 'Desarrollé una plataforma e-commerce responsive con gestión de productos, checkout seguro y sistema de seguimiento de pedidos. Implementé funciones personalizadas según los requisitos del cliente.',
      client: 'Retail Company',
      year: '2024',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      images: [
        '/images/portfolio/foodin1.jpg',
        '/images/portfolio/foodin2.jpg'
      ],
      liveUrl: 'https://example.com',
      achievements: ['performance', 'conversions', 'security'],
      stats: {
        conversionIncrease: '35%',
        performanceImprovement: '60%',
        securityScore: 'A+'
      }
    },
    {
      id: 2,
      title: language === 'en' ? 'Email Marketing Campaign' : 'Campaña Email Marketing',
      category: 'emailMarketing',
      description: language === 'en'
        ? 'Automated email sequences with segmentation and A/B testing'
        : 'Secuencias de email automatizadas con segmentación y A/B testing',
      longDescription: language === 'en'
        ? 'Created and implemented a complete email marketing strategy with automated workflows, segmentation, and detailed analytics. Improved open rates by 45%.'
        : 'Creé e implementé una estrategia completa de email marketing con flujos automatizados, segmentación y analítica detallada. Mejoré las tasas de apertura en un 45%.',
      client: 'SaaS Startup',
      year: '2024',
      technologies: ['Mailchimp', 'Klaviyo', 'Zapier', 'Google Analytics'],
      images: [
        '/images/portfolio/email-1.jpg',
        '/images/portfolio/email-2.jpg'
      ],
      achievements: ['automation', 'conversions'],
      stats: {
        openRate: '45%',
        clickRate: '22%',
        conversionRate: '8%'
      }
    },
    {
      id: 3,
      title: language === 'en' ? 'Server Migration & Optimization' : 'Migración y Optimización de Servidor',
      category: 'serverConfig',
      description: language === 'en'
        ? 'High-performance server configuration with security hardening'
        : 'Configuración de servidor de alto rendimiento con fortificación de seguridad',
      longDescription: language === 'en'
        ? 'Migrated legacy infrastructure to modern cloud servers with zero downtime. Implemented security best practices and performance optimization.'
        : 'Migré infraestructura antigua a servidores cloud modernos sin tiempo de inactividad. Implementé mejores prácticas de seguridad y optimización de rendimiento.',
      client: 'Digital Agency',
      year: '2023',
      technologies: ['AWS', 'Docker', 'Nginx', 'SSL', 'CDN'],
      images: [
        '/images/portfolio/server-1.jpg',
        '/images/portfolio/server-2.jpg',
        '/images/portfolio/server-3.jpg'
      ],
      achievements: ['performance', 'security', 'scalability'],
      stats: {
        uptime: '99.9%',
        loadTime: '0.8s',
        securityScore: '100/100'
      }
    },
    {
      id: 4,
      title: language === 'en' ? 'WordPress Corporate Website' : 'Sitio Web Corporativo WordPress',
      category: 'webDevelopment',
      description: language === 'en'
        ? 'Custom WordPress theme with advanced functionality'
        : 'Tema WordPress personalizado con funcionalidad avanzada',
      longDescription: language === 'en'
        ? 'Developed a custom WordPress theme with modular components, SEO optimization, and integration with external APIs.'
        : 'Desarrollé un tema WordPress personalizado con componentes modulares, optimización SEO e integración con APIs externas.',
      client: 'Corporate Client',
      year: '2023',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'ACF', 'REST API'],
      images: [
        '/images/portfolio/wordpress-1.jpg',
        '/images/portfolio/wordpress-2.jpg'
      ],
      liveUrl: 'https://example.com',
      achievements: ['performance', 'security'],
      stats: {
        seoScore: '95/100',
        performanceScore: '98/100'
      }
    },
    {
      id: 5,
      title: language === 'en' ? 'SEO Optimization Project' : 'Proyecto de Optimización SEO',
      category: 'seo',
      description: language === 'en'
        ? 'Complete SEO strategy and technical optimization'
        : 'Estrategia SEO completa y optimización técnica',
      longDescription: language === 'en'
        ? 'Implemented a comprehensive SEO strategy including technical audits, content optimization, and backlink building. Increased organic traffic by 120%.'
        : 'Implementé una estrategia SEO completa incluyendo auditorías técnicas, optimización de contenido y construcción de backlinks. Aumenté el tráfico orgánico en un 120%.',
      client: 'Local Business',
      year: '2023',
      technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
      images: [
        '/images/portfolio/seo-1.jpg',
        '/images/portfolio/seo-2.jpg'
      ],
      achievements: ['conversions', 'performance'],
      stats: {
        trafficIncrease: '120%',
        keywordRankings: '+45 positions',
        conversionIncrease: '25%'
      }
    },
    {
      id: 6,
      title: language === 'en' ? 'Workflow Automation System' : 'Sistema de Automatización de Flujos',
      category: 'automation',
      description: language === 'en'
        ? 'Custom automation system for business processes'
        : 'Sistema de automatización personalizado para procesos empresariales',
      longDescription: language === 'en'
        ? 'Developed an automation system that reduced manual work by 70% through custom scripts and integration with existing tools.'
        : 'Desarrollé un sistema de automatización que redujo el trabajo manual en un 70% mediante scripts personalizados e integración con herramientas existentes.',
      client: 'Manufacturing Company',
      year: '2024',
      technologies: ['Python', 'Zapier', 'Make', 'API Integration'],
      images: [
        '/images/portfolio/automation-1.jpg',
        '/images/portfolio/automation-2.jpg',
        '/images/portfolio/automation-3.jpg'
      ],
      achievements: ['automation', 'performance'],
      stats: {
        timeSaved: '70%',
        errorReduction: '95%',
        efficiencyIncrease: '3x'
      }
    }
  ];
  
  // Estadísticas generales
  const statsData = {
    projects: 50,
    clients: 35,
    uptime: '99.9%',
    emails: '2M+'
  };
  
  // Filtrar proyectos
  useEffect(() => {
    let filtered = [...projects];
    
    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    // Filtrar por búsqueda
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, searchQuery, language]);
  
  // Efecto para SEO
  useEffect(() => {
    document.title = `${t("portfolio.title")} | Rycko`;
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = t("portfolio.metaDescription");
    
    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": t("portfolio.title"),
      "description": t("portfolio.subtitle"),
      "numberOfItems": filteredProjects.length,
      "itemListElement": filteredProjects.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "dateCreated": project.year,
        "creator": {
          "@type": "Person",
          "name": "Rycko"
        }
      }))
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    script.id = 'portfolio-structured-data';
    
    const existingScript = document.getElementById('portfolio-structured-data');
    if (existingScript) existingScript.remove();
    
    document.head.appendChild(script);
    
    return () => {
      document.title = 'Rycko';
      if (script.parentNode) script.remove();
    };
  }, [t, filteredProjects]);
  
  // Categorías únicas
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  
  return (
    <main className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="hero-title">
            {t("portfolio.title")}
          </h1>
          <p className="hero-subtitle">
            {t("portfolio.subtitle")}
          </p>
          
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="breadcrumb">
            <ol>
              <li>
                <Link to="/">{language === 'en' ? "Home" : "Inicio"}</Link>
              </li>
              <li aria-current="page">{t("portfolio.title")}</li>
            </ol>
          </nav>
        </div>
      </section>
      
      {/* Stats Section */}
      <PortfolioStats stats={statsData} t={t} />
      
      {/* Filter Section */}
      <PortfolioFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        t={t}
      />
      
      {/* Projects Grid */}
      <section className="portfolio-projects">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  t={t}
                />
              ))}
            </div>
          ) : (
            <div className="no-projects">
              <p>{language === 'en' ? 'No projects found. Try another filter.' : 'No se encontraron proyectos. Intenta con otro filtro.'}</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <h2>{t("portfolio.cta.title")}</h2>
          <p>{t("portfolio.cta.description")}</p>
          <Link to="/contact" className="cta-button">
            {t("portfolio.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;