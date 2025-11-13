import React from 'react';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;