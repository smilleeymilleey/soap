import React { useState } from 'react';


function Product({title, image, price, rating}) {
    return (
        
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)}
            
            </div>
       
        <img src={image} alt="" />
        </div>
    )
}

export default Product
