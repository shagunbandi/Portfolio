import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProjectComponent } from './ProjectComponent'

const color = require('../../assets/database/colors.json')


export class Projects extends Component {
    render() {

        const { projects } = this.props;

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
        projects.forEach((project, index) => {
            let firstObject = true;
            let lastObject = true;
            if (index > 0 && project.title === projects[index - 1].title) {
                firstObject = false;
            }
            if (index < projects.length - 1 && project.title === projects[index + 1].title) { 
                lastObject = false;
            }
            content.push(
                <ProjectComponent project={project} colorSkillMap={colorSkillMap} firstObject={firstObject} lastObject={lastObject}/>
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
