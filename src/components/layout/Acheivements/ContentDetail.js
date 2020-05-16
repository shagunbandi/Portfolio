import React, { Component } from 'react';

import { connect } from 'react-redux';


export class ContentDetail extends Component {

    render() {
        return (
            <li className="d-block mt-1 py-1">
                <span className="css-truncate css-truncate-target">
                    <span className="profile-rollup-icon">
                        <svg className="octicon octicon-repo v-align-middle text-gray-light mr-1" viewBox="0 0 12 16"
                            version="1.1" width="12" height="16" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
                            </path>
                        </svg>
                    </span>

                    <a className="mr-2 ">1 Project Completed</a>

                </span>

                <span className="f6 text-gray d-block mt-1 d-lg-inline mt-lg-0">Text and<span className="ml-0">
                    <span className="repo-language-color" style={{ backgroundColor: "#3572A5" }}></span>
                    <span itemprop="programmingLanguage">Python</span>
                </span>

                </span>
                <time title="This contribution was made on May 7" className="float-right f6 text-gray-light pt-1">May 7</time>
            </li>
        );
    }
}
export default connect()(ContentDetail);
