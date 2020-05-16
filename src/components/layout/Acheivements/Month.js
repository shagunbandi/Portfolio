import React, { Component } from 'react';

import { connect } from 'react-redux';
import MonthContent from './MonthContent';


export class Month extends Component {

    render() {
        return (
            <div className="profile-timeline discussion-timeline width-full pb-4">
                <h3 className="profile-timeline-month-heading bg-white d-inline-block h6 pr-2 py-1">May <span className="text-gray">2020</span>
                </h3>
                <MonthContent />
            </div>
        );
    }
}
export default connect()(Month);
