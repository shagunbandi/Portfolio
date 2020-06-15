import React, { Component } from 'react';
import { connect } from 'react-redux';

const ReactMarkdown = require('react-markdown/with-html')


export class Markdown extends Component {

    render() {

        const { markdown } = this.props;

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

