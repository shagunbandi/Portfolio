import React, { Component } from 'react';

import { connect } from 'react-redux';
import {MonthContent} from './MonthContent';


export class Month extends Component {

    render() {

        const { month, achievements } = this.props;

        var MonthContents = []
        achievements.forEach(achievement => {
            MonthContents.push(
                <MonthContent achievement={achievement} />
            )
        });
        const monthSplit = month.split(" ");
        const monthName = monthSplit[0];
        const year = monthSplit[1];

        return (
            <div className="profile-timeline discussion-timeline width-full pb-4">
                <h3 className="profile-timeline-month-heading bg-white d-inline-block h6 pr-2 py-1">{monthName} <span className="text-gray">{year}</span>
                </h3>
                {MonthContents}

            </div>
        );
    }
}
export default connect()(Month);
