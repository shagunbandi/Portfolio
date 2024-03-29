import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Markdown } from './Markdown';

export class Readme extends Component {

    render() {

        const { title, content } = this.props;
        
        return (
            <div id="readme" className="Box md Box--condensed">
                <div className="Box-header">
                    <h2 className="Box-title pr-3">
                        <svg className="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path>
                        </svg> {title}
                    </h2>
                </div>
                <Markdown markdown={content} />
            </div>
        );
    }
}
export default connect()(Readme);
