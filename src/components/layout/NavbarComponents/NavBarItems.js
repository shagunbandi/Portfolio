import React, { Component } from 'react';

import { connect } from 'react-redux';


export class NavBarItems extends Component {

    render() {
        return (
            <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
                <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15"
                    data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user"
                    aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
                    href="/pulls">Pull requests</a>
                

                <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15"
                    href="/shagunbandi">
                    <img class="avatar avatar-user" src="https://avatars1.githubusercontent.com/u/18301341?s=40&amp;v=4"
                        width="20" height="20" alt="@shagunbandi" />
              shagunbandi
            </a>
            </nav>
        );
    }
}
export default connect()(NavBarItems);
