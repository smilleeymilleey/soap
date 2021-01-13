import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
        <a href="#default" class="logo">SOAP</a>
        
         <a href="#charity">Charity Pot</a>
          <a href="#stories">Stories</a>
          <div className="search__center">
          <input className="search__center" type="text" placeholder="Search"></input>
          </div>
          <a href="#stories">Login</a>
        
      </div>


    )

    }

export default Header;

