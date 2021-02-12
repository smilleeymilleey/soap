
import './App.css';
import Header from './Header';
import Navbar from './Navbar.js';
import React from 'react';
import Slider from './Slider.js';
import Product from './Product.js';

function App() {
  return (
   
     <div className="App">
      <Header />
      <Navbar />

      <Slider />
     <Product />
        
      </div>
    

  );
}

export default App;
