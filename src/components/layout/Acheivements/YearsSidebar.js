import React, { Component } from 'react';

import { connect } from 'react-redux';


export class YearsSidebar extends Component {

    render() {
        return (
            <div className="d-none d-lg-block">
                <div
                    className="profile-timeline-year-list js-profile-timeline-year-list bg-white js-sticky float-right col-2 pl-5">
                    <ul className="filter-list small">
                        <li>
                            <span id="year-link" className="js-year-link filter-item px-3 mb-2 py-2 selected">2020</span>
                        </li>
                        <li>
                            <span id="year-link" className="js-year-link filter-item px-3 mb-2 py-2">2019</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}
export default connect()(YearsSidebar);
