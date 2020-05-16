import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Category } from './Category';

var skills = require('../../../assets/database/skills.json')

export class Skills extends Component {

  render() {
    var SkillCategory = []
    Object.keys(skills).map((key, index) => {
      SkillCategory.push(<Category skillTitle={key} skillNames={skills[key]} />)
    });

    return (
      <div className="mt-4">
        <div className="js-pinned-items-reorder-container">
          <h2 className="f4 mb-2 text-bold">Technical Skills</h2>
          <ol className="d-flex flex-wrap list-style-none gutter-condensed mb-4 js-pinned-items-reorder-list">
            {SkillCategory}
          </ol>
        </div>
      </div>
    );
  }
}
export default connect()(Skills);
