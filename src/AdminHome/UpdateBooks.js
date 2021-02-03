import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import "./UpdateBooks.css";
import Header from './header';

function UpdateBooks(){
    return(
      <div>
          <Header /> 
          <br />
 <div className="card">
<div style={{background:"lightgreen",height: 60, color: "#fff", display:"flex", justifyContent:"center" }}><h1>Update Books</h1></div>
<br />
<br />
     <p>
     <Link to="/AdminHome/UpdateBooks/AddBooks">
         <Button>AddBooks</Button><br /></Link>
         <br />
         <Link to="/AdminHome/UpdateBooks/UpdateingBooks">
         <Button>UpdateBooks</Button><br /></Link>
         <br />
         <Link to="/AdminHome/UpdateBooks/DeleteBooks">
         <Button>DeleteBooks</Button><br /></Link>
         <br />
     </p>
        </div>
        </div>
    )
}
export default UpdateBooks; 