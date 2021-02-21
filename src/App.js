import React from "react";
import Articles from "./components/Articles";
import Searchbar from "./components/Searchbar";
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Searchbar/>
      <Articles/>
    </ThemeProvider>
  );
}

export default App;