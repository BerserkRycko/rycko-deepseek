import { LanguageProvider } from './locales/LanguageProviders';
import AppRouter from './routes/AppRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytics from './components/shared/Analytics/Analytics';
import CookieBanner from './components/shared/CoockieBanner/CoockieBanner';
import './styles/global.css';

import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Para testing: eliminar el consentimiento previo
    // localStorage.removeItem('cookieConsent');
    // localStorage.removeItem('cookieConsentDate');
    
    console.log('App montada - Cookie consent:', localStorage.getItem('cookieConsent'));
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
      <Analytics />
      <AppRouter />
      <CookieBanner />
      </BrowserRouter>
    </LanguageProvider>
  );
}


export default App;