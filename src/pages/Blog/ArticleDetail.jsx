import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { loadBlogPost } from '../../utils/blogLoader';
import './Blog.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const { t, currentLanguage } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const loadedPost = await loadBlogPost(slug, currentLanguage);
        setPost(loadedPost);
      } catch (error) {
        console.error('Error loading blog post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, currentLanguage]);

  if (loading) {
    return (
      <div className="article-detail">
        <div className="container">
          <div className="loading-spinner">
            <p>{t('blog.loading') || 'Loading article...'}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="article-detail">
        <div className="container">
          <div className="article-not-found">
            <h2>{t('blog.notFound') || 'Article Not Found'}</h2>
            <Link to="/blog" className="btn">{t('blog.backToBlog')}</Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', options);
  };

  const Content = post.Content;

  return (
    <div className="article-detail">
      <div className="container">
        <Link to="/blog" className="back-link">
          ← {t('blog.backToBlog')}
        </Link>

        <article className="article-full">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">{post.category}</span>
              <span className="article-date">{t('blog.publishedOn')} {formatDate(post.date)}</span>
              <span className="article-read-time">{post.readTime}</span>
            </div>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-excerpt">{post.excerpt}</p>
            <div className="article-author">
              {currentLanguage === 'es' ? 'Por' : 'By'} {post.author}
            </div>
          </header>

          {post.image && (
            <div className="article-image-full">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <div className="article-content">
            {Content ? <Content /> : (
              <div className="content-unavailable">
                <p>Content not available for this article.</p>
              </div>
            )}
          </div>

          <footer className="article-footer">
            <Link to="/blog" className="btn">
              {t('blog.backToBlog')}
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;