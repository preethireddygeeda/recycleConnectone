

import React from 'react';
import { Button } from './styles/Button';
import './Steel.css';

const Steel = () => {
  return (
    <div>
      <h1>Steel</h1>
      <div className="card">
        
       
        <div className="card-image">
          <img src="data:image/jpeg;base64,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" alt="Nokia 42" />
        </div>
        <div className="card-content">
          <div className="card-title">Steel</div>
          <div className="card-price">PRICE FOR ONE KG 15 RS </div>
          <div className="card-description">
          STEEL recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          

          </div>
          <div className="card-features">
            <ul>
              <li>MATERIAL : STEEL</li>
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
  


export default Steel;
