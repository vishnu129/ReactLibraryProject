import React, { Component } from "react";
import "./UpdateBooks.css";
import Header from './header'
class DeleteBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    BookId:"",
      BookName: "",
      Numberofbooks: "",
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  bookidhandler = (event) => {
    this.setState({
      BookId: event.target.value,
    });
  };

  bookName = (event) => {
    this.setState({
      bookName: event.target.value,
    });
  };
  Numberofbookshandler = (event) => {
    this.setState({
      Numberofbooks: event.target.value,
    });
  };
 
  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({
        bookid:"",
      bookName: "",
      Numberofbooks: "",
     
    });
    event.preventDefault();
  };
  render() {
    return (
        <div>
            <Header />
        <br />
      <div className="card">
<div style={{background:"lightgreen",height: 70, color: "#fff", display:"flex", justifyContent:"center" }}><h1>DeleteBooks</h1></div>
<br />
<div>
        
          <form onSubmit={this.handleSubmit}>
           
            <label>BookId: </label>
            <input
              type="text"
              value={this.state.bookid}
              onChange={this.bookid}
              placeholder="BookId..."
            />
            <br />
            <br />
            <label>BookName: </label>
            <input
              type="text"
              value={this.state.bookName}
              onChange={this.bookName}
              placeholder="BookName..."
            />
            <br />
            <br />
            <label>Numberofbooks: </label>
            <input
              type="text"
              value={this.state.Numberofbooks}
              onChange={this.numberofbookshandler}
              placeholder="No.ofbooks..."
            />
            <br />
            
            <br />
            <input type="submit" value="Submit" />
          </form>
          </div>
        </div>
        </div>
    );
  }
}
export default DeleteBooks;