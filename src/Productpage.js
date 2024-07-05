
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Productpage.css';

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'IRON', category: 'METAL', price: 35, image: 'https://media.istockphoto.com/id/186326832/photo/solid-aluminum-tubes.jpg?s=612x612&w=0&k=20&c=xjWX6vEhfvQ7qL8t_XAEWg6lP8D4_qS1ZDPDrhhBVgk=' },
    { id: 2, name: 'NEWS PAPER', category: 'PAPER', price: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSXr1bcokn8Z3JjDgd89udXvNNP5ABNWNcw&usqp=CAU' },
    { id: 3, name: 'PET BOTTLES', category: 'PLASTIC', price: 25, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwR2CG-4_ez9rxSFk_-V50yptpkaekjgfUVQ&usqp=CAU' },
    { id: 4, name: 'GLASS JARS', category: 'Glass', price: 30, image: 'data:image/jpeg;base64,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' },
    { id: 5, name: 'CARDBOARD', category: 'PAPER', price: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUktz37VwDofRqJu69xFev6EJkUSWQuBFxyg&usqp=CAU' },
    { id: 6, name: 'MAGAZINES', category: 'PAPER', price: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAurtCwI14hoNGrgel8pzdsyMbIBq-T9VTJ85r57kjKUjQZAtwVoGRivH_J4b3hWjhtg&usqp=CAU' },
    { id: 7, name: 'PP', category: 'PLASTIC', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvD0u_eWvsPDbsEpFGwjPHwMPMdtTAY_v5A&usqp=CAU' },
    { id: 8, name: 'LPDE PLASTIC', category: 'PLASTIC', price: 50, image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GM/FS/JN/136645771/hdpe-tarpaulin-250x250.jpg' },
    { id: 9, name: 'COPPER', category: 'MATAL', price: 620, image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/288165_2200-1200x628.jpg' },
    { id: 10, name: 'PLASTIC', category: 'PLASTIC', price: 35, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQ5IRfBlfuqQqjY0_HtEmxSIFa_lr0tWE5Q&usqp=CAU' },
    { id: 11, name: 'Aluminium', category: 'METAL', price: 140, image: 'https://t3.ftcdn.net/jpg/03/27/33/54/360_F_327335409_jQOkTJqZjTZBqmoDBpesknCPVYozPwmz.jpg' },
    { id: 12, name: 'STEEL', category: 'METAL', price: 42, image: 'https://www.melfast.com/assets/img/uploads/2016/05/3-Things-About-Stainless-Steel-Fasteners-That-You-Probably-Dont-Know.jpg' },
    { id: 13, name: 'WOOL', category: 'FIBER', price: 120, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjBYUC6EbQZ96rKKPYFMgX2KhDsHSPltT_8kVFpuKSKM9XV2IZIw6vqqSPOWwn4IP63k&usqp=CAU' },
    { id: 14, name: 'OLD CLOTHES', category: 'FIBER', price: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrN-WqqBQv5fsWoxHmwq33BQmJrWfX61oUQ&usqp=CAU' },
    { id: 15, name: 'Brass', category: 'METAL', price: 425, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNH3dZYtF9bGVSVzaIyscnMm_w8SNYeZmVsg&usqp=CAU' },
    { id: 16, name: 'HDPE', category: 'PLASTIC', price: 31, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRih49ooKlaE5cfdg2MSDv72kgspmN2pd_LS5_E2hnoZzU6uj-LYK_vNyuEVkVndMllWvw&usqp=CAU' },
    { id: 17, name: 'PVC', category: 'PLASTIC', price: 23, image: 'data:image/jpeg;base64,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' },
    { id: 18, name: 'Electronics', category: 'Category B', price: 33, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlBPQvzrHay8XGPEgr980ljkn-z4ytXdJyQ&usqp=CAU' },
    
  ];

  const categories = ['All', 'PLASTIC', 'METAL', 'FIBER', 'PAPER'];

  useEffect(() => {
    setFilteredProducts(products); 
  }, []); 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filterProducts = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
    setSelectedCategory(category);
  };

  
  const handleKnowMore = (productName) => {
        if (productName === 'IRON') {
          window.location.href = '/Iron';
        } else if (productName === 'NEWS PAPER') {
          window.location.href = '/Newspaper';
        }
        else if(productName === 'PET BOTTLES'){
          window.location.href ='/Petbottles';
        }
        else if(productName === 'GLASS JARS'){
          window.location.href='/Glassjars';
        }
        else if(productName === 'CARDBOARD'){
          window.location.href='/cardboard';
        }
        else if(productName === 'MAGAZINES'){
          window.location.href='/magazines';
        }
        else if(productName === 'PP'){
          window.location.href='/pp';
        }
        else if(productName === 'LPDE PLASTIC'){
          window.location.href='/lpdeplastic';
        }
        else if(productName === 'COPPER'){
          window.location.href='/Copper';
        }
        else if(productName === 'PLASTIC'){
          window.location.href='/Plastic';
        }
        else if(productName === 'Aluminium'){
          window.location.href='/Aluminium';
        }
        else if(productName === 'STEEL'){
          window.location.href='/Steel';
        }
        else if(productName === 'WOOL'){
          window.location.href='/Wool';
        }
        else if(productName === 'OLD CLOTHES'){
          window.location.href='/Oldclothes';
        }
        else if(productName === 'Brass'){
          window.location.href='/Brass';
        }
        else if(productName === 'HDPE'){
          window.location.href='/Hdpe';
        }
        else if(productName === 'PVC'){
          window.location.href='/pvc';
        }
        else if(productName === 'Electronics'){
          window.location.href='/Electronics';
        }
       
      };
    
  return (
    <div className="App">
      <header className="App-header">
        <h1> Recycle Products </h1>
      </header>
      <div className="content-container">
        <div className="filter-section">
          <h2>Category</h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => filterProducts(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-container">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/About/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                   onClick={() => addToCart(product)}
                />
              </Link>
              <h3>{product.name}</h3>
              <p>rs {product.price}</p>
              <button onClick={() => handleKnowMore(product.name)}>View More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;





// useEffect(() => {
//   if (selectedCategory === 'All') {
//   setFilteredProducts(products);
//   } else {
//   const filtered = products.filter(product => product.category === selectedCategory);
//   setFilteredProducts(filtered);
//   }
//   }, [selectedCategory]);
  
//   const addToCart = (product) => {
//   setCart([...cart, product]);
//   }
  
//   return (
//   <div className="product-page">
//   <h2>Products</h2>
//   <div className="categories">
//   <button onClick={() => setSelectedCategory('All')}>All</button>
//   <button onClick={() => setSelectedCategory('METAL')}>Metal</button>
//   <button onClick={() => setSelectedCategory('PAPER')}>Paper</button>
//   <button onClick={() => setSelectedCategory('PLASTIC')}>Plastic</button>
//   <button onClick={() => setSelectedCategory('Glass')}>Glass</button>
//   </div>
//   <div className="products">
//   {filteredProducts.map(product => (
//   <div className="product" key={product.id}>
//   <img src={product.image} alt={product.name} />
//   <div className="product-details">
//   <h3>{product.name}</h3>
//   <p>Category: {product.category}</p>
//   <p>Price: ${product.price}</p>
//   <button onClick={() => addToCart(product)}>Add to Cart</button>
//   </div>
//   </div>
//   ))}
//   </div>
//   <div className="cart">
//   <h2>Shopping Cart</h2>
//   {cart.length === 0 ? <p>Your cart is empty</p> : null}
//   <ul>
//   {cart.map(item => (
//   <li key={item.id}>{item.name} - ${item.price}</li>
//   ))}
//   </ul>
//   {cart.length > 0 && (
//   <Link to="/checkout">Proceed to Checkout</Link>
//   )}
//   </div>
//   </div>
//   );
//   }
  
//   export default ProductPage;




























