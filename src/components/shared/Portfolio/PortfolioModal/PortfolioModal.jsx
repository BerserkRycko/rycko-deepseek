// src/components/portfolio/PortfolioModal.jsx
import { useEffect } from 'react';
import './PortfolioModal.css';

const PortfolioModal = ({ project, isOpen, onClose, t }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  // Función para cerrar modal con Escape
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);
  
  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <div 
        className="portfolio-modal" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>
        
        <div className="modal-header">
          <h2 id="modal-title">{project.title}</h2>
          <div className="modal-meta">
            {project.client && (
              <span className="meta-item">
                <strong>{t("portfolio.client")}:</strong> {project.client}
              </span>
            )}
            {project.year && (
              <span className="meta-item">
                <strong>{t("portfolio.year")}:</strong> {project.year}
              </span>
            )}
          </div>
        </div>
        
        <div className="modal-content">
          {/* Galería de imágenes */}
          {project.images && project.images.length > 0 && (
            <div className="modal-gallery">
              {project.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  {/* Usar imagen de placeholder si no hay imagen real */}
                  <img 
                    src={image.startsWith('/') ? image : `https://via.placeholder.com/600x400/13c3d9/ffffff?text=${project.title}`}
                    alt={`${project.title} - Captura ${index + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/600x400/13c3d9/ffffff?text=${project.title}`;
                    }}
                  />
                </div>
              ))}
            </div>
          )}
          
          {/* Descripción */}
          <div className="modal-description">
            <h3>{t("portfolio.projectDetails")}</h3>
            <p>{project.longDescription}</p>
          </div>
          
          {/* Tecnologías */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="modal-technologies">
              <h3>{t("portfolio.technologiesUsed")}</h3>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Logros */}
          {project.achievements && project.achievements.length > 0 && (
            <div className="modal-achievements">
              <h3>{t("portfolio.achievements")}</h3>
              <ul className="achievements-list">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>
                    {t(`portfolio.achievementsList.${achievement}`)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Estadísticas */}
          {project.stats && (
            <div className="modal-stats">
              <h3>{t("home.whatIDo")}</h3>
              <div className="stats-grid">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="stat-item">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{key}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="modal-actions">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              className="btn-live"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("portfolio.viewLive")}
            </a>
          )}
          <button className="btn-close" onClick={onClose}>
            {t("contact.close") || "Cerrar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;