
import './App.css';
import Header from './Header';
import Navbar from './Navbar.js';
import React from 'react';
import Slider from './Slider.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Update from './Update.js';

function App() {
  return (
   
     <div className="App">
      <Header />
      <Navbar />
      <Update />
      <Slider />
     
      <Home />
      <Footer />
        
      </div>
    

  );
}

export default App;
