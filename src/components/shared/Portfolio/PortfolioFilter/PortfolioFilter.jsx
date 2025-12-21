// src/components/portfolio/PortfolioFilter.jsx
import './PortfolioFilter.css';

const PortfolioFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  searchQuery,
  onSearchChange,
  t 
}) => {
  return (
    <section className="portfolio-filter">
      <div className="container">
        <div className="filter-controls">
          {/* Barra de búsqueda */}
          <div className="search-box">
            <input
              type="text"
              placeholder={t("portfolio.filters.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </div>
          
          {/* Filtros de categoría */}
          <div className="category-filters">
            <span className="filter-label">{t("portfolio.filters.filterBy")}:</span>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => onCategoryChange(category)}
                >
                  {t(`portfolio.categories.${category}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilter;