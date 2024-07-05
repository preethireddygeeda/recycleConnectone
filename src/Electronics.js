
import React from 'react';
import { Button } from './styles/Button';
import './Electronics.css';

const Electronics = () => {
  return (
    <div>
      <h1>ELECTRONICS</h1>
      <div className="card">
        
       
        <div className="card-image">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Ntqc6q6kuHW3r5dzVEeDBwHaEK&pid=Api&P=0&h=180" alt="Nokia 42" />
        </div>
        <div className="card-content">
          <div className="card-title">ELECTRONICS</div>
          <div className="card-price">16</div>
          <div className="card-description">
          recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          MATERIAL : ELECTRONICS
          NO OF LOADS: 10
          QUALITY: BETTER 

          </div>
          <div className="card-features">
            <ul>
              <li>MATERIAL : ELECTRONICS</li>
              <li>NO OF LOADS :10</li>
              <li>QUALITY: BEST</li>
              <li></li>
            </ul>
          </div>
          
          <a href="https://wa.me/8309916906?text=Hello%20there">
          <Button>BUY</Button>
          
          <br></br>
          <a href="https://wa.me/8309916906?text=Hello%20there">
            <Button > SELL</Button>
          </a>
         </a>
         
        
        </div>
      </div>
    </div>
  );
};

export default Electronics;
