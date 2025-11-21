// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';
import './CookieBanner.css'; // Opcional: para estilos CSS

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si ya hay consentimiento
    const cookieConsent = localStorage.getItem('cookieConsent');
    console.log('Cookie consent value:', cookieConsent); // Para depuración
    
    if (!cookieConsent) {
      // Pequeño delay para asegurar que el DOM esté listo
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    console.log('Cookies accepted'); // Para depuración
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    // Limpiar cookies existentes si las hay
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    localStorage.clear();
    sessionStorage.clear();
    console.log('Cookies rejected'); // Para depuración
  };

  const openPrivacyPolicy = () => {
    window.open('/privacidad', '_blank');
  };

  const openCookiesPolicy = () => {
    window.open('/cookies', '_blank');
  };

  // Si no mostrar banner, retornar null
  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner" style={bannerStyles}>
      <div className="cookie-content" style={contentStyles}>
        <div className="cookie-text" style={textStyles}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>🍪 Uso de Cookies</h3>
          <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.4' }}>
            Utilizamos cookies esenciales y tecnologías similares para mejorar su experiencia 
            en nuestro sitio web. Las cookies nos ayudan a entender cómo interactúa con nuestra 
            aplicación y a mejorar nuestro servicio.
          </p>
          <div style={{ fontSize: '13px', marginBottom: '15px' }}>
            <span 
              style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={openPrivacyPolicy}
            >
              Política de Privacidad
            </span>
            {' · '}
            <span 
              style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
              onClick={openCookiesPolicy}
            >
              Política de Cookies
            </span>
          </div>
        </div>
        
        <div className="cookie-buttons" style={buttonsStyles}>
          <button 
            onClick={rejectCookies}
            style={rejectButtonStyles}
            className="cookie-btn reject-btn"
          >
            Rechazar
          </button>
          <button 
            onClick={acceptCookies}
            style={acceptButtonStyles}
            className="cookie-btn accept-btn"
          >
            Aceptar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

// Estilos en línea (puedes moverlos a CSS)
const bannerStyles = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderTop: '2px solid #007bff',
  boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
  zIndex: 9999,
  fontFamily: 'Arial, sans-serif'
};

const contentStyles = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px'
};

const textStyles = {
  flex: '1',
  color: '#333'
};

const buttonsStyles = {
  display: 'flex',
  gap: '10px',
  flexShrink: 0
};

const rejectButtonStyles = {
  padding: '10px 20px',
  backgroundColor: 'transparent',
  color: '#6c757d',
  border: '1px solid #6c757d',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500'
};

const acceptButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500'
};

export default CookieBanner;