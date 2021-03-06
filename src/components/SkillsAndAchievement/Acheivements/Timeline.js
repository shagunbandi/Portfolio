import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { YearsSidebar } from './YearsSidebar';
import { Month } from './Month';

const achievements = require('../../../assets/database/achievement.json')
const achievementsKeyOrder = require('../../../assets/database/achievement_key_order.json')

export class Timeline extends Component {

    render() {

        if (!achievementsKeyOrder) {
            return (<span></span>)
        }
        var Months = [];
        achievementsKeyOrder.forEach((value, index) => {
            Months.push(
                <Month month={value} achievements={achievements[value]}/>
            )
        })

        return (
            <div className="mt-4 position-relative">
                    {/* <YearsSidebar /> */}
                    
                    <h2 className="f4 text-bold mb-2">Achievements</h2>
                    <div className="float-left col-12 col-lg-10">
                        {Months}
                    </div>

                <button name="button" type="submit"
                    className="btn btn-outline border-gray-dark width-full f6 mt-0 py-2">Yupp That's it</button>
            </div>
        );
    }
}
export default connect()(Timeline);
