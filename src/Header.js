import React from 'react';
import './Header.css';

import { Link } from "react-router-dom"; 



function Header() {

    return (
        <div className="header">

           <div className="header_nav">
              
              <div className="header_option">
              <Link to="/home"className="header__soap">SOAP</Link>
             
              </div>
             
          </div>
       
            
            
            

            <div className="header_search">
                <input
                className="header_searchInput" 
                type="text"/>
                
                
            </div>
            
        
            <div className="header_nav">
                <div className="header_option">
                
                <Link to="/login" className="header__optionLineTwo"> Login  |</Link>
                </div>

            </div>
            <div className="header_nav">
                <div className="header_option">
              
                <span className="header__optionLineTwo"></span>
                
                Cart
                
                    
            

               
              </div>
              </div>
           
        </div>
    );
}

export default Header;

