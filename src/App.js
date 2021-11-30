import React from 'react';
import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
