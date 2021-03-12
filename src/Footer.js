import React from 'react';
import './Footer.css';

import { Link } from "react-router-dom"; 


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
                   <p><a href="mailto:fakeEmail@gmail.com?subject=Mail From Soap">Email Us </a>  <EmailIcon /> </p>
                    <p> (555)555-5555  </p>
                </div>
            </div>
          <div className="column">
            <div className="Contact">
                <h1>About</h1>

                <Link to="/about" className="btn btn-primary">About Us</Link>
                    <br></br>
                <Link to="/charity">Charities We Support</Link>
               
                
            </div>
        </div>
        <div className="column">
            <div className="Contact">
                <h1>Social Media</h1>
                <p><a href="https://www.instagram.com/">Instagram</a>  </p>

                <p><a href="https://www.facebook.com/">Facebook</a> </p>

                <p><a href="https://twitter.com/">Twitter</a>  </p>


            </div>
        </div>
             
             </div>  
        
    )
}

export default Footer;
