import './App.css';
import React from 'react';
import Home from './Home.js';
import About from './About.js';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header.js';
import Navbar from "./Navbar.js";
import Footer from './Footer';
import Cart from './Cart';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Header />
      <Navbar/>
        
    

     
       <Route path="/about" exact component={About}>
       </Route>

      <Route path="/home" exact component={Home}>
      </Route>

      <Route path="/cart" exact component={Cart}>
      </Route>
    
       <Footer />
     
      </div>
    </BrowserRouter>

  );
}

export default App;
