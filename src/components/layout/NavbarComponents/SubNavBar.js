import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

export class SubNavBar extends Component {

    render() {

        // let location = this.props.location
        // console.log(location);
        // console.log(this.props.history.location.pathname)

        const activeClass = (route) => { return "this.props.history.location.pathname" === route ? "UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected" : "UnderlineNav-item mr-0 mr-md-1 mr-lg-3" }

        return (
            <div className="UnderlineNav width-full user-profile-nav js-sticky top-0">
                
                <nav className="UnderlineNav-body" data-pjax aria-label="User profile">

                    <span className={activeClass("/workex")}>
                        <Link to="/workex" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            Work Experience
                        </Link>
                    </span>

                    <span className={activeClass("/projects")}>
                        <Link to="/projects" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            Projects
                        </Link>
                    </span>

                    <span className={activeClass("/skills")}>
                        <Link to="/skills" style={{ color: 'inherit', textDecoration: 'inherit' }}> 
                            Skills and Achievement
                        </Link>
                    </span>
                    
                    
                </nav>
            </div>
        );
    }
}
export default connect()(SubNavBar);
