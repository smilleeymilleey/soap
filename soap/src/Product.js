import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';



function Product() {
    return (
        <div className="grid-container">
            <div className="grid-product">
                <h1>Lavender Soap</h1>
                <h2 className="rating">
                    <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                </h2>
                <img 
                    className="soap" 
                    src="https://cdn.pixabay.com/photo/2017/09/07/19/43/soap-2726387_960_720.jpg" 
                    alt="lavender soap">
                </img>
                <div>
                <button className="cartbutton">Add To Cart</button>

                </div>
                

            </div>
            <div className="grid-product"> 
                 <h1>Eucalyptus Soap</h1>
                 <h2 className="rating">
                     <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                </h2>
                    <img 
                        className="soap" 
                        src="https://cdn.pixabay.com/photo/2017/09/07/19/46/soap-2726394_960_720.jpg" 
                        alt="eucalyptus soap">  
                    </img>
                    <div>
                    <button className="cartbutton">Add To Cart</button>
                </div>
            </div>
            <div className="grid-product">
                 <h1>PepperMint Soap </h1>
                 <h2 className="rating">
                     <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></h2>
                 <img 
                    className="soap" 
                    src="https://cdn.pixabay.com/photo/2017/09/07/19/38/soap-2726371_960_720.jpg" 
                    alt="peppermint soap">
                 </img>
                 <div>
                <button className="cartbutton">Add To Cart</button>

                </div>
            </div>
            <div className="grid-product">
                 <h1>Lavender Lotion </h1>
                 <h2 className="rating">
                     <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                </h2>   
                 <img 
                 className="soap" 
                 src="https://cdn.pixabay.com/photo/2018/07/07/11/55/cream-3521957_960_720.jpg" 
                 alt="lotion">  
                 </img>
                 <div>
                    <button className="cartbutton">Add To Cart</button>
                </div>
            </div>
            <div className="grid-product"> 
             <h1>Aloe Lotion</h1>
             <h2 className="rating">
                 <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
            </h2>
             <img 
                className="soap" 
                src="https://cdn.pixabay.com/photo/2019/02/07/13/28/cream-3981206_960_720.jpg" 
                alt="lotion">
            </img>
                <div>
                  <button className="cartbutton">Add To Cart</button>
                 </div> 
             </div>
            <div className="grid-product">
                <h1>Peppermint Lotion </h1>
                    <h2 className="rating">
                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                    </h2>
                         <img 
                            className="soap"
                            src="https://cdn.pixabay.com/photo/2018/06/25/13/00/cream-3496778_960_720.jpg" 
                            alt="lotion">
                        </img> 
                    <div>
                        <button className="cartbutton">Add To Cart</button>

                    </div>
            </div>
      
      
        </div>
    )
}

export default Product;
