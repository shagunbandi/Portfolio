import React, { Component } from 'react';

import { connect } from 'react-redux';


export class LocationEmailMobile extends Component {

    render() {
        return (
            <div class="col-12 d-md-none">
                <div class="js-profile-editable-area">
                    <div class="p-note user-profile-bio mb-2 js-user-profile-bio"></div>
                    <ul class="vcard-details mb-3">
                        <li itemprop="homeLocation" show_title="false" aria-label="Home location: Bangalore"
                            class="vcard-detail pt-1 css-truncate css-truncate-target"><svg class="octicon octicon-location"
                                viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z">
                                </path>
                            </svg>
                            <span class="p-label">Bangalore</span>
                        </li>
                        <li itemprop="email" aria-label="Email: shgaunamitbandi@gmail.com"
                            class="vcard-detail pt-1 css-truncate css-truncate-target"><svg class="octicon octicon-mail"
                                viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z">
                                </path>
                            </svg>
                            <a class="u-email "
                                href="mailto:&#x73;&#x68;&#x61;&#x67;&#x75;&#x6e;&#x61;&#x6d;&#x69;&#x74;&#x62;&#x61;&#x6e;&#x64;&#x69;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;">&#x73;&#x68;&#x61;&#x67;&#x75;&#x6e;&#x61;&#x6d;&#x69;&#x74;&#x62;&#x61;&#x6e;&#x64;&#x69;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default connect()(LocationEmailMobile);
