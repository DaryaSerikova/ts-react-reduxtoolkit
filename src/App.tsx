import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsListPage from './pages/NewsListPage/NewsListPage';
import OneNewsPage from './pages/OneNewsPage/OneNewsPage';
import Error404Page from './pages/Error404Page/Error404Page';
import ContactPage from './pages/ContactPage/ContactPage';

import cn from './App.module.scss';



function App() {
  return (
    <div className={cn.app}>
      <Header />

      {/* <NewsListPage /> */}
      {/* <OneNewsPage /> */}
      {/* <Error404Page /> */}
      <ContactPage />

      <Footer />
    </div>
  );
}

export default App;
