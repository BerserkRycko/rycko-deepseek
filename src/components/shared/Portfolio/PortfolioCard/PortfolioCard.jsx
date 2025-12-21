// src/components/portfolio/PortfolioCard.jsx
import { useState } from 'react';
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import './PortfolioCard.css';

const PortfolioCard = ({ project, t }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Obtener icono según categoría
  const getCategoryIcon = (category) => {
    const icons = {
      webDevelopment: '💻',
      emailMarketing: '✉️',
      serverConfig: '☁️',
      seo: '🔍',
      automation: '⚙️'
    };
    return icons[category] || '📁';
  };
  
  // Obtener color según categoría
  const getCategoryColor = (category) => {
    const colors = {
      webDevelopment: '#2563eb',
      emailMarketing: '#8b5cf6',
      serverConfig: '#059669',
      seo: '#f59e0b',
      automation: '#3b82f6'
    };
    return colors[category] || '#6b7280';
  };
  
  return (
    <>
      <article className="portfolio-card">
        <div className="card-header">
          <div 
            className="category-badge"
            style={{ backgroundColor: getCategoryColor(project.category) }}
          >
            <span className="category-icon">{getCategoryIcon(project.category)}</span>
            <span className="category-text">
              {t(`portfolio.categories.${project.category}`)}
            </span>
          </div>
          {project.year && (
            <span className="project-year">{project.year}</span>
          )}
        </div>
        
        <div className="card-image">
          <img 
            src={project.images[0] || '/images/placeholder.jpg'} 
            alt={project.title}
            loading="lazy"
          />
          {project.images.length > 1 && (
            <span className="image-count">
              +{project.images.length - 1}
            </span>
          )}
        </div>
        
        <div className="card-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="technologies">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-badge">+{project.technologies.length - 3}</span>
            )}
          </div>
          
          <div className="achievements">
            {project.achievements.slice(0, 2).map((achievement, index) => (
              <span key={index} className="achievement-badge">
                {t(`portfolio.achievementsList.${achievement}`)}
              </span>
            ))}
          </div>
        </div>
        
        <div className="card-actions">
          <button 
            className="btn-view-details"
            onClick={() => setIsModalOpen(true)}
          >
            {t("portfolio.viewDetails")}
          </button>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="btn-view-live"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("portfolio.viewLive")}
            </a>
          )}
        </div>
      </article>
      
      {isModalOpen && (
        <PortfolioModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          t={t}
        />
      )}
    </>
  );
};

export default PortfolioCard;