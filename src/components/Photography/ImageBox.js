import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ImageBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { img, title, square } = this.props;

        return (
            <span className="col-md-6 p-0 m-0">
                <div id="readme" className="Box md Box--condensed m-1">
                    <div className="Box-header d-flex flex-items-center flex-justify-between">
                        <h2 className="Box-title pr-3">
                            <svg className="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                <path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path>
                            </svg> &nbsp;
                            {title}
                        </h2>
                    </div>
                    <div class="Box-body p-0">
                        <a href={img}>
                            <img src={square} className="image-hover-effect" style={{ width: "100%" }} alt="Profile" />
                        </a>
                    </div>
                </div>
            </span>
        );
    }
}
export default connect()(ImageBox);
