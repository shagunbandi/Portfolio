import React, { Component } from 'react';
import { connect } from 'react-redux';
import markdown from '../../../assets/database/overview'

const ReactMarkdown = require('react-markdown/with-html')


export class Markdown extends Component {

    render() {
        return (
            <div class="Box-body p-5">
                < ReactMarkdown
                    source={markdown}
                    escapeHtml={false}
                />
            </div>
        );
    }
}
export default connect()(Markdown);

