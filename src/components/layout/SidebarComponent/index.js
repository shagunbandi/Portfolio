import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Profile } from './Profile';
import DownloadResume from './DownloadResume';
import { Description } from './Description';
import {LocationEmail} from './LocationEmail';
import { Organisations } from './Organisations';
import { LocationEmailMobile } from './LocationEmailMobile';

export class SideBar extends Component {

    render() {
        return (
            <div>
                <div className="h-card col-lg-3 col-md-4 col-12 float-md-left pr-md-3 pr-xl-6">
                    <Profile />
                    <DownloadResume />
                    <Description />
                    <LocationEmail />
                    <Organisations />
                </div>
                <LocationEmailMobile />
            </div>
        );
    }
}
export default connect()(SideBar);
