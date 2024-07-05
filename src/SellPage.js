// // SellPage.js
// import React, { useState } from 'react';
// import SellForm from './SellForm';

// const SellPage = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleButtonClick = () => {
//     setShowForm(true);
//   };

//   return (
//     <div>
//       <div style={{ width: '50%' }}>
//         <h2>About Selling</h2>
//         <p>This section contains information about selling.</p>
//         <button onClick={handleButtonClick}>Open Form</button>
//       </div>
//       {showForm && <SellForm />}
//     </div>
//   );
// };

// export default SellPage;




import React from 'react';
import SellForm from './SellForm';

const SellPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <h2>Recycle Connect</h2>
        <p>
            At Recycle Connect, we believe in the power of collective action towards a sustainable future.
            Our platform is designed to revolutionize the way we approach recycling and environmental conservation.
            Together, we can make a significant impact on our planet.
            </p>
      </div>
      <SellForm />
    </div>
  );
};

export default SellPage;


