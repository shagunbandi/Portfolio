import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class SubNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 1
        };
    }

    render() {

        const activeClass = (route) => { return route === this.state.selected ? "UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected" : "UnderlineNav-item mr-0 mr-md-1 mr-lg-3" }

        return (
            <div className="UnderlineNav width-full user-profile-nav top-0">

                {/* TODO Fix the sub navbar issue */}
                <nav className="UnderlineNav-body">

                    <span className={activeClass(1)}>
                        <Link to="/overview" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            <span onClick={() => { this.setState({ selected: 1 }) }}>Overview</span>
                        </Link>
                    </span>

                    <span className={activeClass(2)}>
                        <Link to="/workex" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            <span onClick={() => { this.setState({ selected: 2 }) }}>Work Experience</span>
                        </Link>
                    </span>

                    <span className={activeClass(3)}>
                        <Link to="/projects" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                            <span onClick={() => { this.setState({ selected: 3 }) }}>Projects</span>
                        </Link>
                    </span>

                    <span className={activeClass(4)}>
                        <Link to="/skills" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <span onClick={() => { this.setState({ selected: 4 }) }}>Skills and Achievement</span>
                        </Link>
                    </span>

                    <span className={activeClass(5)}>
                        <Link to="/photography" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <span onClick={() => { this.setState({ selected: 5 }) }}>Photography</span>
                        </Link>
                    </span>


                </nav>

            </div>
        );
    }
}
export default connect()(SubNavBar);
