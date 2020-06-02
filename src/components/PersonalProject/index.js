import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectTemplate from '../Project'

const projects = require('../../assets/database/projects.json')

export class PersonalProject extends Component {
    render() {
        return (
            <ProjectTemplate projects={projects} />
        );
    }
}
export default connect()(PersonalProject);
