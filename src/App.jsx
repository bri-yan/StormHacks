import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
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

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Navigation />
          <Header data={this.state.landingPageData.Header} />
          <Features data={this.state.landingPageData.Features} />
          <About data={this.state.landingPageData.About} />
          {/* <Services data={this.state.landingPageData.Services} />
          <Gallery />
          <Testimonials data={this.state.landingPageData.Testimonials} />
          <Team data={this.state.landingPageData.Team} /> */}
          {/* <Contact data={this.state.landingPageData.Contact} /> */}
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
