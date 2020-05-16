import React, { Component } from 'react';

import { connect } from 'react-redux';


export class Description extends Component {

    render() {
        return (
            <div className="p-note user-profile-bio mb-2 js-user-profile-bio">
                <div>
                    Associate Software Development Engineer at Publicis Sapient
              </div>
            </div>
        );
    }
}
export default connect()(Description);
