import { LanguageProvider } from './locales/LanguageProviders';
import AppRouter from './routes/AppRoutes';
import Analytics from './components/shared/Analytics/Analytics';
import CookieBanner from './components/shared/CoockieBanner/CoockieBanner';

import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <Analytics />
      <AppRouter />
      <CookieBanner />
    </LanguageProvider>
  );
}

export default App;