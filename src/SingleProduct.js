



// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useProductContext } from "./context/productcontex";
// import PageNavigation from "./components/PageNavigation";
// import MyImage from "./components/MyImage";
// import { Container } from "./styles/Container";
// import FormatPrice from "./Helpers/FormatPrice";
// import { MdSecurity } from "react-icons/md";
// import { TbTruckDelivery, TbReplace } from "react-icons/tb";
// import Star from "./components/Star";
// import AddToCart from "./components/AddToCart";

// const API = "https://api.pujakaitem.com/api/products";

// const SingleProduct = () => {
//   const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
//   const { id } = useParams();
//   const { name, company, price, description, stock, stars, reviews, image } = singleProduct;

//   useEffect(() => {
//     getSingleProduct(`${API}?id=${id}`);
//   }, []);

//   const handleSellButtonClick = () => {
//     window.open("/sell", "_blank"); // Open SellPage in a new tab
//   };

//   if (isSingleLoading) {
//     return <div className="page_loading">Loading.....</div>;
//   }

//   return (
//     <Wrapper>
//       <PageNavigation title={name} />
//       <Container className="container">
//         <div className="grid grid-two-column">
//           {/* product Images  */}
//           <div className="product_images">
//             <MyImage imgs={image} />
//           </div>

//           {/* product data */}
//           <div className="product-data">
//             <h2>{name}</h2>
//             <Star stars={stars} reviews={reviews} />
//             <p className="product-data-price">
//               MRP: <del><FormatPrice price={price + 250000} /></del>
//             </p>
//             <p className="product-data-price product-data-real-price">
//               Deal of the Day: <FormatPrice price={price} />
//             </p>
//             <p>{description}</p>
//             <div className="product-data-warranty">
//               {/* Warranty info */}
//             </div>
//             <div className="product-data-info">
//               {/* Product info */}
//             </div>
//             <hr />
//             {stock > 0 && <AddToCart product={singleProduct} />}
//             <button onClick={handleSellButtonClick}>Sell</button> {/* Sell button */}
//           </div>
//         </div>
//         {/* <button>buy</button> */}
//         <a href="https://wa.me/8309916906?text=Hello%20there">
//           <button>buy</button></a>
//       </Container>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   /* Styles */
//   .container {
//     padding: 9rem 0;
//   }

//   .product_images {
//     display: flex;
//     align-items: center;
//   }

//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .page_loading {
//     font-size: 3.2rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;
//   }
// `;

// export default SingleProduct;







import React from 'react';

const SingleProduct = ({ match }) => {
  // Fetch the product details based on the ID from the URL params
  const productId = match.params.id;
  // Use this ID to fetch the product details from your data (products array)

  return (
    <div>
      {/* Display the product details here */}
      <h2>Product Details</h2>
      {/* You can use the fetched product details here */}
      {/* Example: <h3>{product.name}</h3> */}
    </div>
  );
};

export default SingleProduct;



