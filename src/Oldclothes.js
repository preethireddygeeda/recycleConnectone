
import React from 'react';
import { Button } from './styles/Button';
import './Oldclothes.css';

const Oldclothes = () => {
  return (
    <div>
      <h1>OLD CLOTHES</h1>
      <div className="card">
        
       
        <div className="card-image">
          <img src="https://tse4.mm.bing.net/th?id=OIP.dc3LL5FYXX2bdQfoPMLl_wHaFe&pid=Api&P=0&h=180" alt="Nokia 42" />
        </div>
        <div className="card-content">
          <div className="card-title">OLD CLOTHES</div>
          <div className="card-price">DONATE FOR FREE</div>
          <div className="card-description">
           recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          

          </div>
          <div className="card-features">
            <ul>
              <li>MATERIAL : OLD CLOTHES</li>
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

export default Oldclothes;
