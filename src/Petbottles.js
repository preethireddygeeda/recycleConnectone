
import React from 'react';
import { Button } from './styles/Button';
import './Petbottles.css';

const Petbottles = () => {
  return (
  
    <div>
    <h1>Pet bottles</h1>
    <div className="card">
      
     
      <div className="card-image">
      <img src="https://www.packaging-gateway.com/wp-content/uploads/sites/16/2022/09/shutterstock_1658616850_edited.jpg" />
      </div>
      <div className="card-content">
        <div className="card-title">Petbottles</div>
        <div className="card-price">PRICE FOR ONE KG 12 RS </div>
        <div className="card-description">
         recycling is a sustainable practice that involves collecting, processing, and reusing  to create new products.
        

        </div>
        <div className="card-features">
          <ul>
            <li>MATERIAL : Petbottles</li>
            <li>NO OF LOADS :10</li>
            <li>QUALITY: BEST</li>
            <li></li>
          </ul>
        </div>
        
        <a href="https://wa.me/8309916906?text=Hello%20there">
        <Button>BUY</Button>               <Button > SELL</Button> 
        </a>
        <br/>
        <br/>
           
               <Button>AddToCart</Button>
        
        

       
       
      
      </div>
    </div>
  </div>
);
};
export default Petbottles;
