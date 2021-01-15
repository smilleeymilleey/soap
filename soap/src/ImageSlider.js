import React from 'react';
import "./ImageSlider.css";
import { SliderData } from './SliderData';





const ImageSlider = () => {
    return (

        <>
         {SliderData.map((slide, index) => {
             return (
                <img src={slide.image} alt="soap" />
             )

         })} 

        </>
       

        
        
    )
};

export default ImageSlider;
