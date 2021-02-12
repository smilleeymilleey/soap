import React from 'react';
import "./Product.css";


function Product() {
    return (
        <div className="grid-container">
            <div className="grid-product">
                <h1>Lavender Soap</h1>
                <h2 className="rating">****</h2>
                <img className="soap" src="https://cdn.pixabay.com/photo/2017/09/07/19/43/soap-2726387_960_720.jpg" alt="lavender soap"></img>
            </div>
            <div className="grid-product"> 
                 <h1>Eucalyptus Soap</h1>
                 <h2 className="rating">*****</h2>
                 <img className="soap" src="https://cdn.pixabay.com/photo/2017/09/07/19/46/soap-2726394_960_720.jpg" alt="eucalyptus soap">  
                 </img>
            </div>
            <div className="grid-product">
                 <h1>PepperMint Soap </h1>
                 <h2 className="rating">*****</h2>
                 <img className="soap" src="https://cdn.pixabay.com/photo/2017/09/07/19/38/soap-2726371_960_720.jpg" alt="peppermint soap"></img>
            </div>
            <div className="grid-product">
                 <h1>Lavender Lotion </h1>   
            </div>
            <div className="grid-product"> 
             <h1>Eculayptus Lotion</h1>
             </div>
            <div className="grid-product">
                <h1>Peppermint Lotion </h1> 
            </div>
            <div className="grid-product"> 
                <h1>Lavender Chaptstick </h1>
            </div>
            <div className="grid-product"> 
                <h1>Eucalyptus Chapstick </h1>
            </div>
            <div className="grid-product"> 
                <h1> Peppermint Chapstick </h1>
             </div>
        
      
        </div>
    )
}

export default Product;
