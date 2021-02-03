import React, { Component } from "react";
import "./UpdateBooks.css";
import Header from './header';
class UpdatingBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BookName: "",
      Author: "",
      Numberofbooks: "",
      Edition: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  bookhandler = (event) => {
    this.setState({
      bookName: event.target.value,
    });
  };

  authorhandler = (event) => {
    this.setState({
      author: event.target.value,
    });
  };
  Numberofbookshandler = (event) => {
    this.setState({
      Numberofbooks: event.target.value,
    });
  };
  Editionhandler = (event) => {
    this.setState({
      edition: event.target.value,
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({
      bookName: "",
      author: "",
      Numberofbooks: "",
      edition: "",
    });
    event.preventDefault();
  };
  render() {
    return (
        <div>
            <Header />
            <br />
      <div className="card">
<div style={{background:"lightgreen",height: 70, color: "#fff", display:"flex", justifyContent:"center" }}><h1>UpdatingBooks</h1></div>
<br />
<div>
        
          <form onSubmit={this.handleSubmit}>
           
            <label>BookName: </label>
            <input
              type="text"
              value={this.state.bookName}
              onChange={this.bookhandler}
              placeholder="BookName..."
            />
            <br />
            <br />
            <label>Author: </label>
            <input
              type="text"
              value={this.state.author}
              onChange={this.authorhandler}
              placeholder="Author..."
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
            <label>Edition: </label>
            <input
              type="text"
              value={this.state.addition}
              onChange={this.Editionhandler}
              placeholder="Edition..."
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
export default UpdatingBooks;