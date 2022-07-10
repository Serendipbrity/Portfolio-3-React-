// import logo from './logo.svg';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
