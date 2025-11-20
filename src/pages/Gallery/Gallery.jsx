import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Datos de la galería - puedes expandir esto con tus proyectos reales
  const galleryItems = [
    {
      id: 1,
      title: "Doom",
      description: "Casco del juego Doom",
      category: "pixelart",
      image: "/images/gallery/doom3.png",
      technologies: ["pixelart", "pixel studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 2,
      title: "Master Chief",
      description: "Casco del jefe maestro, Jhon 117 del juego Halo",
      category: "pixelart",
      image: "/images/gallery/MasterChief.png",
      technologies: ["pixelart", "pixel studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 3,
      title: "Astroanuta",
      description: "Astronauta",
      category: "pixelart",
      image: "/images/gallery/Astronauta.png",
      technologies: ["pixelart", "pixel studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 4,
      title: "Saint Seiya",
      description: "Seiya with his saint clothes of pegasus",
      category: "pixelart",
      image: "/images/gallery/Seya.png",
      technologies: ["pixelart", "pixel studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    
  ];

  // Categorías disponibles
  const categories = [
    { key: 'all', label: t('gallery.all') },
    { key: 'photography', label: t('gallery.photography') },
    { key: 'design', label: t('gallery.design') },
    { key: 'illustration', label: t('gallery.illustration') },
    { key: 'pixelart', label: t('gallery.pixelart')}
  ];

  // Filtrar items por categoría
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryItems;
    }
    return galleryItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory, galleryItems]);

  // Abrir modal de imagen
  const openModal = (item) => {
    setSelectedImage(item);
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className="gallery-title">{t('gallery.title')}</h1>
          <p className="gallery-subtitle">{t('gallery.subtitle')}</p>
        </div>
      </section>

      <div className="container">
        {/* Filtros de Categoría */}
        <section className="gallery-filters">
          <h3 className="filters-title">{t('gallery.filters')}</h3>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.key}
                className={`category-filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Grid de Galería */}
        <section className="gallery-grid-section">
          {filteredItems.length > 0 ? (
            <div className="gallery-grid">
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className="gallery-item"
                  onClick={() => openModal(item)}
                >
                  <div className="gallery-item-image">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      onError={(e) => {
                        e.target.src = '/images/gallery/placeholder.jpg';
                      }}
                    />
                    <div className="gallery-item-overlay">
                      <div className="overlay-content">
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-description">{item.description}</p>
                        <div className="item-technologies">
                          {item.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        <button className="view-btn">
                          {t('gallery.viewProject')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-items">
              <p>{t('gallery.noItems')}</p>
            </div>
          )}
        </section>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <div className="modal-technologies">
                {selectedImage.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={selectedImage.link} className="project-link">
                {t('gallery.viewProject')}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;