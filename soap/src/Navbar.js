import React from 'react';
import "./Navbar.css";



function Navbar() {
    return (
    <div class="topnav" id="myTopnav">

    
        
    <div class="dropdown">
        <button class="dropbtn">Face
            <i class="fa fa-caret-down"></i>
       </button>
       <div class="dropdown-content">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
          
        </div>
    
    </div>      




    <div class="dropdown">
        <button class="dropbtn">Body
            <i class="fa fa-caret-down"></i>
       </button>
       <div class="dropdown-content">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
          
        </div>
    
    </div>      




        <div class="dropdown">
          <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
          
        </div>
    
      
      
      </div>
      </div>
    )
}

export default Navbar
