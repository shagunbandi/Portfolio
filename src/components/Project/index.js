import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ProjectComponent} from '../WorkExperience/WorkExperience'

const projects = require('../../assets/database/projects.json')
const color = require('../../assets/database/colors.json')


export class Projects extends Component {
    render() {

        function getColorSkillMap() {
            var allSkills = []
            projects.forEach((work, index) => {
                allSkills.push(...work.technologies);
            })

            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }
            var unique = allSkills.filter(onlyUnique);
            var colors = {}
            unique.forEach((skill, index) => {
                var ind = index % color.length;
                colors[skill] = color[ind];
            });
            return colors;
        }

        const colorSkillMap = getColorSkillMap();


        if (!projects || projects.length === 0) {
            return (<span />)
        }

        var content = []
        projects.forEach(project => {
            content.push(
                <ProjectComponent project={project} colorSkillMap={colorSkillMap}/>
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
