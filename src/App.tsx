import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewsListPage from './pages/NewsListPage/NewsListPage';
import OneNewsPage from './pages/OneNewsPage/OneNewsPage';
import Error404Page from './pages/Error404Page/Error404Page';
import ContactPage from './pages/ContactPage/ContactPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import ModalSent from './modals/ModalSent/ModalSent';
import cn from './App.module.scss';
import MainPage from './pages/MainPage/MainPage';



function App() {
  return (
    <div className={cn.app}>
      <Header />

      <Routes>
        <Route path="/newsList" element={<NewsListPage />} />
        <Route path="/oneNews" element={<OneNewsPage />} />
        <Route path="*" element={<Error404Page/>} />
        <Route path="/contacts" element={<ContactPage />} />

        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />

        <Route path="/main" element={<MainPage />} />
        

      </Routes>

      {/* <ModalSent /> */}
      <Footer />

    </div>
  );
}

export default App;
