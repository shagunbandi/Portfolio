import React, { Component } from 'react';

import { connect } from 'react-redux';


export class NavBarItems extends Component {

    render() {
        return (
            <nav className="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
                
            </nav>
        );
    }
}
export default connect()(NavBarItems);
