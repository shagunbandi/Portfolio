import React, { Component } from 'react';

import { connect } from 'react-redux';


export class DownloadResume extends Component {

    render() {
        return (
            <div className="user-profile-following-container js-user-profile-following-toggle mt-md-0 mt-2 mb-md-3 mb-2">
                <span className="user-following-container js-form-toggle-container">
                    <button type="submit" name="commit" style={{ maxWidth: "100%" }}
                        className="btn btn-block top-0 js-sticky js-user-profile-follow-button mb-2" title="Download Resume">Download Resume</button>
                </span>
            </div>
        );
    }
}
export default connect()(DownloadResume);
