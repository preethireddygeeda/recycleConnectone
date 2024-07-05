
import React from 'react';

import './magazines.css';

const magazines = () => {
  return (
    <div>
    <h1>WOOL</h1>
    <div className="card">
      
     
      <div className="card-image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk83ZWMBJ-yqp593DceT6aTaUxorWvWumxA8sZ6iQMCA&s" />
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
export default magazines;
