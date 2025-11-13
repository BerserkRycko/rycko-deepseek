import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>{t('home.welcome')}</h1>
        <p>{t('home.content')}</p>
      </section>
    </div>
  );
};

export default Home;