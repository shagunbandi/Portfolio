import React, { Component } from 'react';

import { connect } from 'react-redux';

const color = require('../../../assets/database/colors.json')

export class Category extends Component {
  render() {
    
    const { skillTitle, skillNames } = this.props;
    const ProgrammingLanguages = skillNames.map((value, index) => {
      const ind = index % color.length;
      return (
        <span className="d-inline-block mr-3 mb-1">
          <span className="repo-language-color" style={{ backgroundColor: color[ind], marginLeft:"6px"}}></span>
          <span itemProp={value} style={{marginLeft:"4px", marginRight:"6px"}}>{value}</span>
        </span>
      )
    });

    return (
      <li className="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
        <div
          className="Box pinned-item-list-item d-flex p-3 width-full js-pinned-item-list-item public source  sortable-button-item">
          <div className="pinned-item-list-item-content">
            <div className="d-flex width-full flex-items-center position-relative">
              <svg className="octicon octicon-repo mr-2 text-gray flex-shrink-0" viewBox="0 0 12 16"
                version="1.1" width="12" height="16" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
                </path>
              </svg>

              <span href="#" class="text-bold flex-auto min-width-0 span-filename">
                <span className="repo" title={skillTitle}>{skillTitle}</span>
              </span>
            </div>
            <hr/>
            <p className="mb-0 f6 text-gray"
              // style={{ marginTop: "20px" }}
            >
              {ProgrammingLanguages}
            </p>
          </div>
        </div>
      </li>
    );
    }
}
export default connect()(Category);
