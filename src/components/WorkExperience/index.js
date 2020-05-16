import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ProjectComponent} from './WorkExperience'

const workex = require('../../assets/database/workex.json')

export class WorkExperience extends Component {
    render() {

        if (!workex || workex.length === 0) {
            return (<span />)
        }

        var content = []
        workex.forEach(work => {
            content.push(
                <ProjectComponent project={work}/>
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
export default connect()(WorkExperience);
