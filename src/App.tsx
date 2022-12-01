import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsListPage from './pages/NewsListPage/NewsListPage';
import OneNewsPage from './pages/OneNewsPage/OneNewsPage';
import Error404Page from './pages/Error404Page/Error404Page';
import ContactPage from './pages/ContactPage/ContactPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MainPage from './pages/MainPage/MainPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';

import ModalSent from './modals/ModalSent/ModalSent';
import cn from './App.module.scss';



function App() {

  const location = useLocation();
  const path = location.pathname;


  return (
    <div className={cn.app}>

      { (path !== "/signin" && path !== "/signup") ? <Header /> : <></>}
      <Routes>

        <Route path="/news" element={<NewsListPage />} />
        <Route path="/news/:newsId" element={<OneNewsPage />} />
        <Route path="*" element={<Error404Page/>} />
        <Route path="/contacts" element={<ContactPage />} />

        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />

      </Routes>
      {/* <ModalSent /> */}
      { (path !== "/signin" && path !== "/signup") ? <Footer /> : <></>}

    </div>
  );
}

export default App;
