import React from "react";
import Footer from "./footer";
import Header from "./header";
import News from "./newsBox";
import SuggestionBox from "./suggestionBox";
// import Deleteit from './deleteIt';
import data from "./body.json";

function getData() {
  return data.Content;
}
function index() {
  const kids = getData().kidsbooks;
  return (
    <div>
      {/* <Header />
       <SuggestionBox title="kids" data= {kids}/><br></br><br></br> */}
      <Header />
      <News />
      <SuggestionBox title="kids" data={kids} />
      <Footer />
      {data.Content.map(arr => arr[Object.keys(arr)].map(obj => (
        <div>{obj.name}</div>
      )))}
    </div>
  );
}

export default index;
