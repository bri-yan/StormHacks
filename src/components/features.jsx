import React, { Component } from "react";
import Articles from "./Articles";
import Searchbar from "./Searchbar";
import {
  ThemeProvider,
  DefaultTheme,
  Div,
} from "react-atomize";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    brand800: "#671de1"
  },
  rounded: {
    ...DefaultTheme.rounded,
    brandRadius: "20px",
    cardRadius: "10px"
  }
};

export class features extends Component {
  render() {
    return (
      <div>
      <div id="features" className="text-center">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Search</h2>
          </div>
      </div >
      <div className="searchbar">
      <Searchbar/>
      </div>
      <ThemeProvider theme={theme}>
      
      <Articles/>
      </ThemeProvider>
      </div>
    );
  }
}

export default features;
