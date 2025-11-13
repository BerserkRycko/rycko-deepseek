import React, { useState, useMemo } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { getArticlesByLanguage, getFeaturedArticles } from '../../data/articles'
import { Link } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
  const { t, currentLanguage } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const allArticles = getArticlesByLanguage(currentLanguage)
  const featuredArticles = getFeaturedArticles(currentLanguage)

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(allArticles.map(article => article.category))]
    return cats
  }, [allArticles])

  // Filtrar artículos
  const filteredArticles = useMemo(() => {
    return allArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [allArticles, searchTerm, selectedCategory])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', options)
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1 className="blog-title">{t('blog.title')}</h1>
          <p className="blog-subtitle">{t('blog.subtitle')}</p>
        </div>
      </section>

      <div className="container">
        {/* Filtros y Búsqueda */}
        <div className="blog-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder={t('blog.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Artículos Destacados */}
        {featuredArticles.length > 0 && (
          <section className="featured-section">
            <h2 className="section-title">{t('blog.featured')}</h2>
            <div className="featured-grid">
              {featuredArticles.map(article => (
                <article key={article.id} className="featured-article">
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                    <div className="article-category">{article.category}</div>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-meta">
                      <span className="article-date">{formatDate(article.date)}</span>
                      <span className="article-read-time">{article.readTime}</span>
                    </div>
                    <Link to={`/blog/${article.slug}`} className="read-more-btn">
                      {t('blog.readMore')}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Todos los Artículos */}
        <section className="articles-section">
          <h2 className="section-title">{t('blog.recent')}</h2>
          {filteredArticles.length > 0 ? (
            <div className="articles-grid">
              {filteredArticles.map(article => (
                <article key={article.id} className="article-card">
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                    <div className="article-category">{article.category}</div>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">
                      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <div className="article-meta">
                      <span className="article-author">By {article.author}</span>
                      <span className="article-date">{formatDate(article.date)}</span>
                      <span className="article-read-time">{article.readTime}</span>
                    </div>
                    <Link to={`/blog/${article.slug}`} className="read-more-btn">
                      {t('blog.readMore')}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-articles">
              <p>{t('blog.noArticles')}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Blog