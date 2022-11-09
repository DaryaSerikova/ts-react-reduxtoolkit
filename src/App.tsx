import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsListPage from './pages/NewsListPage/NewsListPage';
import OneNewsPage from './pages/OneNewsPage/OneNewsPage';
import Error404Page from './pages/Error404Page/Error404Page';
import ContactPage from './pages/ContactPage/ContactPage';

import LoginPage from './pages/LoginPage/LoginPage';

import cn from './App.module.scss';
import ModalSent from './modals/ModalSent/ModalSent';



function App() {
  return (
    <div className={cn.app}>

      <LoginPage />


      {/* <Header /> */}

      {/* <NewsListPage /> */}
      {/* <OneNewsPage /> */}
      {/* <Error404Page /> */}
      {/* <ContactPage /> */}

      {/* <Footer /> */}

      {/* <ModalSent /> */}
    </div>
  );
}

export default App;
