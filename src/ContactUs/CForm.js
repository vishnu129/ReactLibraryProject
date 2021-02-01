import React, { useState } from 'react';
import './CForm.css';
import FormContactUs from './FormContactUs';
import FormSuccess from './FormSuccess';
import Header from '../Home/header.js';

const CForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Header/>
      <div className='form-container'>
        {!isSubmitted ? (
          <FormContactUs submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default CForm;