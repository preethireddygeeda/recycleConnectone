
import React from 'react';
import { Button } from './styles/Button';
import './Wool.css';

const Wool = () => {
  return (
    <div>
      <h1>WOOL</h1>
      <div className="card">
        
       
        <div className="card-image">
          <img src="data:image/jpeg;base64,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" alt="Nokia 42" />
        </div>
        <div className="card-content">
          <div className="card-title">WOOL</div>
          <div className="card-price">PRICE FOR ONE KG 12 RS </div>
          <div className="card-description">
          Wool recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          

          </div>
          <div className="card-features">
            <ul>
              <li>MATERIAL : WOOL</li>
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
  

export default Wool;
