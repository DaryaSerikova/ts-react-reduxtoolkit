import React from 'react';
import Header from './components/Header/Header';
import NewsList from './pages/NewsList/NewsList';
import OneNews from './pages/OneNews/OneNews';
import cn from './App.module.scss';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={cn.app}>
      <Header />

      {/* <NewsList /> */}
      <OneNews />

      <Footer />
    </div>
  );
}

export default App;
