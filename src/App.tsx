import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsListPage from './pages/NewsListPage/NewsListPage';
import OneNewsPage from './pages/OneNewsPage/OneNewsPage';
import Error404Page from './pages/Error404Page/Error404Page';
import ContactPage from './pages/ContactPage/ContactPage';
import LoginPage from './pages/LoginPage/LoginPage';
import LogUpPage from './pages/LogUpPage/LogUpPage';

import ModalSent from './modals/ModalSent/ModalSent';
import cn from './App.module.scss';
import MainPage from './pages/MainPage/MainPage';



function App() {
  return (
    <div className={cn.app}>

      {/* <LoginPage /> */}
      {/* <LogUpPage /> */}


      <Header />

      <NewsListPage />
      {/* <OneNewsPage /> */}
      {/* <Error404Page /> */}
      {/* <ContactPage /> */}
      {/* <MainPage /> */}

      <Footer />

      {/* <ModalSent /> */}
    </div>
  );
}

export default App;
