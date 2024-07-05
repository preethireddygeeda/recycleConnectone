
import React from 'react';
import { Button } from './styles/Button';
import './PVC.css';
const PVC = () => {
  return (
    <div>
      <h1>PVC</h1>
      <div className="card">
        
       
        <div className="card-image">
        <img src="https://tse2.mm.bing.net/th?id=OIP.qzhNNEe3bfaKPxpsMee3mgHaFW&pid=Api&P=0&h=180" />
        </div>
        <div className="card-content">
          <div className="card-title">PVC</div>
          <div className="card-price">PRICE FOR ONE KG 10 RS </div>
          <div className="card-description">
          PVC recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          

          </div>
          <div className="card-features">
            <ul>
              <li>MATERIAL : PVC</li>
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
  

export default PVC;
 