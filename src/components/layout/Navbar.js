import React from 'react';

function Navbar() {
  return (

    <div class="position-relative js-header-wrapper ">
      <header class="Header py-lg-0 js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

        {/* <!-- Company Logo --> */}
      <div class="Header-item d-none d-lg-flex">
          <a class="Header-link" href="http://jyoticards.com/" data-hotkey="g d" aria-label="Homepage "
            data-ga-click="Header, go to dashboard, icon:logo">
            <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1"
              width="32" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
              </path>
            </svg>
          </a>
        </div>

        {/* <!-- For Collapsed Menu  --> */}
      <div class="Header-item d-lg-none">
          <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation"
            aria-expanded="false">
            <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18"
              aria-hidden="true">
              <path fill-rule="evenodd"
                d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z">
              </path>
            </svg>
          </button>
        </div>

        <div
          class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
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
          <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">

            {/* <!-- Nav Items --> */}
          <a class="js-selected-navigation-item Header-link py-lg-3  mr-0 mr-lg-3 py-2 border-top border-lg-top-0 border-white-fade-15"
              data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user"
              aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls"
              href="/pulls">
              Pull requests
          </a>
            <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-3 border-top border-lg-top-0 border-white-fade-15"
              href="/shagunbandi">
              <img class="avatar avatar-user" src="https://avatars1.githubusercontent.com/u/18301341?s=40&amp;v=4"
                width="20" height="20" alt="@shagunbandi" />
            shagunbandi
          </a>
        </nav>
      </div>
          {/* <!-- Include Right-header.html --> */}
    </header>
  </div>
  );
}

export default Navbar;
