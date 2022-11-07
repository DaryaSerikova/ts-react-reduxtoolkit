import React from 'react';
import Header from './components/Header/Header';
import NewsList from './pages/NewsList/NewsList';
import cn from './App.module.scss';

function App() {
  return (
    <div className={cn.app}>
      <Header/>
      <NewsList />
      <footer></footer>
    </div>
  );
}

export default App;
