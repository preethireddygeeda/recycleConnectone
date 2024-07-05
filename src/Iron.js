
import React from 'react';
import { Button } from './styles/Button';
import './Iron.css';

const Iron = () => {
  return (
    <div>
    <h1>Iron</h1>
    <div className="card">
      
     
      <div className="card-image">
        <img src="https://tse4.mm.bing.net/th?id=OIP.xMf618hbYJabEOGWVR-CVAHaE8&pid=Api&P=0&h=180" alt="Nokia 42" />
      </div>
      <div className="card-content">
        <div className="card-title">IRON</div>
        <div className="card-price">PRICE FOR ONE KG 15 RS </div>
        <div className="card-description">
         recycling is a sustainable practice that involves collecting, processing, and reusing  to create new products.
        

        </div>
        <div className="card-features">
          <ul>
            <li>MATERIAL : iron</li>
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
export default Iron;
