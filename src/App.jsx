import React from 'react';
import { LanguageProvider } from './locales/LanguageProviders';
import AppRouter from './routes/AppRoutes';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <AppRouter />
    </LanguageProvider>
  );
}

export default App;