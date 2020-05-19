import React, { Component } from 'react';
import { connect } from 'react-redux';

const color = require('../../../assets/database/colors.json')

export class ContentDetail extends Component {

    render() {

        const { title, date, technologies } = this.props;

        var techs = [];
        if (technologies) {
            technologies.forEach((tech, index) => {
                const ind = index % color.length;
                techs.push(
                    <span className="ml-0">
                        <span className="repo-language-color" style={{ backgroundColor: color[ind], marginRight: "4px", marginLeft: "4px"}}></span>
                        <span itemProp="programmingLanguage">{tech}</span>
                    </span>
                )
            });
        }
        else {
            techs = null;
        }

        return (
            <li className="d-block mt-1 py-1">
                <span className="mr-2 ws-unset">
                    {title}
                </span>

                <span className="f6 text-gray d-block mt-1 d-lg-inline mt-lg-0">
                    {techs}
                </span>
                <time className="float-right f6 text-gray-light pt-1">{date}</time>
            </li>
        );
    }
}
export default connect()(ContentDetail);
