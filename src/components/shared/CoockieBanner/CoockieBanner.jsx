// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si ya hay consentimiento después de que el componente se monte
    const checkConsent = () => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      console.log('Current consent:', cookieConsent);
      
      if (!cookieConsent) {
        // Pequeño delay para mejor UX
        setTimeout(() => {
          setShowBanner(true);
        }, 1500);
      }
    };

    checkConsent();
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    console.log('Cookies accepted');
    
    // Aquí puedes inicializar Google Analytics u otras cookies si las usas
    // initializeAnalytics();
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    // Limpiar cookies existentes
    clearAllCookies();
    console.log('Cookies rejected');
  };

  const clearAllCookies = () => {
    // Limpiar cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    
    // Limpiar almacenamiento local (excepto el consentimiento)
    const consent = localStorage.getItem('cookieConsent');
    const consentDate = localStorage.getItem('cookieConsentDate');
    localStorage.clear();
    sessionStorage.clear();
    
    // Restaurar el consentimiento
    if (consent) {
      localStorage.setItem('cookieConsent', consent);
      localStorage.setItem('cookieConsentDate', consentDate);
    }
  };

  const openPolicy = (path) => {
    window.open(path, '_blank');
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div style={bannerStyles}>
      <div style={contentStyles}>
        <div style={textStyles}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>
            🍪 Uso de Cookies
          </h3>
          <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.4', color: '#666' }}>
            Utilizamos cookies esenciales para el funcionamiento de la aplicación. 
            Estas cookies nos ayudan a mejorar su experiencia y a entender cómo usa nuestro sitio.
          </p>
          <div style={{ fontSize: '13px', marginBottom: '15px' }}>
            <button 
              onClick={() => openPolicy('/privacidad')}
              style={linkButtonStyles}
            >
              Política de Privacidad
            </button>
            <span style={{ margin: '0 10px', color: '#ccc' }}>|</span>
            <button 
              onClick={() => openPolicy('/cookies')}
              style={linkButtonStyles}
            >
              Política de Cookies
            </button>
          </div>
        </div>
        
        <div style={buttonsStyles}>
          <button 
            onClick={rejectCookies}
            style={rejectButtonStyles}
          >
            Rechazar
          </button>
          <button 
            onClick={acceptCookies}
            style={acceptButtonStyles}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

// Estilos
const bannerStyles = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderTop: '2px solid #007bff',
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
  zIndex: 10000,
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
  gap: '12px',
  flexShrink: 0
};

const linkButtonStyles = {
  background: 'none',
  border: 'none',
  color: '#007bff',
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '13px',
  padding: '0'
};

const rejectButtonStyles = {
  padding: '10px 20px',
  backgroundColor: 'transparent',
  color: '#6c757d',
  border: '1px solid #6c757d',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  minWidth: '80px'
};

const acceptButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  minWidth: '80px'
};


export default CookieBanner;