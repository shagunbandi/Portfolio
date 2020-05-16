import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Skills } from './Skills/Skills';
import { Timeline } from './Acheivements/Timeline';

export class SkillsAndAchievment extends Component {

    render() {
        return (
            <div>
                <Skills />
                <Timeline />
            </div>
        );
    }
}
export default connect()(SkillsAndAchievment);
