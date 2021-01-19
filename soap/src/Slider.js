import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Cream from './img/Cream.jpg';
import Lips from './img/Lips.jpg';
import Soap from './img/Soap.jpg';
import './Slider.css';


function Slider() {
  return (
    <div className="slider">
        <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={Cream} className="sliderimg"/>
            <img src={Soap} className="sliderimg"/>
            <img src={Lips} className="sliderimg"/>
            
        </AliceCarousel>
        
    </div>
  );
};

export default Slider;
