import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Category } from './Category';

var skills = require('../../../assets/database/skills.json')
const color = require('../../../assets/database/colors.json')

export class Skills extends Component {

  render() {
    var allSkills = []
    Object.keys(skills).map(key => allSkills.push(...skills[key]))
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    var unique = allSkills.filter(onlyUnique);
    var colors = {}
    unique.forEach((skill, index) => {
      var ind = index % color.length;
      colors[skill] = color[ind];
    });    
    
    var SkillCategory = []
    Object.keys(skills).map((key, index) => SkillCategory.push(<Category skillTitle={key} skillNames={skills[key]} colors={colors} />));

    return (
      <div className="mt-4">
        <h2 className="f4 mb-2 text-bold">Technical Skills</h2>
        <ol className="d-flex flex-wrap list-style-none gutter-condensed mb-4">
          {SkillCategory}
        </ol>
      </div>
    );
  }
}
export default connect()(Skills);
