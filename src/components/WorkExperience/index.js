import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ProjectComponent} from './WorkExperience'

const workex = require('../../assets/database/workex.json')
const color = require('../../assets/database/colors.json')

export class WorkExperience extends Component {
    render() {

        function getColorSkillMap() {
            var allSkills = []
            workex.forEach((work, index) => {
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


        if (!workex || workex.length === 0) {
            return (<span />)
        }

        var content = []
        workex.forEach(work => {
            content.push(
                <ProjectComponent project={work} colorSkillMap={colorSkillMap}/>
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
