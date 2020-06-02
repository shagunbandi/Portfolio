import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ImageBox extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { img, square } = this.props;

        return (
            <span className="col-md-6 p-0 m-0">
                <div id="readme" className="Box md Box--condensed m-1">
                    <div class="Box-body p-0">
                        <a href={img} target="_blank" rel="noopener noreferrer">
                            <img src={square} className="image-hover-effect" style={{ width: "100%" }} alt="Profile" />
                        </a>
                    </div>
                </div>
            </span>
        );
    }
}
export default connect()(ImageBox);
