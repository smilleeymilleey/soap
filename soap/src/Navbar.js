import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar__Container" id="header">
        <ul>
        <div class="dropdown">
        <li>
          <a className="active" href="index.html">Face</a>
        </li>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <li class="dropbtn">
            <a href="product.html" className="active">Body</a>
          </li>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        

    <div class="dropdown">
    <li><a href="order.ph#" className="active">Hair</a>
    </li>
    <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      </div>
     

  </ul>
</div>

    </div>
  )
}

export default Navbar
