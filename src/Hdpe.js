
import React from 'react';
import { Button } from './styles/Button';
import './Hpde.css';

const Hdpe = () => {
  return (
    <div>
      <h1>HDPE</h1>
      <div className="card">
        
       
        <div className="card-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRci9Pp5LFWCklAkxduoIvDdDbrK_xY28QLqnt6m1iT3v-JF_9nklP3pAE6pEo5a8OViqw&usqp=CAU" alt="Nokia 42" />
        </div>
        
        <div className="card-content">
          <div className="card-title">HDPE</div>
          <div className="card-price">PRICE FOR ONE KG 10 RS </div>
          <div className="card-description">
          HDPE recycling is a sustainable practice that involves collecting, processing, and reusing wool fibers to create new products.
          MATERIAL : HDPE
          NO OF LOADS: 10
          QUALITY: BETTER 

          </div>
          <div className="card-features">
            <ul>
              <li>MATERIAL : HDPE</li>
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

export default Hdpe;
