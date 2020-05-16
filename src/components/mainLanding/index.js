import React, { Component } from 'react';

import { connect } from 'react-redux';


export class MainLayout extends Component {

    render() {
        return (
  <div class="application-main " data-commit-hovercards-enabled>
    <main id="js-pjax-container" data-pjax-container>

      <div class="container-xl clearfix px-3 mt-4">


        <div class="h-card col-lg-3 col-md-4 col-12 float-md-left pr-md-3 pr-xl-6" data-acv-badge-hovercards-enabled
          itemscope itemtype="http://schema.org/Person">

          {/* <!-- Profile Image and Status --> */}
          <div class="clearfix">
            <div class="float-left col-3 col-md-12 pr-3 pr-md-0">
              <a itemprop="image" class="u-photo d-block position-relative" aria-hidden="true"
                href="https://avatars3.githubusercontent.com/u/18301341?s=460&amp;u=03931fadfdfe71667c4a4544c67bedf89442c045&amp;v=4">
              <img alt="" width="260" height="260"
                  class="avatar width-full height-full avatar-before-user-status"
                  src="https://avatars3.githubusercontent.com/u/18301341?s=460&amp;u=03931fadfdfe71667c4a4544c67bedf89442c045&amp;v=4" />
              </a>
            </div>

            <div class="float-md-left col-12">
              <div class="user-status-container border position-relative hide-sm hide-md ">
                <div class="d-flex">
                  <div class="d-flex p-2 width-full " data-team-hovercards-enabled>
                    <div class="flex-self-start mr-1 ml-1">
                      <div>
                        <g-emoji class="g-emoji" alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                      </div>
                    </div>
                    <div class="user-status-message-wrapper f6 mt-1 text-gray-dark ws-normal " >
                      <div>Working from home</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="vcard-names-container float-left col-9 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3 js-sticky js-user-profile-sticky-fields">
              <h1 class="vcard-names pl-2 pl-md-0">
                <span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">Shagun Bandi</span>
                <span class="p-nickname vcard-username d-block" itemprop="additionalName">shagunbandi</span>
              </h1>
            </div>
          </div>


          {/* <!-- Donwload Resume Button  --> */}
          <div class="user-profile-following-container js-user-profile-following-toggle mt-md-0 mt-2 mb-md-3 mb-2">
            <span class="user-following-container js-form-toggle-container">
                      <button type="submit" name="commit" style={{maxWidth: "100%"}}
                  class="btn btn-block top-0 js-sticky js-user-profile-follow-button mb-2" title="Download Resume">Download Resume</button>
            </span>
          </div>

          {/* <!-- Description --> */}
            <div class="p-note user-profile-bio mb-2 js-user-profile-bio">
              <div>
                Associate Software Development Engineer at Publicis Sapient  
              </div>
            </div>

          {/* <!-- Location and Email --> */}
          <div class="d-none d-md-block">
            <div class="js-profile-editable-area">
              <div class="p-note user-profile-bio mb-2 js-user-profile-bio"></div>
              <ul class="vcard-details mb-3">
                <li
                  class="vcard-detail pt-1 css-truncate css-truncate-target">
                  <svg class="octicon octicon-location"
                    viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z">
                    </path>
                  </svg>
                  <span class="p-label">Bangalore</span>
                </li>

                <li itemprop="email" aria-label="Email: shgaunamitbandi@gmail.com" class="vcard-detail pt-1 css-truncate css-truncate-target">
                  <svg class="octicon octicon-mail"
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

          <div class="border-top py-3 clearfix hide-sm hide-md">
            <h2 class="mb-1 h4">Worked with</h2>

            {/* <!-- TODO Add Hover to get name --> */}
            <a aria-label="Finbox" class="avatar-group-item">
              <img alt="@finbox" width="32" height="32"
                src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/axhjjc7ajdiz2zjdatm4" class="avatar " />
            </a> 
          </div>
        </div>


        {/* <!-- Location and Email Mobile Screen --> */}
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


        <div class="col-lg-9 col-md-8 col-12 float-md-left pl-md-2">
          
          {/* <!-- Sub Nav --> */}
          <div class="UnderlineNav width-full user-profile-nav js-sticky top-0">
            <nav class="UnderlineNav-body" data-pjax aria-label="User profile">
              <button class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 selected ">
                Overview
              </button>
              <button class="UnderlineNav-item mr-0 mr-md-1 mr-lg-3 ">
                Repositories
                <span class="Counter hide-lg hide-md hide-sm">
                  97
                </span>
              </button>
            </nav>
          </div>

          <div class="position-relative">
            <div class="mt-4">
              <div class="js-pinned-items-reorder-container">
                <h2 class="f4 mb-2 text-normal">

                  Pinned
                  
                </h2>


                <ol class="d-flex flex-wrap list-style-none gutter-condensed mb-4 js-pinned-items-reorder-list">
                  
                  {/* <!-- Items --> */}
                  <li class="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
                    <div
                      class="Box pinned-item-list-item d-flex p-3 width-full js-pinned-item-list-item public source  sortable-button-item">
                      <div class="pinned-item-list-item-content">
                        <div class="d-flex width-full flex-items-center position-relative">
                          <svg class="octicon octicon-repo mr-2 text-gray flex-shrink-0" viewBox="0 0 12 16"
                            version="1.1" width="12" height="16" aria-hidden="true">
                            <path fill-rule="evenodd"
                              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
                            </path>
                          </svg>
                          <span class="owner text-normal" title="skill">Skill1</span>/<span class="repo" title="skill1">
                            Database
                          </span>
                        </div>

                        <p class="pinned-item-desc text-gray text-small d-block mt-2 mb-3">
                          Enter Para Here
                        </p>
                        <p class="mb-0 f6 text-gray">
                          <span class="d-inline-block mr-3">
                                    <span class="repo-language-color" style={{ backgroundColor: "#3572A5" }}></span>
                            <span itemprop="programmingLanguage">Python</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>

                </ol>
              </div>
            </div>

            <div class="mt-4 position-relative">
              
              {/* <!-- Include yearly_contribution --> */}

              <div id="js-contribution-activity" class="activity-listing contribution-activity" data-pjax-container>


                {/* <!-- Years Tab --> */}
                <div class="d-none d-lg-block">
                  <div
                    class="profile-timeline-year-list js-profile-timeline-year-list bg-white js-sticky float-right col-2 pl-5">
                    <ul class="filter-list small">
                      <li>
                        <span id="year-link" class="js-year-link filter-item px-3 mb-2 py-2 selected">2020</span>
                      </li>
                      <li>
                        <span id="year-link" class="js-year-link filter-item px-3 mb-2 py-2">2019</span>
                      </li>
                    </ul>
                  </div>
                </div>


                <h2 class="f4 text-normal mb-2">
                  Achievements
                </h2>


                <div class="contribution-activity-listing float-left col-12 col-lg-10">
                  <div class="profile-timeline discussion-timeline width-full pb-4">
                    <h3 class="profile-timeline-month-heading bg-white d-inline-block h6 pr-2 py-1">
                      May <span class="text-gray">2020</span>
                    </h3>

                    <div
                      class="profile-rollup-wrapper py-4 pl-4 position-relative ml-3 js-details-container Details open">
                      <span class="discussion-item-icon">

                        <svg class="octicon octicon-repo" viewBox="0 0 12 16"
                          version="1.1" width="12" height="16" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
                          </path>
                        </svg>

                      </span>

                      {/* <!-- Title Course --> */}
                      <button type="button"
                        class="btn-link f4 muted-link no-underline lh-condensed width-full js-details-target "
                        aria-expanded="false">
                        <span class="float-left ws-normal text-left">
                          Course Completed
                        </span>
                        
                      </button>
                      <ul class="profile-rollup-content mt-1" data-repository-hovercards-enabled>

                        {/* <!-- More Info Items --> */}
                        <li class="d-block mt-1 py-1">
                          <span class="css-truncate css-truncate-target">
                            <span class="profile-rollup-icon">
                              <svg class="octicon octicon-repo v-align-middle text-gray-light mr-1" viewBox="0 0 12 16"
                                version="1.1" width="12" height="16" aria-hidden="true">
                                <path fill-rule="evenodd"
                                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z">
                                </path>
                              </svg>
                            </span>
                            
                            <a class="mr-2 ">1 Project Completed</a>

                          </span>

                          <span class="f6 text-gray d-block mt-1 d-lg-inline mt-lg-0">
                                    Text and 
                            <span class="ml-0">
                                      <span class="repo-language-color" style={{ background: "#3572A5" }}></span>
                              <span itemprop="programmingLanguage">Python</span>
                            </span>

                          </span>
                          <time title="This contribution was made on May 7" class="float-right f6 text-gray-light pt-1">
                            May 7
                          </time>
                        </li>

                      </ul>
                    </div>

                  </div>
                </div>

                <div class="ajax-pagination-form js-ajax-pagination js-show-more-timeline-form col-lg-10 col-12">
                  <button name="button" type="submit"
                    class="ajax-pagination-btn btn btn-outline border-gray-dark width-full f6 mt-0 py-2 contribution-activity-show-more">I was just born before this</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
        );
    }
}
export default connect()(MainLayout);
