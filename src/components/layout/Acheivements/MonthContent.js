import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ContentDetail } from './ContentDetail';


export class MonthContent extends Component {

    render() {

        const { achievement } = this.props;
        const { title, link, main_date, subtitles, links } = achievement;

        var Content = []
        if (subtitles) {
            subtitles.forEach((element, index) => {
                Content.push(
                    <ContentDetail title={element} link={links[index]}/>
                )
            });   
        }
        else {
            Content = null;
        }
        return (
            <div
                className="profile-rollup-wrapper py-4 pl-4 position-relative ml-3 js-details-container Details open">
                <span className="discussion-item-icon">
                    <svg className="octicon octicon-repo" viewBox="0 0 12 16"
                        version="1.1" width="12" height="16" aria-hidden="true">
                        <path fillRule="evenodd"
                            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
                        </path>
                    </svg>
                </span>

                <button type="button"
                    className="btn-link f4 muted-link no-underline lh-condensed width-full js-details-target "
                    aria-expanded="false">
                    <span className="float-left ws-normal text-left">{title}</span>
                </button>
                <ul className="profile-rollup-content mt-1" data-repository-hovercards-enabled>
                    {Content}
                </ul>
                <time className="float-right f6 text-gray-light pt-1">{main_date}</time>

            </div>
        );
    }
}
export default connect()(MonthContent);
