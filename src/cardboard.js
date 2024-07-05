
import React from 'react';

import './cardboard.css';

const cardboard = () => {
  return (
    <div>
      <h1>CARDBOARD</h1>
      <div className="card">
        
       
        <div className="card-image">
          <img src="" />
        </div>
        <div className="card-content">
          <div className="card-title">CARDBOARD</div>
          <div className="card-price">PRICE FOR ONE KG 12 RS </div>
          <div className="card-description">
          
          MATERIAL : CARDBOARD  
          NO OF LOADS: 10
          QUALITY: GOOD  

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
          <button>BUY</button>
          
          <br></br>
          <a href="https://wa.me/8309916906?text=Hello%20there">
            <button > SELL</button>
          </a>
         </a>
         
        
        </div>
      </div>
    </div>
  );
};

export default cardboard;
