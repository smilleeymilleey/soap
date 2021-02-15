
import React from 'react';
import Product from "./Product";
import './Home.css';


function Home() {
    return (
        

        <div className="home">
            <div className="home__container">
                
        <div className="home__row">
            
        
            <Product
            id="1"
            title="Lavender Soap"
            price={6.00}
            image="https://cdn.pixabay.com/photo/2017/09/07/19/43/soap-2726387_960_720.jpg"
            rating={5}
            />
       

            <Product
            id="2"
            title="Eucalyptus Soap"
            price={6.00}
            image="https://cdn.pixabay.com/photo/2017/09/07/19/46/soap-2726394_960_720.jpg"
            rating={5}
            />

            <Product
            id="3"
            title="Peppermint Soap"
            price={6.00}
            image="https://cdn.pixabay.com/photo/2017/09/07/19/38/soap-2726371_960_720.jpg"
            rating={5}
            />
        </div> 
        <div className="home__row">
      
            <Product
            id="1"
            title="Lavender Lotion"
            price={16.00}
            image="https://cdn.pixabay.com/photo/2019/07/14/17/40/cream-4337708_1280.jpg"
            rating={5}
            />
     

            <Product
            id="2"
            title="Aloe Lotion"
            price={16.00}
            image="https://cdn.pixabay.com/photo/2016/04/13/22/26/cream-1327847_1280.jpg"
            rating={5}
            />

            <Product
            id="3"
            title="Peppermint Lotion"
            price={16.00}
            image="https://cdn.pixabay.com/photo/2016/04/05/14/04/skin-care-1309504_1280.jpg"
            rating={5}
            />

                     </div>
                </div>
            </div>
        
    )
}

export default Home 