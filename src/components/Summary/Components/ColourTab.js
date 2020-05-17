import React, { Component } from 'react';

import { connect } from 'react-redux';


export class ColorTab extends Component {

    render() {
        return (
            <details class="details-reset">
                <summary title="Click for language details" data-ga-click="Repository, language bar stats toggle, location:repo overview">
                    <div class="d-flex repository-lang-stats-graph">
                        <span class="language-color" aria-label="JavaScript 65.5%" style={{ width: "65.5%", backgroundColor: "#f1e05a" }} itemprop="keywords">JavaScript</span>
                        <span class="language-color" aria-label="Python 26.7%" style={{ width: "26.7%", backgroundColor: "#3572A5" }} itemprop="keywords">Python</span>
                        <span class="language-color" aria-label="CSS 5.4%" style={{ width: "5.4%", backgroundColor: "#563d7c" }} itemprop="keywords">CSS</span>
                        <span class="language-color" aria-label="HTML 2.4%" style={{ width: "2.4%", backgroundColor: "#e34c26" }} itemprop="keywords">HTML</span>
                    </div>
                </summary>
            </details>
        );
    }
}
export default connect()(ColorTab);
