
import React from 'react';
import Product from "./Product";
import './Home.css';
import Header from './Header.js';
import Navbar from "./Navbar.js";
import Update from './Update.js';
import Slider from './Slider';
import Footer from './Footer';

function Home() {
    return (
        

        <div className="home">
            <div className="home__container">

        <Header />
        <Navbar/>
        <Update />
        <Slider />
                
        <div className="home__row">
            
        
            <Product
            className="product"
            id="1"
            title="Lavender Soap"
            price={6.00}
            image="https://cdn.pixabay.com/photo/2017/09/07/19/43/soap-2726387_960_720.jpg"
            rating={5}
            />
            
           
           
            <Product
            className="product"
            id="2"
            title="Oatmeal Soap"
            price={6.00}
            image="https://cdn.pixabay.com/photo/2017/09/07/19/46/soap-2726394_960_720.jpg"
            rating={5}
            />
         

            <Product
            className="product"
            id="3"
            title="Peppermint Soap"
            price={6.00}
            image="https://cdn.pixabay.com/photo/2017/09/07/19/38/soap-2726371_960_720.jpg"
            rating={5}
            />

          

        </div> 

     

        <div className="home__row">
      
            <Product
            className="product"
            id="1"
            title="Lavender Lotion"
            price={16.00}
            image="https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_1280.jpg"
            rating={5}
            />
         
            <Product
            className="product"
            id="2"
            title="Aloe Lotion"
            price={16.00}
            image="https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_1280.jpg"
            rating={5}
            />

           

            <Product
            className="product"
            id="3"
            title="Peppermint Lotion"
            price={16.00}
            image="https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_1280.jpg"
            rating={5}
            />
            
        
           </div>

           <Footer />
        

         </div>
      </div>
       
        
    )
}

export default Home;