import React, { Component } from 'react';

import { connect } from 'react-redux';


export class SubNavBar extends Component {

    render() {
        return (
            <div className="UnderlineNav width-full user-profile-nav js-sticky top-0">
                <nav className="UnderlineNav-body" data-pjax aria-label="User profile">
                    <span className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected ">
                        Overview
                    </span>
                    <span className="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 ">
                        Repositories
                         <span className="Counter hide-lg hide-md hide-sm">97</span>
                    </span>
                </nav>
            </div>
        );
    }
}
export default connect()(SubNavBar);
