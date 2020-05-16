import React, { Component } from 'react';

import { connect } from 'react-redux';


export class SearchBar extends Component {

    render() {
        return (
            <div
                class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to">
                <div class="position-relative">
                    {/* <!-- Input Search Field Label --> */}
                    <label
                        class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">

                        {/* <!-- Input Search Field --> */}
                        <input type="text"
                            class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
                            placeholder="Search or jump to…" />

                        {/* <!-- TODO Small icon next to search field, Make it your own --> */}
                        <img src="https://github.githubassets.com/images/search-key-slash.svg" alt=""
                            class="mr-2 header-search-key-slash" />

                        <div
                            class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
                            {/* <!-- INCLUDE search.html --> */}
                        </div>
                    </label>
                </div>
            </div>
        );
    }
}
export default connect()(SearchBar);
