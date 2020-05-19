import React, { Component } from 'react';

import { connect } from 'react-redux';


export class ColorTab extends Component {

    render() {
        return (
            <details class="details-reset">
                <summary title="Click for language details">
                    <div class="d-flex repository-lang-stats-graph">
                        <span class="language-color" style={{ width: "65.5%", backgroundColor: "#f1e05a" }} itemprop="keywords">$nbsp;</span>
                        <span class="language-color" style={{ width: "26.7%", backgroundColor: "#3572A5" }} itemprop="keywords">$nbsp;</span>
                        <span class="language-color" style={{ width: "5.4%", backgroundColor: "#563d7c" }} itemprop="keywords">$nbsp;</span>
                        <span class="language-color" style={{ width: "2.4%", backgroundColor: "#e34c26" }} itemprop="keywords">$nbsp;</span>
                    </div>
                </summary>
            </details>
        );
    }
}
export default connect()(ColorTab);
