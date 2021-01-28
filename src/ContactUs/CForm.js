import React, { useState } from 'react';
import './CForm.css';
import FormContactUs from './FormContactUs';
import FormSuccess from './FormSuccess';
import Header from '../Home/Header.js';

const CForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Header/>
      <div className='form-container'>
        <span className='close-btn'>×</span>
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