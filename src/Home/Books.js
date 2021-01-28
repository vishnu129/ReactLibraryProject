import React from "react";
import Header from "./header";
import SuggestionBox from "./suggestionBox";
import data from "./body.json";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Books() {
  const content = data.Content;
  let obj;
  return (
    <div>
      <Header />
      <Toolbar>
          <Typography variant="h1" color="green">
            Books
          </Typography>
        </Toolbar>
      {content.map((childObj) => {
        obj = childObj[Object.keys(childObj)];
        return <SuggestionBox genre={obj} />;
      })}
    </div>
  );
}
export default Books;
