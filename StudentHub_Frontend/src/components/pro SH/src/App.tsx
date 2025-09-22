import React from 'react';
import Header from './components/Header';
import Exams from './components/Exams';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Exams />
      </main>
    </div>
  );
}

export default App;
