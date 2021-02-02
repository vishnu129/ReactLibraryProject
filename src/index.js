import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';

import blogs from './Home/blogs';
ReactDOM.render(
  <App/>
  // <ThemeProvider blogs={blogs}>
  //    <App />
  // </ThemeProvider>
  
  ,
  document.getElementById('root')
);
// body::-webkit-scrollbar {
//   display: none;
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


