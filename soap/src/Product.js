import React from 'react';
import "./Product.css";


function Product() {
    return (
        <div className="grid-container">
            <div className="grid-product">
                <h1>Lavender Soap</h1>
                <h2 className="rating">****</h2>
                <img className="lavender__Soap" src="https://cdn.pixabay.com/photo/2016/02/22/09/17/soap-1215027_960_720.jpg" alt="lavender soap"></img>
            </div>
            <div className="grid-product2"> 
                 <h1>Eucalyptus Soap</h1>
            </div>
            <div className="grid-product3">
                 <h1>PepperMint Soap </h1>
            </div>
            <div className="grid-product4">
                 <h1>Lavender Lotion </h1>   
            </div>
            <div className="grid-product5"> 
             <h1>Eculayptus Lotion</h1>
             </div>
            <div className="grid-products6">
                <h1>Peppermint Lotion </h1> 
            </div>
            <div className="grid-products7"> 
                <h1>Lavender Chaptstick </h1>
            </div>
            <div className="grid-product8"> 
                <h1>Eucalyptus Chapstick </h1>
            </div>
            <div className="grid-product9"> 
                <h1> Peppermint Chapstick </h1>
             </div>
        
      
        </div>
    )
}

export default Product;
