import React from 'react';
import Header from './components/Header/Header';
import NewsList from './pages/NewsList/NewsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <NewsList />
      <footer></footer>
    </div>
  );
}

export default App;
