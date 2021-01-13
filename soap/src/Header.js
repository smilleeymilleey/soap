import React from 'react';
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
             <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLush">SOAP</span>
                </div>
                
            </div>

            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineTwo">Stories</span>
                </div>
                
            </div>

            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineTwo">Charity</span>
                </div>
                
            </div>

            

            <div className="header__search">
                <SearchIcon>
                </SearchIcon>
                <input
                className="header_searchInput" 
                type="text"
                
                
                />
              
          
                
            </div>
            
            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineTwo">
                    <PersonOutlineIcon>

                    </PersonOutlineIcon>
                     Log In
                </span>
                </div>
                
            </div>
            <h1 className="header__L">|</h1>
            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineTwo">Join</span>
                </div>

            </div>
            
            <div className="header_nav">
                <div className="header_option">
                <span className="header__optionLineTwo">
                    <ShoppingBasketIcon>
                    
                    </ShoppingBasketIcon>
                </span>
                </div>

            </div> 
         
           
        </div>
    );
}

export default Header;



