// src/components/portfolio/PortfolioStats.jsx
import './PortfolioStats.css';

const PortfolioStats = ({ stats, t }) => {
  return (
    <section className="portfolio-stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">{stats.projects}+</span>
            <span className="stat-label">{t("portfolio.stats.projects")}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.clients}+</span>
            <span className="stat-label">{t("portfolio.stats.clients")}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.uptime}</span>
            <span className="stat-label">{t("portfolio.stats.uptime")}</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.emails}</span>
            <span className="stat-label">{t("portfolio.stats.emails")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;