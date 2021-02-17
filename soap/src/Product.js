import React from 'react';
import './Product.css';

import StarIcon from '@material-ui/icons/Star';



function Product({id, title, image, price, rating }) {
    return (
      <div className="product">
          <div className="product__info">
              <p>{title}</p>

              <div className="product__rating">
                  {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <StarIcon />
                    ))}
              </div>
           
              
             
         </div>

         <img className="image" src={image} alt=""/>
        
           
              <p className="product__price">
                  <small>$</small>
                  <strong>{price}</strong>
              </p>
        <button className="add__to__cart__button">ADD TO CART</button>
        </div>
    )
}

export default Product;
