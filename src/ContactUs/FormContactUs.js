import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './CForm.css';

const FormContactUs = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
       
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
         <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your Name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Comment</label>
          <input
            className='form-Cinput'
            type='comment'
            name='comment'
            placeholder='comments'
            value={values.comment}
            onChange={handleChange}
          />
          {errors.comment && <p>{errors.comment}</p>}
        </div>
       
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
        {/* <span className='form-input-login'> */}
         
        {/* </span> */}
      </form>
    </div>
  );
};

export default FormContactUs;