import React from 'react';
import './Footer.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter'; 


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
                    <p> <EmailIcon /> halogoddessforever@gmail.com</p>
                    <p> <PhoneIcon /> (555)555-5555</p>
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
                <h1>Social Media</h1>
                <p><InstagramIcon /> Instagram</p>
                <p> <FacebookIcon /> Facebook</p>
                <p> <TwitterIcon /> Twitter</p>
            </div>
        </div>
             
             </div>  
        
    )
}

export default Footer;
