import { Button } from '@material-ui/core';
import React from 'react';
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
         <Button>AddBooks</Button><br />
         <br />
         <Button>UpdatingBooks Books</Button><br />
         <br />
         <Button>DeleteBooks</Button><br />
         <br />
     </p>
        </div>
        </div>
    )
}
export default UpdateBooks; 