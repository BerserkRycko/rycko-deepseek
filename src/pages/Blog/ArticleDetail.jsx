import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'
import { getArticleBySlug } from '../../data/articles'
import './Blog.css'

const ArticleDetail = () => {
  const { slug } = useParams()
  const { t, currentLanguage } = useLanguage()
  const article = getArticleBySlug(slug, currentLanguage)

  if (!article) {
    return (
      <div className="article-detail">
        <div className="container">
          <div className="article-not-found">
            <h2>Article Not Found</h2>
            <Link to="/blog" className="btn">{t('blog.backToBlog')}</Link>
          </div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', options)
  }

  return (
    <div className="article-detail">
      <div className="container">
        <Link to="/blog" className="back-link">
          ← {t('blog.backToBlog')}
        </Link>

        <article className="article-full">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">{article.category}</span>
              <span className="article-date">{t('blog.publishedOn')} {formatDate(article.date)}</span>
              <span className="article-read-time">{article.readTime}</span>
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>
            <div className="article-author">
              By {article.author}
            </div>
          </header>

          <div className="article-image-full">
            <img src={article.image} alt={article.title} />
          </div>

          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <footer className="article-footer">
            <Link to="/blog" className="btn">
              {t('blog.backToBlog')}
            </Link>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default ArticleDetail