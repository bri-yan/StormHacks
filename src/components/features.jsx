import React, { Component, useState } from "react";
import Articles from "./Articles";
import Empty from "./Empty";
import Searchbar from "./Searchbar";
import Loading from "./Loading";
import Rating from "./Rating"
import Chart from "./Chart"
import Suggestions from "./Suggestions"
import {FacebookShareButton, FacebookIcon} from "react-share";
import {TwitterShareButton, TwitterIcon} from "react-share";
import {PinterestShareButton, PinterestIcon} from "react-share";
import {RedditShareButton, RedditIcon} from "react-share";
import {
  ThemeProvider,
  DefaultTheme,
  Div,
  Icon,
} from "react-atomize";



export class features extends Component {
  state = {
    visible: false,
    loading: false,
    dashboard_load: false,
    articles: "",
    company: "",
    scores: "",
    suggestions: "",
  }


  render() {
    return (
        <div>
          <div id="features" className="text-center">
              <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Search</h2>
              </div>
          </div>

          <div className="searchbar">
            <Searchbar
              onKeyPress={(e) => {
                if (e.target.value === "") {
                  this.setState({ visible: false})
                  this.setState({loading: false})
                } else if (e.key === "Enter") {
                  this.setState({loading: true})
                  console.log(e.target.value)
                  fetch("/articles/" + e.target.value + ",fairtrade/6").then(response => 
                    response.json().then(data => {
                      console.log(data);
                      this.setState({ suggestions: data.suggestions })
                      this.setState({ articles: data.articles });
                      this.setState({ visible: true });
                      this.setState({ loading: false });
                      this.setState({ company: e.target.value})
                      this.setState({ scores: data.scores })
                      
                    }))
                } else {
                  this.setState({ visible: false })
                  this.setState({ loading: true })
                  this.setState({ dashboard_load: true })
                }
                console.log("visible: " + this.state.visible + "\nloading: " + this.state.loading)
            }}
            />
          </div>
          
        <div className="botpad">
            {(!this.state.loading && !this.state.visible) ? <Empty/> : null}
            {(this.state.loading && !this.state.visible) ? <Loading/> : null}
          <div className="center-align">
            {(!this.state.loading && this.state.visible) ? <Chart company={this.state.company} scores={this.state.scores}/>: null}
          </div>
          <div className="center-align">
            {(!this.state.loading && this.state.visible) ? <Articles data={this.state.articles} />: null}
          </div>
          <div className="center-align">
            {(!this.state.loading && this.state.visible) ? <Suggestions data={this.state.suggestions}/>: null}
          </div>
        </div>
          
         </div>
    );
  }
}

export default features;
