import React, { Component } from "react";
import "./Edit.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      password: "",
      gender: "",
      address: "",
      occupation: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  passwordhandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  addresshandler = (event) => {
    this.setState({
      address: event.target.value,
    });
  };
  occupationhandler = (event) => {
    this.setState({
      occupation: event.target.value,
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({
      firstName: "",
      password: "",
      gender: "",
      address: "",
      occupation: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="card">
<div style={{background:"green",height: 50, color: "#fff", display:"flex", justifyContent:"center" }}><h1>Update Profile</h1></div>
<br />
<div>
        
          <form onSubmit={this.handleSubmit}>
           
            <label>FirstName: </label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.firsthandler}
              placeholder="FirstName..."
            />
            <br />
            <br />
            <label>Email: </label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.emailhandler}
              placeholder="Email..."
            />
            <br />
            <br />
            <label>gender: </label>
            <select onChange={this.genderhandler} defaultValue="Select Gender">
              <option defaultValue>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />
            <br />
            <label>Address: </label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.addresshandler}
              placeholder="Address..."
            />
            <br />
            <br />
            <label>Occupation: </label>
            <input
              type="text"
              value={this.state.occupation}
              onChange={this.occupationhandler}
              placeholder="Occupation..."
            />
            <br />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
          </div>
        </div>
      
    );
  }
}
export default Edit;
