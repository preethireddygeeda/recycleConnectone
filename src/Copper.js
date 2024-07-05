
import React from 'react';
import { Button } from './styles/Button';
import './Copper.css';

const Copper = () => {
  return (
    <div>
      <h1>COPPER</h1>
      <div className="card">
        
       
        <div className="card-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXI1vMUjwJspFDGZi52jkoVPZeYPjQnFS5eA&s" />
        </div>
        <div className="card-content">
          <div className="card-title">COPPER</div>
          <div className="card-price">PRICE FOR ONE KG 15 RS </div>
          <div className="card-description">
          COPPER recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          MATERIAL : COPPER
          NO OF LOADS: 15
          QUALITY: BETTER 

          </div>
          <div className="card-features">
            <ul>
              <li>MATERIAL : COPPER</li>
              <li>NO OF LOADS :10</li>
              <li>QUALITY: BEST</li>
              <li></li>
            </ul>
          </div>
          
          <a href="https://wa.me/8309916906?text=Hello%20there">
          <Button>BUY</Button>
          
          <br></br>
          <br>
          </br>
          <a href="https://wa.me/8309916906?text=Hello%20there">
            <Button > SELL</Button>
          </a>
         </a>
         
        
        </div>
      </div>
    </div>
  );
};
export default Copper;
