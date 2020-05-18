import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Markdown } from './Markdown';
import overview from '../../../assets/database/summary/overview'

export class Readme extends Component {

    render() {

        const { title, content } = this.props;
        
        return (
            <div id="readme" className="Box md js-code-block-container Box--condensed">
                <div className="Box-header d-flex flex-items-center flex-justify-between ">
                    <h2 className="Box-title pr-3">
                        <svg className="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path>
                        </svg> {title}</h2>
                    <div>
                        <a href="/shagunbandi/PhotoAlbumHere/edit/master/README.md" className="Box-btn-octicon btn-octicon float-right" aria-label="Edit this file"><svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg></a>
                    </div>
                </div>


                <Markdown markdown={content} />
            </div>
        );
    }
}
export default connect()(Readme);
