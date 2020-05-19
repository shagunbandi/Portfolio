import React, { Component } from 'react';
import { connect } from 'react-redux';

const img = require('../../assets/profileImage.jpg')

export class Summary extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {



        return (
            <div class="container-lg clearfix new-discussion-timeline  px-3">
                <br />
                <div className="container" style={{ width: "100%" }}>
                    <div className="col-md-12 row">
                        <span className="col-md-6">
                            <div id="readme" className="Box md js-code-block-container Box--condensed">
                                <div className="Box-header d-flex flex-items-center flex-justify-between ">
                                    <h2 className="Box-title pr-3">
                                        <svg className="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path>
                                        </svg> asdf
                                </h2>
                                </div>
                                <div class="Box-body" style={{ padding: "0px" }}>

                                    <img src={img} style={{ width: "100%" }} alt="Profile" />
                                </div>
                            </div>
                        </span>


                        {/* <span className="col-md-6" style={{ backgroundColor: "red" }}>span</span> */}
                        {/* <span className="col-md-6" style={{ backgroundColor: "blue" }}>span</span> */}
                        {/* <span className="col-md-6" style={{ backgroundColor: "green" }}>span</span> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(Summary);
