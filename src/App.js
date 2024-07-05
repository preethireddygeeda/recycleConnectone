

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import SellPage from "./SellPage"; 
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Productpage from "./Productpage";
import Iron from "./Iron";
import Newspaper from "./Newspaper";
import Petbottles from "./Petbottles";
import Brass from "./Brass";
import Hdpe from "./Hdpe";
import Oldclothes from "./Oldclothes";
import Electronics from "./Electronics";
import Copper from "./Copper";
import Aluminium from "./Aluminium";
import Wool from "./Wool";
import Steel from "./Steel"
import PVC from "./pvc";
import GLASSJARS from "./GLASSJARS";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(0, 56, 28)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#00cc66",

      bg: "#CFE0D6",
      footer_bg: "#00381C",
      btn: "#00cc66",
      border: "rgba(0, 219, 110, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(0, 204, 102) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(228, 250, 231, 0.02) 0px 1px 3px 0px,rgba(223, 245, 226, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/sell" element={<SellPage />} /> {/* Add the SellPage route */}
          <Route path="/cart" element={<Cart />} />
        <Route path="/Oldclothes" element={<Oldclothes/>}/>
          <Route path="/iron" element={<Iron/>}/>
          <Route path="/products" element={<Productpage/>}/>
         <Route path="/Newspaper" element={<Newspaper/>}/>
        <Route path="/product/:id" component={SingleProduct} />
      <Route path="/Petbottles" element={<Petbottles/>}/>
      <Route path="/Brass" element={<Brass/>}/>
      <Route path="/Hdpe" element={<Hdpe/>}/>
      <Route path="/Electronics" element={<Electronics/>}/>
      <Route path="/Copper" element={<Copper/>}/>
      <Route path="/Aluminium" element={<Aluminium/>}/>
       <Route path="/Wool" element={<Wool/>}/>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Steel" element={<Steel/>}/>
          <Route path="/PVC" element={<PVC/>}/>
          <Route path="/GLASSJARS" element={<GLASSJARS/>}/>
          
         
          
          
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;





















