import React, { Component } from 'react';

import { connect } from 'react-redux';
import cv from '../../../assets/shagunbandi.pdf'

export class DownloadResume extends Component {

    render() {
        return (
            <div className="user-profile-following-container mt-md-0 mt-2 mb-md-3 mb-2">
                <span className="user-following-container">
                    <a href={cv} type="submit" name="commit" style={{ maxWidth: "100%" }}
                        className="btn btn-block top-0 mb-2" title="Download Resume">Download Resume</a>
                </span>
            </div>
        );
    }
}
export default connect()(DownloadResume);
