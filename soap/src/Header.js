import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"; 



function Header() {

    return (
        <div className="header">

           <div className="header_nav">
              
              <div className="header_option">
              <span className="header__soap">SOAP</span>
             
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
                
                <span className="header__optionLineTwo"> <PermIdentityIcon /> Login  |</span>
                </div>

            </div>
            <div className="header_nav">
                <div className="header_option">
              
                <span className="header__optionLineTwo"></span>
                
                
                <Link to="/cart" className="btn btn-primary">
                    
                <ShoppingBasketIcon />

                </Link>
              
              </div>
              </div>
           
        </div>
    );
}

export default Header;

