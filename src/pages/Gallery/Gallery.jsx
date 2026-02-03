import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import './Gallery.css';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Datos de la galería con textos traducidos
  const galleryItems = useMemo(() => [
    {
      id: 1,
      title: "Doom",
      description: t('gallery.doomDescription'),
      category: "pixelart",
      image: "/images/gallery/doom3.png",
      technologies: ["Pixel Art", "Pixel Studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 2,
      title: "Master Chief",
      description: t('gallery.masterChiefDescription'),
      category: "pixelart",
      image: "/images/gallery/MasterChief.png",
      technologies: ["Pixel Art", "Pixel Studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 3,
      title: "Astronaut",
      description: t('gallery.astronautDescription'),
      category: "pixelart",
      image: "/images/gallery/Astronauta.png",
      technologies: ["Pixel Art", "Pixel Studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 4,
      title: "Saint Seiya",
      description: t('gallery.saintSeiyaDescription'),
      category: "pixelart",
      image: "/images/gallery/Seya.png",
      technologies: ["Pixel Art", "Pixel Studio"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 5,
      title: "Cable Car View",
      description: t('gallery.cableCar1Description'),
      category: "photography",
      image: "/images/gallery/teleferico.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/antoniocontrer1"
    },
    {
      id: 6,
      title: "Cable Car Descent",
      description: t('gallery.cableCar2Description'),
      category: "photography",
      image: "/images/gallery/teleferico2.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/antoniocontrer1"
    },
    {
      id: 7,
      title: "Alocasia",
      description: t('gallery.alocasiaDescription'),
      category: "photography",
      image: "/images/gallery/planta-1.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/214920807/Plant-photography"
    },
    {
      id: 8,
      title: "Maranta and Spider Plant",
      description: t('gallery.marantaDescription'),
      category: "photography",
      image: "/images/gallery/planta-2.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/214920807/Plant-photography"
    },
    {
      id: 9,
      title: "Elephant Ear 'Lemon'",
      description: t('gallery.elephantEarDescription'),
      category: "photography",
      image: "/images/gallery/planta-3.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/214920807/Plant-photography"
    },
    {
      id: 10,
      title: "Fern",
      description: t('gallery.fernDescription'),
      category: "photography",
      image: "/images/gallery/planta-4.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/214920807/Plant-photography"
    },
    {
      id: 11,
      title: "Hilo Beauty",
      description: t('gallery.hiloBeautyDescription'),
      category: "photography",
      image: "/images/gallery/planta-5.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/214920807/Plant-photography"
    },
    {
      id: 12,
      title: "Ixora",
      description: t('gallery.ixoraDescription'),
      category: "photography",
      image: "/images/gallery/planta-6.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/214920807/Plant-photography"
    },
    {
      id: 13,
      title: "Colocasia 'Pharaoh's Mask'",
      description: t('gallery.colocasiaDescription'),
      category: "photography",
      image: "/images/gallery/planta-7.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/214920807/Plant-photography"
    },
    {
      id: 14,
      title: "Benito Juarez Monument",
      description: t('gallery.juarezMonumentDescription'),
      category: "photography",
      image: "/images/gallery/place.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/213738239/Photography-street-Orizaba"
    },
    {
      id: 15,
      title: "Orc Boss",
      description: t('gallery.orcBossDescription'),
      category: "photography",
      image: "/images/gallery/warhammer-1.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/222016561/Photos-of-paint-shop-model-making-toys"
    },
    {
      id: 16,
      title: "Tyranid",
      description: t('gallery.tyranid1Description'),
      category: "photography",
      image: "/images/gallery/warhammer-2.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/222016561/Photos-of-paint-shop-model-making-toys"
    },
    {
      id: 17,
      title: "Tyranid Warrior",
      description: t('gallery.tyranid2Description'),
      category: "photography",
      image: "/images/gallery/warhammer-3.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/222016561/Photos-of-paint-shop-model-making-toys"
    },
    {
      id: 18,
      title: "Arcangel",
      description: t('gallery.arcangelDescription'),
      category: "photography",
      image: "/images/gallery/arcangel.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/213738239/Photography-street-Orizaba/modules/1215942381"
    },
    {
      id: 19,
      title: "Carrusel",
      description: t('gallery.carruselDescription'),
      category: "photography",
      image: "/images/gallery/carnival.jpg",
      technologies: ["Nikon", "DSLR Camera", "Nikon D3500"],
      link: "https://www.behance.net/gallery/213738239/Photography-street-Orizaba/modules/1215942379"
    },
    {
      id: 20,
      title: "Juez Dread",
      description: t('gallery.carruselDescription'),
      category: "pixelart",
      image: "/images/gallery/JuezDread.jpg",
      technologies: ["Pixelart", "retro gaming", "judge Dread"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 21,
      title: "Darth Vader",
      description: t('gallery.carruselDescription'),
      category: "pixelart",
      image: "/images/gallery/DarthVader.jpg",
      technologies: ["Pixelart", "retro gaming", "starwars", "Darth Vader"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    },
    {
      id: 22,
      title: "Predator",
      description: t('gallery.carruselDescription'),
      category: "pixelart",
      image: "/images/gallery/Predator.jpg",
      technologies: ["Pixelart", "retro gaming", "Predator"],
      link: "https://www.behance.net/gallery/225595251/Characters-in-Pixel-Art"
    }

  ], [t]);

  // Categorías disponibles
  const categories = [
    { key: 'all', label: t('gallery.all') },
    { key: 'photography', label: t('gallery.photography') },
    { key: 'pixelart', label: t('gallery.pixelart') }
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
              <a 
                href={selectedImage.link} 
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
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