import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ProjectComponent} from '../WorkExperience/WorkExperience'

const projects = require('../../assets/database/projects.json')

export class Projects extends Component {
    render() {

        if (!projects || projects.length === 0) {
            return (<span />)
        }

        var content = []
        projects.forEach(project => {
            content.push(
                <ProjectComponent project={project}/>
            )
        });
        return (
            <div id="user-repositories-list">
                <ul>
                    {content}
                </ul>
            </div>
        );
    }
}
export default connect()(Projects);
