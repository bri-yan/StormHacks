import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
          
            
            <div className="pictures">
            <a href="https://fairtrade.ca/">
            <div className="col-xs-12 col-md-3"> <img src="img/about1.jpg" className="img-responsive" alt=""/> </div>
            </a>
            <a href="https://www.fairtradefederation.org/">
            <div className="col-xs-12 col-md-3"> <img src="img/about2.jpg" className="img-responsive" alt=""/> </div>
            </a>
            <a href="https://wfto.com/">
            <div className="col-xs-12 col-md-3"> <img src="img/about3.jpg" className="img-responsive" alt=""/> </div>
            </a>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>

                <h3>Why Is Fair Trade Important?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  {/* 
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>*/}
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
