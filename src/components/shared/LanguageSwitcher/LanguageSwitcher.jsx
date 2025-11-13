import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => switchLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`language-btn ${currentLanguage === 'es' ? 'active' : ''}`}
        onClick={() => switchLanguage('es')}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;