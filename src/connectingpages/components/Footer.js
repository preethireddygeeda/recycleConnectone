// import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
// import { FaPhone, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <Wrapper>
//         <section className="contact-short">
//           <div className="grid grid-two-column">
//             <div>
//               <h3>Ready to get started?</h3>
//               <h3>Talk to us today</h3>
//             </div>

//             <div>
//               <Button className="btn hireme-btn">
//                 <NavLink to="/"> Get Started </NavLink>
//               </Button>
//             </div>
//           </div>
//         </section>
//         {/* footer section */}

//         <footer>
//           <div className="container grid grid-four-column">
//             <div className="footer-about">
//               <h3>Recycle Connect</h3>
//               <p>"Recycle, reconnect, renew: it's not just about saving the planet; it's about preserving our future." </p>
//             </div>
//             {/* <div className="footer-subscribe">
//               <h3>Subscribe to get important updates</h3>
//               <form action="#">
//                 <input type="email" name="email" placeholder="YOUR E-MAIL" />

//                 <input type="submit" value="subscribe" />
//               </form>
//             </div> */}
//             <div>
//               <h3> About us</h3>
//               <h3> Know More</h3>
//               </div>
//             <div className="footer-social">
//               <h3>Follow Us</h3>
//               <div className="footer-social--icons">
//                 <div>
//                 <a href="8309916906"> <FaPhone className="icons" /></a>
//                 </div>
//                 <div>
                 
//                   <a href="https://www.instagram.com/recycle_connect/" ><FaInstagram className="icons" /> </a>
//                 </div>
                
//                    {/* <a
//                     href="geedapreethireddy@gmail.com"
//                     target="_blank"> 
//                     <FaMail className="icons" />
//                   </a>  */}
                
//               </div>
//             </div>
//             <div className="footer-contact">
//               <h3>Call Us</h3>
//               <h3>+91 8309916906</h3>
//             </div>
//           </div>

//           <div className="footer-bottom--section">
//             <hr />
//             <div className="container grid grid-two-column ">
//               <p>
//                 @{new Date().getFullYear()} Recycle Connect. All Rights Reserved
//               </p>
//               <div>
//                 <p>PRIVACY POLICY</p>
//                 <p>TERMS & CONDITIONS</p>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </Wrapper>
//     </>
//   );
// };

// const Wrapper = styled.section`
//   .iSIFGq {
//     margin: 0;
//   }

//   .contact-short {
//     max-width: 60vw;
//     margin: auto;
//     padding: 5rem 10rem;
//     background-color: ${({ theme }) => theme.colors.bg};
//     border-radius: 1rem;
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: translateY(50%);

//     .grid div:last-child {
//       justify-self: end;
//       align-self: center;
//     }
//   }

//   footer {
//     padding: 14rem 0 9rem 0;
//     background-color: ${({ theme }) => theme.colors.footer_bg};
//     h3 {
//       color: ${({ theme }) => theme.colors.hr};
//       margin-bottom: 2.4rem;
//     }
//     p {
//       color: ${({ theme }) => theme.colors.white};
//     }
//     .footer-social--icons {
//       display: flex;
//       gap: 2rem;

//       div {
//         padding: 1rem;
//         border-radius: 50%;
//         border: 2px solid ${({ theme }) => theme.colors.white};

//         .icons {
//           color: ${({ theme }) => theme.colors.white};
//           font-size: 2.4rem;
//           position: relative;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   .footer-bottom--section {
//     padding-top: 9rem;

//     hr {
//       margin-bottom: 2rem;
//       color: ${({ theme }) => theme.colors.hr};
//       height: 0.1px;
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .contact-short {
//       max-width: 80vw;
//       margin: 4.8rem auto;
//       transform: translateY(0%);
//       text-align: center;

//       .grid div:last-child {
//         justify-self: center;
//       }
//     }

//     footer {
//       padding: 9rem 0 9rem 0;
//     }

//     .footer-bottom--section {
//       padding-top: 4.8rem;
//     }
//   }
// `;

// export default Footer;

































import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import {  FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Recycle Connect</h3>
              <p>"Recycle, reconnect, renew: it's not just about saving the planet; it's about preserving our future." </p>
            </div>
            <div>
              <h3> <NavLink to="/about"> About us </NavLink></h3>
              <h3> For More Information Contact Us </h3>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <a href="https://www.youtube.com/"> <FaYoutube className="icons" /></a>
                </div>
                <div>
                  <a href="https://www.instagram.com/recycle_connect/" ><FaInstagram className="icons" /> </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 8309916906</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Recycle Connect. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  /* Your existing styles */
  .iSIFGq {
    margin: 0;
  }
  
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.white};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
