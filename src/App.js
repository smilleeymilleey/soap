import './App.css';
import React, { useState } from 'react';
import Home from './Home.js';
import About from './About.js';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Header.js';
import Navbar from "./Navbar.js";
import Footer from './Footer';
import Cart from './Cart';
import Charity from './Charity.js';
import Login from './Login.js';


function App() {

 
  

  return (

    <BrowserRouter>

     <div className="App">
     <Header />
      <Navbar/>
        
    
      <Route path="/home" exact component={Home}>
      </Route>
     
       <Route path="/about" exact component={About}>
       </Route>

      
      <Route path="/cart" exact component={Cart}>
      </Route>


      <Route path="/charity" exact component={Charity}>
      </Route>

      <Route path="/login" exact component={Login}>
       </Route>
      
       <Footer />
       
      </div>
    </BrowserRouter>
   
  );

}

export default App;
