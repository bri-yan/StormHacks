import React, { Component } from "react";
import Articles from "./Articles";
import Empty from "./Empty";
import Searchbar from "./Searchbar";
import Loading from "./Loading";
import {FacebookShareButton, FacebookIcon} from "react-share";
import {
  ThemeProvider,
  DefaultTheme,
  Div,
  Icon,
} from "react-atomize";



export class features extends Component {
  state = {
    visible: false,
    loading: false
  }


  render() {
    let x = this.state.visible ? <Articles/> : (this.state.loading ? <Loading/> : <Empty/>)
    return (
        <div>
          <div id="features" className="text-center">
              <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Search</h2>
              </div>
          </div >

          {/* <FacebookShareButton 
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
                className={classes.socialMediaButton}>
                 <FacebookIcon size={36} />
              </FacebookShareButton> */}

          <div className="searchbar">
            <Searchbar
              onKeyPress={(e) => {
                if (e.target.value === "") {
                  this.setState({ visible: false})
                  this.setState({loading: false})
                } else if (e.key === "Enter") {
                  this.setState({ visible: true });
                  this.setState({loading: true})
                  console.log(e.target.value)
                } else {
                  console.log(e.key)
                  this.setState({ visible: false })
                  this.setState({ loading: true })
                }
                console.log("visible: " + this.state.visible + "\nloading: " + this.state.loading)
            }}
            />
          </div>
          {x}
        </div>
    );
  }
}

export default features;
