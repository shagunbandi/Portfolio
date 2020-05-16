import React, { Component } from 'react';

import { connect } from 'react-redux';


export class Organisations extends Component {

    render() {
        return (
            <div className="border-top py-3 clearfix hide-sm hide-md">
                <h2 className="mb-1 h4">Worked with</h2>
                <a aria-label="Finbox" className="avatar-group-item">
                    <img alt="@finbox" width="32" height="32"
                        src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/axhjjc7ajdiz2zjdatm4" class="avatar " />
                </a>
            </div>        );
    }
}
export default connect()(Organisations);
