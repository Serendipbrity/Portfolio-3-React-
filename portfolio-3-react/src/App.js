// import logo from './logo.svg';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import './App.css';
import './index'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <ContactForm />
        </main>
    </div>
  );
}

export default App;
