
import { useLanguage } from '../../../hooks/useLanguage'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import './Header.module.css'

const Header = () => {
  const { t } = useLanguage()

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {/* Reemplaza con tu logo */}
            <div className="logo-placeholder">
              <span><Link to="/" className="logo-text"><img src='logo.png'/></Link></span>
            </div>
          </div>
          
          <nav className="navigation">
            <ul className="nav-list">
              <li>
                <Link to="/" className="nav-link">{t('header.home')}</Link>
              </li>
              <li>
                <a href="#about" className="nav-link">{t('header.about')}</a>
              </li>
              <li>
                <Link to="/blog" className="nav-link">{t('header.blog')}</Link>
              </li>
              <li>
                <Link to="/gallery" className="nav-link">{t('header.gallery')}</Link>
              </li>
              <li>
                <a href="#contact" className="nav-link">{t('header.contact')}</a>
              </li>
            </ul>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default Header