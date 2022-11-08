import React from 'react';
import Header from './components/Header/Header';
import NewsList from './pages/NewsList/NewsList';
import OneNews from './pages/OneNews/OneNews';
import Error404 from './pages/Error404/Error404';
import cn from './App.module.scss';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={cn.app}>
      <Header />

      {/* <NewsList /> */}
      {/* <OneNews /> */}
      <Error404 />

      <Footer />
    </div>
  );
}

export default App;
