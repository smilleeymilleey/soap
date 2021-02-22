import React from 'react';
import './Footer.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'; 
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
                   <p><a href="mailto:halogoddessforever@gmail.com?subject=Mail From Soap">Email Us </a>  <EmailIcon /> </p>
                    <p> (555)555-5555 <PhoneIcon /> </p>
                </div>
            </div>
          <div className="column">
            <div className="Contact">
                <h1>About</h1>

                <Link to="/about" className="btn btn-primary">About Us</Link>

                <p>Charities We Support</p>
               
                
            </div>
        </div>
        <div className="column">
            <div className="Contact">
                <h1>Social Media</h1>
                <p><a href="https://www.instagram.com/">Instagram</a> <InstagramIcon /> </p>

                <p><a href="https://www.facebook.com/">Facebook</a> <FacebookIcon /> </p>

                <p><a href="https://twitter.com/">Twitter</a> <TwitterIcon /> </p>


            </div>
        </div>
             
             </div>  
        
    )
}

export default Footer;
