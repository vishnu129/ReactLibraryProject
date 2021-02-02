import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { Link } from 'react-router-dom';
import './LForm.css';

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  var dummy="is summy";
const authenticate =() =>
{
  console.log("auth called")
  if(values.password === "1234abc")
  {
     dummy="/signin/userhome"
  }
  else
  {
    dummy="/signin"
  }
}

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
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <Link to={dummy}>
          <button className='form-input-btn' type='submit' onSubmit={authenticate()}>
            {console.log(dummy)}
            Login
        </button></Link>
        <span className='form-input-login'>
          Do not have an account? SignUp <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;