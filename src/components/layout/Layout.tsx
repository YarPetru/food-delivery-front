import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <MainContent></MainContent>
    </>
  );
};

export default Layout;
