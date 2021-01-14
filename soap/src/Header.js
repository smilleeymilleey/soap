import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';


function Header() {

    return (
        <div className="header">

           <div className="header_nav">
              
              <div className="header_option">
              <span className="header__soap">SOAP</span>
             
              </div>
             
          </div>
          <div className="header_nav">
              
              <div className="header_option">
              <span className="header__blog">Blog</span>
             
              </div>
             
          </div>
          <div className="header_nav">
              
              <div className="header_option">
              <span className="header__blog">Donate</span>
             
              </div>
             
          </div>
            
            
            

            <div className="header_search">
                <input
                className="header_searchInput" 
                type="text"/>
                <SearchIcon
                className="header_searchIcon" />
                
            </div>
            
        
            <div className="header_nav">
                <div className="header_option">
                
                <span className="header__optionLineTwo">Login</span>
                </div>

            </div>
            <div className="header_nav">
                <div className="header_option">
              
                <span className="header__optionLineTwo"></span>
                

                <ShoppingBasketIcon />
               
              </div>
              </div>
           
        </div>
    );
}

export default Header;

