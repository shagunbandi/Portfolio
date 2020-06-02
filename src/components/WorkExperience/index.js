import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectTemplate from '../Project'

const workex = require('../../assets/database/workex.json')

export class WorkExperience extends Component {
    render() {
        return (
            <ProjectTemplate projects={workex}/>
        );
    }
}
export default connect()(WorkExperience);
