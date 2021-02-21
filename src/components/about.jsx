import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
          
            <div className="pictures">

            <div className="combined">
            <div className = "pictures1">
            <a href="https://fairtrade.ca/">
            <img src="img/about1.png" className="img-responsive" alt=""/>
            </a>
            <a href="https://wfto.com/">
            <img src="img/about3.jpg" className="img-responsive" alt=""/>
            </a>
            </div>

            <div className = "pictures2">
            <a href="https://www.fairtradefederation.org/">
            <img src="img/about2.jpg" className="img-responsive" alt=""/>
            </a>
            <a href="https://spp.coop/">
            <img src="img/about4.jpg" className="img-responsive" alt=""/>
            </a>
            </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Our Program</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>

                <h3>Why Is Fair Trade Important?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 bullets">
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
      </div>
    )
  }
}

export default about
