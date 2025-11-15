import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { loadBlogPosts, getFeaturedPosts } from '../../utils/blogLoader';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar posts cuando cambie el idioma
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const [allPosts, featured] = await Promise.all([
          loadBlogPosts(currentLanguage),
          getFeaturedPosts(currentLanguage)
        ]);
        setPosts(allPosts);
        setFeaturedPosts(featured);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setPosts([]);
        setFeaturedPosts([]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentLanguage]);

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(posts.map(post => post.category))];
    return cats;
  }, [posts]);

  // Filtrar artículos
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', options);
  };

  if (loading) {
    return (
      <div className="blog-page">
        <div className="container">
          <div className="loading-spinner">
            <p>{t('blog.loading') || 'Loading posts...'}</p>
          </div>
        </div>
      </div>
    );
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
                {category === 'all' ? (currentLanguage === 'es' ? 'Todos' : 'All') : category}
              </button>
            ))}
          </div>
        </div>

        {/* Artículos Destacados */}
        {featuredPosts.length > 0 && (
          <section className="featured-section">
            <h2 className="section-title">{t('blog.featured')}</h2>
            <div className="featured-grid">
              {featuredPosts.map(post => (
                <article key={post.slug} className="featured-article">
                  <div className="article-image">
                    <img src={post.image || '/images/blog/default.jpg'} alt={post.title} />
                    <div className="article-category">{post.category}</div>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="article-excerpt">{post.excerpt}</p>
                    <div className="article-meta">
                      <span className="article-date">{formatDate(post.date)}</span>
                      <span className="article-read-time">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="read-more-btn">
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
          {filteredPosts.length > 0 ? (
            <div className="articles-grid">
              {filteredPosts.map(post => (
                <article key={post.slug} className="article-card">
                  <div className="article-image">
                    <img src={post.image || '/images/blog/default.jpg'} alt={post.title} />
                    <div className="article-category">{post.category}</div>
                  </div>
                  <div className="article-content">
                    <h3 className="article-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="article-excerpt">{post.excerpt}</p>
                    <div className="article-meta">
                      <span className="article-author">{currentLanguage === 'es' ? 'Por' : 'By'} {post.author}</span>
                      <span className="article-date">{formatDate(post.date)}</span>
                      <span className="article-read-time">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="read-more-btn">
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
  );
};

export default Blog;