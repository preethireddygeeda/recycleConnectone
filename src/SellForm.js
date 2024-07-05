


// import React, { useState } from 'react';
// import styled from 'styled-components';

// const SellForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [file, setFile] = useState(null);
//   const [description, setDescription] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePhoneChange = (event) => {
//     setPhone(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Basic validation
//     if (!name || !email || !phone || !description) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     // Handle form submission here, e.g., send data to server
//     console.log('Form submitted:', { name, email, phone, file, description });
//   };

//   return (
//     <FormWrapper>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={handleNameChange} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} required />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input type="tel" value={phone} onChange={handlePhoneChange} required />
//         </div>
//         <div>
//           <label>Upload File:</label>
//           <input type="file" onChange={handleFileChange} />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea value={description} onChange={handleDescriptionChange} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </FormWrapper>
//   );
// };

// // Styled-components
// const FormWrapper = styled.div`
//   background-color: #4caf50; /* Green */
//   color: white;
//   padding: 20px;
//   border-radius: 5px;
//   width: 50%;
//   float: left;

//   form {
//     width: 100%;
//   }

//   div {
//     margin-bottom: 15px;
//   }

//   label {
//     display: block;
//     margin-bottom: 5px;
//     font-size: 18px;
//   }

//   input[type='text'],
//   input[type='email'],
//   input[type='tel'],
//   textarea,
//   button {
//     width: 100%;
//     padding: 10px;
//     border: none;
//     border-radius: 3px;
//     background-color: #f2f2f2; /* Light grey */
//     color: #333; /* Dark grey */
//     font-size: 16px; /* Increased font size */
//   }

//   textarea {
//     min-height: 100px;
//   }

//   button[type='submit'] {
//     background-color: #008cba; /* Teal */
//     color: white;
//     cursor: pointer;
//     font-size: 18px; /* Increased font size */
//   }
// `;

// export default SellForm;

import React, { useState } from 'react';
import styled from 'styled-components';

const SellForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMaterialNameChange = (event) => {
    setMaterialName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !phone || !description || !materialName || !quantity) {
      alert('Please fill in all required fields.');
      return;
    }

    // Handle form submission here, e.g., send data to server
    console.log('Form submitted:', { name, email, phone, file, description, materialName, quantity });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={handlePhoneChange} required />
        </div>
        <div>
          <label>Material Name:</label>
          <input type="text" value={materialName} onChange={handleMaterialNameChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={handleQuantityChange} required />
        </div>
        <div>
          <label>Upload File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormWrapper>
  );
};

// Styled-components
const FormWrapper = styled.div`
  background-color: #4caf50; /* Green */
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  float: left;

  form {
    width: 100%;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  input[type='number'],
  textarea,
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #f2f2f2; /* Light grey */
    color: #333; /* Dark grey */
    font-size: 16px; /* Increased font size */
  }

  textarea {
    min-height: 100px;
  }

  button[type='submit'] {
    background-color: #008cba; /* Teal */
    color: white;
    cursor: pointer;
    font-size: 18px; /* Increased font size */
  }
`;

export default SellForm;


