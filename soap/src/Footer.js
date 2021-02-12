import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer__Container">
            <div class="row">
                <div class="column">        
                </div>
            </div>
            <div className="column">
                <div className="Contact">
                    <h1>Contact</h1>
                    <p>halogoddessforever@gmail.com</p>
                    <p>(555)555-5555</p>
                </div>
            </div>
          <div className="column">
            <div className="Contact">
                <h1>About</h1>
                <p>Charity</p>
                <p>Blog</p>
                <p>Our Story</p>
            </div>
        </div>
        <div className="column">
            <div className="Contact">
                <h1> Social Media</h1>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
        </div>
             
             </div>  
        
    )
}

export default Footer;
