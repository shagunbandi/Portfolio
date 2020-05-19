import React, { Component } from 'react';

import { connect } from 'react-redux';


export class SearchBar extends Component {

    render() {
        return (
            <div
                className="header-search flex-self-stretch mr-0 mr-lg-3 mb-3 mb-lg-0">
                <div className="position-relative">
                    {/* <!-- Input Search Field Label --> */}
                    <label
                        className="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">

                        {/* <!-- Input Search Field --> */}
                        <input type="text"
                            className="form-control input-sm header-search-input jump-to-field is-clearable"
                            placeholder="Search or jump to…" />

                        {/* <!-- TODO Small icon next to search field, Make it your own --> */}
                        <img src="https://github.githubassets.com/images/search-key-slash.svg" alt=""
                            className="mr-2 header-search-key-slash" />

                        <div
                            className="Box position-absolute overflow-hidden d-none jump-to-suggestions">
                            {/* <!-- INCLUDE search.html --> */}
                        </div>
                    </label>
                </div>
            </div>
        );
    }
}
export default connect()(SearchBar);
