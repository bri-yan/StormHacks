import React, { Component } from "react";
import { Button, scrollTo } from "react-atomize";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                {/* <div className="col-md-8 col-md-offset-2 intro-text"> */}
                <div className="intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <div className="center-button">
                    <Button
                      h="3.2rem"
                      w="10rem"
                      p={{ x: "1.25rem" }}
                      textSize="body"
                      hoverTextColor="white"
                      hoverBg="info800"
                      bg="info700"
                      m={{ r: "0.5rem" }}
                    
                      rounded="circle"
                      onClick={() => scrollTo('#features', 0, 0, 1000)}
                    >
                      TRY IT OUT
                    </Button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
