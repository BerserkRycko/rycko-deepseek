import { LanguageProvider } from './locales/LanguageProviders';
import AppRouter from './routes/AppRoutes';
import CookieBanner from './components/shared/CoockieBanner/CoockieBanner';

import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <AppRouter />
      <CookieBanner />
    </LanguageProvider>
  );
}

export default App;