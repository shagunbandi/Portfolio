import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Category } from './Category';


export class Pinned extends Component {

    render() {
        return (
          <div className="mt-4">
            <div className="js-pinned-items-reorder-container">
              <h2 className="f4 mb-2 text-normal">Skills</h2>
              <ol className="d-flex flex-wrap list-style-none gutter-condensed mb-4 js-pinned-items-reorder-list">
                <Category />
              </ol>
            </div>
          </div>
        );
    }
}
export default connect()(Pinned);
