import { useLanguage } from '../../../hooks/useLanguage';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage(); 

  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} - {t('footer.rights')}</p>
      <div style={{ marginTop: '20px', padding: '20px', borderTop: '1px solid #ccc' }}>
  <a href="/private-policy" style={{ marginRight: '15px' }}>Política de Privacidad</a>
  <a href="/cookies-policy">Política de Cookies</a>
</div>
    </footer>
  );
};

export default Footer;