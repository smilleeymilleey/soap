import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
        <a href="#default" class="logo">SOAP</a>
        <div className="header-left">
          <a className="active" href="#stories">Stories</a>
          <a href="#stories">Charity Pot</a>
         
         
        </div>
        <input className="search" type="text" placeholder="Search"></input>
      </div>


    )

    }

export default Header;

