import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} - {t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;