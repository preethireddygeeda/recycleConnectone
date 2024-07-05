
import React from 'react';
import { Button } from './styles/Button';
import './Newspaper.css';

const Newspaper = () => {
  return (
    <div>
      <h1>NEWSPAPER</h1>
      <div className="card">
        
       
        <div className="card-image">
        <img src="https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg" alt="Nokia 42" />
        </div>
        <div className="card-content">
          <div className="card-title">NEWSPAPER</div>
          <div className="card-price">PRICE FOR ONE KG 5 RS </div>
          <div className="card-description">
          Newspaper recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          

          </div>
          <div className="card-features"> 
            <ul>
              <li>MATERIAL : NEWSPAPER</li>
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
export default Newspaper;
