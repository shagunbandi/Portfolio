import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Profile } from './LayoutComponents/Profile';
import DownloadResume from './LayoutComponents/DownloadResume';
import { Description } from './LayoutComponents/Description';
import LocationEmail from './LayoutComponents/LocationEmail';
import { Organisations } from './LayoutComponents/Organisations';
import { LocationEmailMobile } from './LayoutComponents/LocationEmailMobile';
import { SubNavBar } from './LayoutComponents/SubNavBar';
import { Pinned } from '../layout/Pinned/Pinned';
import { Timeline } from '../layout/Acheivements/Timeline';


export class MainLayout extends Component {

    render() {
        return (
          <div class="application-main " data-commit-hovercards-enabled>
            <main id="js-pjax-container" data-pjax-container>
              <div class="container-xl clearfix px-3 mt-4">
                <div class="h-card col-lg-3 col-md-4 col-12 float-md-left pr-md-3 pr-xl-6" data-acv-badge-hovercards-enabled itemscope itemtype="http://schema.org/Person">
                  <Profile />
                  <DownloadResume />
                  <Description />
                  <LocationEmail />
                  <Organisations />
                </div>
                <LocationEmailMobile />
                <div class="col-lg-9 col-md-8 col-12 float-md-left pl-md-2">
                  <SubNavBar />

                  <div class="position-relative">
                    <Pinned />
                    <Timeline />

                  </div>


                </div>
              </div>
            </main></div>
        );
    }
}
export default connect()(MainLayout);
