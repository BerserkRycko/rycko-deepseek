import { useLanguage } from '../../../hooks/useLanguage';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useLanguage(); 

  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} - {t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;