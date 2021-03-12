import React from 'react';
import './Product.css';





function Product({id, title, image, price, rating }) {



    return (
      <div className="product">
          <div className="product__info">
              <p className="title">{title}</p>

              <div className="product__rating">
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <h2>*</h2>
                    ))}
              </div>
           
              
             
         </div>
       
         <img className="image" src={image} alt=""/>
      
        
              <p className="product__price">
                  <small>$</small>
                  <strong>{price}</strong>
                
              </p>
              <button  className="cart__Button">Add To Cart</button>
        </div>
    )
}

export default Product;