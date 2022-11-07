import React from 'react';
import Header from './components/Header/Header';
import NewsList from './pages/NewsList/NewsList';
import cn from './App.module.scss';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={cn.app}>
      <Header />
      <NewsList />
      <Footer />
    </div>
  );
}

export default App;
