import React, { Component } from 'react';

import { connect } from 'react-redux';
import { YearsSidebar } from './YearsSidebar';
import { Month } from './Month';


export class Timeline extends Component {

    render() {
        return (
            <div className="mt-4 position-relative">
                <div id="js-contribution-activity" className="activity-listing contribution-activity" data-pjax-container>

                    {/* <YearsSidebar /> */}
                    
                    <h2 className="f4 text-normal mb-2">Achievements</h2>
                    
                    <div className="contribution-activity-listing float-left col-12 col-lg-10">
                        
                        <Month />
                   
                   
                    </div>

                    <div className="ajax-pagination-form js-ajax-pagination js-show-more-timeline-form col-lg-10 col-12">
                        <button name="button" type="submit"
                            className="ajax-pagination-btn btn btn-outline border-gray-dark width-full f6 mt-0 py-2 contribution-activity-show-more">I was just born before this</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(Timeline);
